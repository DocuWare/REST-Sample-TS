[Typedoc project reference documentation](../README.md) / [types/DW_Rest](../modules/types_dw_rest.md) / IDocument

# Interface: IDocument

[types/DW_Rest](../modules/types_dw_rest.md).IDocument

DocuWare Document Model

**`interface`** IDocument

## Hierarchy

- [`ILinkModel`](types_dw_rest.ilinkmodel.md)

  ↳ **`IDocument`**

## Table of contents

### Properties

- [ApplicationProperties](types_dw_rest.idocument.md#applicationproperties)
- [ContentType](types_dw_rest.idocument.md#contenttype)
- [CreatedAt](types_dw_rest.idocument.md#createdat)
- [CreatedAtSpecified](types_dw_rest.idocument.md#createdatspecified)
- [Fields](types_dw_rest.idocument.md#fields)
- [FileCabinetId](types_dw_rest.idocument.md#filecabinetid)
- [FileSize](types_dw_rest.idocument.md#filesize)
- [Flags](types_dw_rest.idocument.md#flags)
- [Id](types_dw_rest.idocument.md#id)
- [IntellixTrust](types_dw_rest.idocument.md#intellixtrust)
- [LastModified](types_dw_rest.idocument.md#lastmodified)
- [LastModifiedSpecified](types_dw_rest.idocument.md#lastmodifiedspecified)
- [Links](types_dw_rest.idocument.md#links)
- [SectionCount](types_dw_rest.idocument.md#sectioncount)
- [Sections](types_dw_rest.idocument.md#sections)
- [Title](types_dw_rest.idocument.md#title)
- [TotalPages](types_dw_rest.idocument.md#totalpages)
- [Version](types_dw_rest.idocument.md#version)
- [VersionStatus](types_dw_rest.idocument.md#versionstatus)

## Properties

### ApplicationProperties

• `Optional` **ApplicationProperties**: [`IDocumentApplicationProperty`](types_dw_rest.idocumentapplicationproperty.md)[]

#### Defined in

[types/DW_Rest.d.ts:150](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L150)

___

### ContentType

• `Optional` **ContentType**: `string`

#### Defined in

[types/DW_Rest.d.ts:136](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L136)

___

### CreatedAt

• `Optional` **CreatedAt**: `string`

#### Defined in

[types/DW_Rest.d.ts:142](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L142)

___

### CreatedAtSpecified

• `Optional` **CreatedAtSpecified**: `boolean`

#### Defined in

[types/DW_Rest.d.ts:143](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L143)

___

### Fields

• `Optional` **Fields**: [`IDocumentIndexField`](types_dw_rest.idocumentindexfield.md)[]

#### Defined in

[types/DW_Rest.d.ts:123](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L123)

___

### FileCabinetId

• `Optional` **FileCabinetId**: `string`

#### Defined in

[types/DW_Rest.d.ts:148](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L148)

___

### FileSize

• `Optional` **FileSize**: `number`

#### Defined in

[types/DW_Rest.d.ts:144](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L144)

___

### Flags

• `Optional` **Flags**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `HasAppendedDocuments` | `boolean` |
| `IsCheckedOut` | `boolean` |
| `IsCold` | `boolean` |
| `IsCopyRightProtected` | `boolean` |
| `IsDBRecord` | `boolean` |
| `IsDeleted` | `boolean` |
| `IsEmail` | `boolean` |
| `IsProtected` | `boolean` |
| `IsVoiceAvailable` | `boolean` |

#### Defined in

[types/DW_Rest.d.ts:124](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L124)

___

### Id

• `Optional` **Id**: `number`

#### Defined in

[types/DW_Rest.d.ts:138](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L138)

___

### IntellixTrust

• `Optional` **IntellixTrust**: `string`

#### Defined in

[types/DW_Rest.d.ts:146](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L146)

___

### LastModified

• `Optional` **LastModified**: `string`

#### Defined in

[types/DW_Rest.d.ts:140](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L140)

___

### LastModifiedSpecified

• `Optional` **LastModifiedSpecified**: `boolean`

#### Defined in

[types/DW_Rest.d.ts:141](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L141)

___

### Links

• `Optional` **Links**: [`ILink`](types_dw_rest.ilink.md)[]

#### Inherited from

[ILinkModel](types_dw_rest.ilinkmodel.md).[Links](types_dw_rest.ilinkmodel.md#links)

#### Defined in

[types/DW_Rest.d.ts:8](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L8)

___

### SectionCount

• `Optional` **SectionCount**: `number`

#### Defined in

[types/DW_Rest.d.ts:145](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L145)

___

### Sections

• `Optional` **Sections**: [`ISection`](types_dw_rest.isection.md)[]

#### Defined in

[types/DW_Rest.d.ts:135](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L135)

___

### Title

• `Optional` **Title**: `string`

#### Defined in

[types/DW_Rest.d.ts:139](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L139)

___

### TotalPages

• `Optional` **TotalPages**: `number`

#### Defined in

[types/DW_Rest.d.ts:137](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L137)

___

### Version

• `Optional` **Version**: [`IDocumentVersion`](types_dw_rest.idocumentversion.md)

#### Defined in

[types/DW_Rest.d.ts:149](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L149)

___

### VersionStatus

• `Optional` **VersionStatus**: `string`

#### Defined in

[types/DW_Rest.d.ts:147](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L147)
