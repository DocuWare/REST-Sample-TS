/*
    This project is a possible "How to" use the DocuWare REST API with Typescript (Javascript) and Nodejs
*/

import { DWRequestPromiseExtension } from "./types/DW_Request_Promise_Extension";
import * as DWRest from "./types/DW_Rest";
import polly from "polly-js";
import { RestCallWrapper } from "./restWrapper";
import { LineEntry } from "./Annotations";
import {
  DialogExpressionCondition,
  DialogExpression,
} from "./DialogExpression";
import { StandardChunkUploadDocument } from "./classes/StandardChunkUploadDocument";

const timeToWait: number = 60 * 1000; //MS

//connection data
const rootUrl = "http://localhost/";
const user = "dwadmin";
const password = "admin";
const organization = "Peters Engineering";
const hostID = "7b5ed19b-bfd6-46e9-8a3b-efd2a4499666"; //has to be unique per machine
const fileCabinetID = "22b893c3-a3f6-4de5-923b-92011ecfae91";

//the REST Wrapper
const restWrapper: RestCallWrapper = new RestCallWrapper(rootUrl);

//Create Login Model
const logonModel: DWRest.ILogonModel = restWrapper.CreateLogonModel(
  user,
  password,
  organization,
  hostID
);

//Polly is a library for retrying on errors. In our example we will react on "ToManyRequests"
polly()
  .handle((error: DWRequestPromiseExtension.IStatusCodeError) => {
    //Check for 'ToManyRequests'
    if (error.statusCode === 429) {
      console.warn(
        `Throttling active, waiting for ${
          timeToWait / 1000
        } seconds and trying again.`
      );
      return true;
    }

    return false;
  })
  .waitAndRetry([timeToWait])
  .executeForPromise(async () => {
    //#region Login, list organizations and filecabinets
    const logonResponse: DWRest.ILogonResponse = await restWrapper.Logon(
      logonModel
    );
    const organizations: DWRest.IOrganizations =
      await restWrapper.GetOrganizations(logonResponse);
    const organization: DWRest.IOrganization =
      await restWrapper.GetOrganization();
    const fileCabinets: DWRest.IFileCabinets =
      await restWrapper.GetFileCabinets(organization);
    const fileCabinet: DWRest.IFileCabinet = await restWrapper.GetFileCabinet(
      fileCabinetID
    );
    //#endregion

    //Get a special document
    const specialDocument: DWRest.IDocument =
      await restWrapper.GetDocumentByDocID(fileCabinet, 5);

    //#region get dialogs and do searches
    await getPagedDocumentResults(fileCabinet);

    //Get all dialogs from a file cabinet
    const dialogs: DWRest.IDialogsResponse =
      await restWrapper.GetAllDialogsFromFileCabinet(fileCabinet);

    const firstDialog: DWRest.IDialog = await getFirstDialogOfType(
      fileCabinet,
      DWRest.DialogType.Search
    );

    const documentsQueryResult: DWRest.IDocumentsQueryResult = await doSearch(
      fileCabinet,
      firstDialog
    );
    //#endregion

    const updatedFieldList: DWRest.IFieldList = await updateIndexEntry(
      specialDocument
    );

    await downloadDocument(specialDocument);

    await storeDocument(fileCabinet);

    await storeBigDocumentPlainFile(fileCabinet);

    await storeBigDocumentJsonIndex(fileCabinet);

    await storeBigDocumentJsonApplicationProperties(fileCabinet);

    await storeBigDocumentJsonIndexAndApplicationProperties(fileCabinet);

    await storeBigDocumentJsonIndexAndApplicationPropertiesMulti(fileCabinet);

    await storeBigDocumentJsonIndexAndMultiApplicationPropertiesMultiSection(
      fileCabinet
    );

    await updateDocumentSection(specialDocument);

    //#region Handle checkout or checkin of a document
    await checkoutAndCheckinDocument(fileCabinet, specialDocument);
    //#endregion

    //#region Stamp or set annotation on document
    await stampAdocument(fileCabinet, specialDocument);

    const documentForAnnotation: DWRest.IDocument =
      await restWrapper.GetDocumentByDocID(fileCabinet, 1, true);

    await setAnAnnotation(documentForAnnotation);
    //#endregion

    //#region Transfer documents between filecabinets or document trays
    await transferDocumentsFromFileCabinetToFileCabinet(fileCabinet);

    await transferDocumentsFromDocumentTrayToFileCabinet(
      fileCabinet,
      [1, 2, 3, 4, 5]
    );
    //#endregion

    //#region Merge and splitting of documents
    //Merge documents
    const mergedDocument: DWRest.IDocument = await restWrapper.MergeDocument(
      fileCabinet,
      [223, 224, 225],
      DWRest.ContentMergeOperation.Clip
    );

    //Split documents
    const splittedDocuments: DWRest.IDocumentsQueryResult =
      await restWrapper.DivideDocument(
        mergedDocument,
        DWRest.ContentDivideOperation.Unclip
      );

    //#endregion

    //#region Create user and assign or remove roles and groups
    const newUser: DWRest.IUser = await createNewUser(organization);

    const group: DWRest.IGroup = await restWrapper.GetGroupByName(
      organization,
      "MyTestGroup"
    );
    const role: DWRest.IRole = await restWrapper.GetRoleByName(
      organization,
      "MyTestRole"
    );

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
    const pathToExportedDocument: string = await ExportADocument(fileCabinet);

    await importAdocument(pathToExportedDocument);

    //#endregion

    //#region Do manual document locking
    const documentforLock: DWRest.IDocument =
      await restWrapper.GetDocumentByDocID(fileCabinet, 229, true);
    await restWrapper.LockDocument(documentforLock, 60);
    await restWrapper.DeleteDocumentLock(documentforLock);
    //#endregion

    //#region Handle document application properties
    const documentToAddApplicationProperties: DWRest.IDocument =
      await restWrapper.GetDocumentByDocID(fileCabinet, 229, true);
    const appProperties: DWRest.IDocumentApplicationProperty[] = [
      {
        Name: "CustomKey",
        Value: "REST",
      },
    ];

    const addedApplicationProperties: DWRest.IDocumentApplicationProperties =
      await restWrapper.AddApplicationProperties(
        documentToAddApplicationProperties,
        appProperties
      );
    //#endregion

    //#region Workflow handling
    const workflows: DWRest.IWorkflows = await restWrapper.GetWorkflows(
      organization
    );
    const theWorkflow: DWRest.IWorkflow | undefined = workflows.Workflow.find(
      (w) => w.Name === "TestWorkflow"
    );
    if (theWorkflow) {
      const task: DWRest.IWorkflowTasks = await restWrapper.GetWorkflowTasks(
        theWorkflow
      );
      const fullLoadedTask: DWRest.IWorkflowTask =
        await restWrapper.LoadFullObjectFromPlatform<DWRest.IWorkflowTask>(
          task.Task[0].TaskOperations.BaseTaskOperations
        );
      const result: any = await restWrapper.ConfirmWorkflowTask(fullLoadedTask);
    }
    //#endregion

    //#region Add a tablefield to a document

    const indexField: DWRest.IDocumentIndexField = {
      fieldName: "InvoiceParts",
      itemElementName: DWRest.ItemChoiceType.Table,
      item: {
        Rows: [
          {
            Columns: [
              {
                FieldName: "INVOI_POSITION",
                Item: 1,
              },
              {
                FieldName: "INVOI_AMOUNT",
                Item: 15.0,
              },
              {
                FieldName: "INVOI_GOOD",
                Item: "Saw",
              },
              {
                FieldName: "INVOI_WARRANTY",
                Item: "2021-01-01", //care about culture!
              },
            ],
          },
        ],
      },
    };

    await updateDocumentTableField(specialDocument, indexField);

    //#endregion

    console.log("done");
  })
  .catch((error: Error) => {
    traceError(error);
  });

async function importAdocument(pathToExportedDocument: string) {
  const fcToImportTo: DWRest.IFileCabinet = await restWrapper.GetFileCabinet(
    "98572c4a-86d5-4cab-bd77-5fda63ff7017"
  );
  const importResult: DWRest.IImportResult = await restWrapper.ImportDWXArchive(
    pathToExportedDocument,
    fcToImportTo,
    {
      FieldMappings: [
        {
          Destination: "COMPANY",
          Source: "COMPANY",
        },
      ],
      PreserveSystemFields: true,
    }
  );
}

async function ExportADocument(fileCabinet: DWRest.IFileCabinet) {
  const documentForExport: DWRest.IDocument =
    await restWrapper.GetDocumentByDocID(fileCabinet, 229, true);
  const pathToExportedDocument: string = await restWrapper.ExportDWXArchive(
    documentForExport,
    { ExportHistory: true, ExportTextShots: true }
  );
  return pathToExportedDocument;
}

async function createNewUser(
  organization: DWRest.IOrganization
): Promise<DWRest.IUser> {
  const newUser: DWRest.INewUser = {
    Name: "RESTTest",
    DBName: "RESTTest",
    Email: "resttest@localhost.de",
    Password: "supersecret",
  };

  return await restWrapper.CreateUser(organization, newUser);
}

async function transferDocumentsFromDocumentTrayToFileCabinet(
  fileCabinet: DWRest.IFileCabinet,
  docIdsToTransfer: number[]
) {
  const myDocumentTray: DWRest.IFileCabinet = await restWrapper.GetFileCabinet(
    "b_bbc77c37-993c-4873-a7bf-47ecdfdab2d0"
  );
  const documentsQueryResult: DWRest.IDocumentsQueryResult =
    await restWrapper.TransferFromDocumentTrayToFileCabinet(
      docIdsToTransfer,
      myDocumentTray.Id,
      fileCabinet,
      true
    );
}

async function transferDocumentsFromFileCabinetToFileCabinet(
  sourceFileCabinet: DWRest.IFileCabinet
) {
  const destinationFileCabinet: DWRest.IFileCabinet =
    await restWrapper.GetFileCabinet("1e623d39-974f-4677-a942-d9c60839a264");
  const first5DocumentsToTransfer: DWRest.IDocumentsQueryResult =
    await restWrapper.GetDocumentQueryResultForSpecifiedCountFromFileCabinet(
      sourceFileCabinet,
      5
    );
  const transferredDocuments: DWRest.IDocumentsQueryResult =
    await restWrapper.TransferFromFileCabinetToFileCabinet(
      first5DocumentsToTransfer.Items,
      sourceFileCabinet.Id,
      destinationFileCabinet,
      true
    );
}

async function setAnAnnotation(documentForAnnotation: DWRest.IDocument) {
  if (documentForAnnotation && documentForAnnotation.Sections) {
    const firstSectionForAnnotation: DWRest.ISection =
      await restWrapper.LoadFullObjectFromPlatform<DWRest.ISection>(
        documentForAnnotation.Sections[0]
      );
    const firstPage: DWRest.IPage = await restWrapper.GetPageByNumber(
      firstSectionForAnnotation,
      0,
      true
    );
    const firstPageData = firstPage.Data;
    const lineInMiddleOfDocument = new LineEntry(
      { X: 0, Y: firstPageData.Height / 2 },
      { X: firstPageData.Width, Y: firstPageData.Height / 2 }
    );
    lineInMiddleOfDocument.Color = "#f442b9";
    lineInMiddleOfDocument.StrokeWidth = 10;
    lineInMiddleOfDocument.Transparent = false;
    const annotationToSet: DWRest.IAnnotation = {
      Layer: [
        {
          Id: 1,
          Items: [lineInMiddleOfDocument],
        },
      ],
    };
    const annotation: DWRest.IAnnotation = await restWrapper.PlaceAnnotation(
      firstPage,
      annotationToSet
    );
  }
}

async function stampAdocument(
  fileCabinet: DWRest.IFileCabinet,
  document: DWRest.IDocument
) {
  if (document && document.Sections) {
    const fullLoadedFirstSectionForStamping: DWRest.ISection =
      await restWrapper.LoadFullObjectFromPlatform<DWRest.ISection>(
        document.Sections[0]
      );
    const firstPage: DWRest.IPage = await restWrapper.GetPageByNumber(
      fullLoadedFirstSectionForStamping,
      0
    );
    const stampPlacement: DWRest.IStampPlacement = {
      Layer: 0,
      StampId: "7dc2ae96-b5cb-4aca-8b0e-3c7c8a163cb0",
      Field: [
        {
          Name: "<#1>",
          Value: "Nice",
          TypedValue: {
            Item: "Nice",
            ItemElementName: DWRest.ItemChoiceType.String,
          },
        },
      ],
      Password: "admin",
    };
    await restWrapper.PlaceAStampWithBestPosition(firstPage, stampPlacement);
  }
}

async function checkoutAndCheckinDocument(
  fileCabinet: DWRest.IFileCabinet,
  document: DWRest.IDocument
) {
  const fullLoadeddocumentForCheckout: DWRest.IDocument =
    await restWrapper.LoadFullObjectFromPlatform<DWRest.IDocument>(document);
  const checkedOutDocumentPath: string = await restWrapper.CheckoutToFileSystem(
    fullLoadeddocumentForCheckout
  );
  if (fullLoadeddocumentForCheckout && fullLoadeddocumentForCheckout.Version) {
    const currentVersion: DWRest.IDocumentVersion =
      fullLoadeddocumentForCheckout.Version;
    //Higher minor version by one
    currentVersion.Minor = currentVersion.Minor + 1;
    const theCheckInParamters: DWRest.ICheckInActionParameters = {
      DocumentAction: DWRest.DocumentAction.CheckIn,
      Comments: "This is a comment.",
      CheckInReturnDocument: DWRest.CheckInReturnedDocument.CheckedIn,
      DocumentVersion: currentVersion, //set new version
    };
    const checkedInDocument: DWRest.IDocument =
      await restWrapper.CheckInFromFileSystem(
        fullLoadeddocumentForCheckout,
        checkedOutDocumentPath,
        theCheckInParamters
      );
  }
}

async function updateDocumentSection(document: DWRest.IDocument) {
  if (document && document.Sections) {
    const firstSection: DWRest.ISection = document.Sections[0];
    const fullLoadedFirstSection: DWRest.ISection =
      await restWrapper.LoadFullObjectFromPlatform<DWRest.ISection>(
        firstSection
      );
    const updatedSection: DWRest.ISection =
      await restWrapper.EditDocumentSection(
        fullLoadedFirstSection,
        "./upload/sample.txt"
      );
  }
}

async function storeDocument(fileCabinet: DWRest.IFileCabinet) {
  const indexEntries: DWRest.IDocumentIndexField[] = [
    {
      fieldName: "Company",
      item: "Doc Name Test Inc",
      itemElementName: DWRest.ItemChoiceType.String,
    },
    {
      fieldName: "Status",
      item: "Uploaded by REST",
      itemElementName: DWRest.ItemChoiceType.String,
    },
  ];
  const newCreatedDocument: DWRest.IDocument = await restWrapper.UploadDocument(
    fileCabinet,
    indexEntries,
    "./upload/SAMPLE DOCUMENT.pdf"
  );
}

async function storeBigDocumentPlainFile(fileCabinet: DWRest.IFileCabinet) {
  const uploadDocument: DWRest.IChunkUploadDocument =
    new StandardChunkUploadDocument(["./upload/BIG SAMPLE DOCUMENT.pdf"]);

  const newCreatedDocument: DWRest.IDocument =
    await restWrapper.UploadBigDocumentBase(fileCabinet, uploadDocument);

  console.log(newCreatedDocument);
}

async function storeBigDocumentJsonIndex(fileCabinet: DWRest.IFileCabinet) {
  const indexEntries: DWRest.IDocumentIndexField[] = [
    {
      fieldName: "Company",
      item: "Doc Name Big JSON Test Inc only Index",
      itemElementName: DWRest.ItemChoiceType.String,
    },
    {
      fieldName: "Status",
      item: "Uploaded by REST",
      itemElementName: DWRest.ItemChoiceType.String,
    },
  ];

  const newCreatedDocument: DWRest.IDocument =
    await restWrapper.UploadBigDocumentJsonContextTypeSingleSection(
      fileCabinet,
      "./upload/BIG SAMPLE DOCUMENT.pdf",
      indexEntries,
      []
    );

  console.log(newCreatedDocument);
}

async function storeBigDocumentJsonApplicationProperties(
  fileCabinet: DWRest.IFileCabinet
) {
  const applicationProperties: DWRest.IDocumentApplicationProperty[] = [
    {
      Name: "DocuWare",
      Value: "AppValue1 ApplicationProperties",
    },
  ];

  const newCreatedDocument: DWRest.IDocument =
    await restWrapper.UploadBigDocumentJsonContextTypeSingleSection(
      fileCabinet,
      "./upload/BIG SAMPLE DOCUMENT.pdf",
      [],
      applicationProperties
    );

  console.log(newCreatedDocument);
}

async function storeBigDocumentJsonIndexAndApplicationProperties(
  fileCabinet: DWRest.IFileCabinet
) {
  const indexEntries: DWRest.IDocumentIndexField[] = [
    {
      fieldName: "Company",
      item: "Doc Name Big JSON Test Inc Index & ApplicationProperties",
      itemElementName: DWRest.ItemChoiceType.String,
    },
    {
      fieldName: "Status",
      item: "Uploaded by REST",
      itemElementName: DWRest.ItemChoiceType.String,
    },
  ];

  const applicationProperties: DWRest.IDocumentApplicationProperty[] = [
    {
      Name: "DocuWare",
      Value: "AppValue1 Index & ApplicationProperties",
    },
  ];

  const newCreatedDocument: DWRest.IDocument =
    await restWrapper.UploadBigDocumentJsonContextTypeSingleSection(
      fileCabinet,
      "./upload/BIG SAMPLE DOCUMENT.pdf",
      indexEntries,
      applicationProperties
    );

  console.log(newCreatedDocument);
}

async function storeBigDocumentJsonIndexAndApplicationPropertiesMulti(
  fileCabinet: DWRest.IFileCabinet
) {
  const indexEntries: DWRest.IDocumentIndexField[] = [
    {
      fieldName: "Company",
      item: "Doc Name Big JSON Test Inc Index & ApplicationProperties",
      itemElementName: DWRest.ItemChoiceType.String,
    },
    {
      fieldName: "Status",
      item: "Uploaded by REST",
      itemElementName: DWRest.ItemChoiceType.String,
    },
  ];

  const applicationProperties: DWRest.IDocumentApplicationProperty[] = [
    {
      Name: "DocuWare",
      Value: "AppValue1 Index & ApplicationProperties",
    },
  ];

  const newCreatedDocument: DWRest.IDocument =
    await restWrapper.UploadBigDocumentJsonContextTypMultipleSection(
      fileCabinet,
      ["./upload/BIG SAMPLE DOCUMENT.pdf", "./upload/SAMPLE DOCUMENT.pdf"],
      indexEntries,
      applicationProperties
    );

  console.log(newCreatedDocument);
}

async function storeBigDocumentJsonIndexAndMultiApplicationPropertiesMultiSection(
  fileCabinet: DWRest.IFileCabinet
) {
  const indexEntries: DWRest.IDocumentIndexField[] = [
    {
      fieldName: "Company",
      item: "0815 Doc Name Big JSON Test Inc Index & ApplicationProperties",
      itemElementName: DWRest.ItemChoiceType.String,
    },
    {
      fieldName: "Status",
      item: "Uploaded by REST",
      itemElementName: DWRest.ItemChoiceType.String,
    },
  ];

  // The sections with the application properties are set in the same order like the file path
  // For that example './upload/BIG SAMPLE DOCUMENT.pdf' get 'DocuWare1' : 'Value 1'
  // './upload/SAMPLE DOCUMENT.pdf' get 'DocuWare2' : 'Value 2'
  const inputSection: DWRest.IInputSection[] = [
    {
      applicationProperties: [
        {
          Name: "DocuWare1",
          Value: "Value 1",
        },
      ],
    },
    {
      applicationProperties: [
        {
          Name: "DocuWare2",
          Value: "Value 2",
        },
      ],
    },
  ];

  // Set the files path
  const filesPath: string[] = [
    "./upload/BIG SAMPLE DOCUMENT.pdf",
    "./upload/SAMPLE DOCUMENT.pdf",
  ];

  // Create chunk upload document object
  const chunkUploadDocument: DWRest.IChunkUploadDocument =
    new StandardChunkUploadDocument(filesPath, indexEntries, inputSection);

  const newCreatedDocument: DWRest.IDocument =
    await restWrapper.UploadBigDocumentJson(fileCabinet, chunkUploadDocument);

  console.log(newCreatedDocument);
}

async function downloadDocument(specialDocument: DWRest.IDocument) {
  const fullLoadedDocument: DWRest.IDocument =
    await restWrapper.LoadFullObjectFromPlatform<DWRest.IDocument>(
      specialDocument
    );
  const downloadPath: string = await restWrapper.DownloadDocument(
    fullLoadedDocument,
    false,
    DWRest.TargetFileType.Auto
  );

  console.log(downloadPath);
}

async function updateIndexEntry(
  specialDocument: DWRest.IDocument
): Promise<DWRest.IFieldList> {
  const customFieldOfDocument: DWRest.IDocumentIndexField = getFieldByName(
    specialDocument,
    "Status"
  ); //Status is a custom field in filecabinet
  //Update field value
  customFieldOfDocument.item = "Booked!";
  return await restWrapper.UpdateDocumentIndexValues(specialDocument, {
    Field: [customFieldOfDocument],
  });
}

async function doSearch(
  fileCabinet: DWRest.IFileCabinet,
  firstDialog: DWRest.IDialog
): Promise<DWRest.IDocumentsQueryResult> {
  const dialogExpression = new DialogExpression(DWRest.Operation.And, [
    new DialogExpressionCondition("COMPANY", [
      "Home Improvement",
      "Peters Engineering",
    ]),
    new DialogExpressionCondition("DOCUMENT_TYPE", ["Invoice out"]),
  ]);
  const query: string = await restWrapper.GetQueryUrlFromFileCabinet(
    fileCabinet,
    dialogExpression,
    firstDialog.Id,
    firstDialog.Query.Fields,
    "COMPANY",
    DWRest.SortOrder.Desc
  );
  return await restWrapper.GetQueryResults(query);
}

async function getFirstDialogOfType(
  fileCabinet: DWRest.IFileCabinet,
  dType: DWRest.DialogType
): Promise<DWRest.IDialog> {
  const dialogs: DWRest.IDialog[] =
    await restWrapper.GetDedicatedDialogsFromFileCabinet(fileCabinet, dType);
  return await restWrapper.LoadFullObjectFromPlatform<DWRest.IDialog>(
    dialogs[0]
  );
}

async function getPagedDocumentResults(fileCabinet: DWRest.IFileCabinet) {
  const documents: DWRest.IDocument[] =
    await restWrapper.GetDocumentsFromFileCabinet(fileCabinet); //Try to avoid the get all at once
  const first1DocumentsResult: DWRest.IDocumentsQueryResult =
    await restWrapper.GetDocumentQueryResultForSpecifiedCountFromFileCabinet(
      fileCabinet,
      1
    );
  const next1Documents: DWRest.IDocumentsQueryResult =
    await restWrapper.GetNextResultFromDocumentQueryResult(
      first1DocumentsResult
    );
}

async function updateDocumentTableField(
  document: DWRest.IDocument,
  tablefield: DWRest.IDocumentIndexField
) {
  await restWrapper.UpdateDocumentIndexValues(document, {
    Field: [tablefield],
  });
}

/**
 * Returns special field by name
 * Also proofs if system field is tried to manipulate
 *
 * @param {DWRest.IDocument} document
 * @param {string} fieldName
 * @returns {DWRest.IDocumentIndexField}
 */
function getFieldByName(
  document: DWRest.IDocument,
  fieldName: string
): DWRest.IDocumentIndexField {
  if (Object.keys(document).length === 0) {
    throw new Error(`document is empty!`);
  }

  if (document.Fields?.length === 0) {
    throw new Error(`Fields is empty!`);
  }

  const field = document.Fields?.find(
    (f) => f.fieldName.toLowerCase() === fieldName.toLowerCase()
  );

  if (!field) {
    throw new Error(
      `Field '${fieldName}' does not exist on document '${document.Id}'!`
    );
  }

  return field;
}

/**
 * Traces error
 *
 * @param {Error} error
 */
function traceError(error: Error) {
  console.error(
    "Error message:\n\r" + error.message + "\n\rError Stack:\n\r" + error.stack
  );
}
