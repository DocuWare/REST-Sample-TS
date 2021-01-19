/// <reference path="./types/DW_Rest.d.ts" />
/// <reference path="./types/DW_Request_Promise_Extension.d.ts" />
/// <reference path="./types/timespan.d.ts" />

//https://github.com/request/request - Http client
//https://github.com/request/request-promise-native - Extension to make http client async
import request, { RequestPromiseOptions } from 'request-promise-native';
//helper typescript definition done for this Sample for easier use
import { DWRequestPromiseExtension } from './types/DW_Request_Promise_Extension';

import http from 'http'; //https://nodejs.org/api/http.html
import https from 'https'; // just in case of https endpoint
import fs from 'fs'; //https://nodejs.org/api/fs.html
import mime, { contentType } from 'mime-types'; //https://www.npmjs.com/package/mime-types
import querystring from 'querystring'; //https://nodejs.org/api/querystring.html
import path from 'path';
import contentdisposition, { ContentDisposition } from 'content-disposition'; //https://github.com/jshttp/content-disposition
import timespan from 'timespan'; //https://www.npmjs.com/package/timespan
import readChunk from 'read-chunk';

/**
 *Sample wrapper for DocuWare REST API
 *
 * @class RestCallWrapper
 */
class RestCallWrapper {
    /**
     * Set root without /DocuWare/Platform because the rel links of platform responses will contain it
     */
    platformRoot: string;
    docuWare_request_config: RequestPromiseOptions;
    constructor(rootOfPlatform: string, port?: number | undefined) {
        this.platformRoot = port ? `${rootOfPlatform}:${port}` : rootOfPlatform;
        this.docuWare_request_config = {
            baseUrl: rootOfPlatform,
            port,
            timeout: 1000,
            headers: {
                'Accept': 'application/json', //to get always json as a response from DocuWare Platform
                'User-Agent': 'DocuWare Sample REST - Git' //To identify the application
            },
            withCredentials: true,
            maxRedirects: 5,
            agent: (this.platformRoot.startsWith('https')) ? new https.Agent({ keepAlive: false, port }) : new http.Agent({ keepAlive: false }), //Seperated calls, can be changed to true. False is better for development. Do https/http switch
            json: true,
            resolveWithFullResponse: false //We want to get json objects returned directly, in some cases we set it to true during method call
        }
    }

    /**
     * Helper function for preparing the logon
     *
     * @param {string} user
     * @param {string} pw
     * @param {string} org
     * @returns {DWRest.ILogonModel}
     */
    CreateLogonModel(user: string, pw: string, org: string, hostID: string): DWRest.ILogonModel {
        return {
            'Username': user,
            'Password': pw,
            'Organization': org,
            'HostID': hostID,
            'RedirectToMyselfInCaseOfError': false,
            'RememberMe': true
        }
    }

    /**
     * Handles logon and sets cookies to 'global' {RequestPromiseOptions}
     *
     *
     * @param {DWRest.ILogonModel} model
     * @returns {Promise<DWRest.ILogonResponse>}
     */
    Logon(model: DWRest.ILogonModel): Promise<DWRest.ILogonResponse> {
        return new Promise<DWRest.ILogonResponse>((resolve, reject) => {

            //set 'resolveWithFullResponse' to true otherwise you get the body instead of response object and we cannot get the cookies
            // ... is the spread operator (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
            return request.post('DocuWare/Platform/Account/Logon', { ...this.docuWare_request_config, form: model, resolveWithFullResponse: true })
                .promise()
                .then((logonResponse: DWRequestPromiseExtension.ILogonResponseWrapper) => {
                    try {
                        //Take care of errors and throttling
                        const respondedCookies = logonResponse.headers["set-cookie"];
                        if (respondedCookies && respondedCookies.length > 0) {
                            const cookieJar = request.jar();
                            respondedCookies.forEach((cookieString) => {
                                //add cookies to jar
                                cookieJar.setCookie(cookieString, this.platformRoot);
                            });
                            //Set the culture so our DocuWare Platform will respond with correct formats
                            cookieJar.setCookie('DWFormatCulture=de', this.platformRoot);
                            //set jar to const http client config, so all following requests will get the cookie jar aswell
                            this.docuWare_request_config.jar = cookieJar;
                            resolve(logonResponse.body);
                        }
                        else {
                            reject(new Error('No cookies returned!'));
                        }
                    }
                    catch (error) {
                        reject(error);
                    }
                }).catch((err) => {
                    reject(err);
                });
        });
    }

    /**
     * Returns your Organization
     *
     *
     * @returns {Promise<DWRest.IOrganization>}
     */
    GetOrganization(): Promise<DWRest.IOrganization> {
        return request.get('/DocuWare/Platform/Organization', this.docuWare_request_config)
            .promise();
    }

    /**
     * Returns all organizations
     *
     *
     * @param {DWRest.ILogonResponse} logonResponse
     * @returns {Promise<DWRest.IOrganizations>}
     */
    GetOrganizations(logonResponse: DWRest.ILogonResponse): Promise<DWRest.IOrganizations> {
        const organizationsLink: string = this.GetLink(logonResponse, 'organizations');

        return request.get(organizationsLink, this.docuWare_request_config)
            .promise();
    }

    /**
     * Returns list of FileCabinets
     *
     *
     * @param {DWRest.IOrganization} org
     * @returns {Promise<DWRest.IFileCabinet[]>}
     */
    GetFileCabinets(org: DWRest.IOrganization): Promise<DWRest.IFileCabinets> {
        const fileCabinetLink: string = this.GetLink(org, 'filecabinets');

        return request.get(fileCabinetLink, this.docuWare_request_config)
            .promise();
    }


    /**
     * Returns a special FileCabinet by GUID
     *
     *
     * @param {string} fcGuid
     * @returns {Promise<DWRest.IFileCabinet>}
     */
    GetFileCabinet(fcGuid: string): Promise<DWRest.IFileCabinet> {
        return request.get(`DocuWare/Platform/FileCabinets/${fcGuid}`, this.docuWare_request_config)
            .promise();
    }

    /**
     * Filters list of FileCabinet Objects and returns only filecabinets
     * Info: FileCabinet Object can be a document tray OR a filecabinet
     *
     * @param {DWRest.IFileCabinet[]} fileCabinets
     * @returns {DWRest.IFileCabinet[]}
     */
    GetAllFileCabinetsWithoutDocumentTrays(fileCabinets: DWRest.IFileCabinet[]): DWRest.IFileCabinet[] {
        return fileCabinets.filter(f => f.IsBasket === false);
    }

    /**
     *   Filters list of FileCabinet Objects and returns only document trays
     * Info: FileCabinet Object can be a document tray OR a filecabinet
     *
     * @param {DWRest.IFileCabinet[]} fileCabinets
     * @returns {(DWRest.IFileCabinet | undefined)}
     */
    GetDefaultDocumentTray(fileCabinets: DWRest.IFileCabinet[]): DWRest.IFileCabinet | undefined {
        const result: DWRest.IFileCabinet | undefined = fileCabinets.find(f => f.Default === true && f.IsBasket === true);
        return result;
    }

    /**
     * Returns documents of filecabinet without criteria
     * Info: Is restricted to the first 1000 per default
     *
     * @param {DWRest.IFileCabinet} fileCabinet
     * @returns {Promise<DWRest.IDocument[]>}
     */
    GetDocumentsFromFileCabinet(fileCabinet: DWRest.IFileCabinet): Promise<DWRest.IDocument[]> {
        const documentsLink = this.GetLink(fileCabinet, 'documents');

        return request.get(documentsLink, this.docuWare_request_config)
            .promise()
            .then((documentQueryResultResponse: DWRest.IDocumentsQueryResult) => {
                return documentQueryResultResponse.Items;
            });
    }

    /**
     * Get a document by DocId
     *
     * @param {DWRest.IFileCabinet} fileCabinet
     * @param {number} docId
     * @param {boolean}[fullLoad=false] fullLoad
     * @returns {Promise<DWRest.IDocument>}
     */
    GetDocumentByDocID(fileCabinet: DWRest.IFileCabinet, docId: number, fullLoad = false): Promise<DWRest.IDocument> {
        const documentsLink: string = this.GetLink(fileCabinet, 'documents');

        return request.get(`${documentsLink}/${docId}`, this.docuWare_request_config)
            .promise()
            .then((documentResponse: DWRest.IDocument) => {
                if (fullLoad) {
                    return this.LoadFullObjectFromPlatform<DWRest.IDocument>(documentResponse);
                } else {
                    return Promise.resolve<DWRest.IDocument>(documentResponse);
                }
            });
    }

    /**
     * Get the first x documents from a file cabinet
     *
     * @param {DWRest.IFileCabinet} fileCabinet
     * @param {number} count
     * @returns {Promise<DWRest.IDocumentsQueryResult>}
     */
    GetDocumentQueryResultForSpecifiedCountFromFileCabinet(fileCabinet: DWRest.IFileCabinet, count: number): Promise<DWRest.IDocumentsQueryResult> {
        return request.get(`/DocuWare/Platform/FileCabinets/${fileCabinet.Id}/Query/Documents?count=${count}`, this.docuWare_request_config)
            .promise();
    }

    /**
     * Returns the next 'page' of document results
     * Info: Be careful, the next result will contain same amount of results like the provided {DWRest.DocumentsQueryResult}!
     * So if you searched for 2 results you will only get another 2!
     * @param {DWRest.IDocumentsQueryResult} documentQueryResult
     * @returns {Promise<DWRest.IDocumentsQueryResult>}
     */
    GetNextResultFromDocumentQueryResult(documentQueryResult: DWRest.IDocumentsQueryResult): Promise<DWRest.IDocumentsQueryResult> {
        const nextLink = this.GetLinkFromModel(documentQueryResult, 'next');

        if (nextLink) {

            return request.get(nextLink, this.docuWare_request_config)
                .promise();

        } else {
            throw new Error('No next link available, you already received all results.');
        }
    }

    /**
     * Returns all kind of dialogs of a filecabinet
     *
     * @param {DWRest.IFileCabinet} fileCabinet
     * @returns {Promise<DWRest.IDialog[]>}
     */
    GetAllDialogsFromFileCabinet(fileCabinet: DWRest.IFileCabinet): Promise<DWRest.IDialogsResponse> {
        const dialogLink: string = this.GetLink(fileCabinet, 'dialogs');

        return request.get(dialogLink, this.docuWare_request_config)
            .promise();
    }

    GetDialogLink(fileCabinet: DWRest.IFileCabinet, dialogType: DWRest.DialogType){
        const dialogs: any = {
            [DWRest.DialogType.Search]: 'searches',
            [DWRest.DialogType.Store]: 'stores',
            [DWRest.DialogType.TaskList]: 'taskLists',
            [DWRest.DialogType.ResultList]: null,
            [DWRest.DialogType.InfoDialog]: null
        }

        const dialog = dialogs[dialogType];

        //Null stands for not supported
        if (dialog === null){
            throw new Error('DialogType' + dialogType + ' not supported.');
        }

        const returnValue = this.GetLink(fileCabinet, dialog)

        if (!returnValue) {
            throw new Error('Missing dialog link');
        }
        return returnValue;
    }

    /**
     * Returns a list of specified dialogs
     *
     * @param {DWRest.IFileCabinet} fileCabinet
     * @param {DWRest.DialogType} dialogType
     * @returns {Promise<DWRest.IDialog[]>}
     */
    GetDedicatedDialogsFromFileCabinet(fileCabinet: DWRest.IFileCabinet, dialogType: DWRest.DialogType): Promise<DWRest.IDialog[]> {
        let dialogLink: string | null = null;

        dialogLink = this.GetDialogLink(fileCabinet, dialogType);

        return request.get(dialogLink, this.docuWare_request_config)
        .promise()
        .then((dialogResponse: DWRest.IDialogsResponse) => {
            return dialogResponse.Dialog;
        });
    }

    /**
     * Gets the 'self' link of provided object and retrieves the full load of properties and data
     *
     * @template T
     * @param {DWRest.ILinkModel} notYetFullLoadedObject
     * @returns {Promise<T>}
     */
    LoadFullObjectFromPlatform<T>(notYetFullLoadedObject: DWRest.ILinkModel): Promise<T> {
        const selfLink: string = this.GetLink(notYetFullLoadedObject, 'self');

        return request.get(selfLink, this.docuWare_request_config)
            .promise()
            .then((fullObjectResponse: T) => {
                return fullObjectResponse;
            });
    }

    /**
     * Get a query build by DocuWare Platform for later execution
     *
     * @param {DWRest.IFileCabinet} fileCabinet
     * @param {DWRest.IDialogExpression} dialogExpression
     * @param {string} dialogId
     * @param {string[]} fields
     * @param {string} fieldToSort
     * @param {DWRest.SortOrder} sortOrder
     * @returns {Promise<string>}
     */
    GetQueryUrlFromFileCabinet(fileCabinet: DWRest.IFileCabinet, dialogExpression: DWRest.IDialogExpression, dialogId: string, fields: string[], fieldToSort: string, sortOrder: DWRest.SortOrder): Promise<string> {

        //encode the strings first
        const commaSeparatedFields: string = fields.join(',');
        const fieldsQueryString: string = encodeURI(commaSeparatedFields);
        const sortOrderQueryString: string = encodeURI(`${fieldToSort} ${sortOrder}`);

        //build querystring
        const customQueryString: string = querystring.stringify({ sortOrder: sortOrderQueryString, fields: fieldsQueryString, dialogId: dialogId }, '&', '=');

        return request.post(`/DocuWare/Platform/FileCabinets/${fileCabinet.Id}/Query/DialogExpressionLink?${customQueryString}`, {
            ...this.docuWare_request_config,
            headers: {
                'Content-Type': 'application/json'
            },
             body: dialogExpression
        })
            .promise();
    }

    /**
     * Send query to get results
     *
     * @param {string} queryUrl
     * @returns {Promise<DWRest.IDocumentsQueryResult>}
     */
    GetQueryResults(queryUrl: string): Promise<DWRest.IDocumentsQueryResult> {
        return request.get(queryUrl, { ...this.docuWare_request_config })
            .promise();
    }

    /**
     * Update index values of specified document
     *
     * @param {DWRest.IDocument} document
     * @param {DWRest.IFieldList} fieldsToUpdate
     * @returns {Promise<DWRest.IFieldList>}
     */
    UpdateDocumentIndexValues(document: DWRest.IDocument, fieldsToUpdate: DWRest.IFieldList): Promise<DWRest.IFieldList> {
        const fieldsLink: string = this.GetLink(document, 'fields');

        return request.post(fieldsLink, { ...this.docuWare_request_config, body: fieldsToUpdate })
            .promise();
    }

    /**
     * Download a single document
     *
     * @param {DWRest.IDocument} fullLoadedDocument
     * @param {boolean} includeAnnotations
     * @param {DWRest.TargetFileType} targetFileType
     * @returns {Promise<string>}
     */
    DownloadDocument(fullLoadedDocument: DWRest.IDocument, includeAnnotations: boolean, targetFileType: DWRest.TargetFileType): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const fileDownloadLink = this.GetLinkFromModel(fullLoadedDocument, 'fileDownload');

            if (!fileDownloadLink) {
                throw new Error('Please provide full loaded document!');
            }

            const req: request.RequestPromise = request.get(fileDownloadLink, { ...this.docuWare_request_config, useQuerystring: true, qs: { targetfileType: targetFileType, keepAnnotations: includeAnnotations }, resolveWithFullResponse: true });
            return this.DownloadFile(req, reject, resolve);
        });
    }

    /**
     * Store document with index entries
     *
     * @param {DWRest.IFileCabinet} fileCabinet
     * @param {DWRest.IField[]} indexFields
     * @param {string} pathToFile
     * @returns {Promise<DWRest.IDocument>}
     */
    UploadDocument(fileCabinet: DWRest.IFileCabinet, indexFields: DWRest.IField[], pathToFile: string): Promise<DWRest.IDocument> {
        const documentsLink: string = this.GetLink(fileCabinet, 'documents');

        const newDocument: DWRest.IDocument = {
            Fields: indexFields
        }

        const fileName: string = path.basename(pathToFile);
        const contentType: string | false = mime.contentType(fileName)

        const formData = {
            document: {
                value: JSON.stringify(newDocument),
                options: {
                    filename: 'document.json',
                    contentType: 'application/json'
                }
            },
            file: {
                value: fs.createReadStream(pathToFile),
                options: {
                    contentType: contentType,
                    filename: fileName
                }
            }
        }

        console.log(formData);

        return request.post(documentsLink, { ...this.docuWare_request_config, formData: formData })
            .promise();
    }

    /**
     * Store big document with optional json index fields and/or application properties
     *
     * @param {DWRest.IFileCabinet} fileCabinet
     * @param {string} pathToFile
     * @param {DWRest.IField[]} indexFields
     * @param {DWRest.IDocumentApplicationProperty[]} applicationProperties
     * @returns {Promise<DWRest.IDocument>}
     * @memberof RestCallWrapper
     */
    async UploadBigDocumentJsonContextType(fileCabinet: DWRest.IFileCabinet, pathToFile: string, indexFields: DWRest.IField[], applicationProperties: DWRest.IDocumentApplicationProperty[]): Promise<DWRest.IDocument> {
        let newDocument = await this.CreateNewDocumentContent(indexFields, applicationProperties);

        if (Object.keys(newDocument).length !== 0)
        {
            let jsonValue: string = JSON.stringify(newDocument);
            return this.UploadBigDocumentBase(fileCabinet,pathToFile, jsonValue, ContentType.JSON);
        }

        return this.UploadBigDocumentBase(fileCabinet, pathToFile);
    }
    
/**
 * Creates a new document with the needed keys depending on the given parameters
 *
 * @param {DWRest.IField[]} indexFields
 * @param {DWRest.IDocumentApplicationProperty[]} applicationProperties
 * @returns {Promise<DWRest.IDocument>}
 * @memberof RestCallWrapper
 */
    async CreateNewDocumentContent(indexFields: DWRest.IField[], applicationProperties: DWRest.IDocumentApplicationProperty[]): Promise<DWRest.IDocument> {
        let newDocument : DWRest.IDocument = {};

        if (indexFields.length > 0)
        {
            newDocument.Fields = indexFields;
        }

        if (applicationProperties.length > 0)
        {
            newDocument.ApplicationProperties = applicationProperties;
        }

        return newDocument;
    }

    /**
     * Store big document with optional index entries as xml or json string
     *
     * @param {DWRest.IFileCabinet} fileCabinet
     * @param {string} pathToFile
     * @param {string} [dwDocumentContent='']
     * @param {ContentType} [dwDocumentContentType=ContentType.NULL]
     * @returns {Promise<DWRest.IDocument>}
     * @memberof RestCallWrapper
     */
    async UploadBigDocumentBase(fileCabinet: DWRest.IFileCabinet, pathToFile: string, dwDocumentContent: string = '', dwDocumentContentType: ContentType = ContentType.NULL): Promise<DWRest.IDocument> {
        const documentsLink: string = this.GetLink(fileCabinet, 'documents');

        const origChunkSize = 3000000;
        let chunkSize: number;
        const fileName: string = path.basename(pathToFile);
        const contentType: string | false = mime.contentType(fileName);

        let lastPostResult: any;

        const file: any = fs.readFileSync(pathToFile);
        const fileSize   = file.length;

        // Get file modified date time
        const stats = fs.statSync(pathToFile);
        const mtime = stats.mtime;

        let firstCall = true;

        let runCount = 0;

        let link = documentsLink;

        for (let offset = 0; offset < fileSize; offset += origChunkSize) {
            chunkSize = origChunkSize;

            // Set last chunk to correct size
            if((offset + origChunkSize) > fileSize) {
                chunkSize = fileSize - offset;
            }

            const chunk = readChunk.sync(pathToFile, offset, chunkSize);

            runCount += 1;
            let formData: any = null;

            if (firstCall && dwDocumentContent.length > 0) {
                formData = {
                    document: {
                        value: dwDocumentContent,
                        options: {
                            filename: 'document.' + dwDocumentContentType,
                            contentType: 'application/' + dwDocumentContentType
                        }
                    },
                    file: {
                        value: chunk,
                        options: {
                            contentType: contentType,
                            filename: fileName
                        }
                    }
                };
            }
            else {
                formData = {
                    file: {
                        value: chunk,
                        options: {
                            contentType: contentType,
                            filename: fileName
                        }
                    }
                };
            }

            firstCall = false;

            console.log('Time ' + Date().toString());
            console.log('Run ' + runCount.toString());
            console.log('Type ' + dwDocumentContentType);
            console.log(formData);

            // Add chunk headers
            const xFileHeaders = {...this.docuWare_request_config.headers,
            'X-File-Name': fileName,
            'X-File-Size': fileSize.toString(),
            'X-File-ModifiedDate': mtime.toISOString(),
            'X-File-Type': contentType};
            this.docuWare_request_config.headers = xFileHeaders;

            // Set timeout to 5 minutes
            this.docuWare_request_config.timeout = 300000;

            lastPostResult = await request.post(link, { ...this.docuWare_request_config, formData: formData}).promise();

            if (lastPostResult !== null) {
                if (lastPostResult.FileChunk === null || lastPostResult.FileChunk.Finished) {
                    return lastPostResult;
                }
                else {
                    // Get link for next chunk upload part
                    link = lastPostResult.FileChunk.Links[0].href;
                }
            }
        }

        return lastPostResult;
    }

    /**
     * Manipulate a document and upload it again
     * In this example we make a zip out of it
     * @param {DWRest.ISection} fullLoadedSection
     * @param {string} pathToFileForReplace
     * @returns {Promise<DWRest.ISection>}
     */
    EditDocumentSection(fullLoadedSection: DWRest.ISection, pathToFileForReplace: string): Promise<DWRest.ISection> {
        const sectionContentLink: string = this.GetLink(fullLoadedSection, 'content');

        const fileName: string = path.basename(pathToFileForReplace);
        const contentType: string | false = mime.contentType(fileName)

        const formData = {
            file: {
                value: fs.createReadStream(pathToFileForReplace),
                options: {
                    contentType: contentType,
                    filename: fileName
                }
            }
        }
        return request.put(sectionContentLink, { ...this.docuWare_request_config, formData: formData })
        .promise();
    }

    /**
     * Check out a document to the file system
     *
     * @param {DWRest.IDocument} fullLoadedDocument
     * @returns {Promise<string>}
     */
    CheckoutToFileSystem(fullLoadedDocument: DWRest.IDocument): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const checkoutLink = this.GetLinkFromModel(fullLoadedDocument, 'checkoutToFileSystem');

            if (!checkoutLink) {
                throw new Error('Please provide full loaded document!');
            }

            const req: request.RequestPromise = request.post(checkoutLink, { ...this.docuWare_request_config, resolveWithFullResponse: true });

            return this.DownloadFile(req, reject, resolve);
        });
    }

    /**
     * Checkin a checked out document
     *
     * @param {DWRest.IDocument} fullLoadedDocument
     * @param {string} pathToFile
     * @param {DWRest.ICheckInActionParameters} checkinParameters
     * @returns {Promise<DWRest.IDocument>}
     */
    CheckInFromFileSystem(fullLoadedDocument: DWRest.IDocument, pathToFile: string, checkinParameters: DWRest.ICheckInActionParameters): Promise<DWRest.IDocument> {

        return new Promise<DWRest.IDocument>((resolve, reject) => {

            const paramsPath = `${pathToFile}.json`;

            fs.writeFile(paramsPath, JSON.stringify(checkinParameters), async (err) => {
                if (err) {
                    reject(err);
                }

                const checkinLink: string = this.GetLink(fullLoadedDocument, 'checkInFromFileSystem');

                const formData = {
                    file:
                    {
                        value: fs.createReadStream(paramsPath),
                        options: {
                            contentType: 'application/json',
                            filenname: path.basename(paramsPath)
                        }
                    },
                    file1: {
                        value: fs.createReadStream(pathToFile),
                        options: {
                            contentType: contentType(pathToFile),
                            filenname: path.basename(pathToFile)
                        }
                    }
                }

                request.post(checkinLink, { ...this.docuWare_request_config, formData: formData })
                    .promise()
                    .then((documentResponse: DWRest.IDocument) => {
                        //cleanup temp file
                        fs.unlink(paramsPath, (err) => {
                            if (err) {
                                console.warn(`Not able to remove temp file '${paramsPath}`);
                            }
                        })
                        resolve(documentResponse);
                    })
                    .catch((err) => {
                        reject(err);
                    });

            });
        });
    }

    /**
     * Get a single page by section and page number
     *
     * @param {DWRest.ISection} fullLoadedSection
     * @param {number} pageNumber
     * @returns {Promise<DWRest.IPage>}
     */
    GetPageByNumber(fullLoadedSection: DWRest.ISection, pageNumber: number, fullLoad = false): Promise<DWRest.IPage> {
        return new Promise<DWRest.IPage>((resolve, reject) => {

            const pagesResultLink: string = this.GetLink(fullLoadedSection.Pages, 'nextBlock');

            request.get(pagesResultLink, this.docuWare_request_config)
                .promise()
                .then((pagesBlockResponse: DWRest.IPages) => {
                    if (pagesBlockResponse && pagesBlockResponse.Page) {
                        const thePage = pagesBlockResponse.Page.find(p => p.PageNum == pageNumber);
                        if (thePage) {
                            if (fullLoad) {
                                this.LoadFullObjectFromPlatform<DWRest.IPage>(thePage)
                                    .then((fullLoadedPage: DWRest.IPage) => {
                                        resolve(fullLoadedPage);
                                    });
                            } else {
                                resolve(thePage);
                            }

                        } else {
                            reject(new Error(`No pages found!`));
                        }
                    } else {
                        reject(new Error(`No pages found!`));
                    }

                })
        });
    }

    /**
     * Gets the best position for a stamp an paces it
     *
     * @param {DWRest.IPage} page
     * @param {DWRest.IStampPlacement} stampPlacement
     * @returns {Promise<void>}
     */
    PlaceAStampWithBestPosition(page: DWRest.IPage, stampPlacement: DWRest.IStampPlacement): Promise<void> {
        const bestStampPositionLink: string = this.GetLink(page, 'stampBestPosition');

        return request.post(bestStampPositionLink, { ...this.docuWare_request_config, body: stampPlacement })
            .promise()
            .then((bestCoordinates: DWRest.IDWPoint) => {

                const stampLink: string = this.GetLink(page, 'stamp');

                return request.post(stampLink, { ...this.docuWare_request_config, body: { ...stampPlacement, Location: bestCoordinates } })
                    .promise();
            });
    }

    /**
     * Transfer a number documents from document tray to filecabinet
     *
     * @param {number[]} docIds
     * @param {string} basketId
     * @param {DWRest.IFileCabinet} fileCabinet
     * @param {boolean} keepSource
     * @returns {Promise<DWRest.DocumentsTransferResult>}
     */
    TransferFromDocumentTrayToFileCabinet(docIds: number[], basketId: string, fileCabinet: DWRest.IFileCabinet, keepSource: boolean): Promise<DWRest.IDocumentsQueryResult> {
        const fcTransferInfo: DWRest.IFileCabinetTransferInfo = {
            KeepSource: keepSource,
            SourceDocId: docIds,
            SourceFileCabinetId: basketId,
            FillIntellix: true
        }

        const transferLink: string = this.GetLink(fileCabinet, 'transfer');

        return request.post(transferLink, {
            ...this.docuWare_request_config, body: fcTransferInfo, headers: {
                'Content-Type': 'application/vnd.docuware.platform.filecabinettransferinfo+json'
            }
        })
            .promise();
    }

    /**
     * Transfer a document from filecabinet to another (or the same) filecabinet
     *
     * @param {DWRest.IDocument[]} documents
     * @param {string} sourceFileCabinetId
     * @param {DWRest.IFileCabinet} destinationFileCabinet
     * @param {boolean} keepSource
     * @returns {Promise<DWRest.IDocumentsQueryResult>}
     */
    TransferFromFileCabinetToFileCabinet(documents: DWRest.IDocument[], sourceFileCabinetId: string, destinationFileCabinet: DWRest.IFileCabinet, keepSource: boolean): Promise<DWRest.IDocumentsQueryResult> {
        const documentsTransferInfo: DWRest.IDocumentsTransferInfo = {
            KeepSource: keepSource,
            Documents: documents,
            SourceFileCabinetId: sourceFileCabinetId,
            FillIntellix: true,
            UseDefaultDialog: true
        }

        const transferLink: string = this.GetLink(destinationFileCabinet, 'transfer');

        return request.post(transferLink, {
            ...this.docuWare_request_config, body: documentsTransferInfo, headers: {
                'Content-Type': 'application/vnd.docuware.platform.documentstransferinfo+json'
            }
        })
            .promise();
    }

    /**
     * Place an annotation to a single page
     *
     * @param {DWRest.IPage} page
     * @param {DWRest.IAnnotation} annotation
     * @returns {Promise<DWRest.IAnnotation>}
     */
    PlaceAnnotation(page: DWRest.IPage, annotation: DWRest.IAnnotation): Promise<DWRest.IAnnotation> {
        const annotationLink: string = this.GetLink(page, 'annotation');

        return request.post(annotationLink, { ...this.docuWare_request_config, body: annotation })
            .promise();
    }

    /**
     * Devide a document
     *
     * @param {DWRest.IDocument} document
     * @param {DWRest.ContentDivideOperation} operation
     * @returns
     */
    DevideDocument(document: DWRest.IDocument, operation: DWRest.ContentDivideOperation) {
        const devideInfo: DWRest.IContentDivideOperationInfo = {
            Force: true,
            Operation: operation
        }

        const devideLink: string = this.GetLink(document, 'contentDivideOperation');

        return request.put(devideLink, { ...this.docuWare_request_config, body: devideInfo })
            .promise();
    }


    /**
     * Merges a document
     * Info: Staple is only supported for document trays
     * @param {DWRest.IFileCabinet} fileCabinet
     * @param {number[]} docIds
     * @param {DWRest.ContentMergeOperation} operation
     * @returns {Promise<DWRest.IDocument>}
     */
    MergeDocument(fileCabinet: DWRest.IFileCabinet, docIds: number[], operation: DWRest.ContentMergeOperation): Promise<DWRest.IDocument> {

        if (!fileCabinet.IsBasket && operation === DWRest.ContentMergeOperation.Staple) {
            throw new Error(`Only document trays support staple. ${fileCabinet.Name} is a filecabinet!`)
        }

        const mergeInfo: DWRest.IContentMergeOperationInfo = {
            Documents: docIds,
            Force: true,
            Operation: operation
        }

        const mergeLink: string = this.GetLink(fileCabinet, 'contentMergeOperation');

        return request.put(mergeLink, { ...this.docuWare_request_config, body: mergeInfo })
            .promise();
    }

    /**
     * Create a new user
     *
     * @param {DWRest.IOrganization} organization
     * @param {DWRest.INewUser} newUser
     * @returns {Promise<DWRest.IUser>}
     */
    CreateUser(organization: DWRest.IOrganization, newUser: DWRest.INewUser): Promise<DWRest.IUser> {
        const userCreationLink: string = this.GetLink(organization, 'userInfo');

        return request.post(userCreationLink, {
            ...this.docuWare_request_config, body: newUser, headers: {
                'Content-Type': 'application/vnd.docuware.platform.createorganizationuser+json'
            }
        })
            .promise();
    }

    /**
     * Assign a dedicated user to a role
     *
     * @param {DWRest.IUser} user
     * @param {DWRest.IRole} role
     * @returns {Promise<void>}
     */
    AssignUserToRole(user: DWRest.IUser, role: DWRest.IRole): Promise<void> {
        if (!role || !role.Id) {
            throw new Error(`Provide a valid role`);
        }

        const assignmentOperation: DWRest.IAssignmentOperation = {
            Ids: [role.Id],
            OperationType: DWRest.AssignmentOperationType.Add
        }

        const assignmentLink: string = this.GetLink(user, 'roles');

        return request.put(assignmentLink, { ...this.docuWare_request_config, body: assignmentOperation })
            .promise();
    }

    /**
     * Assign a dedicated user to a group
     *
     * @param {DWRest.IUser} user
     * @param {DWRest.IGroup} group
     * @returns {Promise<void>}
     */
    AssignUserToGroup(user: DWRest.IUser, group: DWRest.IGroup): Promise<void> {
        if (!group || !group.Id) {
            throw new Error(`Provide a valid group`);
        }

        const assignmentOperation: DWRest.IAssignmentOperation = {
            Ids: [group.Id],
            OperationType: DWRest.AssignmentOperationType.Add
        }

        const assignmentLink: string = this.GetLink(user, 'groups');

        return request.put(assignmentLink, { ...this.docuWare_request_config, body: assignmentOperation })
            .promise();
    }

    /**
     * Remove a role from a user
     *
     * @param {DWRest.IUser} user
     * @param {string} roleId
     * @returns {Promise<void>}
     */
    RemoveUserFromRole(user: DWRest.IUser, roleId: string): Promise<void> {
        const assignmentOperation: DWRest.IAssignmentOperation = {
            Ids: [roleId],
            OperationType: DWRest.AssignmentOperationType.Remove
        }

        const assignmentLink: string = this.GetLink(user, 'roles');

        return request.put(assignmentLink, { ...this.docuWare_request_config, body: assignmentOperation })
            .promise();
    }

    /**
     *  Remove a group from a user
     *
     * @param {DWRest.IUser} user
     * @param {string} groupId
     * @returns {Promise<void>}
     */
    RemoveUserFromGroup(user: DWRest.IUser, groupId: string): Promise<void> {
        const assignmentOperation: DWRest.IAssignmentOperation = {
            Ids: [groupId],
            OperationType: DWRest.AssignmentOperationType.Remove
        }

        const assignmentLink: string = this.GetLink(user, 'groups');

        return request.put(assignmentLink, { ...this.docuWare_request_config, body: assignmentOperation })
            .promise();
    }

    /**
     * Get a group by it's name
     *
     * @param {DWRest.IOrganization} organization
     * @param {string} name
     * @returns {Promise<DWRest.IGroup>}
     */
    GetGroupByName(organization: DWRest.IOrganization, name: string): Promise<DWRest.IGroup> {
        const groupLink: string = this.GetLink(organization, 'groups');

        return request.get(groupLink, this.docuWare_request_config)
            .promise()
            .then((groupsResponse: DWRest.IGroups) => {
                if (!groupsResponse || !groupsResponse.Item) {
                    throw new Error('No groups found!');
                }

                const theGroup: DWRest.IGroup | undefined = groupsResponse.Item.find(g => g.Name.toLowerCase() === name.toLowerCase());
                if (theGroup) {
                    return theGroup;
                } else {
                    throw new Error(`Group ${name} does not exist!`);
                }
            })
    }

    /**
     * Get a role by it's name
     *
     * @param {DWRest.IOrganization} organization
     * @param {string} name
     * @returns {Promise<DWRest.IRole>}
     */
    GetRoleByName(organization: DWRest.IOrganization, name: string): Promise<DWRest.IRole> {
        const roleLink: string = this.GetLink(organization, 'roles');

        return request.get(roleLink, this.docuWare_request_config)
            .promise()
            .then((rolesResponse: DWRest.IRoles) => {
                if (!rolesResponse || !rolesResponse.Item) {
                    throw new Error('No groups found!');
                }

                const theRole: DWRest.IRole | undefined = rolesResponse.Item.find(g => g.Name.toLowerCase() === name.toLowerCase());
                if (theRole) {
                    return theRole;
                } else {
                    throw new Error(`Role ${name} does not exist!`);
                }
            })
    }

    /**
     * Import a dwx archive. DWX is the exchange format of DocuWare
     *
     * @param {string} pathOfDWX
     * @param {DWRest.IFileCabinet} fileCabinet
     * @param {DWRest.IImportSettings} importSettings
     * @returns {Promise<DWRest.IImportResult>}
     */
    ImportDWXArchive(pathOfDWX: string, fileCabinet: DWRest.IFileCabinet, importSettings: DWRest.IImportSettings): Promise<DWRest.IImportResult> {

        const importLink: string = this.GetLink(fileCabinet, 'importDocuments');

        const fileName: string = path.basename(pathOfDWX);
        const contentType = 'application/vnd.docuware.platform.filescontainer+dwx';

        const formData = {
            document: {
                value: JSON.stringify(importSettings),
                options: {
                    filenname: 'importSettings.json',
                    contentType: 'application/json'
                }
            },
            file: {
                value: fs.createReadStream(pathOfDWX),
                options: {
                    contentType: contentType,
                    filenname: fileName
                }
            }
        }

        return request.post(importLink, { ...this.docuWare_request_config, formData: formData })
            .promise();
    }

    /**
     * Import a DWX. DWX is the exchange format of DocuWare
     *
     * @param {(DWRest.IDocument | DWRest.IDocumentsQueryResult)} documentOrDocuments
     * @param {DWRest.IExportSettings} exportSettings
     * @returns {Promise<string>}
     */
    ExportDWXArchive(documentOrDocuments: DWRest.IDocument | DWRest.IDocumentsQueryResult, exportSettings: DWRest.IExportSettings): Promise<string> {

        return new Promise<string>(async (resolve, reject) => {
            const exportLink: string = this.GetLink(documentOrDocuments, 'downloadAsArchive');

            try {

                const req: request.RequestPromise = request.post(exportLink, { ...this.docuWare_request_config, body: exportSettings, resolveWithFullResponse: true });
                return this.DownloadFile(req, reject, resolve);
            }
            catch (err) {
                reject(err);
            }

        })
    }

    /**
     * Do explicit lock of a document
     *
     * @param {DWRest.IDocument} document
     * @param {number} timeToLockInSeconds
     * @returns {Promise<void>}
     */
    LockDocument(document: DWRest.IDocument, timeToLockInSeconds: number): Promise<void> {
        const lockLink = this.GetLink(document, 'lock');
        const timeToLockString = this.BuildTimeSpanString(timeToLockInSeconds);

        const lockInfo: DWRest.ILockInfo = {
            Interval: timeToLockString,
            Operation: 'SampleLockOperation'
        }

        return request.post(lockLink, { ...this.docuWare_request_config, body: lockInfo })
            .promise();
    }

    /**
     * Remove a lock from a document
     *
     * @param {DWRest.IDocument} document
     * @returns {Promise<void>}
     */
    DeleteDocumentLock(document: DWRest.IDocument): Promise<void> {
        const lockLink: string = this.GetLink(document, 'lock');

        return request.delete(lockLink, this.docuWare_request_config)
            .promise();
    }

    /**
     * Add application properties, those properties can be used to save custom meta data
     *
     * @param {DWRest.IDocument} document
     * @param {DWRest.IDocumentApplicationProperty[]} applicationProperties
     * @returns {Promise<DWRest.IDocumentApplicationProperties>}
     */
    AddApplicationProperties(document: DWRest.IDocument, applicationProperties: DWRest.IDocumentApplicationProperty[]): Promise<DWRest.IDocumentApplicationProperties> {
        const applicationPropLink: string = this.GetLink(document, 'appProperties')

        const appPropertyList: DWRest.IDocumentApplicationProperties = {
            DocumentApplicationProperty: applicationProperties
        }

        return request.post(applicationPropLink, { ...this.docuWare_request_config, body: appPropertyList })
            .promise();
    }

    /**
     * Get workflows (The workflow needs to be triggered at least once before you'll get return values)
     *
     * @param {DWRest.IOrganization} organization
     * @returns {Promise<DWRest.IWorkflows>}
     */
    GetWorkflows(organization: DWRest.IOrganization): Promise<DWRest.IWorkflows> {
        const workflowsLink: string = this.GetLink(organization, 'workflows');

        return request.get(workflowsLink, this.docuWare_request_config)
            .promise();
    }

    /**
     * Get controller workflows
     *
     * @param {DWRest.IOrganization} organization
     * @returns {Promise<DWRest.IWorkflows>}
     */
    GetControllerWorkflows(organization: DWRest.IOrganization): Promise<DWRest.IWorkflows> {
        const workflowsLink: string = this.GetLink(organization, 'controllerWorkflows');

        return request.get(workflowsLink, this.docuWare_request_config)
            .promise();
    }

    /**
     * Get workflow tasks for dedicated workflow
     *
     * @param {DWRest.IWorkflow} workflow
     * @returns {Promise<DWRest.IWorkflowTasks>}
     */
    GetWorkflowTasks(workflow: DWRest.IWorkflow): Promise<DWRest.IWorkflowTasks> {
        const tasksLink: string = this.GetLink(workflow, 'tasks');

        return request.get(tasksLink, this.docuWare_request_config)
            .promise();
    }

    /**
     * Confirms a taks, this example takes the first text form and confirms with demo string
     *
     * @param {DWRest.IWorkflowTask} task
     * @returns {Promise<void>}
     */
    ConfirmWorkflowTask(task: DWRest.IWorkflowTask): Promise<void> {
        const firstDecision: DWRest.IDecision = task.Decisions[0];
        if (firstDecision) {
            return this.LoadFullObjectFromPlatform<DWRest.IDecision>(firstDecision.DecisionOperations.BaseDecisionOperations)
                .then((fullLoadedDecision: DWRest.IDecision) => {
                    const textFormField = fullLoadedDecision.TaskFormField.find(f => f.Item.FormFieldType === DWRest.FormTypeEnum.Text);
                    if (textFormField) {
                        const confirmData: DWRest.IConfirmedData = {
                            ConfirmedFields: [
                                {
                                    Id: textFormField.Item.Id,
                                    Value: {
                                        Item: 'Confirmed by REST Sample',
                                        ItemElementName: DWRest.ItemChoiceType.String
                                    }
                                }
                            ]
                        }
                        const confirmLink: string = this.GetLink(fullLoadedDecision.DecisionOperations.ExtendedDecisionOperations, 'confirm');

                        return request.post(confirmLink, { ...this.docuWare_request_config, body: confirmData })
                            .promise();
                    } else {
                        throw new Error('No textfield found, sample will not work :(');
                    }
                });
        } else {
            throw new Error(`Task ${task.Id} does not have any decision!`);
        }

    }

    /**
     * Helper method for getting a TimeSpan string
     *
     * @param {number} seconds
     * @returns
     */
    private BuildTimeSpanString(seconds: number) {

        const ts: timespan.TimeSpan = timespan.fromSeconds(seconds);

        return ts.toString();
    }

    /**
     * Helper method to download file from response
     *
     * @private
     * @param {request.RequestPromise} request
     * @param {(reason?: any) => void} reject
     * @param {(value?: any) => void} resolve
     * @memberof RestCallWrapper
     */
    private async DownloadFile(request: request.RequestPromise, reject: (reason?: any) => void, resolve: (value?: any) => void) {
        request.on('response', (response) => {

            const cdString = response.headers['content-disposition'];
            if (cdString) {
                const parsedContentDispositionString: ContentDisposition = contentdisposition.parse(cdString);
                const fileName = parsedContentDispositionString.parameters['filename'];

                this.CreateDirectoyIfNotExist('./downloads/');

                const fullTempPathToFile = `./downloads/${fileName}`;

                const wStream: fs.WriteStream = fs.createWriteStream(fullTempPathToFile);

                response.pipe(wStream).on('finish', () => {
                    resolve(fullTempPathToFile);
                });
            } else {
                reject(new Error('No content disposition found!'));
            }
        })
            .on('error', (err) => {
                reject(err);
            });
    }

    /**
     * Helper method to check if link exists or not
     *
     * @param {DWRest.ILinkModel} linkModel
     * @param {string} linkName
     * @returns {string}
     */
    private GetLink(linkModel: DWRest.ILinkModel, linkName: string): string {
        const theLink: string | null = this.GetLinkFromModel(linkModel, linkName);

        if (!theLink) {
            throw new Error(`No ${linkName} link found!`);
        }

        return theLink;
    }

    //Extract a link from models
    /**
     * Get link from object by name
     *
     * @param {DWRest.ILinkModel} linkModel
     * @param {string} linkName
     * @returns {(string | null)}
     */
    private GetLinkFromModel(linkModel: DWRest.ILinkModel, linkName: string): string | null {
        if (linkModel.Links) {
            const theRealLink = linkModel.Links.find(l => l.rel.toLowerCase() === linkName.toLowerCase());
            if (theRealLink) {
                return theRealLink.href;
            }
        }

        return null;
    }

    private CreateDirectoyIfNotExist(path: string) {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
    }
}

/**
     * IndexFileType Enum
     *
     * @export
     * @enum {number}
     */
    export const enum ContentType {
        XML = 'xml',
        JSON = 'json',
        NULL = 'null'
    }

export { RestCallWrapper };
