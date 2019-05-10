[Typedoc project reference documentation](../README.md) > ["index"](../modules/_index_.md)

# External module: "index"

## Index

### Variables

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
* [storeDocument](_index_.md#storedocument)
* [traceError](_index_.md#traceerror)
* [transferDocumentsFromDocumentTrayToFileCabinet](_index_.md#transferdocumentsfromdocumenttraytofilecabinet)
* [transferDocumentsFromFileCabinetToFileCabinet](_index_.md#transferdocumentsfromfilecabinettofilecabinet)
* [updateDocumentSection](_index_.md#updatedocumentsection)
* [updateDocumentTableField](_index_.md#updatedocumenttablefield)
* [updateIndexEntry](_index_.md#updateindexentry)

---

## Variables

<a id="hostid"></a>

### `<Const>` hostID

**● hostID**: *`string`* = "de6a36e3-5c0e-456b-9d95-bdd8ab1d2e0b"

*Defined in [index.ts:21](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L21)*

___
<a id="logonmodel"></a>

### `<Const>` logonModel

**● logonModel**: *[ILogonModel](../interfaces/_types_dw_rest_d_.dwrest.ilogonmodel.md)* =  restWrapper.CreateLogonModel(user, password, organization, hostID)

*Defined in [index.ts:27](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L27)*

___
<a id="organization"></a>

### `<Const>` organization

**● organization**: *`string`* = "Peters Engineering"

*Defined in [index.ts:20](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L20)*

___
<a id="password"></a>

### `<Const>` password

**● password**: *`string`* = "admin"

*Defined in [index.ts:19](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L19)*

___
<a id="restwrapper"></a>

### `<Const>` restWrapper

**● restWrapper**: *[RestCallWrapper](../classes/_restwrapper_.restcallwrapper.md)* =  new RestCallWrapper(rootUrl)

*Defined in [index.ts:24](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L24)*

___
<a id="rooturl"></a>

### `<Const>` rootUrl

**● rootUrl**: *`string`* = "http://localhost:8890/"

*Defined in [index.ts:17](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L17)*

___
<a id="timetowait"></a>

### `<Const>` timeToWait

**● timeToWait**: *`number`* =  60 * 1000

*Defined in [index.ts:14](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L14)*

___
<a id="user"></a>

### `<Const>` user

**● user**: *`string`* = "dwadmin"

*Defined in [index.ts:18](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L18)*

___

## Functions

<a id="exportadocument"></a>

###  ExportADocument

▸ **ExportADocument**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*): `Promise`<`string`>

*Defined in [index.ts:207](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L207)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |

**Returns:** `Promise`<`string`>

___
<a id="checkoutandcheckindocument"></a>

###  checkoutAndCheckinDocument

▸ **checkoutAndCheckinDocument**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, document: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*): `Promise`<`void`>

*Defined in [index.ts:277](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L277)*

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

*Defined in [index.ts:213](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L213)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| organization | [IOrganization](../interfaces/_types_dw_rest_d_.dwrest.iorganization.md) |

**Returns:** `Promise`<[IUser](../interfaces/_types_dw_rest_d_.dwrest.iuser.md)>

___
<a id="dosearch"></a>

###  doSearch

▸ **doSearch**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, firstDialog: *[IDialog](../interfaces/_types_dw_rest_d_.dwrest.idialog.md)*): `Promise`<[IDocumentsQueryResult](../interfaces/_types_dw_rest_d_.dwrest.idocumentsqueryresult.md)>

*Defined in [index.ts:328](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L328)*

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

*Defined in [index.ts:316](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L316)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| specialDocument | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |

**Returns:** `Promise`<`void`>

___
<a id="getfieldbyname"></a>

###  getFieldByName

▸ **getFieldByName**(document: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*, fieldName: *`string`*): [IField](../interfaces/_types_dw_rest_d_.dwrest.ifield.md)

*Defined in [index.ts:360](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L360)*

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

*Defined in [index.ts:337](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L337)*

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

*Defined in [index.ts:342](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L342)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |

**Returns:** `Promise`<`void`>

___
<a id="importadocument"></a>

###  importAdocument

▸ **importAdocument**(pathToExportedDocument: *`string`*): `Promise`<`void`>

*Defined in [index.ts:197](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L197)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pathToExportedDocument | `string` |

**Returns:** `Promise`<`void`>

___
<a id="setanannotation"></a>

###  setAnAnnotation

▸ **setAnAnnotation**(documentForAnnotation: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*): `Promise`<`void`>

*Defined in [index.ts:235](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L235)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| documentForAnnotation | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |

**Returns:** `Promise`<`void`>

___
<a id="stampadocument"></a>

###  stampAdocument

▸ **stampAdocument**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, document: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*): `Promise`<`void`>

*Defined in [index.ts:256](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L256)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |
| document | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |

**Returns:** `Promise`<`void`>

___
<a id="storedocument"></a>

###  storeDocument

▸ **storeDocument**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*): `Promise`<`void`>

*Defined in [index.ts:302](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L302)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |

**Returns:** `Promise`<`void`>

___
<a id="traceerror"></a>

###  traceError

▸ **traceError**(error: *`Error`*): `void`

*Defined in [index.ts:378](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L378)*

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

*Defined in [index.ts:224](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L224)*

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

*Defined in [index.ts:229](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L229)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sourceFileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |

**Returns:** `Promise`<`void`>

___
<a id="updatedocumentsection"></a>

###  updateDocumentSection

▸ **updateDocumentSection**(document: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*): `Promise`<`void`>

*Defined in [index.ts:294](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L294)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| document | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |

**Returns:** `Promise`<`void`>

___
<a id="updatedocumenttablefield"></a>

###  updateDocumentTableField

▸ **updateDocumentTableField**(document: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*, tablefield: *[IField](../interfaces/_types_dw_rest_d_.dwrest.ifield.md)*): `Promise`<`void`>

*Defined in [index.ts:348](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L348)*

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

*Defined in [index.ts:321](https://github.com/DocuWare/REST-Sample-TS/blob/master/src/index.ts#L321)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| specialDocument | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |

**Returns:** `Promise`<[IFieldList](../interfaces/_types_dw_rest_d_.dwrest.ifieldlist.md)>

___

