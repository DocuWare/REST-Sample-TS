/// <reference path="./types/DW_Rest.d.ts" />
/// <reference path="./types/DW_Request_Promise_Extension.d.ts" />

/*
    This project is a possible "How to" use the DocuWare REST API with Typescript (Javascript) and Nodejs
*/

import { DWRequestPromiseExtension } from './types/DW_Request_Promise_Extension';
import polly, { Info } from 'polly-js';
import { RestCallWrapper } from './restWrapper'
import { LineEntry } from './Annotations';
import { DialogExpressionCondition, DialogExpression } from './DialogExpression';
import path from 'path';

const timeToWait: number = 60 * 1000; //MS

//connection data
const rootUrl: string = 'http://localhost/';
const user: string = 'dwadmin';
const password: string = 'admin';
const organization: string = 'Peters Engineering';
const hostID: string = '7b5ed19b-bfd6-46e9-8a3b-efd2a4499666'; //has to be unique per machine
const fileCabinetID: string = '3f3c9aff-63e5-4433-99a5-ed6dbba1bb72';

//the REST Wrapper
const restWrapper: RestCallWrapper = new RestCallWrapper(rootUrl);

//Create Login Model
const logonModel: DWRest.ILogonModel = restWrapper.CreateLogonModel(user, password, organization, hostID);

//Polly is a library for retrying on errors. In our example we will react on "ToManyRequests"
polly()
    .handle((error: DWRequestPromiseExtension.IStatusCodeError) => {
        //Check for 'ToManyRequests'
        if (error.statusCode === 429) {
            console.warn(`Throttling active, waiting for ${timeToWait / 1000} seconds and trying again.`);
            return true;
        }

        return false;
    })
    .waitAndRetry([timeToWait])
    .executeForPromise(async (info: Info) => {

        //#region Login, list organizations and filecabinets
        let logonResponse: DWRest.ILogonResponse = await restWrapper.Logon(logonModel);
        let organizations: DWRest.IOrganizations = await restWrapper.GetOrganizations(logonResponse);
        let organization: DWRest.IOrganization = await restWrapper.GetOrganization();
        let fileCabinets: DWRest.IFileCabinets = await restWrapper.GetFileCabinets(organization);
        let fileCabinet: DWRest.IFileCabinet = await restWrapper.GetFileCabinet(fileCabinetID);
        //#endregion

        //Get a special document
        let specialDocument: DWRest.IDocument = await restWrapper.GetDocumentByDocID(fileCabinet, 30);

        //#region get dialogs and do searches
        await getPagedDocumentResults(fileCabinet);

        //Get all dialogs from a file cabinet
        let dialogs: DWRest.IDialogsResponse = await restWrapper.GetAllDialogsFromFileCabinet(fileCabinet);

        let firstDialog: DWRest.IDialog = await getFirstDialogOfType(fileCabinet, DWRest.DialogType.Search);

        let documentsQueryResult: DWRest.IDocumentsQueryResult = await doSearch(fileCabinet, firstDialog);
        //#endregion

        let updatedFieldList: DWRest.IFieldList = await updateIndexEntry(specialDocument);

        await downloadDocument(specialDocument);

        await storeDocument(fileCabinet);

        await storeBigDocumentPlainFile(fileCabinet);

        await storeBigDocumentJsonIndex(fileCabinet);

        await storeBigDocumentJsonApplicationProperties(fileCabinet);

        await storeBigDocumentJsonIndexAndApplicationProperties(fileCabinet);

        await updateDocumentSection(specialDocument);

        //#region Handle checkout or checkin of a document
        await checkoutAndCheckinDocument(fileCabinet, specialDocument);
        //#endregion

        //#region Stamp or set annotation on document
        await stampAdocument(fileCabinet, specialDocument);

        let documentForAnnotation: DWRest.IDocument = await restWrapper.GetDocumentByDocID(fileCabinet, 1, true);

        await setAnAnnotation(documentForAnnotation);
        //#endregion

        //#region Transfer documents between filecabinets or document trays
        await transferDocumentsFromFileCabinetToFileCabinet(fileCabinet);

        await transferDocumentsFromDocumentTrayToFileCabinet(fileCabinet, [1, 2, 3, 4, 5]);
        //#endregion

        //#region Merge and splitting of documents
        //Merge documents
        let mergedDocument: DWRest.IDocument = await restWrapper.MergeDocument(fileCabinet, [223, 224, 225], DWRest.ContentMergeOperation.Clip);

        //Split documents
        let splittedDocuments: DWRest.IDocumentsQueryResult = await restWrapper.DevideDocument(mergedDocument, DWRest.ContentDivideOperation.Unclip);

        //#endregion 

        //#region Create user and assign or remove roles and groups
        let newUser: DWRest.IUser = await createNewUser(organization);

        let group: DWRest.IGroup = await restWrapper.GetGroupByName(organization, 'MyTestGroup');
        let role: DWRest.IRole = await restWrapper.GetRoleByName(organization, 'MyTestRole');

        //Assign user to group
        await restWrapper.AssignUserToGroup(newUser, group).then(async () => {
            if (group && group.Id) {
                //Remove again from group
                await restWrapper.RemoveUserFromGroup(newUser, group.Id);
            }
        });

        //Assign user to role
        await restWrapper.AssignUserToRole(newUser, role).then(async () => {
            if (role && role.Id) {
                //Remove it again
                await restWrapper.RemoveUserFromRole(newUser, role.Id);
            }
        });

        //#endregion

        //#region Import and export documents
        let pathToExportedDocument: string = await ExportADocument(fileCabinet);

        await importAdocument(pathToExportedDocument);

        //#endregion

        //#region Do manual document locking
        let documentforLock: DWRest.IDocument = await restWrapper.GetDocumentByDocID(fileCabinet, 229, true);
        await restWrapper.LockDocument(documentforLock, 60);
        await restWrapper.DeleteDocumentLock(documentforLock);
        //#endregion

        //#region Handle document application properties
        let documentToAddApplicationProperties: DWRest.IDocument = await restWrapper.GetDocumentByDocID(fileCabinet, 229, true);
        let appProperties: DWRest.IDocumentApplicationProperty[] = [{
            Name: 'CustomKey',
            Value: 'REST'
        }];

        let addedApplicationProperties: DWRest.IDocumentApplicationProperties = await restWrapper.AddApplicationProperties(documentToAddApplicationProperties, appProperties);
        //#endregion

        //#region Workflow handling
        let workflows: DWRest.IWorkflows = await restWrapper.GetWorkflows(organization);
        let theWorkflow: DWRest.IWorkflow | undefined = workflows.Workflow.find(w => w.Name === 'TestWorkflow');
        if (theWorkflow) {
            let task: DWRest.IWorkflowTasks = await restWrapper.GetWorkflowTasks(theWorkflow);
            let fullLoadedTask: DWRest.IWorkflowTask = await restWrapper.LoadFullObjectFromPlatform<DWRest.IWorkflowTask>(task.Task[0].TaskOperations.BaseTaskOperations);
            let result: any = await restWrapper.ConfirmWorkflowTask(fullLoadedTask);
        }
        //#endregion

        //#region Add a tablefield to a document

        let indexField: DWRest.IField = {
            FieldName: 'InvoiceParts',
            ItemElementName: DWRest.ItemChoiceType.Table,
            Item: { 
                Rows: [
                    {
                        Columns: [
                            {
                                FieldName: 'INVOI_POSITION',
                                Item: 1
                            },
                            {
                                FieldName: 'INVOI_AMOUNT',
                                Item: 15.00
                            },
                            {
                                FieldName: 'INVOI_GOOD',
                                Item: 'Saw'
                            },
                            {
                                FieldName: 'INVOI_WARRANTY',
                                Item: '2021-01-01' //care about culture!
                            }
                        ]
                    }
                ]
            }
        }

        await updateDocumentTableField(specialDocument, indexField);

        //#endregion

        console.log('done');
    }).catch((error: Error) => {
        traceError(error);
    });

async function importAdocument(pathToExportedDocument: string) {
    let fcToImportTo: DWRest.IFileCabinet = await restWrapper.GetFileCabinet('98572c4a-86d5-4cab-bd77-5fda63ff7017');
    let importResult: DWRest.IImportResult = await restWrapper.ImportDWXArchive(pathToExportedDocument, fcToImportTo, {
        FieldMappings: [{
            Destination: 'COMPANY',
            Source: 'COMPANY'
        }], PreserveSystemFields: true
    });
}

async function ExportADocument(fileCabinet: DWRest.IFileCabinet) {
    let documentForExport: DWRest.IDocument = await restWrapper.GetDocumentByDocID(fileCabinet, 229, true);
    let pathToExportedDocument: string = await restWrapper.ExportDWXArchive(documentForExport, { ExportHistory: true, ExportTextShots: true });
    return pathToExportedDocument;
}

async function createNewUser(organization: DWRest.IOrganization): Promise<DWRest.IUser> {
    let newUser: DWRest.INewUser = {
        Name: 'RESTTest',
        DBName: 'RESTTest',
        Email: 'resttest@localhost.de',
        Password: 'supersecret'
    };

    return await restWrapper.CreateUser(organization, newUser);
}

async function transferDocumentsFromDocumentTrayToFileCabinet(fileCabinet: DWRest.IFileCabinet, docIdsToTransfer: number[]) {
    let myDocumentTray: DWRest.IFileCabinet = await restWrapper.GetFileCabinet('b_bbc77c37-993c-4873-a7bf-47ecdfdab2d0');
    let documentsQueryResult: DWRest.IDocumentsQueryResult = await restWrapper.TransferFromDocumentTrayToFileCabinet(docIdsToTransfer, myDocumentTray.Id, fileCabinet, true);
}

async function transferDocumentsFromFileCabinetToFileCabinet(sourceFileCabinet: DWRest.IFileCabinet) {
    let destinationFileCabinet: DWRest.IFileCabinet = await restWrapper.GetFileCabinet('1e623d39-974f-4677-a942-d9c60839a264');
    let first5DocumentsToTransfer: DWRest.IDocumentsQueryResult = await restWrapper.GetDocumentQueryResultForSpecifiedCountFromFileCabinet(sourceFileCabinet, 5);
    let transferredDocuments: DWRest.IDocumentsQueryResult = await restWrapper.TransferFromFileCabinetToFileCabinet(first5DocumentsToTransfer.Items, sourceFileCabinet.Id, destinationFileCabinet, true);
}

async function setAnAnnotation(documentForAnnotation: DWRest.IDocument) {
    if (documentForAnnotation && documentForAnnotation.Sections) {
        let firstSectionForAnnotation: DWRest.ISection = await restWrapper.LoadFullObjectFromPlatform<DWRest.ISection>(documentForAnnotation.Sections[0]);
        let firstPage: DWRest.IPage = await restWrapper.GetPageByNumber(firstSectionForAnnotation, 0, true);
        let firstPageData = firstPage.Data;
        let lineInMiddleOfDocument = new LineEntry({ X: 0, Y: firstPageData.Height / 2 }, { X: firstPageData.Width, Y: firstPageData.Height / 2 });
        lineInMiddleOfDocument.Color = '#f442b9';
        lineInMiddleOfDocument.StrokeWidth = 10;
        lineInMiddleOfDocument.Transparent = false;
        let annotationToSet: DWRest.IAnnotation = {
            Layer: [{
                Id: 1,
                Items: [
                    lineInMiddleOfDocument
                ]
            }]
        };
        let annotation: DWRest.IAnnotation = await restWrapper.PlaceAnnotation(firstPage, annotationToSet);
    }
}

async function stampAdocument(fileCabinet: DWRest.IFileCabinet, document: DWRest.IDocument) {
    if (document && document.Sections) {
        let fullLoadedFirstSectionForStamping: DWRest.ISection = await restWrapper.LoadFullObjectFromPlatform<DWRest.ISection>(document.Sections[0]);
        let firstPage: DWRest.IPage = await restWrapper.GetPageByNumber(fullLoadedFirstSectionForStamping, 0);
        let stampPlacement: DWRest.IStampPlacement = {
            Layer: 0,
            StampId: '7dc2ae96-b5cb-4aca-8b0e-3c7c8a163cb0',
            Field: [{
                Name: '<#1>',
                Value: 'Nice',
                TypedValue: {
                    Item: 'Nice',
                    ItemElementName: DWRest.ItemChoiceType.String
                }
            }],
            Password: 'admin'
        };
        await restWrapper.PlaceAStampWithBestPosition(firstPage, stampPlacement);
    }
}

async function checkoutAndCheckinDocument(fileCabinet: DWRest.IFileCabinet, document: DWRest.IDocument) {
    let fullLoadeddocumentForCheckout: DWRest.IDocument = await restWrapper.LoadFullObjectFromPlatform<DWRest.IDocument>(document);
    let checkedOutDocumentPath: string = await restWrapper.CheckoutToFileSystem(fullLoadeddocumentForCheckout);
    if (fullLoadeddocumentForCheckout && fullLoadeddocumentForCheckout.Version) {
        let currentVersion: DWRest.IDocumentVersion = fullLoadeddocumentForCheckout.Version;
        //Higher minor version by one
        currentVersion.Minor = currentVersion.Minor + 1;
        let theCheckInParamters: DWRest.ICheckInActionParameters = {
            DocumentAction: DWRest.DocumentAction.CheckIn,
            Comments: 'This is a comment.',
            CheckInReturnDocument: DWRest.CheckInReturnedDocument.CheckedIn,
            DocumentVersion: currentVersion //set new version
        };
        let checkedInDocument: DWRest.IDocument = await restWrapper.CheckInFromFileSystem(fullLoadeddocumentForCheckout, checkedOutDocumentPath, theCheckInParamters);
    }
}

async function updateDocumentSection(document: DWRest.IDocument) {
    if (document && document.Sections) {
        let firstSection: DWRest.ISection = document.Sections[0];
        let fullLoadedFirstSection: DWRest.ISection = await restWrapper.LoadFullObjectFromPlatform<DWRest.ISection>(firstSection);
        let updatedSection: DWRest.ISection = await restWrapper.EditDocumentSection(fullLoadedFirstSection, './upload/sample.txt');
    }
}

async function storeDocument(fileCabinet: DWRest.IFileCabinet) {
    let indexEntries: DWRest.IField[] = [
        {
            FieldName: 'Company',
            Item: 'Doc Name Test Inc',
            ItemElementName: DWRest.ItemChoiceType.String
        },
        {
            FieldName: 'Status',
            Item: 'Uploaded by REST',
            ItemElementName: DWRest.ItemChoiceType.String
        }
    ];
    let newCreatedDocument: DWRest.IDocument = await restWrapper.UploadDocument(fileCabinet, indexEntries, './upload/SAMPLE DOCUMENT.pdf');
}

async function storeBigDocumentPlainFile(fileCabinet: DWRest.IFileCabinet) {
    let newCreatedDocument: DWRest.IDocument = await restWrapper.UploadBigDocumentBase(fileCabinet, './upload/BIG SAMPLE DOCUMENT.pdf');
}

async function storeBigDocumentJsonIndex(fileCabinet: DWRest.IFileCabinet) {
    let indexEntries: DWRest.IField[] = [
        {
            FieldName: 'Company',
            Item: 'Doc Name Big JSON Test Inc only Index',
            ItemElementName: DWRest.ItemChoiceType.String
        },
        {
            FieldName: 'Status',
            Item: 'Uploaded by REST',
            ItemElementName: DWRest.ItemChoiceType.String
        }
    ];

    let newCreatedDocument: DWRest.IDocument = await restWrapper.UploadBigDocumentJsonContextType(fileCabinet, './upload/BIG SAMPLE DOCUMENT.pdf', indexEntries, []);
}

async function storeBigDocumentJsonApplicationProperties(fileCabinet: DWRest.IFileCabinet) {
    let applicationProperties: DWRest.IDocumentApplicationProperty[] = [
        {
            Name: "DocuWare", 
            Value: "AppValue1 ApplicationProperties"
        }
    ];

    let newCreatedDocument: DWRest.IDocument = await restWrapper.UploadBigDocumentJsonContextType(fileCabinet, './upload/BIG SAMPLE DOCUMENT.pdf', [], applicationProperties);
}

async function storeBigDocumentJsonIndexAndApplicationProperties(fileCabinet: DWRest.IFileCabinet) {
    let indexEntries: DWRest.IField[] = [
        {
            FieldName: 'Company',
            Item: 'Doc Name Big JSON Test Inc Index & ApplicationProperties',
            ItemElementName: DWRest.ItemChoiceType.String
        },
        {
            FieldName: 'Status',
            Item: 'Uploaded by REST',
            ItemElementName: DWRest.ItemChoiceType.String
        }
    ];
    
    let applicationProperties: DWRest.IDocumentApplicationProperty[] = [
        {
            Name: "DocuWare", 
            Value: "AppValue1 Index & ApplicationProperties"
        }
    ];

    let newCreatedDocument: DWRest.IDocument = await restWrapper.UploadBigDocumentJsonContextType(fileCabinet, './upload/BIG SAMPLE DOCUMENT.pdf', indexEntries, applicationProperties);
}

async function downloadDocument(specialDocument: DWRest.IDocument) {
    let fullLoadedDocument: DWRest.IDocument = await restWrapper.LoadFullObjectFromPlatform<DWRest.IDocument>(specialDocument);
    let downloadPath: string = await restWrapper.DownloadDocument(fullLoadedDocument, false, DWRest.TargetFileType.Auto);
}

async function updateIndexEntry(specialDocument: DWRest.IDocument): Promise<DWRest.IFieldList> {
    let customFieldOfDocument: DWRest.IField = getFieldByName(specialDocument, 'Status'); //Status is a custom field in filecabinet
    //Update field value
    customFieldOfDocument.Item = 'Booked!';
    return await restWrapper.UpdateDocumentIndexValues(specialDocument, { Field: [customFieldOfDocument] });
}

async function doSearch(fileCabinet: DWRest.IFileCabinet, firstDialog: DWRest.IDialog): Promise<DWRest.IDocumentsQueryResult> {
    let dialogExpression = new DialogExpression(DWRest.Operation.And, [
        new DialogExpressionCondition('COMPANY', ['Home Improvement', 'Peters Engineering']),
        new DialogExpressionCondition('DOCUMENT_TYPE', ['Invoice out'])
    ]);
    let query: string = await restWrapper.GetQueryUrlFromFileCabinet(fileCabinet, dialogExpression, firstDialog.Id, firstDialog.Query.Fields, 'COMPANY', DWRest.SortOrder.Desc);
    return await restWrapper.GetQueryResults(query);
}

async function getFirstDialogOfType(fileCabinet: DWRest.IFileCabinet, dType: DWRest.DialogType): Promise<DWRest.IDialog> {
    let dialogs: DWRest.IDialog[] = await restWrapper.GetDedicatedDialogsFromFileCabinet(fileCabinet, dType);
    return await restWrapper.LoadFullObjectFromPlatform<DWRest.IDialog>(dialogs[0]);
}

async function getPagedDocumentResults(fileCabinet: DWRest.IFileCabinet) {
    let documents: DWRest.IDocument[] = await restWrapper.GetDocumentsFromFileCabinet(fileCabinet); //Try to avoid the get all at once
    let first1DocumentsResult: DWRest.IDocumentsQueryResult = await restWrapper.GetDocumentQueryResultForSpecifiedCountFromFileCabinet(fileCabinet, 1);
    let next1Documents: DWRest.IDocumentsQueryResult = await restWrapper.GetNextResultFromDocumentQueryResult(first1DocumentsResult);
}

async function updateDocumentTableField(document: DWRest.IDocument, tablefield: DWRest.IField) {
    await restWrapper.UpdateDocumentIndexValues(document, { Field: [tablefield] });
}

/**
 * Returns special field by name
 * Also proofs if system field is tried to manipulate
 * 
 * @param {DWRest.IDocument} document
 * @param {string} fieldName
 * @returns {DWRest.IField}
 */
function getFieldByName(document: DWRest.IDocument, fieldName: string): DWRest.IField {
    if (Object.keys(document).length === 0) 
    {
        throw new Error(`document is empty!`);
    }
    if (document.Fields?.length === 0) 
    {
        throw new Error(`Fields is empty!`);
    }

    let field = document.Fields?.find(f => f.FieldName.toLowerCase() === fieldName.toLowerCase());
   
    if (!field) 
    {
        throw new Error(`Field '${fieldName}' does not exist on document '${document.Id}'!`);
    }

    if (field.SystemField) 
    {
        throw new Error(`Field '${fieldName}' is a system field, do not try to manipulate!`);
    }

    return field;
}

/**
 * Traces error
 *
 * @param {Error} error
 */
function traceError(error: Error) {
    console.error('Error message:\n\r' + error.message + '\n\rError Stack:\n\r' + error.stack);
}