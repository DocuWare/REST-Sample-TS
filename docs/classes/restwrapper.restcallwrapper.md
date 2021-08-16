[Typedoc project reference documentation](../README.md) / [restWrapper](../modules/restwrapper.md) / RestCallWrapper

# Class: RestCallWrapper

[restWrapper](../modules/restwrapper.md).RestCallWrapper

Sample wrapper for DocuWare REST API

## Table of contents

### Constructors

- [constructor](restwrapper.restcallwrapper.md#constructor)

### Properties

- [docuWare\_request\_config](restwrapper.restcallwrapper.md#docuware_request_config)
- [platformRoot](restwrapper.restcallwrapper.md#platformroot)

### Methods

- [AddApplicationProperties](restwrapper.restcallwrapper.md#addapplicationproperties)
- [AssignUserToGroup](restwrapper.restcallwrapper.md#assignusertogroup)
- [AssignUserToRole](restwrapper.restcallwrapper.md#assignusertorole)
- [BuildTimeSpanString](restwrapper.restcallwrapper.md#buildtimespanstring)
- [CheckInFromFileSystem](restwrapper.restcallwrapper.md#checkinfromfilesystem)
- [CheckoutToFileSystem](restwrapper.restcallwrapper.md#checkouttofilesystem)
- [ConfirmWorkflowTask](restwrapper.restcallwrapper.md#confirmworkflowtask)
- [CreateDirectoryIfNotExist](restwrapper.restcallwrapper.md#createdirectoryifnotexist)
- [CreateLogonModel](restwrapper.restcallwrapper.md#createlogonmodel)
- [CreateNewDocumentContent](restwrapper.restcallwrapper.md#createnewdocumentcontent)
- [CreateUser](restwrapper.restcallwrapper.md#createuser)
- [DeleteDocumentLock](restwrapper.restcallwrapper.md#deletedocumentlock)
- [DivideDocument](restwrapper.restcallwrapper.md#dividedocument)
- [DownloadDocument](restwrapper.restcallwrapper.md#downloaddocument)
- [DownloadFile](restwrapper.restcallwrapper.md#downloadfile)
- [EditDocumentSection](restwrapper.restcallwrapper.md#editdocumentsection)
- [ExportDWXArchive](restwrapper.restcallwrapper.md#exportdwxarchive)
- [GetAllDialogsFromFileCabinet](restwrapper.restcallwrapper.md#getalldialogsfromfilecabinet)
- [GetAllFileCabinetsWithoutDocumentTrays](restwrapper.restcallwrapper.md#getallfilecabinetswithoutdocumenttrays)
- [GetControllerWorkflows](restwrapper.restcallwrapper.md#getcontrollerworkflows)
- [GetDedicatedDialogsFromFileCabinet](restwrapper.restcallwrapper.md#getdedicateddialogsfromfilecabinet)
- [GetDefaultDocumentTray](restwrapper.restcallwrapper.md#getdefaultdocumenttray)
- [GetDialogLink](restwrapper.restcallwrapper.md#getdialoglink)
- [GetDocumentByDocID](restwrapper.restcallwrapper.md#getdocumentbydocid)
- [GetDocumentQueryResultForSpecifiedCountFromFileCabinet](restwrapper.restcallwrapper.md#getdocumentqueryresultforspecifiedcountfromfilecabinet)
- [GetDocumentsFromFileCabinet](restwrapper.restcallwrapper.md#getdocumentsfromfilecabinet)
- [GetFileCabinet](restwrapper.restcallwrapper.md#getfilecabinet)
- [GetFileCabinets](restwrapper.restcallwrapper.md#getfilecabinets)
- [GetGroupByName](restwrapper.restcallwrapper.md#getgroupbyname)
- [GetLink](restwrapper.restcallwrapper.md#getlink)
- [GetLinkFromModel](restwrapper.restcallwrapper.md#getlinkfrommodel)
- [GetNextResultFromDocumentQueryResult](restwrapper.restcallwrapper.md#getnextresultfromdocumentqueryresult)
- [GetOrganization](restwrapper.restcallwrapper.md#getorganization)
- [GetOrganizations](restwrapper.restcallwrapper.md#getorganizations)
- [GetPageByNumber](restwrapper.restcallwrapper.md#getpagebynumber)
- [GetQueryResults](restwrapper.restcallwrapper.md#getqueryresults)
- [GetQueryUrlFromFileCabinet](restwrapper.restcallwrapper.md#getqueryurlfromfilecabinet)
- [GetRoleByName](restwrapper.restcallwrapper.md#getrolebyname)
- [GetWorkflowTasks](restwrapper.restcallwrapper.md#getworkflowtasks)
- [GetWorkflows](restwrapper.restcallwrapper.md#getworkflows)
- [ImportDWXArchive](restwrapper.restcallwrapper.md#importdwxarchive)
- [LoadFullObjectFromPlatform](restwrapper.restcallwrapper.md#loadfullobjectfromplatform)
- [LockDocument](restwrapper.restcallwrapper.md#lockdocument)
- [Logon](restwrapper.restcallwrapper.md#logon)
- [MergeDocument](restwrapper.restcallwrapper.md#mergedocument)
- [PlaceAStampWithBestPosition](restwrapper.restcallwrapper.md#placeastampwithbestposition)
- [PlaceAnnotation](restwrapper.restcallwrapper.md#placeannotation)
- [RemoveUserFromGroup](restwrapper.restcallwrapper.md#removeuserfromgroup)
- [RemoveUserFromRole](restwrapper.restcallwrapper.md#removeuserfromrole)
- [TransferFromDocumentTrayToFileCabinet](restwrapper.restcallwrapper.md#transferfromdocumenttraytofilecabinet)
- [TransferFromFileCabinetToFileCabinet](restwrapper.restcallwrapper.md#transferfromfilecabinettofilecabinet)
- [UpdateDocumentIndexValues](restwrapper.restcallwrapper.md#updatedocumentindexvalues)
- [UploadBigDocumentBase](restwrapper.restcallwrapper.md#uploadbigdocumentbase)
- [UploadBigDocumentJson](restwrapper.restcallwrapper.md#uploadbigdocumentjson)
- [UploadBigDocumentJsonContextTypMultipleSection](restwrapper.restcallwrapper.md#uploadbigdocumentjsoncontexttypmultiplesection)
- [UploadBigDocumentJsonContextTypeSingleSection](restwrapper.restcallwrapper.md#uploadbigdocumentjsoncontexttypesinglesection)
- [UploadDocument](restwrapper.restcallwrapper.md#uploaddocument)

## Constructors

### constructor

• **new RestCallWrapper**(`rootOfPlatform`, `port?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootOfPlatform` | `string` |
| `port?` | `number` |

#### Defined in

[restWrapper.ts:29](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L29)

## Properties

### docuWare\_request\_config

• **docuWare\_request\_config**: `RequestPromiseOptions`

#### Defined in

[restWrapper.ts:29](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L29)

___

### platformRoot

• **platformRoot**: `string`

Set root without /DocuWare/Platform because the rel links of platform responses will contain it

#### Defined in

[restWrapper.ts:28](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L28)

## Methods

### AddApplicationProperties

▸ **AddApplicationProperties**(`document`, `applicationProperties`): `Promise`<[`IDocumentApplicationProperties`](../interfaces/types_dw_rest.idocumentapplicationproperties.md)\>

Add application properties, those properties can be used to save custom meta data

#### Parameters

| Name | Type |
| :------ | :------ |
| `document` | [`IDocument`](../interfaces/types_dw_rest.idocument.md) |
| `applicationProperties` | [`IDocumentApplicationProperty`](../interfaces/types_dw_rest.idocumentapplicationproperty.md)[] |

#### Returns

`Promise`<[`IDocumentApplicationProperties`](../interfaces/types_dw_rest.idocumentapplicationproperties.md)\>

#### Defined in

[restWrapper.ts:1473](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1473)

___

### AssignUserToGroup

▸ **AssignUserToGroup**(`user`, `group`): `Promise`<`void`\>

Assign a dedicated user to a group

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`IUser`](../interfaces/types_dw_rest.iuser.md) |
| `group` | [`IGroup`](../interfaces/types_dw_rest.igroup.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[restWrapper.ts:1230](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1230)

___

### AssignUserToRole

▸ **AssignUserToRole**(`user`, `role`): `Promise`<`void`\>

Assign a dedicated user to a role

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`IUser`](../interfaces/types_dw_rest.iuser.md) |
| `role` | [`IRole`](../interfaces/types_dw_rest.irole.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[restWrapper.ts:1203](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1203)

___

### BuildTimeSpanString

▸ `Private` **BuildTimeSpanString**(`seconds`): `any`

Helper method for getting a TimeSpan string

#### Parameters

| Name | Type |
| :------ | :------ |
| `seconds` | `number` |

#### Returns

`any`

#### Defined in

[restWrapper.ts:1585](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1585)

___

### CheckInFromFileSystem

▸ **CheckInFromFileSystem**(`fullLoadedDocument`, `pathToFile`, `checkinParameters`): `Promise`<[`IDocument`](../interfaces/types_dw_rest.idocument.md)\>

Check in a checked out document

#### Parameters

| Name | Type |
| :------ | :------ |
| `fullLoadedDocument` | [`IDocument`](../interfaces/types_dw_rest.idocument.md) |
| `pathToFile` | `string` |
| `checkinParameters` | [`ICheckInActionParameters`](../interfaces/types_dw_rest.icheckinactionparameters.md) |

#### Returns

`Promise`<[`IDocument`](../interfaces/types_dw_rest.idocument.md)\>

#### Defined in

[restWrapper.ts:872](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L872)

___

### CheckoutToFileSystem

▸ **CheckoutToFileSystem**(`fullLoadedDocument`): `Promise`<`string`\>

Check out a document to the file system

#### Parameters

| Name | Type |
| :------ | :------ |
| `fullLoadedDocument` | [`IDocument`](../interfaces/types_dw_rest.idocument.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[restWrapper.ts:844](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L844)

___

### ConfirmWorkflowTask

▸ **ConfirmWorkflowTask**(`task`): `Promise`<`void`\>

Confirms a tasks, this example takes the first text form and confirms with demo string

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`IWorkflowTask`](../interfaces/types_dw_rest.iworkflowtask.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[restWrapper.ts:1538](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1538)

___

### CreateDirectoryIfNotExist

▸ `Private` **CreateDirectoryIfNotExist**(`path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`

#### Defined in

[restWrapper.ts:1674](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1674)

___

### CreateLogonModel

▸ **CreateLogonModel**(`user`, `pw`, `org`, `hostID`): [`ILogonModel`](../interfaces/types_dw_rest.ilogonmodel.md)

Helper function for preparing the logon

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `pw` | `string` |
| `org` | `string` |
| `hostID` | `string` |

#### Returns

[`ILogonModel`](../interfaces/types_dw_rest.ilogonmodel.md)

#### Defined in

[restWrapper.ts:58](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L58)

___

### CreateNewDocumentContent

▸ **CreateNewDocumentContent**(`indexFields`, `applicationProperties`): `Promise`<[`IDocument`](../interfaces/types_dw_rest.idocument.md)\>

Creates a new document with the needed keys depending on the given parameters

**`memberof`** RestCallWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexFields` | [`IDocumentIndexField`](../interfaces/types_dw_rest.idocumentindexfield.md)[] |
| `applicationProperties` | [`IDocumentApplicationProperty`](../interfaces/types_dw_rest.idocumentapplicationproperty.md)[] |

#### Returns

`Promise`<[`IDocument`](../interfaces/types_dw_rest.idocument.md)\>

#### Defined in

[restWrapper.ts:657](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L657)

___

### CreateUser

▸ **CreateUser**(`organization`, `newUser`): `Promise`<[`IUser`](../interfaces/types_dw_rest.iuser.md)\>

Create a new user

#### Parameters

| Name | Type |
| :------ | :------ |
| `organization` | [`IOrganization`](../interfaces/types_dw_rest.iorganization.md) |
| `newUser` | [`INewUser`](../interfaces/types_dw_rest.inewuser.md) |

#### Returns

`Promise`<[`IUser`](../interfaces/types_dw_rest.iuser.md)\>

#### Defined in

[restWrapper.ts:1178](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1178)

___

### DeleteDocumentLock

▸ **DeleteDocumentLock**(`document`): `Promise`<`void`\>

Remove a lock from a document

#### Parameters

| Name | Type |
| :------ | :------ |
| `document` | [`IDocument`](../interfaces/types_dw_rest.idocument.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[restWrapper.ts:1460](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1460)

___

### DivideDocument

▸ **DivideDocument**(`document`, `operation`): `Promise`<`any`\>

Divide a document

#### Parameters

| Name | Type |
| :------ | :------ |
| `document` | [`IDocument`](../interfaces/types_dw_rest.idocument.md) |
| `operation` | [`ContentDivideOperation`](../enums/types_dw_rest.contentdivideoperation.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[restWrapper.ts:1117](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1117)

___

### DownloadDocument

▸ **DownloadDocument**(`fullLoadedDocument`, `includeAnnotations`, `targetFileType`): `Promise`<`string`\>

Download a single document

#### Parameters

| Name | Type |
| :------ | :------ |
| `fullLoadedDocument` | [`IDocument`](../interfaces/types_dw_rest.idocument.md) |
| `includeAnnotations` | `boolean` |
| `targetFileType` | [`TargetFileType`](../enums/types_dw_rest.targetfiletype.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[restWrapper.ts:473](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L473)

___

### DownloadFile

▸ `Private` **DownloadFile**(`request`, `reject`, `resolve`): `Promise`<`void`\>

Helper method to download file from response

**`memberof`** RestCallWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `RequestPromise`<`any`\> |
| `reject` | (`reason?`: `any`) => `void` |
| `resolve` | (`value?`: `any`) => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

[restWrapper.ts:1600](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1600)

___

### EditDocumentSection

▸ **EditDocumentSection**(`fullLoadedSection`, `pathToFileForReplace`): `Promise`<[`ISection`](../interfaces/types_dw_rest.isection.md)\>

Manipulate a document and upload it again
In this example we make a zip out of it

#### Parameters

| Name | Type |
| :------ | :------ |
| `fullLoadedSection` | [`ISection`](../interfaces/types_dw_rest.isection.md) |
| `pathToFileForReplace` | `string` |

#### Returns

`Promise`<[`ISection`](../interfaces/types_dw_rest.isection.md)\>

#### Defined in

[restWrapper.ts:809](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L809)

___

### ExportDWXArchive

▸ **ExportDWXArchive**(`documentOrDocuments`, `exportSettings`): `Promise`<`string`\>

Import a DWX. DWX is the exchange format of DocuWare

#### Parameters

| Name | Type |
| :------ | :------ |
| `documentOrDocuments` | [`IDocument`](../interfaces/types_dw_rest.idocument.md) \| [`IDocumentsQueryResult`](../interfaces/types_dw_rest.idocumentsqueryresult.md) |
| `exportSettings` | [`IExportSettings`](../interfaces/types_dw_rest.iexportsettings.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[restWrapper.ts:1407](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1407)

___

### GetAllDialogsFromFileCabinet

▸ **GetAllDialogsFromFileCabinet**(`fileCabinet`): `Promise`<[`IDialogsResponse`](../interfaces/types_dw_rest.idialogsresponse.md)\>

Returns all kind of dialogs of a fileCabinet

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileCabinet` | [`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md) |

#### Returns

`Promise`<[`IDialogsResponse`](../interfaces/types_dw_rest.idialogsresponse.md)\>

#### Defined in

[restWrapper.ts:307](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L307)

___

### GetAllFileCabinetsWithoutDocumentTrays

▸ **GetAllFileCabinetsWithoutDocumentTrays**(`fileCabinets`): [`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md)[]

Filters list of FileCabinet Objects and returns only FileCabinets
Info: FileCabinet Object can be a document tray OR a FileCabinet

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileCabinets` | [`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md)[] |

#### Returns

[`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md)[]

#### Defined in

[restWrapper.ts:190](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L190)

___

### GetControllerWorkflows

▸ **GetControllerWorkflows**(`organization`): `Promise`<[`IWorkflows`](../interfaces/types_dw_rest.iworkflows.md)\>

Get controller workflows

#### Parameters

| Name | Type |
| :------ | :------ |
| `organization` | [`IOrganization`](../interfaces/types_dw_rest.iorganization.md) |

#### Returns

`Promise`<[`IWorkflows`](../interfaces/types_dw_rest.iworkflows.md)\>

#### Defined in

[restWrapper.ts:1509](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1509)

___

### GetDedicatedDialogsFromFileCabinet

▸ **GetDedicatedDialogsFromFileCabinet**(`fileCabinet`, `dialogType`): `Promise`<[`IDialog`](../interfaces/types_dw_rest.idialog.md)[]\>

Returns a list of specified dialogs

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileCabinet` | [`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md) |
| `dialogType` | [`DialogType`](../enums/types_dw_rest.dialogtype.md) |

#### Returns

`Promise`<[`IDialog`](../interfaces/types_dw_rest.idialog.md)[]\>

#### Defined in

[restWrapper.ts:349](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L349)

___

### GetDefaultDocumentTray

▸ **GetDefaultDocumentTray**(`fileCabinets`): `undefined` \| [`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md)

  Filters list of FileCabinet Objects and returns only document trays
Info: FileCabinet Object can be a document tray OR a FileCabinet

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileCabinets` | [`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md)[] |

#### Returns

`undefined` \| [`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md)

#### Defined in

[restWrapper.ts:203](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L203)

___

### GetDialogLink

▸ **GetDialogLink**(`fileCabinet`, `dialogType`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileCabinet` | [`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md) |
| `dialogType` | [`DialogType`](../enums/types_dw_rest.dialogtype.md) |

#### Returns

`string`

#### Defined in

[restWrapper.ts:315](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L315)

___

### GetDocumentByDocID

▸ **GetDocumentByDocID**(`fileCabinet`, `docId`, `fullLoad?`): `Promise`<[`IDocument`](../interfaces/types_dw_rest.idocument.md)\>

Get a document by DocId

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fileCabinet` | [`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md) | `undefined` |
| `docId` | `number` | `undefined` |
| `fullLoad` | `boolean` | `false` |

#### Returns

`Promise`<[`IDocument`](../interfaces/types_dw_rest.idocument.md)\>

#### Defined in

[restWrapper.ts:240](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L240)

___

### GetDocumentQueryResultForSpecifiedCountFromFileCabinet

▸ **GetDocumentQueryResultForSpecifiedCountFromFileCabinet**(`fileCabinet`, `count`): `Promise`<[`IDocumentsQueryResult`](../interfaces/types_dw_rest.idocumentsqueryresult.md)\>

Get the first x documents from a file cabinet

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileCabinet` | [`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md) |
| `count` | `number` |

#### Returns

`Promise`<[`IDocumentsQueryResult`](../interfaces/types_dw_rest.idocumentsqueryresult.md)\>

#### Defined in

[restWrapper.ts:268](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L268)

___

### GetDocumentsFromFileCabinet

▸ **GetDocumentsFromFileCabinet**(`fileCabinet`): `Promise`<[`IDocument`](../interfaces/types_dw_rest.idocument.md)[]\>

Returns documents of FileCabinet without criteria
Info: Is restricted to the first 1000 per default

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileCabinet` | [`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md) |

#### Returns

`Promise`<[`IDocument`](../interfaces/types_dw_rest.idocument.md)[]\>

#### Defined in

[restWrapper.ts:219](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L219)

___

### GetFileCabinet

▸ **GetFileCabinet**(`fcGuid`): `Promise`<[`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md)\>

Returns a special FileCabinet by GUID

#### Parameters

| Name | Type |
| :------ | :------ |
| `fcGuid` | `string` |

#### Returns

`Promise`<[`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md)\>

#### Defined in

[restWrapper.ts:174](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L174)

___

### GetFileCabinets

▸ **GetFileCabinets**(`org`): `Promise`<[`IFileCabinets`](../interfaces/types_dw_rest.ifilecabinets.md)\>

Returns list of FileCabinets

#### Parameters

| Name | Type |
| :------ | :------ |
| `org` | [`IOrganization`](../interfaces/types_dw_rest.iorganization.md) |

#### Returns

`Promise`<[`IFileCabinets`](../interfaces/types_dw_rest.ifilecabinets.md)\>

#### Defined in

[restWrapper.ts:161](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L161)

___

### GetGroupByName

▸ **GetGroupByName**(`organization`, `name`): `Promise`<[`IGroup`](../interfaces/types_dw_rest.igroup.md)\>

Get a group by it's name

#### Parameters

| Name | Type |
| :------ | :------ |
| `organization` | [`IOrganization`](../interfaces/types_dw_rest.iorganization.md) |
| `name` | `string` |

#### Returns

`Promise`<[`IGroup`](../interfaces/types_dw_rest.igroup.md)\>

#### Defined in

[restWrapper.ts:1303](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1303)

___

### GetLink

▸ `Private` **GetLink**(`linkModel`, `linkName`): `string`

Helper method to check if link exists or not

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkModel` | [`ILinkModel`](../interfaces/types_dw_rest.ilinkmodel.md) |
| `linkName` | `string` |

#### Returns

`string`

#### Defined in

[restWrapper.ts:1640](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1640)

___

### GetLinkFromModel

▸ `Private` **GetLinkFromModel**(`linkModel`, `linkName`): ``null`` \| `string`

Get link from object by name

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkModel` | [`ILinkModel`](../interfaces/types_dw_rest.ilinkmodel.md) |
| `linkName` | `string` |

#### Returns

``null`` \| `string`

#### Defined in

[restWrapper.ts:1658](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1658)

___

### GetNextResultFromDocumentQueryResult

▸ **GetNextResultFromDocumentQueryResult**(`documentQueryResult`): `Promise`<[`IDocumentsQueryResult`](../interfaces/types_dw_rest.idocumentsqueryresult.md)\>

Returns the next 'page' of document results
Info: Be careful, the next result will contain same amount of results like the provided {DWRest.DocumentsQueryResult}!
So if you searched for 2 results you will only get another 2!

#### Parameters

| Name | Type |
| :------ | :------ |
| `documentQueryResult` | [`IDocumentsQueryResult`](../interfaces/types_dw_rest.idocumentsqueryresult.md) |

#### Returns

`Promise`<[`IDocumentsQueryResult`](../interfaces/types_dw_rest.idocumentsqueryresult.md)\>

#### Defined in

[restWrapper.ts:287](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L287)

___

### GetOrganization

▸ **GetOrganization**(): `Promise`<[`IOrganization`](../interfaces/types_dw_rest.iorganization.md)\>

Returns your Organization

#### Returns

`Promise`<[`IOrganization`](../interfaces/types_dw_rest.iorganization.md)\>

#### Defined in

[restWrapper.ts:128](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L128)

___

### GetOrganizations

▸ **GetOrganizations**(`logonResponse`): `Promise`<[`IOrganizations`](../interfaces/types_dw_rest.iorganizations.md)\>

Returns all organizations

#### Parameters

| Name | Type |
| :------ | :------ |
| `logonResponse` | [`ILogonResponse`](../interfaces/types_dw_rest.ilogonresponse.md) |

#### Returns

`Promise`<[`IOrganizations`](../interfaces/types_dw_rest.iorganizations.md)\>

#### Defined in

[restWrapper.ts:141](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L141)

___

### GetPageByNumber

▸ **GetPageByNumber**(`fullLoadedSection`, `pageNumber`, `fullLoad?`): `Promise`<[`IPage`](../interfaces/types_dw_rest.ipage.md)\>

Get a single page by section and page number

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fullLoadedSection` | [`ISection`](../interfaces/types_dw_rest.isection.md) | `undefined` |
| `pageNumber` | `number` | `undefined` |
| `fullLoad` | `boolean` | `false` |

#### Returns

`Promise`<[`IPage`](../interfaces/types_dw_rest.ipage.md)\>

#### Defined in

[restWrapper.ts:940](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L940)

___

### GetQueryResults

▸ **GetQueryResults**(`queryUrl`): `Promise`<[`IDocumentsQueryResult`](../interfaces/types_dw_rest.idocumentsqueryresult.md)\>

Send query to get results

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryUrl` | `string` |

#### Returns

`Promise`<[`IDocumentsQueryResult`](../interfaces/types_dw_rest.idocumentsqueryresult.md)\>

#### Defined in

[restWrapper.ts:440](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L440)

___

### GetQueryUrlFromFileCabinet

▸ **GetQueryUrlFromFileCabinet**(`fileCabinet`, `dialogExpression`, `dialogId`, `fields`, `fieldToSort`, `sortOrder`): `Promise`<`string`\>

Get a query build by DocuWare Platform for later execution

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileCabinet` | [`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md) |
| `dialogExpression` | [`IDialogExpression`](../interfaces/types_dw_rest.idialogexpression.md) |
| `dialogId` | `string` |
| `fields` | `string`[] |
| `fieldToSort` | `string` |
| `sortOrder` | [`SortOrder`](../enums/types_dw_rest.sortorder.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[restWrapper.ts:394](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L394)

___

### GetRoleByName

▸ **GetRoleByName**(`organization`, `name`): `Promise`<[`IRole`](../interfaces/types_dw_rest.irole.md)\>

Get a role by it's name

#### Parameters

| Name | Type |
| :------ | :------ |
| `organization` | [`IOrganization`](../interfaces/types_dw_rest.iorganization.md) |
| `name` | `string` |

#### Returns

`Promise`<[`IRole`](../interfaces/types_dw_rest.irole.md)\>

#### Defined in

[restWrapper.ts:1335](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1335)

___

### GetWorkflowTasks

▸ **GetWorkflowTasks**(`workflow`): `Promise`<[`IWorkflowTasks`](../interfaces/types_dw_rest.iworkflowtasks.md)\>

Get workflow tasks for dedicated workflow

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflow` | [`IWorkflow`](../interfaces/types_dw_rest.iworkflow.md) |

#### Returns

`Promise`<[`IWorkflowTasks`](../interfaces/types_dw_rest.iworkflowtasks.md)\>

#### Defined in

[restWrapper.ts:1526](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1526)

___

### GetWorkflows

▸ **GetWorkflows**(`organization`): `Promise`<[`IWorkflows`](../interfaces/types_dw_rest.iworkflows.md)\>

Get workflows (The workflow needs to be triggered at least once before you'll get return values)

#### Parameters

| Name | Type |
| :------ | :------ |
| `organization` | [`IOrganization`](../interfaces/types_dw_rest.iorganization.md) |

#### Returns

`Promise`<[`IWorkflows`](../interfaces/types_dw_rest.iworkflows.md)\>

#### Defined in

[restWrapper.ts:1497](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1497)

___

### ImportDWXArchive

▸ **ImportDWXArchive**(`pathOfDWX`, `fileCabinet`, `importSettings`): `Promise`<[`IImportResult`](../interfaces/types_dw_rest.iimportresult.md)\>

Import a dwx archive. DWX is the exchange format of DocuWare

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathOfDWX` | `string` |
| `fileCabinet` | [`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md) |
| `importSettings` | [`IImportSettings`](../interfaces/types_dw_rest.iimportsettings.md) |

#### Returns

`Promise`<[`IImportResult`](../interfaces/types_dw_rest.iimportresult.md)\>

#### Defined in

[restWrapper.ts:1368](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1368)

___

### LoadFullObjectFromPlatform

▸ **LoadFullObjectFromPlatform**<`T`\>(`notYetFullLoadedObject`): `Promise`<`T`\>

Gets the 'self' link of provided object and retrieves the full load of properties and data

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notYetFullLoadedObject` | [`ILinkModel`](../interfaces/types_dw_rest.ilinkmodel.md) |

#### Returns

`Promise`<`T`\>

#### Defined in

[restWrapper.ts:370](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L370)

___

### LockDocument

▸ **LockDocument**(`document`, `timeToLockInSeconds`): `Promise`<`void`\>

Do explicit lock of a document

#### Parameters

| Name | Type |
| :------ | :------ |
| `document` | [`IDocument`](../interfaces/types_dw_rest.idocument.md) |
| `timeToLockInSeconds` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[restWrapper.ts:1437](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1437)

___

### Logon

▸ **Logon**(`model`): `Promise`<[`ILogonResponse`](../interfaces/types_dw_rest.ilogonresponse.md)\>

Handles logon and sets cookies to 'global' {RequestPromiseOptions}

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`ILogonModel`](../interfaces/types_dw_rest.ilogonmodel.md) |

#### Returns

`Promise`<[`ILogonResponse`](../interfaces/types_dw_rest.ilogonresponse.md)\>

#### Defined in

[restWrapper.ts:81](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L81)

___

### MergeDocument

▸ **MergeDocument**(`fileCabinet`, `docIds`, `operation`): `Promise`<[`IDocument`](../interfaces/types_dw_rest.idocument.md)\>

Merges a document
Info: Staple is only supported for document trays

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileCabinet` | [`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md) |
| `docIds` | `number`[] |
| `operation` | [`ContentMergeOperation`](../enums/types_dw_rest.contentmergeoperation.md) |

#### Returns

`Promise`<[`IDocument`](../interfaces/types_dw_rest.idocument.md)\>

#### Defined in

[restWrapper.ts:1141](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1141)

___

### PlaceAStampWithBestPosition

▸ **PlaceAStampWithBestPosition**(`page`, `stampPlacement`): `Promise`<`void`\>

Gets the best position for a stamp an paces it

#### Parameters

| Name | Type |
| :------ | :------ |
| `page` | [`IPage`](../interfaces/types_dw_rest.ipage.md) |
| `stampPlacement` | [`IStampPlacement`](../interfaces/types_dw_rest.istampplacement.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[restWrapper.ts:986](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L986)

___

### PlaceAnnotation

▸ **PlaceAnnotation**(`page`, `annotation`): `Promise`<[`IAnnotation`](../interfaces/types_dw_rest.iannotation.md)\>

Place an annotation to a single page

#### Parameters

| Name | Type |
| :------ | :------ |
| `page` | [`IPage`](../interfaces/types_dw_rest.ipage.md) |
| `annotation` | [`IAnnotation`](../interfaces/types_dw_rest.iannotation.md) |

#### Returns

`Promise`<[`IAnnotation`](../interfaces/types_dw_rest.iannotation.md)\>

#### Defined in

[restWrapper.ts:1096](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1096)

___

### RemoveUserFromGroup

▸ **RemoveUserFromGroup**(`user`, `groupId`): `Promise`<`void`\>

 Remove a group from a user

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`IUser`](../interfaces/types_dw_rest.iuser.md) |
| `groupId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[restWrapper.ts:1280](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1280)

___

### RemoveUserFromRole

▸ **RemoveUserFromRole**(`user`, `roleId`): `Promise`<`void`\>

Remove a role from a user

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`IUser`](../interfaces/types_dw_rest.iuser.md) |
| `roleId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[restWrapper.ts:1257](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1257)

___

### TransferFromDocumentTrayToFileCabinet

▸ **TransferFromDocumentTrayToFileCabinet**(`docIds`, `basketId`, `fileCabinet`, `keepSource`): `Promise`<[`IDocumentsQueryResult`](../interfaces/types_dw_rest.idocumentsqueryresult.md)\>

Transfer a number documents from document tray to FileCabinet

#### Parameters

| Name | Type |
| :------ | :------ |
| `docIds` | `number`[] |
| `basketId` | `string` |
| `fileCabinet` | [`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md) |
| `keepSource` | `boolean` |

#### Returns

`Promise`<[`IDocumentsQueryResult`](../interfaces/types_dw_rest.idocumentsqueryresult.md)\>

#### Defined in

[restWrapper.ts:1022](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1022)

___

### TransferFromFileCabinetToFileCabinet

▸ **TransferFromFileCabinetToFileCabinet**(`documents`, `sourceFileCabinetId`, `destinationFileCabinet`, `keepSource`): `Promise`<[`IDocumentsQueryResult`](../interfaces/types_dw_rest.idocumentsqueryresult.md)\>

Transfer a document from FileCabinet to another (or the same) FileCabinet

#### Parameters

| Name | Type |
| :------ | :------ |
| `documents` | [`IDocument`](../interfaces/types_dw_rest.idocument.md)[] |
| `sourceFileCabinetId` | `string` |
| `destinationFileCabinet` | [`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md) |
| `keepSource` | `boolean` |

#### Returns

`Promise`<[`IDocumentsQueryResult`](../interfaces/types_dw_rest.idocumentsqueryresult.md)\>

#### Defined in

[restWrapper.ts:1058](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L1058)

___

### UpdateDocumentIndexValues

▸ **UpdateDocumentIndexValues**(`document`, `fieldsToUpdate`): `Promise`<[`IFieldList`](../interfaces/types_dw_rest.ifieldlist.md)\>

Update index values of specified document

#### Parameters

| Name | Type |
| :------ | :------ |
| `document` | [`IDocument`](../interfaces/types_dw_rest.idocument.md) |
| `fieldsToUpdate` | [`IFieldList`](../interfaces/types_dw_rest.ifieldlist.md) |

#### Returns

`Promise`<[`IFieldList`](../interfaces/types_dw_rest.ifieldlist.md)\>

#### Defined in

[restWrapper.ts:451](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L451)

___

### UploadBigDocumentBase

▸ **UploadBigDocumentBase**(`fileCabinet`, `uploadDocument`): `Promise`<[`IDocument`](../interfaces/types_dw_rest.idocument.md)\>

Store big document with optional index entries as xml or json string

**`memberof`** RestCallWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileCabinet` | [`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md) |
| `uploadDocument` | [`IChunkUploadDocument`](../interfaces/types_dw_rest.ichunkuploaddocument.md) |

#### Returns

`Promise`<[`IDocument`](../interfaces/types_dw_rest.idocument.md)\>

#### Defined in

[restWrapper.ts:684](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L684)

___

### UploadBigDocumentJson

▸ **UploadBigDocumentJson**(`fileCabinet`, `chunkUploadDocument`): `Promise`<[`IDocument`](../interfaces/types_dw_rest.idocument.md)\>

Store big document with multiple sections, optional json index fields and/or single/multiple application properties

**`memberof`** RestCallWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileCabinet` | [`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md) |
| `chunkUploadDocument` | [`IChunkUploadDocument`](../interfaces/types_dw_rest.ichunkuploaddocument.md) |

#### Returns

`Promise`<[`IDocument`](../interfaces/types_dw_rest.idocument.md)\>

#### Defined in

[restWrapper.ts:632](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L632)

___

### UploadBigDocumentJsonContextTypMultipleSection

▸ **UploadBigDocumentJsonContextTypMultipleSection**(`fileCabinet`, `pathToFiles`, `indexFields`, `applicationProperties`): `Promise`<[`IDocument`](../interfaces/types_dw_rest.idocument.md)\>

Store big document with multiple sections, optional json index fields and/or single application properties

**`memberof`** RestCallWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileCabinet` | [`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md) |
| `pathToFiles` | `string`[] |
| `indexFields` | [`IDocumentIndexField`](../interfaces/types_dw_rest.idocumentindexfield.md)[] |
| `applicationProperties` | [`IDocumentApplicationProperty`](../interfaces/types_dw_rest.idocumentapplicationproperty.md)[] |

#### Returns

`Promise`<[`IDocument`](../interfaces/types_dw_rest.idocument.md)\>

#### Defined in

[restWrapper.ts:597](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L597)

___

### UploadBigDocumentJsonContextTypeSingleSection

▸ **UploadBigDocumentJsonContextTypeSingleSection**(`fileCabinet`, `pathToFile`, `indexFields`, `applicationProperties`): `Promise`<[`IDocument`](../interfaces/types_dw_rest.idocument.md)\>

Store big document with optional json index fields and/or application properties

**`memberof`** RestCallWrapper

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileCabinet` | [`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md) |
| `pathToFile` | `string` |
| `indexFields` | [`IDocumentIndexField`](../interfaces/types_dw_rest.idocumentindexfield.md)[] |
| `applicationProperties` | [`IDocumentApplicationProperty`](../interfaces/types_dw_rest.idocumentapplicationproperty.md)[] |

#### Returns

`Promise`<[`IDocument`](../interfaces/types_dw_rest.idocument.md)\>

#### Defined in

[restWrapper.ts:573](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L573)

___

### UploadDocument

▸ **UploadDocument**(`fileCabinet`, `indexFields`, `pathToFile`): `Promise`<[`IDocument`](../interfaces/types_dw_rest.idocument.md)\>

Store document with index entries

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileCabinet` | [`IFileCabinet`](../interfaces/types_dw_rest.ifilecabinet.md) |
| `indexFields` | [`IDocumentIndexField`](../interfaces/types_dw_rest.idocumentindexfield.md)[] |
| `pathToFile` | `string` |

#### Returns

`Promise`<[`IDocument`](../interfaces/types_dw_rest.idocument.md)\>

#### Defined in

[restWrapper.ts:509](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/restWrapper.ts#L509)
