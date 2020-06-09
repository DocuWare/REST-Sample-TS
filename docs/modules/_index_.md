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

**● fileCabinetID**: *`string`* = "3f3c9aff-63e5-4433-99a5-ed6dbba1bb72"

*Defined in [index.ts:23](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L23)*

___
<a id="hostid"></a>

### `<Const>` hostID

**● hostID**: *`string`* = "7b5ed19b-bfd6-46e9-8a3b-efd2a4499666"

*Defined in [index.ts:22](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L22)*

___
<a id="logonmodel"></a>

### `<Const>` logonModel

**● logonModel**: *[ILogonModel](../interfaces/_types_dw_rest_d_.dwrest.ilogonmodel.md)* =  restWrapper.CreateLogonModel(user, password, organization, hostID)

*Defined in [index.ts:29](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L29)*

___
<a id="organization"></a>

### `<Const>` organization

**● organization**: *`string`* = "Peters Engineering"

*Defined in [index.ts:21](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L21)*

___
<a id="password"></a>

### `<Const>` password

**● password**: *`string`* = "admin"

*Defined in [index.ts:20](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L20)*

___
<a id="restwrapper"></a>

### `<Const>` restWrapper

**● restWrapper**: *[RestCallWrapper](../classes/_restwrapper_.restcallwrapper.md)* =  new RestCallWrapper(rootUrl)

*Defined in [index.ts:26](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L26)*

___
<a id="rooturl"></a>

### `<Const>` rootUrl

**● rootUrl**: *`string`* = "http://localhost/"

*Defined in [index.ts:18](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L18)*

___
<a id="timetowait"></a>

### `<Const>` timeToWait

**● timeToWait**: *`number`* =  60 * 1000

*Defined in [index.ts:15](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L15)*

___
<a id="user"></a>

### `<Const>` user

**● user**: *`string`* = "dwadmin"

*Defined in [index.ts:19](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L19)*

___

## Functions

<a id="exportadocument"></a>

###  ExportADocument

▸ **ExportADocument**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*): `Promise`<`string`>

*Defined in [index.ts:215](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L215)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |

**Returns:** `Promise`<`string`>

___
<a id="checkoutandcheckindocument"></a>

###  checkoutAndCheckinDocument

▸ **checkoutAndCheckinDocument**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, document: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*): `Promise`<`void`>

*Defined in [index.ts:285](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L285)*

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

*Defined in [index.ts:221](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L221)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| organization | [IOrganization](../interfaces/_types_dw_rest_d_.dwrest.iorganization.md) |

**Returns:** `Promise`<[IUser](../interfaces/_types_dw_rest_d_.dwrest.iuser.md)>

___
<a id="dosearch"></a>

###  doSearch

▸ **doSearch**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, firstDialog: *[IDialog](../interfaces/_types_dw_rest_d_.dwrest.idialog.md)*): `Promise`<[IDocumentsQueryResult](../interfaces/_types_dw_rest_d_.dwrest.idocumentsqueryresult.md)>

*Defined in [index.ts:375](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L375)*

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

*Defined in [index.ts:363](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L363)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| specialDocument | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |

**Returns:** `Promise`<`void`>

___
<a id="getfieldbyname"></a>

###  getFieldByName

▸ **getFieldByName**(document: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*, fieldName: *`string`*): [IField](../interfaces/_types_dw_rest_d_.dwrest.ifield.md)

*Defined in [index.ts:407](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L407)*

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

*Defined in [index.ts:384](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L384)*

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

*Defined in [index.ts:389](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L389)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |

**Returns:** `Promise`<`void`>

___
<a id="importadocument"></a>

###  importAdocument

▸ **importAdocument**(pathToExportedDocument: *`string`*): `Promise`<`void`>

*Defined in [index.ts:205](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L205)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pathToExportedDocument | `string` |

**Returns:** `Promise`<`void`>

___
<a id="setanannotation"></a>

###  setAnAnnotation

▸ **setAnAnnotation**(documentForAnnotation: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*): `Promise`<`void`>

*Defined in [index.ts:243](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L243)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| documentForAnnotation | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |

**Returns:** `Promise`<`void`>

___
<a id="stampadocument"></a>

###  stampAdocument

▸ **stampAdocument**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*, document: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*): `Promise`<`void`>

*Defined in [index.ts:264](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L264)*

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

*Defined in [index.ts:346](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L346)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |

**Returns:** `Promise`<`void`>

___
<a id="storebigdocumentwithoutindex"></a>

###  storeBigDocumentWithoutIndex

▸ **storeBigDocumentWithoutIndex**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*): `Promise`<`void`>

*Defined in [index.ts:326](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L326)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |

**Returns:** `Promise`<`void`>

___
<a id="storebigdocumentxmlindex"></a>

###  storeBigDocumentXmlIndex

▸ **storeBigDocumentXmlIndex**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*): `Promise`<`void`>

*Defined in [index.ts:330](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L330)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |

**Returns:** `Promise`<`void`>

___
<a id="storedocument"></a>

###  storeDocument

▸ **storeDocument**(fileCabinet: *[IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md)*): `Promise`<`void`>

*Defined in [index.ts:310](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L310)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |

**Returns:** `Promise`<`void`>

___
<a id="traceerror"></a>

###  traceError

▸ **traceError**(error: *`Error`*): `void`

*Defined in [index.ts:425](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L425)*

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

*Defined in [index.ts:232](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L232)*

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

*Defined in [index.ts:237](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L237)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sourceFileCabinet | [IFileCabinet](../interfaces/_types_dw_rest_d_.dwrest.ifilecabinet.md) |

**Returns:** `Promise`<`void`>

___
<a id="updatedocumentsection"></a>

###  updateDocumentSection

▸ **updateDocumentSection**(document: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*): `Promise`<`void`>

*Defined in [index.ts:302](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L302)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| document | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |

**Returns:** `Promise`<`void`>

___
<a id="updatedocumenttablefield"></a>

###  updateDocumentTableField

▸ **updateDocumentTableField**(document: *[IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md)*, tablefield: *[IField](../interfaces/_types_dw_rest_d_.dwrest.ifield.md)*): `Promise`<`void`>

*Defined in [index.ts:395](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L395)*

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

*Defined in [index.ts:368](https://github.com/DocuWare/REST-Sample-TS/blob/a4697e2/src/index.ts#L368)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| specialDocument | [IDocument](../interfaces/_types_dw_rest_d_.dwrest.idocument.md) |

**Returns:** `Promise`<[IFieldList](../interfaces/_types_dw_rest_d_.dwrest.ifieldlist.md)>

___

