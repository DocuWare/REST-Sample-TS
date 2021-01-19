[Typedoc project reference documentation](../README.md) / [types/DW_Rest](../modules/types_dw_rest.md) / [DWRest](../modules/types_dw_rest.dwrest.md) / IDocument

# Interface: IDocument

[types/DW_Rest](../modules/types_dw_rest.md).[DWRest](../modules/types_dw_rest.dwrest.md).IDocument

DocuWare Document Model

**`interface`** IDocument

## Hierarchy

* [*ILinkModel*](types_dw_rest.dwrest.ilinkmodel.md)

  ↳ **IDocument**

## Table of contents

### Properties

- [ApplicationProperties](types_dw_rest.dwrest.idocument.md#applicationproperties)
- [ContentType](types_dw_rest.dwrest.idocument.md#contenttype)
- [CreatedAt](types_dw_rest.dwrest.idocument.md#createdat)
- [CreatedAtSpecified](types_dw_rest.dwrest.idocument.md#createdatspecified)
- [Fields](types_dw_rest.dwrest.idocument.md#fields)
- [FileCabinetId](types_dw_rest.dwrest.idocument.md#filecabinetid)
- [FileSize](types_dw_rest.dwrest.idocument.md#filesize)
- [Flags](types_dw_rest.dwrest.idocument.md#flags)
- [Id](types_dw_rest.dwrest.idocument.md#id)
- [IntellixTrust](types_dw_rest.dwrest.idocument.md#intellixtrust)
- [LastModified](types_dw_rest.dwrest.idocument.md#lastmodified)
- [LastModifiedSpecified](types_dw_rest.dwrest.idocument.md#lastmodifiedspecified)
- [Links](types_dw_rest.dwrest.idocument.md#links)
- [SectionCount](types_dw_rest.dwrest.idocument.md#sectioncount)
- [Sections](types_dw_rest.dwrest.idocument.md#sections)
- [Title](types_dw_rest.dwrest.idocument.md#title)
- [TotalPages](types_dw_rest.dwrest.idocument.md#totalpages)
- [Version](types_dw_rest.dwrest.idocument.md#version)
- [VersionStatus](types_dw_rest.dwrest.idocument.md#versionstatus)

## Properties

### ApplicationProperties

• `Optional` **ApplicationProperties**: *undefined* \| [*IDocumentApplicationProperty*](types_dw_rest.dwrest.idocumentapplicationproperty.md)[]

Defined in: [types/DW_Rest.d.ts:134](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L134)

___

### ContentType

• `Optional` **ContentType**: *undefined* \| *string*

Defined in: [types/DW_Rest.d.ts:120](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L120)

___

### CreatedAt

• `Optional` **CreatedAt**: *undefined* \| *string*

Defined in: [types/DW_Rest.d.ts:126](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L126)

___

### CreatedAtSpecified

• `Optional` **CreatedAtSpecified**: *undefined* \| *boolean*

Defined in: [types/DW_Rest.d.ts:127](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L127)

___

### Fields

• `Optional` **Fields**: *undefined* \| [*IField*](types_dw_rest.dwrest.ifield.md)[]

Defined in: [types/DW_Rest.d.ts:107](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L107)

___

### FileCabinetId

• `Optional` **FileCabinetId**: *undefined* \| *string*

Defined in: [types/DW_Rest.d.ts:132](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L132)

___

### FileSize

• `Optional` **FileSize**: *undefined* \| *number*

Defined in: [types/DW_Rest.d.ts:128](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L128)

___

### Flags

• `Optional` **Flags**: *undefined* \| { `HasAppendedDocuments`: *boolean* ; `IsCheckedOut`: *boolean* ; `IsCold`: *boolean* ; `IsCopyRightProtected`: *boolean* ; `IsDBRecord`: *boolean* ; `IsDeleted`: *boolean* ; `IsEmail`: *boolean* ; `IsProtected`: *boolean* ; `IsVoiceAvailable`: *boolean*  }

Defined in: [types/DW_Rest.d.ts:108](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L108)

___

### Id

• `Optional` **Id**: *undefined* \| *number*

Defined in: [types/DW_Rest.d.ts:122](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L122)

___

### IntellixTrust

• `Optional` **IntellixTrust**: *undefined* \| *string*

Defined in: [types/DW_Rest.d.ts:130](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L130)

___

### LastModified

• `Optional` **LastModified**: *undefined* \| *string*

Defined in: [types/DW_Rest.d.ts:124](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L124)

___

### LastModifiedSpecified

• `Optional` **LastModifiedSpecified**: *undefined* \| *boolean*

Defined in: [types/DW_Rest.d.ts:125](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L125)

___

### Links

• `Optional` **Links**: *undefined* \| [*ILink*](types_dw_rest.dwrest.ilink.md)[]

Inherited from: [ILinkModel](types_dw_rest.dwrest.ilinkmodel.md).[Links](types_dw_rest.dwrest.ilinkmodel.md#links)

Defined in: [types/DW_Rest.d.ts:10](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L10)

___

### SectionCount

• `Optional` **SectionCount**: *undefined* \| *number*

Defined in: [types/DW_Rest.d.ts:129](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L129)

___

### Sections

• `Optional` **Sections**: *undefined* \| [*ISection*](types_dw_rest.dwrest.isection.md)[]

Defined in: [types/DW_Rest.d.ts:119](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L119)

___

### Title

• `Optional` **Title**: *undefined* \| *string*

Defined in: [types/DW_Rest.d.ts:123](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L123)

___

### TotalPages

• `Optional` **TotalPages**: *undefined* \| *number*

Defined in: [types/DW_Rest.d.ts:121](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L121)

___

### Version

• `Optional` **Version**: *undefined* \| [*IDocumentVersion*](types_dw_rest.dwrest.idocumentversion.md)

Defined in: [types/DW_Rest.d.ts:133](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L133)

___

### VersionStatus

• `Optional` **VersionStatus**: *undefined* \| *string*

Defined in: [types/DW_Rest.d.ts:131](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L131)
