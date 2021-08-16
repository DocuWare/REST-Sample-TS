[Typedoc project reference documentation](../README.md) / [classes/StandardChunkUploadDocument](../modules/classes_standardchunkuploaddocument.md) / StandardChunkUploadDocument

# Class: StandardChunkUploadDocument

[classes/StandardChunkUploadDocument](../modules/classes_standardchunkuploaddocument.md).StandardChunkUploadDocument

This class represent the standard behavior for chunk uploading documents with single or multiple sections.

**`export`**

**`implements`** {DWRest.IChunkUploadDocument}

## Implements

- [`IChunkUploadDocument`](../interfaces/types_dw_rest.ichunkuploaddocument.md)

## Table of contents

### Constructors

- [constructor](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#constructor)

### Properties

- [\_ContainerFileNamesPrefix](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_containerfilenamesprefix)
- [\_ContainerFileNamesSeparator](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_containerfilenamesseparator)
- [\_ContainerPath](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_containerpath)
- [\_Document](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_document)
- [\_DocumentContent](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_documentcontent)
- [\_DocumentContentType](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_documentcontenttype)
- [\_DocumentType](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_documenttype)
- [\_ErrorFilesPathNotSet](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_errorfilespathnotset)
- [\_FilesPath](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_filespath)
- [\_IndexEntries](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_indexentries)
- [\_InputSection](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_inputsection)
- [\_UploadFileContentType](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_uploadfilecontenttype)
- [\_UploadFilePath](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_uploadfilepath)
- [\_XFileName](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_xfilename)
- [\_XIndexDataContentType](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_xindexdatacontenttype)
- [indexEntries](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#indexentries)
- [inputSection](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#inputsection)

### Accessors

- [Document](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#document)
- [DocumentContent](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#documentcontent)
- [DocumentContentType](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#documentcontenttype)
- [DocumentType](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#documenttype)
- [FilesPath](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#filespath)
- [IsOnlySection](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#isonlysection)
- [UploadFileContentType](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#uploadfilecontenttype)
- [UploadFilePath](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#uploadfilepath)
- [XFileName](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#xfilename)
- [XIndexDataContentType](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#xindexdatacontenttype)

### Methods

- [CreateTarball](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#createtarball)
- [GetFilesPathDirectoriesFullPathConcatenatedAsString](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#getfilespathdirectoriesfullpathconcatenatedasstring)

## Constructors

### constructor

• **new StandardChunkUploadDocument**(`filesPath`)

Creates an instance of StandardChunkUploadDocument.

**`memberof`** StandardChunkUploadDocument

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filesPath` | `string`[] | contains the file path of every file that should be uploaded |

#### Defined in

[classes/StandardChunkUploadDocument.ts:267](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L267)

• **new StandardChunkUploadDocument**(`filesPath`, `indexEntries?`, `inputSection?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filesPath` | `string`[] |
| `indexEntries?` | [`IDocumentIndexField`](../interfaces/types_dw_rest.idocumentindexfield.md)[] |
| `inputSection?` | [`IInputSection`](../interfaces/types_dw_rest.iinputsection.md)[] |

#### Defined in

[classes/StandardChunkUploadDocument.ts:276](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L276)

## Properties

### \_ContainerFileNamesPrefix

• `Private` `Readonly` **\_ContainerFileNamesPrefix**: ``"Tar file names:"``

#### Defined in

[classes/StandardChunkUploadDocument.ts:33](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L33)

___

### \_ContainerFileNamesSeparator

• `Private` `Readonly` **\_ContainerFileNamesSeparator**: ``"/"``

#### Defined in

[classes/StandardChunkUploadDocument.ts:34](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L34)

___

### \_ContainerPath

• `Private` `Readonly` **\_ContainerPath**: `string`

#### Defined in

[classes/StandardChunkUploadDocument.ts:35](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L35)

___

### \_Document

• `Private` **\_Document**: [`IDocument`](../interfaces/types_dw_rest.idocument.md) \| [`IInputDocument`](../interfaces/types_dw_rest.iinputdocument.md)

#### Defined in

[classes/StandardChunkUploadDocument.ts:26](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L26)

___

### \_DocumentContent

• `Private` **\_DocumentContent**: `string` = `""`

#### Defined in

[classes/StandardChunkUploadDocument.ts:28](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L28)

___

### \_DocumentContentType

• `Private` **\_DocumentContentType**: [`DocuWareSpecificContentType`](../enums/types_dw_rest.docuwarespecificcontenttype.md)

#### Defined in

[classes/StandardChunkUploadDocument.ts:29](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L29)

___

### \_DocumentType

• `Private` **\_DocumentType**: [`DocuWareSpecificContentType`](../enums/types_dw_rest.docuwarespecificcontenttype.md)

#### Defined in

[classes/StandardChunkUploadDocument.ts:27](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L27)

___

### \_ErrorFilesPathNotSet

• `Private` **\_ErrorFilesPathNotSet**: `string` = `"StandardChunkUploadDocument FilesPath contains no elements!"`

#### Defined in

[classes/StandardChunkUploadDocument.ts:38](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L38)

___

### \_FilesPath

• `Private` **\_FilesPath**: `string`[] = `[]`

#### Defined in

[classes/StandardChunkUploadDocument.ts:19](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L19)

___

### \_IndexEntries

• `Private` `Optional` **\_IndexEntries**: [`IDocumentIndexField`](../interfaces/types_dw_rest.idocumentindexfield.md)[]

#### Defined in

[classes/StandardChunkUploadDocument.ts:24](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L24)

___

### \_InputSection

• `Private` `Optional` **\_InputSection**: [`IInputSection`](../interfaces/types_dw_rest.iinputsection.md)[]

#### Defined in

[classes/StandardChunkUploadDocument.ts:25](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L25)

___

### \_UploadFileContentType

• `Private` **\_UploadFileContentType**: `string` \| ``false`` = `""`

#### Defined in

[classes/StandardChunkUploadDocument.ts:20](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L20)

___

### \_UploadFilePath

• `Private` **\_UploadFilePath**: `string` = `""`

#### Defined in

[classes/StandardChunkUploadDocument.ts:21](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L21)

___

### \_XFileName

• `Private` **\_XFileName**: `string` = `""`

#### Defined in

[classes/StandardChunkUploadDocument.ts:23](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L23)

___

### \_XIndexDataContentType

• `Private` **\_XIndexDataContentType**: `string` = `""`

#### Defined in

[classes/StandardChunkUploadDocument.ts:22](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L22)

___

### indexEntries

• `Optional` **indexEntries**: [`IDocumentIndexField`](../interfaces/types_dw_rest.idocumentindexfield.md)[]

___

### inputSection

• `Optional` **inputSection**: [`IInputSection`](../interfaces/types_dw_rest.iinputsection.md)[]

## Accessors

### Document

• `get` **Document**(): [`IDocument`](../interfaces/types_dw_rest.idocument.md) \| [`IInputDocument`](../interfaces/types_dw_rest.iinputdocument.md)

Returns the correct document format for the single or multiple section application properties

**`readonly`**

**`memberof`** StandardChunkUploadDocument

#### Returns

[`IDocument`](../interfaces/types_dw_rest.idocument.md) \| [`IInputDocument`](../interfaces/types_dw_rest.iinputdocument.md)

#### Implementation of

[IChunkUploadDocument](../interfaces/types_dw_rest.ichunkuploaddocument.md).[Document](../interfaces/types_dw_rest.ichunkuploaddocument.md#document)

#### Defined in

[classes/StandardChunkUploadDocument.ts:182](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L182)

___

### DocumentContent

• `get` **DocumentContent**(): `string`

That property contains the document content like index values and/or application properties

**`memberof`** StandardUploadDocument

#### Returns

`string`

#### Implementation of

[IChunkUploadDocument](../interfaces/types_dw_rest.ichunkuploaddocument.md).[DocumentContent](../interfaces/types_dw_rest.ichunkuploaddocument.md#documentcontent)

#### Defined in

[classes/StandardChunkUploadDocument.ts:249](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L249)

• `set` **DocumentContent**(`value`): `void`

That property contains the document content like index values and/or application properties

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Implementation of

[IChunkUploadDocument](../interfaces/types_dw_rest.ichunkuploaddocument.md).[DocumentContent](../interfaces/types_dw_rest.ichunkuploaddocument.md#documentcontent)

#### Defined in

[classes/StandardChunkUploadDocument.ts:252](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L252)

___

### DocumentContentType

• `get` **DocumentContentType**(): [`DocuWareSpecificContentType`](../enums/types_dw_rest.docuwarespecificcontenttype.md)

Contains the type of content like xml or json

**`memberof`** StandardUploadDocument

#### Returns

[`DocuWareSpecificContentType`](../enums/types_dw_rest.docuwarespecificcontenttype.md)

#### Implementation of

[IChunkUploadDocument](../interfaces/types_dw_rest.ichunkuploaddocument.md).[DocumentContentType](../interfaces/types_dw_rest.ichunkuploaddocument.md#documentcontenttype)

#### Defined in

[classes/StandardChunkUploadDocument.ts:262](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L262)

• `set` **DocumentContentType**(`value`): `void`

Contains the type of content like xml or json

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`DocuWareSpecificContentType`](../enums/types_dw_rest.docuwarespecificcontenttype.md) |

#### Returns

`void`

#### Implementation of

[IChunkUploadDocument](../interfaces/types_dw_rest.ichunkuploaddocument.md).[DocumentContentType](../interfaces/types_dw_rest.ichunkuploaddocument.md#documentcontenttype)

#### Defined in

[classes/StandardChunkUploadDocument.ts:265](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L265)

___

### DocumentType

• `get` **DocumentType**(): [`DocuWareSpecificContentType`](../enums/types_dw_rest.docuwarespecificcontenttype.md)

Returns the document content-type

**`readonly`**

**`memberof`** StandardChunkUploadDocument

#### Returns

[`DocuWareSpecificContentType`](../enums/types_dw_rest.docuwarespecificcontenttype.md)

#### Implementation of

[IChunkUploadDocument](../interfaces/types_dw_rest.ichunkuploaddocument.md).[DocumentType](../interfaces/types_dw_rest.ichunkuploaddocument.md#documenttype)

#### Defined in

[classes/StandardChunkUploadDocument.ts:228](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L228)

___

### FilesPath

• `get` **FilesPath**(): `string`[]

Returns a string array with all file path

**`readonly`**

**`memberof`** StandardUploadDocument

#### Returns

`string`[]

#### Implementation of

[IChunkUploadDocument](../interfaces/types_dw_rest.ichunkuploaddocument.md).[FilesPath](../interfaces/types_dw_rest.ichunkuploaddocument.md#filespath)

#### Defined in

[classes/StandardChunkUploadDocument.ts:48](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L48)

___

### IsOnlySection

• `Private` `get` **IsOnlySection**(): `boolean`

#### Returns

`boolean`

#### Defined in

[classes/StandardChunkUploadDocument.ts:215](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L215)

___

### UploadFileContentType

• `get` **UploadFileContentType**(): `string`

Returns the upload file content-type and in the case of multiple files the tarball file type

**`readonly`**

**`memberof`** StandardUploadDocument

#### Returns

`string`

#### Implementation of

[IChunkUploadDocument](../interfaces/types_dw_rest.ichunkuploaddocument.md).[UploadFileContentType](../interfaces/types_dw_rest.ichunkuploaddocument.md#uploadfilecontenttype)

#### Defined in

[classes/StandardChunkUploadDocument.ts:59](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L59)

___

### UploadFilePath

• `get` **UploadFilePath**(): `string`

Returns the path to the file that should be uploaded.
In case of multiple files a tarball will be created and its path returned.

**`readonly`**

**`memberof`** StandardUploadDocument

#### Returns

`string`

#### Implementation of

[IChunkUploadDocument](../interfaces/types_dw_rest.ichunkuploaddocument.md).[UploadFilePath](../interfaces/types_dw_rest.ichunkuploaddocument.md#uploadfilepath)

#### Defined in

[classes/StandardChunkUploadDocument.ts:90](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L90)

___

### XFileName

• `get` **XFileName**(): `string`

Returns the necessary file name format for the chunk upload

**`readonly`**

**`memberof`** StandardUploadDocument

#### Returns

`string`

#### Implementation of

[IChunkUploadDocument](../interfaces/types_dw_rest.ichunkuploaddocument.md).[XFileName](../interfaces/types_dw_rest.ichunkuploaddocument.md#xfilename)

#### Defined in

[classes/StandardChunkUploadDocument.ts:142](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L142)

___

### XIndexDataContentType

• `get` **XIndexDataContentType**(): `string`

#### Returns

`string`

#### Implementation of

[IChunkUploadDocument](../interfaces/types_dw_rest.ichunkuploaddocument.md).[XIndexDataContentType](../interfaces/types_dw_rest.ichunkuploaddocument.md#xindexdatacontenttype)

#### Defined in

[classes/StandardChunkUploadDocument.ts:113](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L113)

## Methods

### CreateTarball

▸ `Private` **CreateTarball**(): `string`

Creates a tarball/tar container with all files and return its path

**`memberof`** StandardUploadDocument

#### Returns

`string`

The path to the created tarball

#### Defined in

[classes/StandardChunkUploadDocument.ts:309](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L309)

___

### GetFilesPathDirectoriesFullPathConcatenatedAsString

▸ `Private` **GetFilesPathDirectoriesFullPathConcatenatedAsString**(`filesPath`, `separator`): `string`

Concatenates the directory paths of the files path into a string separated by a separator character.

**`memberof`** StandardChunkUploadDocument

#### Parameters

| Name | Type |
| :------ | :------ |
| `filesPath` | `string`[] |
| `separator` | `string` |

#### Returns

`string`

#### Defined in

[classes/StandardChunkUploadDocument.ts:340](https://github.com/DocuWare/REST-Sample-TS/blob/beb3ada/src/classes/StandardChunkUploadDocument.ts#L340)
