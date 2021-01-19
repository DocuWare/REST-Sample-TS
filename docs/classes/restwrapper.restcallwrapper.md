[Typedoc project reference documentation](../README.md) / [restWrapper](../modules/restwrapper.md) / RestCallWrapper

# Class: RestCallWrapper

[restWrapper](../modules/restwrapper.md).RestCallWrapper

Sample wrapper for DocuWare REST API

## Hierarchy

* **RestCallWrapper**

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
- [CreateDirectoyIfNotExist](restwrapper.restcallwrapper.md#createdirectoyifnotexist)
- [CreateLogonModel](restwrapper.restcallwrapper.md#createlogonmodel)
- [CreateNewDocumentContent](restwrapper.restcallwrapper.md#createnewdocumentcontent)
- [CreateUser](restwrapper.restcallwrapper.md#createuser)
- [DeleteDocumentLock](restwrapper.restcallwrapper.md#deletedocumentlock)
- [DevideDocument](restwrapper.restcallwrapper.md#devidedocument)
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
- [UploadBigDocumentJsonContextType](restwrapper.restcallwrapper.md#uploadbigdocumentjsoncontexttype)
- [UploadDocument](restwrapper.restcallwrapper.md#uploaddocument)

## Constructors

### constructor

\+ **new RestCallWrapper**(`rootOfPlatform`: *string*, `port?`: *number*): [*RestCallWrapper*](restwrapper.restcallwrapper.md)

#### Parameters:

Name | Type |
------ | ------ |
`rootOfPlatform` | *string* |
`port?` | *number* |

**Returns:** [*RestCallWrapper*](restwrapper.restcallwrapper.md)

Defined in: [restWrapper.ts:31](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L31)

## Properties

### docuWare\_request\_config

• **docuWare\_request\_config**: RequestPromiseOptions

Defined in: [restWrapper.ts:31](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L31)

___

### platformRoot

• **platformRoot**: *string*

Set root without /DocuWare/Platform because the rel links of platform responses will contain it

Defined in: [restWrapper.ts:30](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L30)

## Methods

### AddApplicationProperties

▸ **AddApplicationProperties**(`document`: [*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md), `applicationProperties`: [*IDocumentApplicationProperty*](../interfaces/types_dw_rest.dwrest.idocumentapplicationproperty.md)[]): *Promise*<[*IDocumentApplicationProperties*](../interfaces/types_dw_rest.dwrest.idocumentapplicationproperties.md)\>

Add application properties, those properties can be used to save custom meta data

#### Parameters:

Name | Type |
------ | ------ |
`document` | [*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md) |
`applicationProperties` | [*IDocumentApplicationProperty*](../interfaces/types_dw_rest.dwrest.idocumentapplicationproperty.md)[] |

**Returns:** *Promise*<[*IDocumentApplicationProperties*](../interfaces/types_dw_rest.dwrest.idocumentapplicationproperties.md)\>

Defined in: [restWrapper.ts:1137](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L1137)

___

### AssignUserToGroup

▸ **AssignUserToGroup**(`user`: [*IUser*](../interfaces/types_dw_rest.dwrest.iuser.md), `group`: [*IGroup*](../interfaces/types_dw_rest.dwrest.igroup.md)): *Promise*<*void*\>

Assign a dedicated user to a group

#### Parameters:

Name | Type |
------ | ------ |
`user` | [*IUser*](../interfaces/types_dw_rest.dwrest.iuser.md) |
`group` | [*IGroup*](../interfaces/types_dw_rest.dwrest.igroup.md) |

**Returns:** *Promise*<*void*\>

Defined in: [restWrapper.ts:931](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L931)

___

### AssignUserToRole

▸ **AssignUserToRole**(`user`: [*IUser*](../interfaces/types_dw_rest.dwrest.iuser.md), `role`: [*IRole*](../interfaces/types_dw_rest.dwrest.irole.md)): *Promise*<*void*\>

Assign a dedicated user to a role

#### Parameters:

Name | Type |
------ | ------ |
`user` | [*IUser*](../interfaces/types_dw_rest.dwrest.iuser.md) |
`role` | [*IRole*](../interfaces/types_dw_rest.dwrest.irole.md) |

**Returns:** *Promise*<*void*\>

Defined in: [restWrapper.ts:908](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L908)

___

### BuildTimeSpanString

▸ `Private`**BuildTimeSpanString**(`seconds`: *number*): *any*

Helper method for getting a TimeSpan string

#### Parameters:

Name | Type |
------ | ------ |
`seconds` | *number* |

**Returns:** *any*

Defined in: [restWrapper.ts:1231](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L1231)

___

### CheckInFromFileSystem

▸ **CheckInFromFileSystem**(`fullLoadedDocument`: [*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md), `pathToFile`: *string*, `checkinParameters`: [*ICheckInActionParameters*](../interfaces/types_dw_rest.dwrest.icheckinactionparameters.md)): *Promise*<[*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md)\>

Checkin a checked out document

#### Parameters:

Name | Type |
------ | ------ |
`fullLoadedDocument` | [*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md) |
`pathToFile` | *string* |
`checkinParameters` | [*ICheckInActionParameters*](../interfaces/types_dw_rest.dwrest.icheckinactionparameters.md) |

**Returns:** *Promise*<[*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md)\>

Defined in: [restWrapper.ts:659](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L659)

___

### CheckoutToFileSystem

▸ **CheckoutToFileSystem**(`fullLoadedDocument`: [*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md)): *Promise*<*string*\>

Check out a document to the file system

#### Parameters:

Name | Type |
------ | ------ |
`fullLoadedDocument` | [*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md) |

**Returns:** *Promise*<*string*\>

Defined in: [restWrapper.ts:637](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L637)

___

### ConfirmWorkflowTask

▸ **ConfirmWorkflowTask**(`task`: [*IWorkflowTask*](../interfaces/types_dw_rest.dwrest.iworkflowtask.md)): *Promise*<*void*\>

Confirms a taks, this example takes the first text form and confirms with demo string

#### Parameters:

Name | Type |
------ | ------ |
`task` | [*IWorkflowTask*](../interfaces/types_dw_rest.dwrest.iworkflowtask.md) |

**Returns:** *Promise*<*void*\>

Defined in: [restWrapper.ts:1193](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L1193)

___

### CreateDirectoyIfNotExist

▸ `Private`**CreateDirectoyIfNotExist**(`path`: *string*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* |

**Returns:** *void*

Defined in: [restWrapper.ts:1309](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L1309)

___

### CreateLogonModel

▸ **CreateLogonModel**(`user`: *string*, `pw`: *string*, `org`: *string*, `hostID`: *string*): [*ILogonModel*](../interfaces/types_dw_rest.dwrest.ilogonmodel.md)

Helper function for preparing the logon

#### Parameters:

Name | Type |
------ | ------ |
`user` | *string* |
`pw` | *string* |
`org` | *string* |
`hostID` | *string* |

**Returns:** [*ILogonModel*](../interfaces/types_dw_rest.dwrest.ilogonmodel.md)

Defined in: [restWrapper.ts:58](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L58)

___

### CreateNewDocumentContent

▸ **CreateNewDocumentContent**(`indexFields`: [*IField*](../interfaces/types_dw_rest.dwrest.ifield.md)[], `applicationProperties`: [*IDocumentApplicationProperty*](../interfaces/types_dw_rest.dwrest.idocumentapplicationproperty.md)[]): *Promise*<[*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md)\>

Creates a new document with the needed keys depending on the given parameters

**`memberof`** RestCallWrapper

#### Parameters:

Name | Type |
------ | ------ |
`indexFields` | [*IField*](../interfaces/types_dw_rest.dwrest.ifield.md)[] |
`applicationProperties` | [*IDocumentApplicationProperty*](../interfaces/types_dw_rest.dwrest.idocumentapplicationproperty.md)[] |

**Returns:** *Promise*<[*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md)\>

Defined in: [restWrapper.ts:479](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L479)

___

### CreateUser

▸ **CreateUser**(`organization`: [*IOrganization*](../interfaces/types_dw_rest.dwrest.iorganization.md), `newUser`: [*INewUser*](../interfaces/types_dw_rest.dwrest.inewuser.md)): *Promise*<[*IUser*](../interfaces/types_dw_rest.dwrest.iuser.md)\>

Create a new user

#### Parameters:

Name | Type |
------ | ------ |
`organization` | [*IOrganization*](../interfaces/types_dw_rest.dwrest.iorganization.md) |
`newUser` | [*INewUser*](../interfaces/types_dw_rest.dwrest.inewuser.md) |

**Returns:** *Promise*<[*IUser*](../interfaces/types_dw_rest.dwrest.iuser.md)\>

Defined in: [restWrapper.ts:890](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L890)

___

### DeleteDocumentLock

▸ **DeleteDocumentLock**(`document`: [*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md)): *Promise*<*void*\>

Remove a lock from a document

#### Parameters:

Name | Type |
------ | ------ |
`document` | [*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md) |

**Returns:** *Promise*<*void*\>

Defined in: [restWrapper.ts:1123](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L1123)

___

### DevideDocument

▸ **DevideDocument**(`document`: [*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md), `operation`: [*ContentDivideOperation*](../enums/types_dw_rest.dwrest.contentdivideoperation.md)): *Promise*<*any*\>

Devide a document

#### Parameters:

Name | Type |
------ | ------ |
`document` | [*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md) |
`operation` | [*ContentDivideOperation*](../enums/types_dw_rest.dwrest.contentdivideoperation.md) |

**Returns:** *Promise*<*any*\>

Defined in: [restWrapper.ts:844](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L844)

___

### DownloadDocument

▸ **DownloadDocument**(`fullLoadedDocument`: [*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md), `includeAnnotations`: *boolean*, `targetFileType`: [*TargetFileType*](../enums/types_dw_rest.dwrest.targetfiletype.md)): *Promise*<*string*\>

Download a single document

#### Parameters:

Name | Type |
------ | ------ |
`fullLoadedDocument` | [*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md) |
`includeAnnotations` | *boolean* |
`targetFileType` | [*TargetFileType*](../enums/types_dw_rest.dwrest.targetfiletype.md) |

**Returns:** *Promise*<*string*\>

Defined in: [restWrapper.ts:395](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L395)

___

### DownloadFile

▸ `Private`**DownloadFile**(`request`: *RequestPromise*<*any*\>, `reject`: (`reason?`: *any*) => *void*, `resolve`: (`value?`: *any*) => *void*): *Promise*<*void*\>

Helper method to download file from response

**`memberof`** RestCallWrapper

#### Parameters:

Name | Type |
------ | ------ |
`request` | *RequestPromise*<*any*\> |
`reject` | (`reason?`: *any*) => *void* |
`resolve` | (`value?`: *any*) => *void* |

**Returns:** *Promise*<*void*\>

Defined in: [restWrapper.ts:1247](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L1247)

___

### EditDocumentSection

▸ **EditDocumentSection**(`fullLoadedSection`: [*ISection*](../interfaces/types_dw_rest.dwrest.isection.md), `pathToFileForReplace`: *string*): *Promise*<[*ISection*](../interfaces/types_dw_rest.dwrest.isection.md)\>

Manipulate a document and upload it again
In this example we make a zip out of it

#### Parameters:

Name | Type |
------ | ------ |
`fullLoadedSection` | [*ISection*](../interfaces/types_dw_rest.dwrest.isection.md) |
`pathToFileForReplace` | *string* |

**Returns:** *Promise*<[*ISection*](../interfaces/types_dw_rest.dwrest.isection.md)\>

Defined in: [restWrapper.ts:612](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L612)

___

### ExportDWXArchive

▸ **ExportDWXArchive**(`documentOrDocuments`: [*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md) \| [*IDocumentsQueryResult*](../interfaces/types_dw_rest.dwrest.idocumentsqueryresult.md), `exportSettings`: [*IExportSettings*](../interfaces/types_dw_rest.dwrest.iexportsettings.md)): *Promise*<*string*\>

Import a DWX. DWX is the exchange format of DocuWare

#### Parameters:

Name | Type |
------ | ------ |
`documentOrDocuments` | [*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md) \| [*IDocumentsQueryResult*](../interfaces/types_dw_rest.dwrest.idocumentsqueryresult.md) |
`exportSettings` | [*IExportSettings*](../interfaces/types_dw_rest.dwrest.iexportsettings.md) |

**Returns:** *Promise*<*string*\>

Defined in: [restWrapper.ts:1080](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L1080)

___

### GetAllDialogsFromFileCabinet

▸ **GetAllDialogsFromFileCabinet**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md)): *Promise*<[*IDialogsResponse*](../interfaces/types_dw_rest.dwrest.idialogsresponse.md)\>

Returns all kind of dialogs of a filecabinet

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md) |

**Returns:** *Promise*<[*IDialogsResponse*](../interfaces/types_dw_rest.dwrest.idialogsresponse.md)\>

Defined in: [restWrapper.ts:264](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L264)

___

### GetAllFileCabinetsWithoutDocumentTrays

▸ **GetAllFileCabinetsWithoutDocumentTrays**(`fileCabinets`: [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md)[]): [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md)[]

Filters list of FileCabinet Objects and returns only filecabinets
Info: FileCabinet Object can be a document tray OR a filecabinet

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinets` | [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md)[] |

**Returns:** [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md)[]

Defined in: [restWrapper.ts:171](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L171)

___

### GetControllerWorkflows

▸ **GetControllerWorkflows**(`organization`: [*IOrganization*](../interfaces/types_dw_rest.dwrest.iorganization.md)): *Promise*<[*IWorkflows*](../interfaces/types_dw_rest.dwrest.iworkflows.md)\>

Get controller workflows

#### Parameters:

Name | Type |
------ | ------ |
`organization` | [*IOrganization*](../interfaces/types_dw_rest.dwrest.iorganization.md) |

**Returns:** *Promise*<[*IWorkflows*](../interfaces/types_dw_rest.dwrest.iworkflows.md)\>

Defined in: [restWrapper.ts:1167](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L1167)

___

### GetDedicatedDialogsFromFileCabinet

▸ **GetDedicatedDialogsFromFileCabinet**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md), `dialogType`: [*DialogType*](../enums/types_dw_rest.dwrest.dialogtype.md)): *Promise*<[*IDialog*](../interfaces/types_dw_rest.dwrest.idialog.md)[]\>

Returns a list of specified dialogs

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md) |
`dialogType` | [*DialogType*](../enums/types_dw_rest.dwrest.dialogtype.md) |

**Returns:** *Promise*<[*IDialog*](../interfaces/types_dw_rest.dwrest.idialog.md)[]\>

Defined in: [restWrapper.ts:302](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L302)

___

### GetDefaultDocumentTray

▸ **GetDefaultDocumentTray**(`fileCabinets`: [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md)[]): *undefined* \| [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md)

  Filters list of FileCabinet Objects and returns only document trays
Info: FileCabinet Object can be a document tray OR a filecabinet

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinets` | [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md)[] |

**Returns:** *undefined* \| [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md)

Defined in: [restWrapper.ts:182](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L182)

___

### GetDialogLink

▸ **GetDialogLink**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md), `dialogType`: [*DialogType*](../enums/types_dw_rest.dwrest.dialogtype.md)): *string*

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md) |
`dialogType` | [*DialogType*](../enums/types_dw_rest.dwrest.dialogtype.md) |

**Returns:** *string*

Defined in: [restWrapper.ts:271](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L271)

___

### GetDocumentByDocID

▸ **GetDocumentByDocID**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md), `docId`: *number*, `fullLoad?`: *boolean*): *Promise*<[*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md)\>

Get a document by DocId

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md) | - |
`docId` | *number* | - |
`fullLoad` | *boolean* | false |

**Returns:** *Promise*<[*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md)\>

Defined in: [restWrapper.ts:212](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L212)

___

### GetDocumentQueryResultForSpecifiedCountFromFileCabinet

▸ **GetDocumentQueryResultForSpecifiedCountFromFileCabinet**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md), `count`: *number*): *Promise*<[*IDocumentsQueryResult*](../interfaces/types_dw_rest.dwrest.idocumentsqueryresult.md)\>

Get the first x documents from a file cabinet

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md) |
`count` | *number* |

**Returns:** *Promise*<[*IDocumentsQueryResult*](../interfaces/types_dw_rest.dwrest.idocumentsqueryresult.md)\>

Defined in: [restWrapper.ts:233](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L233)

___

### GetDocumentsFromFileCabinet

▸ **GetDocumentsFromFileCabinet**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md)): *Promise*<[*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md)[]\>

Returns documents of filecabinet without criteria
Info: Is restricted to the first 1000 per default

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md) |

**Returns:** *Promise*<[*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md)[]\>

Defined in: [restWrapper.ts:194](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L194)

___

### GetFileCabinet

▸ **GetFileCabinet**(`fcGuid`: *string*): *Promise*<[*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md)\>

Returns a special FileCabinet by GUID

#### Parameters:

Name | Type |
------ | ------ |
`fcGuid` | *string* |

**Returns:** *Promise*<[*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md)\>

Defined in: [restWrapper.ts:159](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L159)

___

### GetFileCabinets

▸ **GetFileCabinets**(`org`: [*IOrganization*](../interfaces/types_dw_rest.dwrest.iorganization.md)): *Promise*<[*IFileCabinets*](../interfaces/types_dw_rest.dwrest.ifilecabinets.md)\>

Returns list of FileCabinets

#### Parameters:

Name | Type |
------ | ------ |
`org` | [*IOrganization*](../interfaces/types_dw_rest.dwrest.iorganization.md) |

**Returns:** *Promise*<[*IFileCabinets*](../interfaces/types_dw_rest.dwrest.ifilecabinets.md)\>

Defined in: [restWrapper.ts:144](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L144)

___

### GetGroupByName

▸ **GetGroupByName**(`organization`: [*IOrganization*](../interfaces/types_dw_rest.dwrest.iorganization.md), `name`: *string*): *Promise*<[*IGroup*](../interfaces/types_dw_rest.dwrest.igroup.md)\>

Get a group by it's name

#### Parameters:

Name | Type |
------ | ------ |
`organization` | [*IOrganization*](../interfaces/types_dw_rest.dwrest.iorganization.md) |
`name` | *string* |

**Returns:** *Promise*<[*IGroup*](../interfaces/types_dw_rest.dwrest.igroup.md)\>

Defined in: [restWrapper.ts:992](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L992)

___

### GetLink

▸ `Private`**GetLink**(`linkModel`: [*ILinkModel*](../interfaces/types_dw_rest.dwrest.ilinkmodel.md), `linkName`: *string*): *string*

Helper method to check if link exists or not

#### Parameters:

Name | Type |
------ | ------ |
`linkModel` | [*ILinkModel*](../interfaces/types_dw_rest.dwrest.ilinkmodel.md) |
`linkName` | *string* |

**Returns:** *string*

Defined in: [restWrapper.ts:1280](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L1280)

___

### GetLinkFromModel

▸ `Private`**GetLinkFromModel**(`linkModel`: [*ILinkModel*](../interfaces/types_dw_rest.dwrest.ilinkmodel.md), `linkName`: *string*): *null* \| *string*

Get link from object by name

#### Parameters:

Name | Type |
------ | ------ |
`linkModel` | [*ILinkModel*](../interfaces/types_dw_rest.dwrest.ilinkmodel.md) |
`linkName` | *string* |

**Returns:** *null* \| *string*

Defined in: [restWrapper.ts:1298](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L1298)

___

### GetNextResultFromDocumentQueryResult

▸ **GetNextResultFromDocumentQueryResult**(`documentQueryResult`: [*IDocumentsQueryResult*](../interfaces/types_dw_rest.dwrest.idocumentsqueryresult.md)): *Promise*<[*IDocumentsQueryResult*](../interfaces/types_dw_rest.dwrest.idocumentsqueryresult.md)\>

Returns the next 'page' of document results
Info: Be careful, the next result will contain same amount of results like the provided {DWRest.DocumentsQueryResult}!
So if you searched for 2 results you will only get another 2!

#### Parameters:

Name | Type |
------ | ------ |
`documentQueryResult` | [*IDocumentsQueryResult*](../interfaces/types_dw_rest.dwrest.idocumentsqueryresult.md) |

**Returns:** *Promise*<[*IDocumentsQueryResult*](../interfaces/types_dw_rest.dwrest.idocumentsqueryresult.md)\>

Defined in: [restWrapper.ts:245](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L245)

___

### GetOrganization

▸ **GetOrganization**(): *Promise*<[*IOrganization*](../interfaces/types_dw_rest.dwrest.iorganization.md)\>

Returns your Organization

**Returns:** *Promise*<[*IOrganization*](../interfaces/types_dw_rest.dwrest.iorganization.md)\>

Defined in: [restWrapper.ts:118](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L118)

___

### GetOrganizations

▸ **GetOrganizations**(`logonResponse`: [*ILogonResponse*](../interfaces/types_dw_rest.dwrest.ilogonresponse.md)): *Promise*<[*IOrganizations*](../interfaces/types_dw_rest.dwrest.iorganizations.md)\>

Returns all organizations

#### Parameters:

Name | Type |
------ | ------ |
`logonResponse` | [*ILogonResponse*](../interfaces/types_dw_rest.dwrest.ilogonresponse.md) |

**Returns:** *Promise*<[*IOrganizations*](../interfaces/types_dw_rest.dwrest.iorganizations.md)\>

Defined in: [restWrapper.ts:130](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L130)

___

### GetPageByNumber

▸ **GetPageByNumber**(`fullLoadedSection`: [*ISection*](../interfaces/types_dw_rest.dwrest.isection.md), `pageNumber`: *number*, `fullLoad?`: *boolean*): *Promise*<[*IPage*](../interfaces/types_dw_rest.dwrest.ipage.md)\>

Get a single page by section and page number

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`fullLoadedSection` | [*ISection*](../interfaces/types_dw_rest.dwrest.isection.md) | - |
`pageNumber` | *number* | - |
`fullLoad` | *boolean* | false |

**Returns:** *Promise*<[*IPage*](../interfaces/types_dw_rest.dwrest.ipage.md)\>

Defined in: [restWrapper.ts:716](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L716)

___

### GetQueryResults

▸ **GetQueryResults**(`queryUrl`: *string*): *Promise*<[*IDocumentsQueryResult*](../interfaces/types_dw_rest.dwrest.idocumentsqueryresult.md)\>

Send query to get results

#### Parameters:

Name | Type |
------ | ------ |
`queryUrl` | *string* |

**Returns:** *Promise*<[*IDocumentsQueryResult*](../interfaces/types_dw_rest.dwrest.idocumentsqueryresult.md)\>

Defined in: [restWrapper.ts:368](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L368)

___

### GetQueryUrlFromFileCabinet

▸ **GetQueryUrlFromFileCabinet**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md), `dialogExpression`: [*IDialogExpression*](../interfaces/types_dw_rest.dwrest.idialogexpression.md), `dialogId`: *string*, `fields`: *string*[], `fieldToSort`: *string*, `sortOrder`: [*SortOrder*](../enums/types_dw_rest.dwrest.sortorder.md)): *Promise*<*string*\>

Get a query build by DocuWare Platform for later execution

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md) |
`dialogExpression` | [*IDialogExpression*](../interfaces/types_dw_rest.dwrest.idialogexpression.md) |
`dialogId` | *string* |
`fields` | *string*[] |
`fieldToSort` | *string* |
`sortOrder` | [*SortOrder*](../enums/types_dw_rest.dwrest.sortorder.md) |

**Returns:** *Promise*<*string*\>

Defined in: [restWrapper.ts:342](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L342)

___

### GetRoleByName

▸ **GetRoleByName**(`organization`: [*IOrganization*](../interfaces/types_dw_rest.dwrest.iorganization.md), `name`: *string*): *Promise*<[*IRole*](../interfaces/types_dw_rest.dwrest.irole.md)\>

Get a role by it's name

#### Parameters:

Name | Type |
------ | ------ |
`organization` | [*IOrganization*](../interfaces/types_dw_rest.dwrest.iorganization.md) |
`name` | *string* |

**Returns:** *Promise*<[*IRole*](../interfaces/types_dw_rest.dwrest.irole.md)\>

Defined in: [restWrapper.ts:1018](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L1018)

___

### GetWorkflowTasks

▸ **GetWorkflowTasks**(`workflow`: [*IWorkflow*](../interfaces/types_dw_rest.dwrest.iworkflow.md)): *Promise*<[*IWorkflowTasks*](../interfaces/types_dw_rest.dwrest.iworkflowtasks.md)\>

Get workflow tasks for dedicated workflow

#### Parameters:

Name | Type |
------ | ------ |
`workflow` | [*IWorkflow*](../interfaces/types_dw_rest.dwrest.iworkflow.md) |

**Returns:** *Promise*<[*IWorkflowTasks*](../interfaces/types_dw_rest.dwrest.iworkflowtasks.md)\>

Defined in: [restWrapper.ts:1180](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L1180)

___

### GetWorkflows

▸ **GetWorkflows**(`organization`: [*IOrganization*](../interfaces/types_dw_rest.dwrest.iorganization.md)): *Promise*<[*IWorkflows*](../interfaces/types_dw_rest.dwrest.iworkflows.md)\>

Get workflows (The workflow needs to be triggered at least once before you'll get return values)

#### Parameters:

Name | Type |
------ | ------ |
`organization` | [*IOrganization*](../interfaces/types_dw_rest.dwrest.iorganization.md) |

**Returns:** *Promise*<[*IWorkflows*](../interfaces/types_dw_rest.dwrest.iworkflows.md)\>

Defined in: [restWrapper.ts:1154](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L1154)

___

### ImportDWXArchive

▸ **ImportDWXArchive**(`pathOfDWX`: *string*, `fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md), `importSettings`: [*IImportSettings*](../interfaces/types_dw_rest.dwrest.iimportsettings.md)): *Promise*<[*IImportResult*](../interfaces/types_dw_rest.dwrest.iimportresult.md)\>

Import a dwx archive. DWX is the exchange format of DocuWare

#### Parameters:

Name | Type |
------ | ------ |
`pathOfDWX` | *string* |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md) |
`importSettings` | [*IImportSettings*](../interfaces/types_dw_rest.dwrest.iimportsettings.md) |

**Returns:** *Promise*<[*IImportResult*](../interfaces/types_dw_rest.dwrest.iimportresult.md)\>

Defined in: [restWrapper.ts:1045](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L1045)

___

### LoadFullObjectFromPlatform

▸ **LoadFullObjectFromPlatform**<T\>(`notYetFullLoadedObject`: [*ILinkModel*](../interfaces/types_dw_rest.dwrest.ilinkmodel.md)): *Promise*<T\>

Gets the 'self' link of provided object and retrieves the full load of properties and data

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`notYetFullLoadedObject` | [*ILinkModel*](../interfaces/types_dw_rest.dwrest.ilinkmodel.md) |

**Returns:** *Promise*<T\>

Defined in: [restWrapper.ts:321](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L321)

___

### LockDocument

▸ **LockDocument**(`document`: [*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md), `timeToLockInSeconds`: *number*): *Promise*<*void*\>

Do explicit lock of a document

#### Parameters:

Name | Type |
------ | ------ |
`document` | [*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md) |
`timeToLockInSeconds` | *number* |

**Returns:** *Promise*<*void*\>

Defined in: [restWrapper.ts:1104](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L1104)

___

### Logon

▸ **Logon**(`model`: [*ILogonModel*](../interfaces/types_dw_rest.dwrest.ilogonmodel.md)): *Promise*<[*ILogonResponse*](../interfaces/types_dw_rest.dwrest.ilogonresponse.md)\>

Handles logon and sets cookies to 'global' {RequestPromiseOptions}

#### Parameters:

Name | Type |
------ | ------ |
`model` | [*ILogonModel*](../interfaces/types_dw_rest.dwrest.ilogonmodel.md) |

**Returns:** *Promise*<[*ILogonResponse*](../interfaces/types_dw_rest.dwrest.ilogonresponse.md)\>

Defined in: [restWrapper.ts:76](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L76)

___

### MergeDocument

▸ **MergeDocument**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md), `docIds`: *number*[], `operation`: [*ContentMergeOperation*](../enums/types_dw_rest.dwrest.contentmergeoperation.md)): *Promise*<[*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md)\>

Merges a document
Info: Staple is only supported for document trays

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md) |
`docIds` | *number*[] |
`operation` | [*ContentMergeOperation*](../enums/types_dw_rest.dwrest.contentmergeoperation.md) |

**Returns:** *Promise*<[*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md)\>

Defined in: [restWrapper.ts:865](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L865)

___

### PlaceAStampWithBestPosition

▸ **PlaceAStampWithBestPosition**(`page`: [*IPage*](../interfaces/types_dw_rest.dwrest.ipage.md), `stampPlacement`: [*IStampPlacement*](../interfaces/types_dw_rest.dwrest.istampplacement.md)): *Promise*<*void*\>

Gets the best position for a stamp an paces it

#### Parameters:

Name | Type |
------ | ------ |
`page` | [*IPage*](../interfaces/types_dw_rest.dwrest.ipage.md) |
`stampPlacement` | [*IStampPlacement*](../interfaces/types_dw_rest.dwrest.istampplacement.md) |

**Returns:** *Promise*<*void*\>

Defined in: [restWrapper.ts:754](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L754)

___

### PlaceAnnotation

▸ **PlaceAnnotation**(`page`: [*IPage*](../interfaces/types_dw_rest.dwrest.ipage.md), `annotation`: [*IAnnotation*](../interfaces/types_dw_rest.dwrest.iannotation.md)): *Promise*<[*IAnnotation*](../interfaces/types_dw_rest.dwrest.iannotation.md)\>

Place an annotation to a single page

#### Parameters:

Name | Type |
------ | ------ |
`page` | [*IPage*](../interfaces/types_dw_rest.dwrest.ipage.md) |
`annotation` | [*IAnnotation*](../interfaces/types_dw_rest.dwrest.iannotation.md) |

**Returns:** *Promise*<[*IAnnotation*](../interfaces/types_dw_rest.dwrest.iannotation.md)\>

Defined in: [restWrapper.ts:830](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L830)

___

### RemoveUserFromGroup

▸ **RemoveUserFromGroup**(`user`: [*IUser*](../interfaces/types_dw_rest.dwrest.iuser.md), `groupId`: *string*): *Promise*<*void*\>

 Remove a group from a user

#### Parameters:

Name | Type |
------ | ------ |
`user` | [*IUser*](../interfaces/types_dw_rest.dwrest.iuser.md) |
`groupId` | *string* |

**Returns:** *Promise*<*void*\>

Defined in: [restWrapper.ts:973](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L973)

___

### RemoveUserFromRole

▸ **RemoveUserFromRole**(`user`: [*IUser*](../interfaces/types_dw_rest.dwrest.iuser.md), `roleId`: *string*): *Promise*<*void*\>

Remove a role from a user

#### Parameters:

Name | Type |
------ | ------ |
`user` | [*IUser*](../interfaces/types_dw_rest.dwrest.iuser.md) |
`roleId` | *string* |

**Returns:** *Promise*<*void*\>

Defined in: [restWrapper.ts:954](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L954)

___

### TransferFromDocumentTrayToFileCabinet

▸ **TransferFromDocumentTrayToFileCabinet**(`docIds`: *number*[], `basketId`: *string*, `fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md), `keepSource`: *boolean*): *Promise*<[*IDocumentsQueryResult*](../interfaces/types_dw_rest.dwrest.idocumentsqueryresult.md)\>

Transfer a number documents from document tray to filecabinet

#### Parameters:

Name | Type |
------ | ------ |
`docIds` | *number*[] |
`basketId` | *string* |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md) |
`keepSource` | *boolean* |

**Returns:** *Promise*<[*IDocumentsQueryResult*](../interfaces/types_dw_rest.dwrest.idocumentsqueryresult.md)\>

Defined in: [restWrapper.ts:777](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L777)

___

### TransferFromFileCabinetToFileCabinet

▸ **TransferFromFileCabinetToFileCabinet**(`documents`: [*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md)[], `sourceFileCabinetId`: *string*, `destinationFileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md), `keepSource`: *boolean*): *Promise*<[*IDocumentsQueryResult*](../interfaces/types_dw_rest.dwrest.idocumentsqueryresult.md)\>

Transfer a document from filecabinet to another (or the same) filecabinet

#### Parameters:

Name | Type |
------ | ------ |
`documents` | [*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md)[] |
`sourceFileCabinetId` | *string* |
`destinationFileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md) |
`keepSource` | *boolean* |

**Returns:** *Promise*<[*IDocumentsQueryResult*](../interfaces/types_dw_rest.dwrest.idocumentsqueryresult.md)\>

Defined in: [restWrapper.ts:804](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L804)

___

### UpdateDocumentIndexValues

▸ **UpdateDocumentIndexValues**(`document`: [*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md), `fieldsToUpdate`: [*IFieldList*](../interfaces/types_dw_rest.dwrest.ifieldlist.md)): *Promise*<[*IFieldList*](../interfaces/types_dw_rest.dwrest.ifieldlist.md)\>

Update index values of specified document

#### Parameters:

Name | Type |
------ | ------ |
`document` | [*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md) |
`fieldsToUpdate` | [*IFieldList*](../interfaces/types_dw_rest.dwrest.ifieldlist.md) |

**Returns:** *Promise*<[*IFieldList*](../interfaces/types_dw_rest.dwrest.ifieldlist.md)\>

Defined in: [restWrapper.ts:380](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L380)

___

### UploadBigDocumentBase

▸ **UploadBigDocumentBase**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md), `pathToFile`: *string*, `dwDocumentContent?`: *string*, `dwDocumentContentType?`: [*ContentType*](../enums/restwrapper.contenttype.md)): *Promise*<[*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md)\>

Store big document with optional index entries as xml or json string

**`memberof`** RestCallWrapper

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md) | - |
`pathToFile` | *string* | - |
`dwDocumentContent` | *string* | '' |
`dwDocumentContentType` | [*ContentType*](../enums/restwrapper.contenttype.md) | ... |

**Returns:** *Promise*<[*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md)\>

Defined in: [restWrapper.ts:505](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L505)

___

### UploadBigDocumentJsonContextType

▸ **UploadBigDocumentJsonContextType**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md), `pathToFile`: *string*, `indexFields`: [*IField*](../interfaces/types_dw_rest.dwrest.ifield.md)[], `applicationProperties`: [*IDocumentApplicationProperty*](../interfaces/types_dw_rest.dwrest.idocumentapplicationproperty.md)[]): *Promise*<[*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md)\>

Store big document with optional json index fields and/or application properties

**`memberof`** RestCallWrapper

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md) |
`pathToFile` | *string* |
`indexFields` | [*IField*](../interfaces/types_dw_rest.dwrest.ifield.md)[] |
`applicationProperties` | [*IDocumentApplicationProperty*](../interfaces/types_dw_rest.dwrest.idocumentapplicationproperty.md)[] |

**Returns:** *Promise*<[*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md)\>

Defined in: [restWrapper.ts:459](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L459)

___

### UploadDocument

▸ **UploadDocument**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md), `indexFields`: [*IField*](../interfaces/types_dw_rest.dwrest.ifield.md)[], `pathToFile`: *string*): *Promise*<[*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md)\>

Store document with index entries

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.dwrest.ifilecabinet.md) |
`indexFields` | [*IField*](../interfaces/types_dw_rest.dwrest.ifield.md)[] |
`pathToFile` | *string* |

**Returns:** *Promise*<[*IDocument*](../interfaces/types_dw_rest.dwrest.idocument.md)\>

Defined in: [restWrapper.ts:416](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/restWrapper.ts#L416)
