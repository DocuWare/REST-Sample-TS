[Typedoc project reference documentation](../README.md) > ["index"](../modules/_index_.md)

# External module: "index"

## Index

### Variables

* [fileCabinetID](_index_.md#filecabinetid)
* [hostID](_index_.md#hostid)
* [logonModel](_index_.md#logonmodel)
* [organization](_index_.md#organization)
* [password](_index_.md#password)
* [restWrapper](_index_.md#restwrapper)
* [rootUrl](_index_.md#rooturl)
* [timeToWait](_index_.md#timetowait)
* [user](_index_.md#user)

### Functions

* [ExportADocument](_index_.md#exportadocument)
* [checkoutAndCheckinDocument](_index_.md#checkoutandcheckindocument)
* [createNewUser](_index_.md#createnewuser)
* [doSearch](_index_.md#dosearch)
* [downloadDocument](_index_.md#downloaddocument)
* [getFieldByName](_index_.md#getfieldbyname)
* [getFirstDialogOfType](_index_.md#getfirstdialogoftype)
* [getPagedDocumentResults](_index_.md#getpageddocumentresults)
* [importAdocument](_index_.md#importadocument)
* [setAnAnnotation](_index_.md#setanannotation)
* [stampAdocument](_index_.md#stampadocument)
* [storeBigDocumentJsonIndex](_index_.md#storebigdocumentjsonindex)
* [storeBigDocumentWithoutIndex](_index_.md#storebigdocumentwithoutindex)
* [storeBigDocumentXmlIndex](_index_.md#storebigdocumentxmlindex)
* [storeDocument](_index_.md#storedocument)
* [traceError](_index_.md#traceerror)
* [transferDocumentsFromDocumentTrayToFileCabinet](_index_.md#transferdocumentsfromdocumenttraytofilecabinet)
* [transferDocumentsFromFileCabinetToFileCabinet](_index_.md#transferdocumentsfromfilecabinettofilecabinet)
* [updateDocumentSection](_index_.md#updatedocumentsection)
* [updateDocumentTableField](_index_.md#updatedocumenttablefield)
* [updateIndexEntry](_index_.md#updateindexentry)

---

## Variables

<a id="filecabinetid"></a>

### `<Const>` fileCabinetID

**● fileCabinetID**: *`string`* = "4530fb79-ea98-44c3-b2cc-51627033f85f"

*Defined in [index.ts:31](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L31)*

___
<a id="hostid"></a>

### `<Const>` hostID

**● hostID**: *`string`* = "7b5ed19b-bfd6-46e9-8a3b-efd2a4499666"

*Defined in [index.ts:30](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L30)*

___
<a id="logonmodel"></a>

### `<Const>` logonModel

**● logonModel**: *[ILogonModel](../interfaces/_types_dw_rest_d_.dwrest.ilogonmodel.md)* =  restWrapper.CreateLogonModel(user, password, organization, hostID)

*Defined in [index.ts:38](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L38)*

___
<a id="organization"></a>

### `<Const>` organization

**● organization**: *`string`* = "SDK INC"

*Defined in [index.ts:29](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L29)*

___
<a id="password"></a>

### `<Const>` password

**● password**: *`string`* = "Fwb4Bbfs9qkS8OkIp86B"

*Defined in [index.ts:28](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L28)*

___
<a id="restwrapper"></a>

### `<Const>` restWrapper

**● restWrapper**: *[RestCallWrapper](../classes/_restwrapper_.restcallwrapper.md)* =  new RestCallWrapper(rootUrl)

*Defined in [index.ts:35](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L35)*

___
<a id="rooturl"></a>

### `<Const>` rootUrl

**● rootUrl**: *`string`* = "https://sdkinc.inhouse.docuware.cloud/"

*Defined in [index.ts:26](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L26)*

___
<a id="timetowait"></a>

### `<Const>` timeToWait

**● timeToWait**: *`number`* =  60 * 1000

*Defined in [index.ts:15](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L15)*

___
<a id="user"></a>

### `<Const>` user

**● user**: *`string`* = "testuser"

*Defined in [index.ts:27](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L27)*

___

## Functions

<a id="exportadocument"></a>

###  ExportADocument

▸ **ExportADocument**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*): `Promise`<`string`>

*Defined in [index.ts:224](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L224)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |

**Returns:** `Promise`<`string`>

___
<a id="checkoutandcheckindocument"></a>

###  checkoutAndCheckinDocument

▸ **checkoutAndCheckinDocument**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, document: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*): `Promise`<`void`>

*Defined in [index.ts:294](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L294)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |
| document | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |

**Returns:** `Promise`<`void`>

___
<a id="createnewuser"></a>

###  createNewUser

▸ **createNewUser**(organization: *[IOrganization](../interfaces/_types_dw_rest_d_.dwrest.iorganization.md)*): `Promise`<[IUser](../interfaces/_types_dw_rest_d_.dwrest.iuser.md)>

*Defined in [index.ts:230](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L230)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| organization | [IOrganization](../interfaces/_types_dw_rest_d_.dwrest.iorganization.md) |

**Returns:** `Promise`<[IUser](../interfaces/_types_dw_rest_d_.dwrest.iuser.md)>

___
<a id="dosearch"></a>

###  doSearch

▸ **doSearch**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, firstDialog: *[IDialog](../interfaces/_types_dw_rest_d_.dwrest.idialog.md)*): `Promise`<[IDocumentsQueryResult](../interfaces/_types_dw_rest_d_.dwrest.idocumentsqueryresult.md)>

*Defined in [index.ts:384](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L384)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |
| firstDialog | [IDialog](../interfaces/_types_dw_rest_d_.dwrest.idialog.md) |

**Returns:** `Promise`<[IDocumentsQueryResult](../interfaces/_types_dw_rest_d_.dwrest.idocumentsqueryresult.md)>

___
<a id="downloaddocument"></a>

###  downloadDocument

▸ **downloadDocument**(specialDocument: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*): `Promise`<`void`>

*Defined in [index.ts:372](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L372)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| specialDocument | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |

**Returns:** `Promise`<`void`>

___
<a id="getfieldbyname"></a>

###  getFieldByName

▸ **getFieldByName**(document: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*, fieldName: *`string`*): [IField](../interfaces/_types_dw_rest_d_.dwrest.ifield.md)

*Defined in [index.ts:416](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L416)*

Returns special field by name Also proofs if system field is tried to manipulate

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| document | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |  \- |
| fieldName | `string` |  \- |

**Returns:** [IField](../interfaces/_types_dw_rest_d_.dwrest.ifield.md)

___
<a id="getfirstdialogoftype"></a>

###  getFirstDialogOfType

▸ **getFirstDialogOfType**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, dType: *[DialogType](../enums/_types_dw_rest_d_.dwrest.dialogtype.md)*): `Promise`<[IDialog](../interfaces/_types_dw_rest_d_.dwrest.idialog.md)>

*Defined in [index.ts:393](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L393)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |
| dType | [DialogType](../enums/_types_dw_rest_d_.dwrest.dialogtype.md) |

**Returns:** `Promise`<[IDialog](../interfaces/_types_dw_rest_d_.dwrest.idialog.md)>

___
<a id="getpageddocumentresults"></a>

###  getPagedDocumentResults

▸ **getPagedDocumentResults**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*): `Promise`<`void`>

*Defined in [index.ts:398](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L398)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |

**Returns:** `Promise`<`void`>

___
<a id="importadocument"></a>

###  importAdocument

▸ **importAdocument**(pathToExportedDocument: *`string`*): `Promise`<`void`>

*Defined in [index.ts:214](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L214)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pathToExportedDocument | `string` |

**Returns:** `Promise`<`void`>

___
<a id="setanannotation"></a>

###  setAnAnnotation

▸ **setAnAnnotation**(documentForAnnotation: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*): `Promise`<`void`>

*Defined in [index.ts:252](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L252)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| documentForAnnotation | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |

**Returns:** `Promise`<`void`>

___
<a id="stampadocument"></a>

###  stampAdocument

▸ **stampAdocument**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, document: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*): `Promise`<`void`>

*Defined in [index.ts:273](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L273)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |
| document | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |

**Returns:** `Promise`<`void`>

___
<a id="storebigdocumentjsonindex"></a>

###  storeBigDocumentJsonIndex

▸ **storeBigDocumentJsonIndex**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*): `Promise`<`void`>

*Defined in [index.ts:355](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L355)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |

**Returns:** `Promise`<`void`>

___
<a id="storebigdocumentwithoutindex"></a>

###  storeBigDocumentWithoutIndex

▸ **storeBigDocumentWithoutIndex**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*): `Promise`<`void`>

*Defined in [index.ts:335](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L335)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |

**Returns:** `Promise`<`void`>

___
<a id="storebigdocumentxmlindex"></a>

###  storeBigDocumentXmlIndex

▸ **storeBigDocumentXmlIndex**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*): `Promise`<`void`>

*Defined in [index.ts:339](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L339)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |

**Returns:** `Promise`<`void`>

___
<a id="storedocument"></a>

###  storeDocument

▸ **storeDocument**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*): `Promise`<`void`>

*Defined in [index.ts:319](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L319)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |

**Returns:** `Promise`<`void`>

___
<a id="traceerror"></a>

###  traceError

▸ **traceError**(error: *`Error`*): `void`

*Defined in [index.ts:434](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L434)*

Traces error

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| error | `Error` |   |

**Returns:** `void`

___
<a id="transferdocumentsfromdocumenttraytofilecabinet"></a>

###  transferDocumentsFromDocumentTrayToFileCabinet

▸ **transferDocumentsFromDocumentTrayToFileCabinet**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, docIdsToTransfer: *`number`[]*): `Promise`<`void`>

*Defined in [index.ts:241](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L241)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |
| docIdsToTransfer | `number`[] |

**Returns:** `Promise`<`void`>

___
<a id="transferdocumentsfromfilecabinettofilecabinet"></a>

###  transferDocumentsFromFileCabinetToFileCabinet

▸ **transferDocumentsFromFileCabinetToFileCabinet**(sourceFileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*): `Promise`<`void`>

*Defined in [index.ts:246](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L246)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sourceFileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |

**Returns:** `Promise`<`void`>

___
<a id="updatedocumentsection"></a>

###  updateDocumentSection

▸ **updateDocumentSection**(document: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*): `Promise`<`void`>

*Defined in [index.ts:311](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L311)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| document | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |

**Returns:** `Promise`<`void`>

___
<a id="updatedocumenttablefield"></a>

###  updateDocumentTableField

▸ **updateDocumentTableField**(document: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*, tablefield: *[IField](../interfaces/_types_dw_rest_d_.dwrest.ifield.md)*): `Promise`<`void`>

*Defined in [index.ts:404](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L404)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| document | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |
| tablefield | [IField](../interfaces/_types_dw_rest_d_.dwrest.ifield.md) |

**Returns:** `Promise`<`void`>

___
<a id="updateindexentry"></a>

###  updateIndexEntry

▸ **updateIndexEntry**(specialDocument: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*): `Promise`<[IFieldList](../interfaces/_types_dw_rest_d_.dwrest.ifieldlist.md)>

*Defined in [index.ts:377](https://github.com/DocuWare/REST-Sample-TS/blob/22cf36b/src/index.ts#L377)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| specialDocument | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |

**Returns:** `Promise`<[IFieldList](../interfaces/_types_dw_rest_d_.dwrest.ifieldlist.md)>

___

