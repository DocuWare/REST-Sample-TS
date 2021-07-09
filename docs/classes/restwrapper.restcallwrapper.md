[Typedoc project reference documentation](../README.md) / [Modules](../modules.md) / [restWrapper](../modules/restwrapper.md) / RestCallWrapper

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
- [UploadBigDocumentJsonContextTypMultipleSection](restwrapper.restcallwrapper.md#uploadbigdocumentjsoncontexttypmultiplesection)
- [UploadBigDocumentJsonContextTypeSingleSection](restwrapper.restcallwrapper.md#uploadbigdocumentjsoncontexttypesinglesection)
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

Defined in: restWrapper.ts:29

## Properties

### docuWare\_request\_config

• **docuWare\_request\_config**: RequestPromiseOptions

Defined in: restWrapper.ts:29

___

### platformRoot

• **platformRoot**: *string*

Set root without /DocuWare/Platform because the rel links of platform responses will contain it

Defined in: restWrapper.ts:28

## Methods

### AddApplicationProperties

▸ **AddApplicationProperties**(`document`: [*IDocument*](../interfaces/types_dw_rest.idocument.md), `applicationProperties`: [*IDocumentApplicationProperty*](../interfaces/types_dw_rest.idocumentapplicationproperty.md)[]): *Promise*<[*IDocumentApplicationProperties*](../interfaces/types_dw_rest.idocumentapplicationproperties.md)\>

Add application properties, those properties can be used to save custom meta data

#### Parameters:

Name | Type |
------ | ------ |
`document` | [*IDocument*](../interfaces/types_dw_rest.idocument.md) |
`applicationProperties` | [*IDocumentApplicationProperty*](../interfaces/types_dw_rest.idocumentapplicationproperty.md)[] |

**Returns:** *Promise*<[*IDocumentApplicationProperties*](../interfaces/types_dw_rest.idocumentapplicationproperties.md)\>

Defined in: restWrapper.ts:1171

___

### AssignUserToGroup

▸ **AssignUserToGroup**(`user`: [*IUser*](../interfaces/types_dw_rest.iuser.md), `group`: [*IGroup*](../interfaces/types_dw_rest.igroup.md)): *Promise*<*void*\>

Assign a dedicated user to a group

#### Parameters:

Name | Type |
------ | ------ |
`user` | [*IUser*](../interfaces/types_dw_rest.iuser.md) |
`group` | [*IGroup*](../interfaces/types_dw_rest.igroup.md) |

**Returns:** *Promise*<*void*\>

Defined in: restWrapper.ts:965

___

### AssignUserToRole

▸ **AssignUserToRole**(`user`: [*IUser*](../interfaces/types_dw_rest.iuser.md), `role`: [*IRole*](../interfaces/types_dw_rest.irole.md)): *Promise*<*void*\>

Assign a dedicated user to a role

#### Parameters:

Name | Type |
------ | ------ |
`user` | [*IUser*](../interfaces/types_dw_rest.iuser.md) |
`role` | [*IRole*](../interfaces/types_dw_rest.irole.md) |

**Returns:** *Promise*<*void*\>

Defined in: restWrapper.ts:942

___

### BuildTimeSpanString

▸ `Private`**BuildTimeSpanString**(`seconds`: *number*): *any*

Helper method for getting a TimeSpan string

#### Parameters:

Name | Type |
------ | ------ |
`seconds` | *number* |

**Returns:** *any*

Defined in: restWrapper.ts:1265

___

### CheckInFromFileSystem

▸ **CheckInFromFileSystem**(`fullLoadedDocument`: [*IDocument*](../interfaces/types_dw_rest.idocument.md), `pathToFile`: *string*, `checkinParameters`: [*ICheckInActionParameters*](../interfaces/types_dw_rest.icheckinactionparameters.md)): *Promise*<[*IDocument*](../interfaces/types_dw_rest.idocument.md)\>

Check in a checked out document

#### Parameters:

Name | Type |
------ | ------ |
`fullLoadedDocument` | [*IDocument*](../interfaces/types_dw_rest.idocument.md) |
`pathToFile` | *string* |
`checkinParameters` | [*ICheckInActionParameters*](../interfaces/types_dw_rest.icheckinactionparameters.md) |

**Returns:** *Promise*<[*IDocument*](../interfaces/types_dw_rest.idocument.md)\>

Defined in: restWrapper.ts:693

___

### CheckoutToFileSystem

▸ **CheckoutToFileSystem**(`fullLoadedDocument`: [*IDocument*](../interfaces/types_dw_rest.idocument.md)): *Promise*<*string*\>

Check out a document to the file system

#### Parameters:

Name | Type |
------ | ------ |
`fullLoadedDocument` | [*IDocument*](../interfaces/types_dw_rest.idocument.md) |

**Returns:** *Promise*<*string*\>

Defined in: restWrapper.ts:671

___

### ConfirmWorkflowTask

▸ **ConfirmWorkflowTask**(`task`: [*IWorkflowTask*](../interfaces/types_dw_rest.iworkflowtask.md)): *Promise*<*void*\>

Confirms a tasks, this example takes the first text form and confirms with demo string

#### Parameters:

Name | Type |
------ | ------ |
`task` | [*IWorkflowTask*](../interfaces/types_dw_rest.iworkflowtask.md) |

**Returns:** *Promise*<*void*\>

Defined in: restWrapper.ts:1227

___

### CreateDirectoryIfNotExist

▸ `Private`**CreateDirectoryIfNotExist**(`path`: *string*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* |

**Returns:** *void*

Defined in: restWrapper.ts:1343

___

### CreateLogonModel

▸ **CreateLogonModel**(`user`: *string*, `pw`: *string*, `org`: *string*, `hostID`: *string*): [*ILogonModel*](../interfaces/types_dw_rest.ilogonmodel.md)

Helper function for preparing the logon

#### Parameters:

Name | Type |
------ | ------ |
`user` | *string* |
`pw` | *string* |
`org` | *string* |
`hostID` | *string* |

**Returns:** [*ILogonModel*](../interfaces/types_dw_rest.ilogonmodel.md)

Defined in: restWrapper.ts:56

___

### CreateNewDocumentContent

▸ **CreateNewDocumentContent**(`indexFields`: [*IField*](../interfaces/types_dw_rest.ifield.md)[], `applicationProperties`: [*IDocumentApplicationProperty*](../interfaces/types_dw_rest.idocumentapplicationproperty.md)[]): *Promise*<[*IDocument*](../interfaces/types_dw_rest.idocument.md)\>

Creates a new document with the needed keys depending on the given parameters

**`memberof`** RestCallWrapper

#### Parameters:

Name | Type |
------ | ------ |
`indexFields` | [*IField*](../interfaces/types_dw_rest.ifield.md)[] |
`applicationProperties` | [*IDocumentApplicationProperty*](../interfaces/types_dw_rest.idocumentapplicationproperty.md)[] |

**Returns:** *Promise*<[*IDocument*](../interfaces/types_dw_rest.idocument.md)\>

Defined in: restWrapper.ts:508

___

### CreateUser

▸ **CreateUser**(`organization`: [*IOrganization*](../interfaces/types_dw_rest.iorganization.md), `newUser`: [*INewUser*](../interfaces/types_dw_rest.inewuser.md)): *Promise*<[*IUser*](../interfaces/types_dw_rest.iuser.md)\>

Create a new user

#### Parameters:

Name | Type |
------ | ------ |
`organization` | [*IOrganization*](../interfaces/types_dw_rest.iorganization.md) |
`newUser` | [*INewUser*](../interfaces/types_dw_rest.inewuser.md) |

**Returns:** *Promise*<[*IUser*](../interfaces/types_dw_rest.iuser.md)\>

Defined in: restWrapper.ts:924

___

### DeleteDocumentLock

▸ **DeleteDocumentLock**(`document`: [*IDocument*](../interfaces/types_dw_rest.idocument.md)): *Promise*<*void*\>

Remove a lock from a document

#### Parameters:

Name | Type |
------ | ------ |
`document` | [*IDocument*](../interfaces/types_dw_rest.idocument.md) |

**Returns:** *Promise*<*void*\>

Defined in: restWrapper.ts:1157

___

### DivideDocument

▸ **DivideDocument**(`document`: [*IDocument*](../interfaces/types_dw_rest.idocument.md), `operation`: [*ContentDivideOperation*](../enums/types_dw_rest.contentdivideoperation.md)): *Promise*<*any*\>

Divide a document

#### Parameters:

Name | Type |
------ | ------ |
`document` | [*IDocument*](../interfaces/types_dw_rest.idocument.md) |
`operation` | [*ContentDivideOperation*](../enums/types_dw_rest.contentdivideoperation.md) |

**Returns:** *Promise*<*any*\>

Defined in: restWrapper.ts:878

___

### DownloadDocument

▸ **DownloadDocument**(`fullLoadedDocument`: [*IDocument*](../interfaces/types_dw_rest.idocument.md), `includeAnnotations`: *boolean*, `targetFileType`: [*TargetFileType*](../enums/types_dw_rest.targetfiletype.md)): *Promise*<*string*\>

Download a single document

#### Parameters:

Name | Type |
------ | ------ |
`fullLoadedDocument` | [*IDocument*](../interfaces/types_dw_rest.idocument.md) |
`includeAnnotations` | *boolean* |
`targetFileType` | [*TargetFileType*](../enums/types_dw_rest.targetfiletype.md) |

**Returns:** *Promise*<*string*\>

Defined in: restWrapper.ts:393

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

Defined in: restWrapper.ts:1281

___

### EditDocumentSection

▸ **EditDocumentSection**(`fullLoadedSection`: [*ISection*](../interfaces/types_dw_rest.isection.md), `pathToFileForReplace`: *string*): *Promise*<[*ISection*](../interfaces/types_dw_rest.isection.md)\>

Manipulate a document and upload it again
In this example we make a zip out of it

#### Parameters:

Name | Type |
------ | ------ |
`fullLoadedSection` | [*ISection*](../interfaces/types_dw_rest.isection.md) |
`pathToFileForReplace` | *string* |

**Returns:** *Promise*<[*ISection*](../interfaces/types_dw_rest.isection.md)\>

Defined in: restWrapper.ts:646

___

### ExportDWXArchive

▸ **ExportDWXArchive**(`documentOrDocuments`: [*IDocument*](../interfaces/types_dw_rest.idocument.md) \| [*IDocumentsQueryResult*](../interfaces/types_dw_rest.idocumentsqueryresult.md), `exportSettings`: [*IExportSettings*](../interfaces/types_dw_rest.iexportsettings.md)): *Promise*<*string*\>

Import a DWX. DWX is the exchange format of DocuWare

#### Parameters:

Name | Type |
------ | ------ |
`documentOrDocuments` | [*IDocument*](../interfaces/types_dw_rest.idocument.md) \| [*IDocumentsQueryResult*](../interfaces/types_dw_rest.idocumentsqueryresult.md) |
`exportSettings` | [*IExportSettings*](../interfaces/types_dw_rest.iexportsettings.md) |

**Returns:** *Promise*<*string*\>

Defined in: restWrapper.ts:1114

___

### GetAllDialogsFromFileCabinet

▸ **GetAllDialogsFromFileCabinet**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md)): *Promise*<[*IDialogsResponse*](../interfaces/types_dw_rest.idialogsresponse.md)\>

Returns all kind of dialogs of a fileCabinet

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md) |

**Returns:** *Promise*<[*IDialogsResponse*](../interfaces/types_dw_rest.idialogsresponse.md)\>

Defined in: restWrapper.ts:262

___

### GetAllFileCabinetsWithoutDocumentTrays

▸ **GetAllFileCabinetsWithoutDocumentTrays**(`fileCabinets`: [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md)[]): [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md)[]

Filters list of FileCabinet Objects and returns only FileCabinets
Info: FileCabinet Object can be a document tray OR a FileCabinet

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinets` | [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md)[] |

**Returns:** [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md)[]

Defined in: restWrapper.ts:169

___

### GetControllerWorkflows

▸ **GetControllerWorkflows**(`organization`: [*IOrganization*](../interfaces/types_dw_rest.iorganization.md)): *Promise*<[*IWorkflows*](../interfaces/types_dw_rest.iworkflows.md)\>

Get controller workflows

#### Parameters:

Name | Type |
------ | ------ |
`organization` | [*IOrganization*](../interfaces/types_dw_rest.iorganization.md) |

**Returns:** *Promise*<[*IWorkflows*](../interfaces/types_dw_rest.iworkflows.md)\>

Defined in: restWrapper.ts:1201

___

### GetDedicatedDialogsFromFileCabinet

▸ **GetDedicatedDialogsFromFileCabinet**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md), `dialogType`: [*DialogType*](../enums/types_dw_rest.dialogtype.md)): *Promise*<[*IDialog*](../interfaces/types_dw_rest.idialog.md)[]\>

Returns a list of specified dialogs

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md) |
`dialogType` | [*DialogType*](../enums/types_dw_rest.dialogtype.md) |

**Returns:** *Promise*<[*IDialog*](../interfaces/types_dw_rest.idialog.md)[]\>

Defined in: restWrapper.ts:300

___

### GetDefaultDocumentTray

▸ **GetDefaultDocumentTray**(`fileCabinets`: [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md)[]): *undefined* \| [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md)

  Filters list of FileCabinet Objects and returns only document trays
Info: FileCabinet Object can be a document tray OR a FileCabinet

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinets` | [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md)[] |

**Returns:** *undefined* \| [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md)

Defined in: restWrapper.ts:180

___

### GetDialogLink

▸ **GetDialogLink**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md), `dialogType`: [*DialogType*](../enums/types_dw_rest.dialogtype.md)): *string*

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md) |
`dialogType` | [*DialogType*](../enums/types_dw_rest.dialogtype.md) |

**Returns:** *string*

Defined in: restWrapper.ts:269

___

### GetDocumentByDocID

▸ **GetDocumentByDocID**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md), `docId`: *number*, `fullLoad?`: *boolean*): *Promise*<[*IDocument*](../interfaces/types_dw_rest.idocument.md)\>

Get a document by DocId

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md) | - |
`docId` | *number* | - |
`fullLoad` | *boolean* | false |

**Returns:** *Promise*<[*IDocument*](../interfaces/types_dw_rest.idocument.md)\>

Defined in: restWrapper.ts:210

___

### GetDocumentQueryResultForSpecifiedCountFromFileCabinet

▸ **GetDocumentQueryResultForSpecifiedCountFromFileCabinet**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md), `count`: *number*): *Promise*<[*IDocumentsQueryResult*](../interfaces/types_dw_rest.idocumentsqueryresult.md)\>

Get the first x documents from a file cabinet

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md) |
`count` | *number* |

**Returns:** *Promise*<[*IDocumentsQueryResult*](../interfaces/types_dw_rest.idocumentsqueryresult.md)\>

Defined in: restWrapper.ts:231

___

### GetDocumentsFromFileCabinet

▸ **GetDocumentsFromFileCabinet**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md)): *Promise*<[*IDocument*](../interfaces/types_dw_rest.idocument.md)[]\>

Returns documents of FileCabinet without criteria
Info: Is restricted to the first 1000 per default

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md) |

**Returns:** *Promise*<[*IDocument*](../interfaces/types_dw_rest.idocument.md)[]\>

Defined in: restWrapper.ts:192

___

### GetFileCabinet

▸ **GetFileCabinet**(`fcGuid`: *string*): *Promise*<[*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md)\>

Returns a special FileCabinet by GUID

#### Parameters:

Name | Type |
------ | ------ |
`fcGuid` | *string* |

**Returns:** *Promise*<[*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md)\>

Defined in: restWrapper.ts:157

___

### GetFileCabinets

▸ **GetFileCabinets**(`org`: [*IOrganization*](../interfaces/types_dw_rest.iorganization.md)): *Promise*<[*IFileCabinets*](../interfaces/types_dw_rest.ifilecabinets.md)\>

Returns list of FileCabinets

#### Parameters:

Name | Type |
------ | ------ |
`org` | [*IOrganization*](../interfaces/types_dw_rest.iorganization.md) |

**Returns:** *Promise*<[*IFileCabinets*](../interfaces/types_dw_rest.ifilecabinets.md)\>

Defined in: restWrapper.ts:142

___

### GetGroupByName

▸ **GetGroupByName**(`organization`: [*IOrganization*](../interfaces/types_dw_rest.iorganization.md), `name`: *string*): *Promise*<[*IGroup*](../interfaces/types_dw_rest.igroup.md)\>

Get a group by it's name

#### Parameters:

Name | Type |
------ | ------ |
`organization` | [*IOrganization*](../interfaces/types_dw_rest.iorganization.md) |
`name` | *string* |

**Returns:** *Promise*<[*IGroup*](../interfaces/types_dw_rest.igroup.md)\>

Defined in: restWrapper.ts:1026

___

### GetLink

▸ `Private`**GetLink**(`linkModel`: [*ILinkModel*](../interfaces/types_dw_rest.ilinkmodel.md), `linkName`: *string*): *string*

Helper method to check if link exists or not

#### Parameters:

Name | Type |
------ | ------ |
`linkModel` | [*ILinkModel*](../interfaces/types_dw_rest.ilinkmodel.md) |
`linkName` | *string* |

**Returns:** *string*

Defined in: restWrapper.ts:1314

___

### GetLinkFromModel

▸ `Private`**GetLinkFromModel**(`linkModel`: [*ILinkModel*](../interfaces/types_dw_rest.ilinkmodel.md), `linkName`: *string*): *null* \| *string*

Get link from object by name

#### Parameters:

Name | Type |
------ | ------ |
`linkModel` | [*ILinkModel*](../interfaces/types_dw_rest.ilinkmodel.md) |
`linkName` | *string* |

**Returns:** *null* \| *string*

Defined in: restWrapper.ts:1332

___

### GetNextResultFromDocumentQueryResult

▸ **GetNextResultFromDocumentQueryResult**(`documentQueryResult`: [*IDocumentsQueryResult*](../interfaces/types_dw_rest.idocumentsqueryresult.md)): *Promise*<[*IDocumentsQueryResult*](../interfaces/types_dw_rest.idocumentsqueryresult.md)\>

Returns the next 'page' of document results
Info: Be careful, the next result will contain same amount of results like the provided {DWRest.DocumentsQueryResult}!
So if you searched for 2 results you will only get another 2!

#### Parameters:

Name | Type |
------ | ------ |
`documentQueryResult` | [*IDocumentsQueryResult*](../interfaces/types_dw_rest.idocumentsqueryresult.md) |

**Returns:** *Promise*<[*IDocumentsQueryResult*](../interfaces/types_dw_rest.idocumentsqueryresult.md)\>

Defined in: restWrapper.ts:243

___

### GetOrganization

▸ **GetOrganization**(): *Promise*<[*IOrganization*](../interfaces/types_dw_rest.iorganization.md)\>

Returns your Organization

**Returns:** *Promise*<[*IOrganization*](../interfaces/types_dw_rest.iorganization.md)\>

Defined in: restWrapper.ts:116

___

### GetOrganizations

▸ **GetOrganizations**(`logonResponse`: [*ILogonResponse*](../interfaces/types_dw_rest.ilogonresponse.md)): *Promise*<[*IOrganizations*](../interfaces/types_dw_rest.iorganizations.md)\>

Returns all organizations

#### Parameters:

Name | Type |
------ | ------ |
`logonResponse` | [*ILogonResponse*](../interfaces/types_dw_rest.ilogonresponse.md) |

**Returns:** *Promise*<[*IOrganizations*](../interfaces/types_dw_rest.iorganizations.md)\>

Defined in: restWrapper.ts:128

___

### GetPageByNumber

▸ **GetPageByNumber**(`fullLoadedSection`: [*ISection*](../interfaces/types_dw_rest.isection.md), `pageNumber`: *number*, `fullLoad?`: *boolean*): *Promise*<[*IPage*](../interfaces/types_dw_rest.ipage.md)\>

Get a single page by section and page number

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`fullLoadedSection` | [*ISection*](../interfaces/types_dw_rest.isection.md) | - |
`pageNumber` | *number* | - |
`fullLoad` | *boolean* | false |

**Returns:** *Promise*<[*IPage*](../interfaces/types_dw_rest.ipage.md)\>

Defined in: restWrapper.ts:750

___

### GetQueryResults

▸ **GetQueryResults**(`queryUrl`: *string*): *Promise*<[*IDocumentsQueryResult*](../interfaces/types_dw_rest.idocumentsqueryresult.md)\>

Send query to get results

#### Parameters:

Name | Type |
------ | ------ |
`queryUrl` | *string* |

**Returns:** *Promise*<[*IDocumentsQueryResult*](../interfaces/types_dw_rest.idocumentsqueryresult.md)\>

Defined in: restWrapper.ts:366

___

### GetQueryUrlFromFileCabinet

▸ **GetQueryUrlFromFileCabinet**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md), `dialogExpression`: [*IDialogExpression*](../interfaces/types_dw_rest.idialogexpression.md), `dialogId`: *string*, `fields`: *string*[], `fieldToSort`: *string*, `sortOrder`: [*SortOrder*](../enums/types_dw_rest.sortorder.md)): *Promise*<*string*\>

Get a query build by DocuWare Platform for later execution

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md) |
`dialogExpression` | [*IDialogExpression*](../interfaces/types_dw_rest.idialogexpression.md) |
`dialogId` | *string* |
`fields` | *string*[] |
`fieldToSort` | *string* |
`sortOrder` | [*SortOrder*](../enums/types_dw_rest.sortorder.md) |

**Returns:** *Promise*<*string*\>

Defined in: restWrapper.ts:340

___

### GetRoleByName

▸ **GetRoleByName**(`organization`: [*IOrganization*](../interfaces/types_dw_rest.iorganization.md), `name`: *string*): *Promise*<[*IRole*](../interfaces/types_dw_rest.irole.md)\>

Get a role by it's name

#### Parameters:

Name | Type |
------ | ------ |
`organization` | [*IOrganization*](../interfaces/types_dw_rest.iorganization.md) |
`name` | *string* |

**Returns:** *Promise*<[*IRole*](../interfaces/types_dw_rest.irole.md)\>

Defined in: restWrapper.ts:1052

___

### GetWorkflowTasks

▸ **GetWorkflowTasks**(`workflow`: [*IWorkflow*](../interfaces/types_dw_rest.iworkflow.md)): *Promise*<[*IWorkflowTasks*](../interfaces/types_dw_rest.iworkflowtasks.md)\>

Get workflow tasks for dedicated workflow

#### Parameters:

Name | Type |
------ | ------ |
`workflow` | [*IWorkflow*](../interfaces/types_dw_rest.iworkflow.md) |

**Returns:** *Promise*<[*IWorkflowTasks*](../interfaces/types_dw_rest.iworkflowtasks.md)\>

Defined in: restWrapper.ts:1214

___

### GetWorkflows

▸ **GetWorkflows**(`organization`: [*IOrganization*](../interfaces/types_dw_rest.iorganization.md)): *Promise*<[*IWorkflows*](../interfaces/types_dw_rest.iworkflows.md)\>

Get workflows (The workflow needs to be triggered at least once before you'll get return values)

#### Parameters:

Name | Type |
------ | ------ |
`organization` | [*IOrganization*](../interfaces/types_dw_rest.iorganization.md) |

**Returns:** *Promise*<[*IWorkflows*](../interfaces/types_dw_rest.iworkflows.md)\>

Defined in: restWrapper.ts:1188

___

### ImportDWXArchive

▸ **ImportDWXArchive**(`pathOfDWX`: *string*, `fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md), `importSettings`: [*IImportSettings*](../interfaces/types_dw_rest.iimportsettings.md)): *Promise*<[*IImportResult*](../interfaces/types_dw_rest.iimportresult.md)\>

Import a dwx archive. DWX is the exchange format of DocuWare

#### Parameters:

Name | Type |
------ | ------ |
`pathOfDWX` | *string* |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md) |
`importSettings` | [*IImportSettings*](../interfaces/types_dw_rest.iimportsettings.md) |

**Returns:** *Promise*<[*IImportResult*](../interfaces/types_dw_rest.iimportresult.md)\>

Defined in: restWrapper.ts:1079

___

### LoadFullObjectFromPlatform

▸ **LoadFullObjectFromPlatform**<T\>(`notYetFullLoadedObject`: [*ILinkModel*](../interfaces/types_dw_rest.ilinkmodel.md)): *Promise*<T\>

Gets the 'self' link of provided object and retrieves the full load of properties and data

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`notYetFullLoadedObject` | [*ILinkModel*](../interfaces/types_dw_rest.ilinkmodel.md) |

**Returns:** *Promise*<T\>

Defined in: restWrapper.ts:319

___

### LockDocument

▸ **LockDocument**(`document`: [*IDocument*](../interfaces/types_dw_rest.idocument.md), `timeToLockInSeconds`: *number*): *Promise*<*void*\>

Do explicit lock of a document

#### Parameters:

Name | Type |
------ | ------ |
`document` | [*IDocument*](../interfaces/types_dw_rest.idocument.md) |
`timeToLockInSeconds` | *number* |

**Returns:** *Promise*<*void*\>

Defined in: restWrapper.ts:1138

___

### Logon

▸ **Logon**(`model`: [*ILogonModel*](../interfaces/types_dw_rest.ilogonmodel.md)): *Promise*<[*ILogonResponse*](../interfaces/types_dw_rest.ilogonresponse.md)\>

Handles logon and sets cookies to 'global' {RequestPromiseOptions}

#### Parameters:

Name | Type |
------ | ------ |
`model` | [*ILogonModel*](../interfaces/types_dw_rest.ilogonmodel.md) |

**Returns:** *Promise*<[*ILogonResponse*](../interfaces/types_dw_rest.ilogonresponse.md)\>

Defined in: restWrapper.ts:74

___

### MergeDocument

▸ **MergeDocument**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md), `docIds`: *number*[], `operation`: [*ContentMergeOperation*](../enums/types_dw_rest.contentmergeoperation.md)): *Promise*<[*IDocument*](../interfaces/types_dw_rest.idocument.md)\>

Merges a document
Info: Staple is only supported for document trays

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md) |
`docIds` | *number*[] |
`operation` | [*ContentMergeOperation*](../enums/types_dw_rest.contentmergeoperation.md) |

**Returns:** *Promise*<[*IDocument*](../interfaces/types_dw_rest.idocument.md)\>

Defined in: restWrapper.ts:899

___

### PlaceAStampWithBestPosition

▸ **PlaceAStampWithBestPosition**(`page`: [*IPage*](../interfaces/types_dw_rest.ipage.md), `stampPlacement`: [*IStampPlacement*](../interfaces/types_dw_rest.istampplacement.md)): *Promise*<*void*\>

Gets the best position for a stamp an paces it

#### Parameters:

Name | Type |
------ | ------ |
`page` | [*IPage*](../interfaces/types_dw_rest.ipage.md) |
`stampPlacement` | [*IStampPlacement*](../interfaces/types_dw_rest.istampplacement.md) |

**Returns:** *Promise*<*void*\>

Defined in: restWrapper.ts:788

___

### PlaceAnnotation

▸ **PlaceAnnotation**(`page`: [*IPage*](../interfaces/types_dw_rest.ipage.md), `annotation`: [*IAnnotation*](../interfaces/types_dw_rest.iannotation.md)): *Promise*<[*IAnnotation*](../interfaces/types_dw_rest.iannotation.md)\>

Place an annotation to a single page

#### Parameters:

Name | Type |
------ | ------ |
`page` | [*IPage*](../interfaces/types_dw_rest.ipage.md) |
`annotation` | [*IAnnotation*](../interfaces/types_dw_rest.iannotation.md) |

**Returns:** *Promise*<[*IAnnotation*](../interfaces/types_dw_rest.iannotation.md)\>

Defined in: restWrapper.ts:864

___

### RemoveUserFromGroup

▸ **RemoveUserFromGroup**(`user`: [*IUser*](../interfaces/types_dw_rest.iuser.md), `groupId`: *string*): *Promise*<*void*\>

 Remove a group from a user

#### Parameters:

Name | Type |
------ | ------ |
`user` | [*IUser*](../interfaces/types_dw_rest.iuser.md) |
`groupId` | *string* |

**Returns:** *Promise*<*void*\>

Defined in: restWrapper.ts:1007

___

### RemoveUserFromRole

▸ **RemoveUserFromRole**(`user`: [*IUser*](../interfaces/types_dw_rest.iuser.md), `roleId`: *string*): *Promise*<*void*\>

Remove a role from a user

#### Parameters:

Name | Type |
------ | ------ |
`user` | [*IUser*](../interfaces/types_dw_rest.iuser.md) |
`roleId` | *string* |

**Returns:** *Promise*<*void*\>

Defined in: restWrapper.ts:988

___

### TransferFromDocumentTrayToFileCabinet

▸ **TransferFromDocumentTrayToFileCabinet**(`docIds`: *number*[], `basketId`: *string*, `fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md), `keepSource`: *boolean*): *Promise*<[*IDocumentsQueryResult*](../interfaces/types_dw_rest.idocumentsqueryresult.md)\>

Transfer a number documents from document tray to FileCabinet

#### Parameters:

Name | Type |
------ | ------ |
`docIds` | *number*[] |
`basketId` | *string* |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md) |
`keepSource` | *boolean* |

**Returns:** *Promise*<[*IDocumentsQueryResult*](../interfaces/types_dw_rest.idocumentsqueryresult.md)\>

Defined in: restWrapper.ts:811

___

### TransferFromFileCabinetToFileCabinet

▸ **TransferFromFileCabinetToFileCabinet**(`documents`: [*IDocument*](../interfaces/types_dw_rest.idocument.md)[], `sourceFileCabinetId`: *string*, `destinationFileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md), `keepSource`: *boolean*): *Promise*<[*IDocumentsQueryResult*](../interfaces/types_dw_rest.idocumentsqueryresult.md)\>

Transfer a document from FileCabinet to another (or the same) FileCabinet

#### Parameters:

Name | Type |
------ | ------ |
`documents` | [*IDocument*](../interfaces/types_dw_rest.idocument.md)[] |
`sourceFileCabinetId` | *string* |
`destinationFileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md) |
`keepSource` | *boolean* |

**Returns:** *Promise*<[*IDocumentsQueryResult*](../interfaces/types_dw_rest.idocumentsqueryresult.md)\>

Defined in: restWrapper.ts:838

___

### UpdateDocumentIndexValues

▸ **UpdateDocumentIndexValues**(`document`: [*IDocument*](../interfaces/types_dw_rest.idocument.md), `fieldsToUpdate`: [*IFieldList*](../interfaces/types_dw_rest.ifieldlist.md)): *Promise*<[*IFieldList*](../interfaces/types_dw_rest.ifieldlist.md)\>

Update index values of specified document

#### Parameters:

Name | Type |
------ | ------ |
`document` | [*IDocument*](../interfaces/types_dw_rest.idocument.md) |
`fieldsToUpdate` | [*IFieldList*](../interfaces/types_dw_rest.ifieldlist.md) |

**Returns:** *Promise*<[*IFieldList*](../interfaces/types_dw_rest.ifieldlist.md)\>

Defined in: restWrapper.ts:378

___

### UploadBigDocumentBase

▸ **UploadBigDocumentBase**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md), `uploadDocument`: [*IChunkUploadDocument*](../interfaces/types_dw_rest.ichunkuploaddocument.md)): *Promise*<[*IDocument*](../interfaces/types_dw_rest.idocument.md)\>

Store big document with optional index entries as xml or json string

**`memberof`** RestCallWrapper

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md) |
`uploadDocument` | [*IChunkUploadDocument*](../interfaces/types_dw_rest.ichunkuploaddocument.md) |

**Returns:** *Promise*<[*IDocument*](../interfaces/types_dw_rest.idocument.md)\>

Defined in: restWrapper.ts:534

___

### UploadBigDocumentJsonContextTypMultipleSection

▸ **UploadBigDocumentJsonContextTypMultipleSection**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md), `pathToFiles`: *string*[], `indexFields`: [*IField*](../interfaces/types_dw_rest.ifield.md)[], `applicationProperties`: [*IDocumentApplicationProperty*](../interfaces/types_dw_rest.idocumentapplicationproperty.md)[]): *Promise*<[*IDocument*](../interfaces/types_dw_rest.idocument.md)\>

Store big document with multiple sections, optional json index fields and/or application properties

**`memberof`** RestCallWrapper

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md) |
`pathToFiles` | *string*[] |
`indexFields` | [*IField*](../interfaces/types_dw_rest.ifield.md)[] |
`applicationProperties` | [*IDocumentApplicationProperty*](../interfaces/types_dw_rest.idocumentapplicationproperty.md)[] |

**Returns:** *Promise*<[*IDocument*](../interfaces/types_dw_rest.idocument.md)\>

Defined in: restWrapper.ts:482

___

### UploadBigDocumentJsonContextTypeSingleSection

▸ **UploadBigDocumentJsonContextTypeSingleSection**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md), `pathToFile`: *string*, `indexFields`: [*IField*](../interfaces/types_dw_rest.ifield.md)[], `applicationProperties`: [*IDocumentApplicationProperty*](../interfaces/types_dw_rest.idocumentapplicationproperty.md)[]): *Promise*<[*IDocument*](../interfaces/types_dw_rest.idocument.md)\>

Store big document with optional json index fields and/or application properties

**`memberof`** RestCallWrapper

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md) |
`pathToFile` | *string* |
`indexFields` | [*IField*](../interfaces/types_dw_rest.ifield.md)[] |
`applicationProperties` | [*IDocumentApplicationProperty*](../interfaces/types_dw_rest.idocumentapplicationproperty.md)[] |

**Returns:** *Promise*<[*IDocument*](../interfaces/types_dw_rest.idocument.md)\>

Defined in: restWrapper.ts:468

___

### UploadDocument

▸ **UploadDocument**(`fileCabinet`: [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md), `indexFields`: [*IField*](../interfaces/types_dw_rest.ifield.md)[], `pathToFile`: *string*): *Promise*<[*IDocument*](../interfaces/types_dw_rest.idocument.md)\>

Store document with index entries

#### Parameters:

Name | Type |
------ | ------ |
`fileCabinet` | [*IFileCabinet*](../interfaces/types_dw_rest.ifilecabinet.md) |
`indexFields` | [*IField*](../interfaces/types_dw_rest.ifield.md)[] |
`pathToFile` | *string* |

**Returns:** *Promise*<[*IDocument*](../interfaces/types_dw_rest.idocument.md)\>

Defined in: restWrapper.ts:414
