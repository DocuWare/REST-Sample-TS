[Typedoc project reference documentation](../README.md) / [Modules](../modules.md) / [classes/StandardChunkUploadDocument](../modules/classes_standardchunkuploaddocument.md) / StandardChunkUploadDocument

# Class: StandardChunkUploadDocument

[classes/StandardChunkUploadDocument](../modules/classes_standardchunkuploaddocument.md).StandardChunkUploadDocument

This class represent the standard behavior for chunk uploading documents with single or multiple sections.

**`export`** 

**`implements`** {DWRest.IChunkUploadDocument}

## Hierarchy

* **StandardChunkUploadDocument**

## Implements

* [*IChunkUploadDocument*](../interfaces/types_dw_rest.ichunkuploaddocument.md)

## Table of contents

### Constructors

- [constructor](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#constructor)

### Properties

- [\_ContainerFileNamesPrefix](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_containerfilenamesprefix)
- [\_ContainerFileNamesSeparator](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_containerfilenamesseparator)
- [\_ContainerPath](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_containerpath)
- [\_DocumentContent](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_documentcontent)
- [\_DocumentContentType](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_documentcontenttype)
- [\_ErrorFilesPathNotSet](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_errorfilespathnotset)
- [\_FilesPath](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_filespath)
- [\_UploadFileContentType](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_uploadfilecontenttype)
- [\_UploadFilePath](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_uploadfilepath)
- [\_XFileName](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#_xfilename)

### Accessors

- [DocumentContent](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#documentcontent)
- [DocumentContentType](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#documentcontenttype)
- [FilesPath](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#filespath)
- [UploadFileContentType](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#uploadfilecontenttype)
- [UploadFilePath](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#uploadfilepath)
- [XFileName](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#xfilename)

### Methods

- [CreateTarball](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#createtarball)
- [GetFilesPathDirectoriesFullPathConcatenatedAsString](classes_standardchunkuploaddocument.standardchunkuploaddocument.md#getfilespathdirectoriesfullpathconcatenatedasstring)

## Constructors

### constructor

\+ **new StandardChunkUploadDocument**(`filesPath`: *string*[]): [*StandardChunkUploadDocument*](classes_standardchunkuploaddocument.standardchunkuploaddocument.md)

Creates an instance of StandardChunkUploadDocument.

**`memberof`** StandardUploadDocument

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`filesPath` | *string*[] | contains the file path of every file that should be uploaded   |

**Returns:** [*StandardChunkUploadDocument*](classes_standardchunkuploaddocument.standardchunkuploaddocument.md)

Defined in: classes/StandardChunkUploadDocument.ts:166

## Properties

### \_ContainerFileNamesPrefix

• `Private` `Readonly` **\_ContainerFileNamesPrefix**: *Tar file names:*= "Tar file names:"

Defined in: classes/StandardChunkUploadDocument.ts:25

___

### \_ContainerFileNamesSeparator

• `Private` `Readonly` **\_ContainerFileNamesSeparator**: */*= "/"

Defined in: classes/StandardChunkUploadDocument.ts:26

___

### \_ContainerPath

• `Private` `Readonly` **\_ContainerPath**: *string*

Defined in: classes/StandardChunkUploadDocument.ts:27

___

### \_DocumentContent

• `Private` **\_DocumentContent**: *string*= ""

Defined in: classes/StandardChunkUploadDocument.ts:21

___

### \_DocumentContentType

• `Private` **\_DocumentContentType**: [*DocumentContentType*](../enums/types_dw_rest.documentcontenttype.md)

Defined in: classes/StandardChunkUploadDocument.ts:22

___

### \_ErrorFilesPathNotSet

• `Private` **\_ErrorFilesPathNotSet**: *string*= "StandardChunkUploadDocument FilesPath contains no elements!"

Defined in: classes/StandardChunkUploadDocument.ts:30

___

### \_FilesPath

• `Private` **\_FilesPath**: *string*[]= []

Defined in: classes/StandardChunkUploadDocument.ts:17

___

### \_UploadFileContentType

• `Private` **\_UploadFileContentType**: *string* \| *false*= ""

Defined in: classes/StandardChunkUploadDocument.ts:18

___

### \_UploadFilePath

• `Private` **\_UploadFilePath**: *string*= ""

Defined in: classes/StandardChunkUploadDocument.ts:19

___

### \_XFileName

• `Private` **\_XFileName**: *string*= ""

Defined in: classes/StandardChunkUploadDocument.ts:20

## Accessors

### DocumentContent

• **DocumentContent**(): *string*

That property contains the document content like index values and/or application properties

**`memberof`** StandardUploadDocument

**Returns:** *string*

Implementation of: [IChunkUploadDocument](../interfaces/types_dw_rest.ichunkuploaddocument.md).[DocumentContent](../interfaces/types_dw_rest.ichunkuploaddocument.md#documentcontent)

Defined in: classes/StandardChunkUploadDocument.ts:148

• **DocumentContent**(`value`: *string*): *void*

That property contains the document content like index values and/or application properties

#### Parameters:

Name | Type |
------ | ------ |
`value` | *string* |

**Returns:** *void*

Implementation of: [IChunkUploadDocument](../interfaces/types_dw_rest.ichunkuploaddocument.md).[DocumentContent](../interfaces/types_dw_rest.ichunkuploaddocument.md#documentcontent)

Defined in: classes/StandardChunkUploadDocument.ts:151

___

### DocumentContentType

• **DocumentContentType**(): [*DocumentContentType*](../enums/types_dw_rest.documentcontenttype.md)

Contains the type of content like xml or json

**`memberof`** StandardUploadDocument

**Returns:** [*DocumentContentType*](../enums/types_dw_rest.documentcontenttype.md)

Implementation of: [IChunkUploadDocument](../interfaces/types_dw_rest.ichunkuploaddocument.md).[DocumentContentType](../interfaces/types_dw_rest.ichunkuploaddocument.md#documentcontenttype)

Defined in: classes/StandardChunkUploadDocument.ts:161

• **DocumentContentType**(`value`: [*DocumentContentType*](../enums/types_dw_rest.documentcontenttype.md)): *void*

Contains the type of content like xml or json

#### Parameters:

Name | Type |
------ | ------ |
`value` | [*DocumentContentType*](../enums/types_dw_rest.documentcontenttype.md) |

**Returns:** *void*

Implementation of: [IChunkUploadDocument](../interfaces/types_dw_rest.ichunkuploaddocument.md).[DocumentContentType](../interfaces/types_dw_rest.ichunkuploaddocument.md#documentcontenttype)

Defined in: classes/StandardChunkUploadDocument.ts:164

___

### FilesPath

• **FilesPath**(): *string*[]

Returns a string array with all file path

**`readonly`** 

**`memberof`** StandardUploadDocument

**Returns:** *string*[]

Implementation of: [IChunkUploadDocument](../interfaces/types_dw_rest.ichunkuploaddocument.md).[FilesPath](../interfaces/types_dw_rest.ichunkuploaddocument.md#filespath)

Defined in: classes/StandardChunkUploadDocument.ts:39

___

### UploadFileContentType

• **UploadFileContentType**(): *string*

Returns the upload file content-type and in the case of multiple files the tarball file type

**`readonly`** 

**`memberof`** StandardUploadDocument

**Returns:** *string*

Implementation of: [IChunkUploadDocument](../interfaces/types_dw_rest.ichunkuploaddocument.md).[UploadFileContentType](../interfaces/types_dw_rest.ichunkuploaddocument.md#uploadfilecontenttype)

Defined in: classes/StandardChunkUploadDocument.ts:50

___

### UploadFilePath

• **UploadFilePath**(): *string*

Returns the path to the file that should be uploaded.
In case of multiple files a tarball will be created and its path returned.

**`readonly`** 

**`memberof`** StandardUploadDocument

**Returns:** *string*

Implementation of: [IChunkUploadDocument](../interfaces/types_dw_rest.ichunkuploaddocument.md).[UploadFilePath](../interfaces/types_dw_rest.ichunkuploaddocument.md#uploadfilepath)

Defined in: classes/StandardChunkUploadDocument.ts:80

___

### XFileName

• **XFileName**(): *string*

Returns the necessary file name format for the chunk upload

**`readonly`** 

**`memberof`** StandardUploadDocument

**Returns:** *string*

Implementation of: [IChunkUploadDocument](../interfaces/types_dw_rest.ichunkuploaddocument.md).[XFileName](../interfaces/types_dw_rest.ichunkuploaddocument.md#xfilename)

Defined in: classes/StandardChunkUploadDocument.ts:110

## Methods

### CreateTarball

▸ `Private`**CreateTarball**(): *string*

Creates a tarball/tar container with all files and return its path

**`memberof`** StandardUploadDocument

**Returns:** *string*

The path to the created tarball

Defined in: classes/StandardChunkUploadDocument.ts:185

___

### GetFilesPathDirectoriesFullPathConcatenatedAsString

▸ `Private`**GetFilesPathDirectoriesFullPathConcatenatedAsString**(`filesPath`: *string*[], `separator`: *string*): *string*

Concatenates the directory paths of the files path into a string separated by a separator character.

**`memberof`** StandardChunkUploadDocument

#### Parameters:

Name | Type |
------ | ------ |
`filesPath` | *string*[] |
`separator` | *string* |

**Returns:** *string*

Defined in: classes/StandardChunkUploadDocument.ts:211
