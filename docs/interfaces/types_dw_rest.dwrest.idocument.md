[Typedoc project reference documentation](../README.md) / [Modules](../modules.md) / [types/DW_Rest](../modules/types_dw_rest.md) / [DWRest](../modules/types_dw_rest.dwrest.md) / IDocument

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

• `Optional` **ApplicationProperties**: [*IDocumentApplicationProperty*](types_dw_rest.dwrest.idocumentapplicationproperty.md)[]

Defined in: types/DW_Rest.d.ts:148

___

### ContentType

• `Optional` **ContentType**: *string*

Defined in: types/DW_Rest.d.ts:134

___

### CreatedAt

• `Optional` **CreatedAt**: *string*

Defined in: types/DW_Rest.d.ts:140

___

### CreatedAtSpecified

• `Optional` **CreatedAtSpecified**: *boolean*

Defined in: types/DW_Rest.d.ts:141

___

### Fields

• `Optional` **Fields**: [*IField*](types_dw_rest.dwrest.ifield.md)[]

Defined in: types/DW_Rest.d.ts:121

___

### FileCabinetId

• `Optional` **FileCabinetId**: *string*

Defined in: types/DW_Rest.d.ts:146

___

### FileSize

• `Optional` **FileSize**: *number*

Defined in: types/DW_Rest.d.ts:142

___

### Flags

• `Optional` **Flags**: { `HasAppendedDocuments`: *boolean* ; `IsCheckedOut`: *boolean* ; `IsCold`: *boolean* ; `IsCopyRightProtected`: *boolean* ; `IsDBRecord`: *boolean* ; `IsDeleted`: *boolean* ; `IsEmail`: *boolean* ; `IsProtected`: *boolean* ; `IsVoiceAvailable`: *boolean*  }

#### Type declaration:

Name | Type |
------ | ------ |
`HasAppendedDocuments` | *boolean* |
`IsCheckedOut` | *boolean* |
`IsCold` | *boolean* |
`IsCopyRightProtected` | *boolean* |
`IsDBRecord` | *boolean* |
`IsDeleted` | *boolean* |
`IsEmail` | *boolean* |
`IsProtected` | *boolean* |
`IsVoiceAvailable` | *boolean* |

Defined in: types/DW_Rest.d.ts:122

___

### Id

• `Optional` **Id**: *number*

Defined in: types/DW_Rest.d.ts:136

___

### IntellixTrust

• `Optional` **IntellixTrust**: *string*

Defined in: types/DW_Rest.d.ts:144

___

### LastModified

• `Optional` **LastModified**: *string*

Defined in: types/DW_Rest.d.ts:138

___

### LastModifiedSpecified

• `Optional` **LastModifiedSpecified**: *boolean*

Defined in: types/DW_Rest.d.ts:139

___

### Links

• `Optional` **Links**: [*ILink*](types_dw_rest.dwrest.ilink.md)[]

Inherited from: [ILinkModel](types_dw_rest.dwrest.ilinkmodel.md).[Links](types_dw_rest.dwrest.ilinkmodel.md#links)

Defined in: types/DW_Rest.d.ts:10

___

### SectionCount

• `Optional` **SectionCount**: *number*

Defined in: types/DW_Rest.d.ts:143

___

### Sections

• `Optional` **Sections**: [*ISection*](types_dw_rest.dwrest.isection.md)[]

Defined in: types/DW_Rest.d.ts:133

___

### Title

• `Optional` **Title**: *string*

Defined in: types/DW_Rest.d.ts:137

___

### TotalPages

• `Optional` **TotalPages**: *number*

Defined in: types/DW_Rest.d.ts:135

___

### Version

• `Optional` **Version**: [*IDocumentVersion*](types_dw_rest.dwrest.idocumentversion.md)

Defined in: types/DW_Rest.d.ts:147

___

### VersionStatus

• `Optional` **VersionStatus**: *string*

Defined in: types/DW_Rest.d.ts:145
