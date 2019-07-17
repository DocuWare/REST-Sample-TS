[Typedoc project reference documentation](../README.md) > ["restWrapper"](../modules/_restwrapper_.md) > [RestCallWrapper](../classes/_restwrapper_.restcallwrapper.md)

# Class: RestCallWrapper

Sample wrapper for DocuWare REST API

*__class__*: RestCallWrapper

## Hierarchy

**RestCallWrapper**

## Index

### Constructors

* [constructor](_restwrapper_.restcallwrapper.md#constructor)

### Properties

* [docuWare_request_config](_restwrapper_.restcallwrapper.md#docuware_request_config)
* [platformRoot](_restwrapper_.restcallwrapper.md#platformroot)

### Methods

* [AddApplicationProperties](_restwrapper_.restcallwrapper.md#addapplicationproperties)
* [AssignUserToGroup](_restwrapper_.restcallwrapper.md#assignusertogroup)
* [AssignUserToRole](_restwrapper_.restcallwrapper.md#assignusertorole)
* [BuildTimeSpanString](_restwrapper_.restcallwrapper.md#buildtimespanstring)
* [CheckInFromFileSystem](_restwrapper_.restcallwrapper.md#checkinfromfilesystem)
* [CheckoutToFileSystem](_restwrapper_.restcallwrapper.md#checkouttofilesystem)
* [ConfirmWorkflowTask](_restwrapper_.restcallwrapper.md#confirmworkflowtask)
* [CreateDirectoyIfNotExist](_restwrapper_.restcallwrapper.md#createdirectoyifnotexist)
* [CreateLogonModel](_restwrapper_.restcallwrapper.md#createlogonmodel)
* [CreateUser](_restwrapper_.restcallwrapper.md#createuser)
* [DeleteDocumentLock](_restwrapper_.restcallwrapper.md#deletedocumentlock)
* [DevideDocument](_restwrapper_.restcallwrapper.md#devidedocument)
* [DownloadDocument](_restwrapper_.restcallwrapper.md#downloaddocument)
* [DownloadFile](_restwrapper_.restcallwrapper.md#downloadfile)
* [EditDocumentSection](_restwrapper_.restcallwrapper.md#editdocumentsection)
* [ExportDWXArchive](_restwrapper_.restcallwrapper.md#exportdwxarchive)
* [GetAllDialogsFromFileCabinet](_restwrapper_.restcallwrapper.md#getalldialogsfromfilecabinet)
* [GetAllFileCabinetsWithoutDocumentTrays](_restwrapper_.restcallwrapper.md#getallfilecabinetswithoutdocumenttrays)
* [GetControllerWorkflows](_restwrapper_.restcallwrapper.md#getcontrollerworkflows)
* [GetDedicatedDialogsFromFileCabinet](_restwrapper_.restcallwrapper.md#getdedicateddialogsfromfilecabinet)
* [GetDefaultDocumentTray](_restwrapper_.restcallwrapper.md#getdefaultdocumenttray)
* [GetDialogLink](_restwrapper_.restcallwrapper.md#getdialoglink)
* [GetDocumentByDocID](_restwrapper_.restcallwrapper.md#getdocumentbydocid)
* [GetDocumentQueryResultForSpecifiedCountFromFileCabinet](_restwrapper_.restcallwrapper.md#getdocumentqueryresultforspecifiedcountfromfilecabinet)
* [GetDocumentsFromFileCabinet](_restwrapper_.restcallwrapper.md#getdocumentsfromfilecabinet)
* [GetFileCabinet](_restwrapper_.restcallwrapper.md#getfilecabinet)
* [GetFileCabinets](_restwrapper_.restcallwrapper.md#getfilecabinets)
* [GetGroupByName](_restwrapper_.restcallwrapper.md#getgroupbyname)
* [GetLink](_restwrapper_.restcallwrapper.md#getlink)
* [GetLinkFromModel](_restwrapper_.restcallwrapper.md#getlinkfrommodel)
* [GetNextResultFromDocumentQueryResult](_restwrapper_.restcallwrapper.md#getnextresultfromdocumentqueryresult)
* [GetOrganization](_restwrapper_.restcallwrapper.md#getorganization)
* [GetOrganizations](_restwrapper_.restcallwrapper.md#getorganizations)
* [GetPageByNumber](_restwrapper_.restcallwrapper.md#getpagebynumber)
* [GetQueryResults](_restwrapper_.restcallwrapper.md#getqueryresults)
* [GetQueryUrlFromFileCabinet](_restwrapper_.restcallwrapper.md#getqueryurlfromfilecabinet)
* [GetRoleByName](_restwrapper_.restcallwrapper.md#getrolebyname)
* [GetWorkflowTasks](_restwrapper_.restcallwrapper.md#getworkflowtasks)
* [GetWorkflows](_restwrapper_.restcallwrapper.md#getworkflows)
* [ImportDWXArchive](_restwrapper_.restcallwrapper.md#importdwxarchive)
* [LoadFullObjectFromPlatform](_restwrapper_.restcallwrapper.md#loadfullobjectfromplatform)
* [LockDocument](_restwrapper_.restcallwrapper.md#lockdocument)
* [Logon](_restwrapper_.restcallwrapper.md#logon)
* [MergeDocument](_restwrapper_.restcallwrapper.md#mergedocument)
* [PlaceAStampWithBestPosition](_restwrapper_.restcallwrapper.md#placeastampwithbestposition)
* [PlaceAnnotation](_restwrapper_.restcallwrapper.md#placeannotation)
* [RemoveUserFromGroup](_restwrapper_.restcallwrapper.md#removeuserfromgroup)
* [RemoveUserFromRole](_restwrapper_.restcallwrapper.md#removeuserfromrole)
* [TransferFromDocumentTrayToFileCabinet](_restwrapper_.restcallwrapper.md#transferfromdocumenttraytofilecabinet)
* [TransferFromFileCabinetToFileCabinet](_restwrapper_.restcallwrapper.md#transferfromfilecabinettofilecabinet)
* [UpdateDocumentIndexValues](_restwrapper_.restcallwrapper.md#updatedocumentindexvalues)
* [UploadBigDocument](_restwrapper_.restcallwrapper.md#uploadbigdocument)
* [UploadBigDocumentWithJsonIndex](_restwrapper_.restcallwrapper.md#uploadbigdocumentwithjsonindex)
* [UploadBigDocumentWithXmlIndex](_restwrapper_.restcallwrapper.md#uploadbigdocumentwithxmlindex)
* [UploadDocument](_restwrapper_.restcallwrapper.md#uploaddocument)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RestCallWrapper**(rootOfPlatform: *`string`*): [RestCallWrapper](_restwrapper_.restcallwrapper.md)

*Defined in [restWrapper.ts:32](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| rootOfPlatform | `string` |

**Returns:** [RestCallWrapper](_restwrapper_.restcallwrapper.md)

___

## Properties

<a id="docuware_request_config"></a>

###  docuWare_request_config

**● docuWare_request_config**: *`RequestPromiseOptions`*

*Defined in [restWrapper.ts:32](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L32)*

___
<a id="platformroot"></a>

###  platformRoot

**● platformRoot**: *`string`*

*Defined in [restWrapper.ts:31](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L31)*

Set root without /DocuWare/Platform because the rel links of platform responses will contain it

___

## Methods

<a id="addapplicationproperties"></a>

###  AddApplicationProperties

▸ **AddApplicationProperties**(document: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*, applicationProperties: *[IDocumentApplicationProperty](../interfaces/_types_dw_rest_d_.dwrest.idocumentapplicationproperty.md)[]*): `Promise`<[IDocumentApplicationProperties](../interfaces/_types_dw_rest_d_.dwrest.idocumentapplicationproperties.md)>

*Defined in [restWrapper.ts:1129](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L1129)*

Add application properties, those properties can be used to save custom meta data

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| document | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |  \- |
| applicationProperties | [IDocumentApplicationProperty](../interfaces/_types_dw_rest_d_.dwrest.idocumentapplicationproperty.md)[] |  \- |

**Returns:** `Promise`<[IDocumentApplicationProperties](../interfaces/_types_dw_rest_d_.dwrest.idocumentapplicationproperties.md)>

___
<a id="assignusertogroup"></a>

###  AssignUserToGroup

▸ **AssignUserToGroup**(user: *[IUser](../interfaces/_types_dw_rest_d_.dwrest.iuser.md)*, group: *[IGroup](../interfaces/_types_dw_rest_d_.dwrest.igroup.md)*): `Promise`<`void`>

*Defined in [restWrapper.ts:923](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L923)*

Assign a dedicated user to a group

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| user | [IUser](../interfaces/_types_dw_rest_d_.dwrest.iuser.md) |  \- |
| group | [IGroup](../interfaces/_types_dw_rest_d_.dwrest.igroup.md) |  \- |

**Returns:** `Promise`<`void`>

___
<a id="assignusertorole"></a>

###  AssignUserToRole

▸ **AssignUserToRole**(user: *[IUser](../interfaces/_types_dw_rest_d_.dwrest.iuser.md)*, role: *[IRole](../interfaces/_types_dw_rest_d_.dwrest.irole.md)*): `Promise`<`void`>

*Defined in [restWrapper.ts:900](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L900)*

Assign a dedicated user to a role

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| user | [IUser](../interfaces/_types_dw_rest_d_.dwrest.iuser.md) |  \- |
| role | [IRole](../interfaces/_types_dw_rest_d_.dwrest.irole.md) |  \- |

**Returns:** `Promise`<`void`>

___
<a id="buildtimespanstring"></a>

### `<Private>` BuildTimeSpanString

▸ **BuildTimeSpanString**(seconds: *`number`*): `any`

*Defined in [restWrapper.ts:1223](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L1223)*

Helper method for getting a TimeSpan string

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| seconds | `number` |  \- |

**Returns:** `any`

___
<a id="checkinfromfilesystem"></a>

###  CheckInFromFileSystem

▸ **CheckInFromFileSystem**(fullLoadedDocument: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*, pathToFile: *`string`*, checkinParameters: *[ICheckInActionParameters](../interfaces/_types_dw_rest_d_.dwrest.icheckinactionparameters.md)*): `Promise`<[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)>

*Defined in [restWrapper.ts:651](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L651)*

Checkin a checked out document

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| fullLoadedDocument | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |  \- |
| pathToFile | `string` |  \- |
| checkinParameters | [ICheckInActionParameters](../interfaces/_types_dw_rest_d_.dwrest.icheckinactionparameters.md) |  \- |

**Returns:** `Promise`<[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)>

___
<a id="checkouttofilesystem"></a>

###  CheckoutToFileSystem

▸ **CheckoutToFileSystem**(fullLoadedDocument: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*): `Promise`<`string`>

*Defined in [restWrapper.ts:629](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L629)*

Check out a document to the file system

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| fullLoadedDocument | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |  \- |

**Returns:** `Promise`<`string`>

___
<a id="confirmworkflowtask"></a>

###  ConfirmWorkflowTask

▸ **ConfirmWorkflowTask**(task: *[IWorkflowTask](../interfaces/_types_dw_rest_d_.dwrest.iworkflowtask.md)*): `Promise`<`void`>

*Defined in [restWrapper.ts:1185](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L1185)*

Confirms a taks, this example takes the first text form and confirms with demo string

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| task | [IWorkflowTask](../interfaces/_types_dw_rest_d_.dwrest.iworkflowtask.md) |  \- |

**Returns:** `Promise`<`void`>

___
<a id="createdirectoyifnotexist"></a>

### `<Private>` CreateDirectoyIfNotExist

▸ **CreateDirectoyIfNotExist**(path: *`string`*): `void`

*Defined in [restWrapper.ts:1299](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L1299)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` |

**Returns:** `void`

___
<a id="createlogonmodel"></a>

###  CreateLogonModel

▸ **CreateLogonModel**(user: *`string`*, pw: *`string`*, org: *`string`*, hostID: *`string`*): [ILogonModel](../interfaces/_types_dw_rest_d_.dwrest.ilogonmodel.md)

*Defined in [restWrapper.ts:58](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L58)*

Helper function for preparing the logon

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| user | `string` |  \- |
| pw | `string` |  \- |
| org | `string` |  \- |
| hostID | `string` |

**Returns:** [ILogonModel](../interfaces/_types_dw_rest_d_.dwrest.ilogonmodel.md)

___
<a id="createuser"></a>

###  CreateUser

▸ **CreateUser**(organization: *[IOrganization](../interfaces/_types_dw_rest_d_.dwrest.iorganization.md)*, newUser: *[INewUser](../interfaces/_types_dw_rest_d_.dwrest.inewuser.md)*): `Promise`<[IUser](../interfaces/_types_dw_rest_d_.dwrest.iuser.md)>

*Defined in [restWrapper.ts:882](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L882)*

Create a new user

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| organization | [IOrganization](../interfaces/_types_dw_rest_d_.dwrest.iorganization.md) |  \- |
| newUser | [INewUser](../interfaces/_types_dw_rest_d_.dwrest.inewuser.md) |  \- |

**Returns:** `Promise`<[IUser](../interfaces/_types_dw_rest_d_.dwrest.iuser.md)>

___
<a id="deletedocumentlock"></a>

###  DeleteDocumentLock

▸ **DeleteDocumentLock**(document: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*): `Promise`<`void`>

*Defined in [restWrapper.ts:1115](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L1115)*

Remove a lock from a document

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| document | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |  \- |

**Returns:** `Promise`<`void`>

___
<a id="devidedocument"></a>

###  DevideDocument

▸ **DevideDocument**(document: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*, operation: *[ContentDivideOperation](../enums/_types_dw_rest_d_.dwrest.contentdivideoperation.md)*): `Promise`<`any`>

*Defined in [restWrapper.ts:836](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L836)*

Devide a document

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| document | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |  \- |
| operation | [ContentDivideOperation](../enums/_types_dw_rest_d_.dwrest.contentdivideoperation.md) |  \- |

**Returns:** `Promise`<`any`>

___
<a id="downloaddocument"></a>

###  DownloadDocument

▸ **DownloadDocument**(fullLoadedDocument: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*, includeAnnotations: *`boolean`*, targetFileType: *[TargetFileType](../enums/_types_dw_rest_d_.dwrest.targetfiletype.md)*): `Promise`<`string`>

*Defined in [restWrapper.ts:395](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L395)*

Download a single document

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| fullLoadedDocument | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |  \- |
| includeAnnotations | `boolean` |  \- |
| targetFileType | [TargetFileType](../enums/_types_dw_rest_d_.dwrest.targetfiletype.md) |  \- |

**Returns:** `Promise`<`string`>

___
<a id="downloadfile"></a>

### `<Private>` DownloadFile

▸ **DownloadFile**(request: *`request.RequestPromise`*, reject: *`function`*, resolve: *`function`*): `Promise`<`void`>

*Defined in [restWrapper.ts:1237](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L1237)*

Helper method to download file from response

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| request | `request.RequestPromise` |
| reject | `function` |  \- |
| resolve | `function` |   |

**Returns:** `Promise`<`void`>

___
<a id="editdocumentsection"></a>

###  EditDocumentSection

▸ **EditDocumentSection**(fullLoadedSection: *[ISection](../interfaces/_types_dw_rest_d_.dwrest.isection.md)*, pathToFileForReplace: *`string`*): `Promise`<[ISection](../interfaces/_types_dw_rest_d_.dwrest.isection.md)>

*Defined in [restWrapper.ts:604](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L604)*

Manipulate a document and upload it again In this example we make a zip out of it

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| fullLoadedSection | [ISection](../interfaces/_types_dw_rest_d_.dwrest.isection.md) |  \- |
| pathToFileForReplace | `string` |  \- |

**Returns:** `Promise`<[ISection](../interfaces/_types_dw_rest_d_.dwrest.isection.md)>

___
<a id="exportdwxarchive"></a>

###  ExportDWXArchive

▸ **ExportDWXArchive**(documentOrDocuments: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) \| [IDocumentsQueryResult](../interfaces/_types_dw_rest_d_.dwrest.idocumentsqueryresult.md)*, exportSettings: *[IExportSettings](../interfaces/_types_dw_rest_d_.dwrest.iexportsettings.md)*): `Promise`<`string`>

*Defined in [restWrapper.ts:1072](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L1072)*

Import a DWX. DWX is the exchange format of DocuWare

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| documentOrDocuments | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) \| [IDocumentsQueryResult](../interfaces/_types_dw_rest_d_.dwrest.idocumentsqueryresult.md) |  \- |
| exportSettings | [IExportSettings](../interfaces/_types_dw_rest_d_.dwrest.iexportsettings.md) |  \- |

**Returns:** `Promise`<`string`>

___
<a id="getalldialogsfromfilecabinet"></a>

###  GetAllDialogsFromFileCabinet

▸ **GetAllDialogsFromFileCabinet**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*): `Promise`<[IDialogsResponse](../interfaces/_types_dw_rest_d_.dwrest.idialogsresponse.md)>

*Defined in [restWrapper.ts:264](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L264)*

Returns all kind of dialogs of a filecabinet

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |  \- |

**Returns:** `Promise`<[IDialogsResponse](../interfaces/_types_dw_rest_d_.dwrest.idialogsresponse.md)>

___
<a id="getallfilecabinetswithoutdocumenttrays"></a>

###  GetAllFileCabinetsWithoutDocumentTrays

▸ **GetAllFileCabinetsWithoutDocumentTrays**(fileCabinets: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)[]*): [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)[]

*Defined in [restWrapper.ts:171](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L171)*

Filters list of FileCabinet Objects and returns only filecabinets Info: FileCabinet Object can be a document tray OR a filecabinet

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| fileCabinets | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)[] |  \- |

**Returns:** [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)[]

___
<a id="getcontrollerworkflows"></a>

###  GetControllerWorkflows

▸ **GetControllerWorkflows**(organization: *[IOrganization](../interfaces/_types_dw_rest_d_.dwrest.iorganization.md)*): `Promise`<[IWorkflows](../interfaces/_types_dw_rest_d_.dwrest.iworkflows.md)>

*Defined in [restWrapper.ts:1159](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L1159)*

Get controller workflows

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| organization | [IOrganization](../interfaces/_types_dw_rest_d_.dwrest.iorganization.md) |  \- |

**Returns:** `Promise`<[IWorkflows](../interfaces/_types_dw_rest_d_.dwrest.iworkflows.md)>

___
<a id="getdedicateddialogsfromfilecabinet"></a>

###  GetDedicatedDialogsFromFileCabinet

▸ **GetDedicatedDialogsFromFileCabinet**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, dialogType: *[DialogType](../enums/_types_dw_rest_d_.dwrest.dialogtype.md)*): `Promise`<[IDialog](../interfaces/_types_dw_rest_d_.dwrest.idialog.md)[]>

*Defined in [restWrapper.ts:302](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L302)*

Returns a list of specified dialogs

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |  \- |
| dialogType | [DialogType](../enums/_types_dw_rest_d_.dwrest.dialogtype.md) |  \- |

**Returns:** `Promise`<[IDialog](../interfaces/_types_dw_rest_d_.dwrest.idialog.md)[]>

___
<a id="getdefaultdocumenttray"></a>

###  GetDefaultDocumentTray

▸ **GetDefaultDocumentTray**(fileCabinets: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)[]*): [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) \| `undefined`

*Defined in [restWrapper.ts:182](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L182)*

Filters list of FileCabinet Objects and returns only document trays Info: FileCabinet Object can be a document tray OR a filecabinet

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| fileCabinets | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)[] |  \- |

**Returns:** [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) \| `undefined`

___
<a id="getdialoglink"></a>

###  GetDialogLink

▸ **GetDialogLink**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, dialogType: *[DialogType](../enums/_types_dw_rest_d_.dwrest.dialogtype.md)*): `string`

*Defined in [restWrapper.ts:271](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L271)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |
| dialogType | [DialogType](../enums/_types_dw_rest_d_.dwrest.dialogtype.md) |

**Returns:** `string`

___
<a id="getdocumentbydocid"></a>

###  GetDocumentByDocID

▸ **GetDocumentByDocID**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, docId: *`number`*, fullLoad?: *`boolean`*): `Promise`<[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)>

*Defined in [restWrapper.ts:212](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L212)*

Get a document by DocId

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) | - |  \- |
| docId | `number` | - |  \- |
| `Default value` fullLoad | `boolean` | false |  \- |

**Returns:** `Promise`<[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)>

___
<a id="getdocumentqueryresultforspecifiedcountfromfilecabinet"></a>

###  GetDocumentQueryResultForSpecifiedCountFromFileCabinet

▸ **GetDocumentQueryResultForSpecifiedCountFromFileCabinet**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, count: *`number`*): `Promise`<[IDocumentsQueryResult](../interfaces/_types_dw_rest_d_.dwrest.idocumentsqueryresult.md)>

*Defined in [restWrapper.ts:233](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L233)*

Get the first x documents from a file cabinet

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |  \- |
| count | `number` |  \- |

**Returns:** `Promise`<[IDocumentsQueryResult](../interfaces/_types_dw_rest_d_.dwrest.idocumentsqueryresult.md)>

___
<a id="getdocumentsfromfilecabinet"></a>

###  GetDocumentsFromFileCabinet

▸ **GetDocumentsFromFileCabinet**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*): `Promise`<[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)[]>

*Defined in [restWrapper.ts:194](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L194)*

Returns documents of filecabinet without criteria Info: Is restricted to the first 1000 per default

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |  \- |

**Returns:** `Promise`<[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)[]>

___
<a id="getfilecabinet"></a>

###  GetFileCabinet

▸ **GetFileCabinet**(fcGuid: *`string`*): `Promise`<[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)>

*Defined in [restWrapper.ts:159](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L159)*

Returns a special FileCabinet by GUID

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| fcGuid | `string` |  \- |

**Returns:** `Promise`<[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)>

___
<a id="getfilecabinets"></a>

###  GetFileCabinets

▸ **GetFileCabinets**(org: *[IOrganization](../interfaces/_types_dw_rest_d_.dwrest.iorganization.md)*): `Promise`<[IFileCabinets](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinets.md)>

*Defined in [restWrapper.ts:144](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L144)*

Returns list of FileCabinets

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| org | [IOrganization](../interfaces/_types_dw_rest_d_.dwrest.iorganization.md) |  \- |

**Returns:** `Promise`<[IFileCabinets](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinets.md)>

___
<a id="getgroupbyname"></a>

###  GetGroupByName

▸ **GetGroupByName**(organization: *[IOrganization](../interfaces/_types_dw_rest_d_.dwrest.iorganization.md)*, name: *`string`*): `Promise`<[IGroup](../interfaces/_types_dw_rest_d_.dwrest.igroup.md)>

*Defined in [restWrapper.ts:984](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L984)*

Get a group by it's name

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| organization | [IOrganization](../interfaces/_types_dw_rest_d_.dwrest.iorganization.md) |  \- |
| name | `string` |  \- |

**Returns:** `Promise`<[IGroup](../interfaces/_types_dw_rest_d_.dwrest.igroup.md)>

___
<a id="getlink"></a>

### `<Private>` GetLink

▸ **GetLink**(linkModel: *[ILinkModel](../interfaces/_types_dw_rest_d_.dwrest.ilinkmodel.md)*, linkName: *`string`*): `string`

*Defined in [restWrapper.ts:1270](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L1270)*

Helper method to check if link exists or not

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| linkModel | [ILinkModel](../interfaces/_types_dw_rest_d_.dwrest.ilinkmodel.md) |  \- |
| linkName | `string` |  \- |

**Returns:** `string`

___
<a id="getlinkfrommodel"></a>

### `<Private>` GetLinkFromModel

▸ **GetLinkFromModel**(linkModel: *[ILinkModel](../interfaces/_types_dw_rest_d_.dwrest.ilinkmodel.md)*, linkName: *`string`*): `string` \| `null`

*Defined in [restWrapper.ts:1288](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L1288)*

Get link from object by name

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| linkModel | [ILinkModel](../interfaces/_types_dw_rest_d_.dwrest.ilinkmodel.md) |  \- |
| linkName | `string` |  \- |

**Returns:** `string` \| `null`

___
<a id="getnextresultfromdocumentqueryresult"></a>

###  GetNextResultFromDocumentQueryResult

▸ **GetNextResultFromDocumentQueryResult**(documentQueryResult: *[IDocumentsQueryResult](../interfaces/_types_dw_rest_d_.dwrest.idocumentsqueryresult.md)*): `Promise`<[IDocumentsQueryResult](../interfaces/_types_dw_rest_d_.dwrest.idocumentsqueryresult.md)>

*Defined in [restWrapper.ts:245](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L245)*

Returns the next 'page' of document results Info: Be careful, the next result will contain same amount of results like the provided {DWRest.DocumentsQueryResult}! So if you searched for 2 results you will only get another 2!

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| documentQueryResult | [IDocumentsQueryResult](../interfaces/_types_dw_rest_d_.dwrest.idocumentsqueryresult.md) |  \- |

**Returns:** `Promise`<[IDocumentsQueryResult](../interfaces/_types_dw_rest_d_.dwrest.idocumentsqueryresult.md)>

___
<a id="getorganization"></a>

###  GetOrganization

▸ **GetOrganization**(): `Promise`<[IOrganization](../interfaces/_types_dw_rest_d_.dwrest.iorganization.md)>

*Defined in [restWrapper.ts:118](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L118)*

Returns your Organization

**Returns:** `Promise`<[IOrganization](../interfaces/_types_dw_rest_d_.dwrest.iorganization.md)>

___
<a id="getorganizations"></a>

###  GetOrganizations

▸ **GetOrganizations**(logonResponse: *[ILogonResponse](../interfaces/_types_dw_rest_d_.dwrest.ilogonresponse.md)*): `Promise`<[IOrganizations](../interfaces/_types_dw_rest_d_.dwrest.iorganizations.md)>

*Defined in [restWrapper.ts:130](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L130)*

Returns all organizations

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| logonResponse | [ILogonResponse](../interfaces/_types_dw_rest_d_.dwrest.ilogonresponse.md) |  \- |

**Returns:** `Promise`<[IOrganizations](../interfaces/_types_dw_rest_d_.dwrest.iorganizations.md)>

___
<a id="getpagebynumber"></a>

###  GetPageByNumber

▸ **GetPageByNumber**(fullLoadedSection: *[ISection](../interfaces/_types_dw_rest_d_.dwrest.isection.md)*, pageNumber: *`number`*, fullLoad?: *`boolean`*): `Promise`<[IPage](../interfaces/_types_dw_rest_d_.dwrest.ipage.md)>

*Defined in [restWrapper.ts:708](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L708)*

Get a single page by section and page number

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| fullLoadedSection | [ISection](../interfaces/_types_dw_rest_d_.dwrest.isection.md) | - |  \- |
| pageNumber | `number` | - |  \- |
| `Default value` fullLoad | `boolean` | false |

**Returns:** `Promise`<[IPage](../interfaces/_types_dw_rest_d_.dwrest.ipage.md)>

___
<a id="getqueryresults"></a>

###  GetQueryResults

▸ **GetQueryResults**(queryUrl: *`string`*): `Promise`<[IDocumentsQueryResult](../interfaces/_types_dw_rest_d_.dwrest.idocumentsqueryresult.md)>

*Defined in [restWrapper.ts:368](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L368)*

Send query to get results

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| queryUrl | `string` |  \- |

**Returns:** `Promise`<[IDocumentsQueryResult](../interfaces/_types_dw_rest_d_.dwrest.idocumentsqueryresult.md)>

___
<a id="getqueryurlfromfilecabinet"></a>

###  GetQueryUrlFromFileCabinet

▸ **GetQueryUrlFromFileCabinet**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, dialogExpression: *[IDialogExpression](../interfaces/_types_dw_rest_d_.dwrest.idialogexpression.md)*, dialogId: *`string`*, fields: *`string`[]*, fieldToSort: *`string`*, sortOrder: *[SortOrder](../enums/_types_dw_rest_d_.dwrest.sortorder.md)*): `Promise`<`string`>

*Defined in [restWrapper.ts:342](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L342)*

Get a query build by DocuWare Platform for later execution

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |  \- |
| dialogExpression | [IDialogExpression](../interfaces/_types_dw_rest_d_.dwrest.idialogexpression.md) |  \- |
| dialogId | `string` |  \- |
| fields | `string`[] |  \- |
| fieldToSort | `string` |  \- |
| sortOrder | [SortOrder](../enums/_types_dw_rest_d_.dwrest.sortorder.md) |  \- |

**Returns:** `Promise`<`string`>

___
<a id="getrolebyname"></a>

###  GetRoleByName

▸ **GetRoleByName**(organization: *[IOrganization](../interfaces/_types_dw_rest_d_.dwrest.iorganization.md)*, name: *`string`*): `Promise`<[IRole](../interfaces/_types_dw_rest_d_.dwrest.irole.md)>

*Defined in [restWrapper.ts:1010](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L1010)*

Get a role by it's name

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| organization | [IOrganization](../interfaces/_types_dw_rest_d_.dwrest.iorganization.md) |  \- |
| name | `string` |  \- |

**Returns:** `Promise`<[IRole](../interfaces/_types_dw_rest_d_.dwrest.irole.md)>

___
<a id="getworkflowtasks"></a>

###  GetWorkflowTasks

▸ **GetWorkflowTasks**(workflow: *[IWorkflow](../interfaces/_types_dw_rest_d_.dwrest.iworkflow.md)*): `Promise`<[IWorkflowTasks](../interfaces/_types_dw_rest_d_.dwrest.iworkflowtasks.md)>

*Defined in [restWrapper.ts:1172](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L1172)*

Get workflow tasks for dedicated workflow

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| workflow | [IWorkflow](../interfaces/_types_dw_rest_d_.dwrest.iworkflow.md) |  \- |

**Returns:** `Promise`<[IWorkflowTasks](../interfaces/_types_dw_rest_d_.dwrest.iworkflowtasks.md)>

___
<a id="getworkflows"></a>

###  GetWorkflows

▸ **GetWorkflows**(organization: *[IOrganization](../interfaces/_types_dw_rest_d_.dwrest.iorganization.md)*): `Promise`<[IWorkflows](../interfaces/_types_dw_rest_d_.dwrest.iworkflows.md)>

*Defined in [restWrapper.ts:1146](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L1146)*

Get workflows (The workflow needs to be triggered at least once before you'll get return values)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| organization | [IOrganization](../interfaces/_types_dw_rest_d_.dwrest.iorganization.md) |  \- |

**Returns:** `Promise`<[IWorkflows](../interfaces/_types_dw_rest_d_.dwrest.iworkflows.md)>

___
<a id="importdwxarchive"></a>

###  ImportDWXArchive

▸ **ImportDWXArchive**(pathOfDWX: *`string`*, fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, importSettings: *[IImportSettings](../interfaces/_types_dw_rest_d_.dwrest.iimportsettings.md)*): `Promise`<[IImportResult](../interfaces/_types_dw_rest_d_.dwrest.iimportresult.md)>

*Defined in [restWrapper.ts:1037](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L1037)*

Import a dwx archive. DWX is the exchange format of DocuWare

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| pathOfDWX | `string` |  \- |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |  \- |
| importSettings | [IImportSettings](../interfaces/_types_dw_rest_d_.dwrest.iimportsettings.md) |  \- |

**Returns:** `Promise`<[IImportResult](../interfaces/_types_dw_rest_d_.dwrest.iimportresult.md)>

___
<a id="loadfullobjectfromplatform"></a>

###  LoadFullObjectFromPlatform

▸ **LoadFullObjectFromPlatform**<`T`>(notYetFullLoadedObject: *[ILinkModel](../interfaces/_types_dw_rest_d_.dwrest.ilinkmodel.md)*): `Promise`<`T`>

*Defined in [restWrapper.ts:321](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L321)*

Gets the 'self' link of provided object and retrieves the full load of properties and data

*__template__*: T

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| notYetFullLoadedObject | [ILinkModel](../interfaces/_types_dw_rest_d_.dwrest.ilinkmodel.md) |  \- |

**Returns:** `Promise`<`T`>

___
<a id="lockdocument"></a>

###  LockDocument

▸ **LockDocument**(document: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*, timeToLockInSeconds: *`number`*): `Promise`<`void`>

*Defined in [restWrapper.ts:1096](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L1096)*

Do explicit lock of a document

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| document | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |  \- |
| timeToLockInSeconds | `number` |  \- |

**Returns:** `Promise`<`void`>

___
<a id="logon"></a>

###  Logon

▸ **Logon**(model: *[ILogonModel](../interfaces/_types_dw_rest_d_.dwrest.ilogonmodel.md)*): `Promise`<[ILogonResponse](../interfaces/_types_dw_rest_d_.dwrest.ilogonresponse.md)>

*Defined in [restWrapper.ts:76](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L76)*

Handles logon and sets cookies to 'global' {RequestPromiseOptions}

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| model | [ILogonModel](../interfaces/_types_dw_rest_d_.dwrest.ilogonmodel.md) |  \- |

**Returns:** `Promise`<[ILogonResponse](../interfaces/_types_dw_rest_d_.dwrest.ilogonresponse.md)>

___
<a id="mergedocument"></a>

###  MergeDocument

▸ **MergeDocument**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, docIds: *`number`[]*, operation: *[ContentMergeOperation](../enums/_types_dw_rest_d_.dwrest.contentmergeoperation.md)*): `Promise`<[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)>

*Defined in [restWrapper.ts:857](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L857)*

Merges a document Info: Staple is only supported for document trays

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |  \- |
| docIds | `number`[] |  \- |
| operation | [ContentMergeOperation](../enums/_types_dw_rest_d_.dwrest.contentmergeoperation.md) |  \- |

**Returns:** `Promise`<[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)>

___
<a id="placeastampwithbestposition"></a>

###  PlaceAStampWithBestPosition

▸ **PlaceAStampWithBestPosition**(page: *[IPage](../interfaces/_types_dw_rest_d_.dwrest.ipage.md)*, stampPlacement: *[IStampPlacement](../interfaces/_types_dw_rest_d_.dwrest.istampplacement.md)*): `Promise`<`void`>

*Defined in [restWrapper.ts:746](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L746)*

Gets the best position for a stamp an paces it

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| page | [IPage](../interfaces/_types_dw_rest_d_.dwrest.ipage.md) |  \- |
| stampPlacement | [IStampPlacement](../interfaces/_types_dw_rest_d_.dwrest.istampplacement.md) |  \- |

**Returns:** `Promise`<`void`>

___
<a id="placeannotation"></a>

###  PlaceAnnotation

▸ **PlaceAnnotation**(page: *[IPage](../interfaces/_types_dw_rest_d_.dwrest.ipage.md)*, annotation: *[IAnnotation](../interfaces/_types_dw_rest_d_.dwrest.iannotation.md)*): `Promise`<[IAnnotation](../interfaces/_types_dw_rest_d_.dwrest.iannotation.md)>

*Defined in [restWrapper.ts:822](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L822)*

Place an annotation to a single page

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| page | [IPage](../interfaces/_types_dw_rest_d_.dwrest.ipage.md) |  \- |
| annotation | [IAnnotation](../interfaces/_types_dw_rest_d_.dwrest.iannotation.md) |  \- |

**Returns:** `Promise`<[IAnnotation](../interfaces/_types_dw_rest_d_.dwrest.iannotation.md)>

___
<a id="removeuserfromgroup"></a>

###  RemoveUserFromGroup

▸ **RemoveUserFromGroup**(user: *[IUser](../interfaces/_types_dw_rest_d_.dwrest.iuser.md)*, groupId: *`string`*): `Promise`<`void`>

*Defined in [restWrapper.ts:965](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L965)*

Remove a group from a user

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| user | [IUser](../interfaces/_types_dw_rest_d_.dwrest.iuser.md) |  \- |
| groupId | `string` |  \- |

**Returns:** `Promise`<`void`>

___
<a id="removeuserfromrole"></a>

###  RemoveUserFromRole

▸ **RemoveUserFromRole**(user: *[IUser](../interfaces/_types_dw_rest_d_.dwrest.iuser.md)*, roleId: *`string`*): `Promise`<`void`>

*Defined in [restWrapper.ts:946](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L946)*

Remove a role from a user

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| user | [IUser](../interfaces/_types_dw_rest_d_.dwrest.iuser.md) |  \- |
| roleId | `string` |  \- |

**Returns:** `Promise`<`void`>

___
<a id="transferfromdocumenttraytofilecabinet"></a>

###  TransferFromDocumentTrayToFileCabinet

▸ **TransferFromDocumentTrayToFileCabinet**(docIds: *`number`[]*, basketId: *`string`*, fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, keepSource: *`boolean`*): `Promise`<[IDocumentsQueryResult](../interfaces/_types_dw_rest_d_.dwrest.idocumentsqueryresult.md)>

*Defined in [restWrapper.ts:769](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L769)*

Transfer a number documents from document tray to filecabinet

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| docIds | `number`[] |  \- |
| basketId | `string` |  \- |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |  \- |
| keepSource | `boolean` |  \- |

**Returns:** `Promise`<[IDocumentsQueryResult](../interfaces/_types_dw_rest_d_.dwrest.idocumentsqueryresult.md)>

___
<a id="transferfromfilecabinettofilecabinet"></a>

###  TransferFromFileCabinetToFileCabinet

▸ **TransferFromFileCabinetToFileCabinet**(documents: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)[]*, sourceFileCabinetId: *`string`*, destinationFileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, keepSource: *`boolean`*): `Promise`<[IDocumentsQueryResult](../interfaces/_types_dw_rest_d_.dwrest.idocumentsqueryresult.md)>

*Defined in [restWrapper.ts:796](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L796)*

Transfer a document from filecabinet to another (or the same) filecabinet

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| documents | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)[] |  \- |
| sourceFileCabinetId | `string` |  \- |
| destinationFileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |  \- |
| keepSource | `boolean` |  \- |

**Returns:** `Promise`<[IDocumentsQueryResult](../interfaces/_types_dw_rest_d_.dwrest.idocumentsqueryresult.md)>

___
<a id="updatedocumentindexvalues"></a>

###  UpdateDocumentIndexValues

▸ **UpdateDocumentIndexValues**(document: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*, fieldsToUpdate: *[IFieldList](../interfaces/_types_dw_rest_d_.dwrest.ifieldlist.md)*): `Promise`<[IFieldList](../interfaces/_types_dw_rest_d_.dwrest.ifieldlist.md)>

*Defined in [restWrapper.ts:380](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L380)*

Update index values of specified document

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| document | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |  \- |
| fieldsToUpdate | [IFieldList](../interfaces/_types_dw_rest_d_.dwrest.ifieldlist.md) |  \- |

**Returns:** `Promise`<[IFieldList](../interfaces/_types_dw_rest_d_.dwrest.ifieldlist.md)>

___
<a id="uploadbigdocument"></a>

###  UploadBigDocument

▸ **UploadBigDocument**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, pathToFile: *`string`*, indexFields?: *`any`*, indexFieldsType?: *[IndexFileType](../enums/_restwrapper_.indexfiletype.md)*): `Promise`<[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)>

*Defined in [restWrapper.ts:496](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L496)*

Store big document with optional index entries as xml or json string

*__memberof__*: RestCallWrapper

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) | - |  \- |
| pathToFile | `string` | - |  \- |
| `Default value` indexFields | `any` |  null |
| `Default value` indexFieldsType | [IndexFileType](../enums/_restwrapper_.indexfiletype.md) |  IndexFileType.NULL |

**Returns:** `Promise`<[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)>

___
<a id="uploadbigdocumentwithjsonindex"></a>

###  UploadBigDocumentWithJsonIndex

▸ **UploadBigDocumentWithJsonIndex**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, pathToFile: *`string`*, indexFields: *`any`*): `Promise`<[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)>

*Defined in [restWrapper.ts:469](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L469)*

Store big document with optional json index entries

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |  \- |
| pathToFile | `string` |  \- |
| indexFields | `any` |  \- |

**Returns:** `Promise`<[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)>

___
<a id="uploadbigdocumentwithxmlindex"></a>

###  UploadBigDocumentWithXmlIndex

▸ **UploadBigDocumentWithXmlIndex**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, pathToFile: *`string`*, indexFields: *`any`*): `Promise`<[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)>

*Defined in [restWrapper.ts:457](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L457)*

Store big document with optional xml index entries

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |  \- |
| pathToFile | `string` |  \- |
| indexFields | `any` |  \- |

**Returns:** `Promise`<[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)>

___
<a id="uploaddocument"></a>

###  UploadDocument

▸ **UploadDocument**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, indexFields: *[IField](../interfaces/_types_dw_rest_d_.dwrest.ifield.md)[]*, pathToFile: *`string`*): `Promise`<[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)>

*Defined in [restWrapper.ts:416](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/restWrapper.ts#L416)*

Store document with index entries

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |  \- |
| indexFields | [IField](../interfaces/_types_dw_rest_d_.dwrest.ifield.md)[] |  \- |
| pathToFile | `string` |  \- |

**Returns:** `Promise`<[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)>

___

