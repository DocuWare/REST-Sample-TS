[Typedoc project reference documentation](../README.md) / [types/DW_Rest](../modules/types_dw_rest.md) / [DWRest](../modules/types_dw_rest.dwrest.md) / IOrganization

# Interface: IOrganization

[types/DW_Rest](../modules/types_dw_rest.md).[DWRest](../modules/types_dw_rest.dwrest.md).IOrganization

DocuWare Organization Model

**`interface`** IOrganization

## Hierarchy

* [*ILinkModel*](types_dw_rest.dwrest.ilinkmodel.md)

  ↳ **IOrganization**

## Table of contents

### Properties

- [AdditionalInfo](types_dw_rest.dwrest.iorganization.md#additionalinfo)
- [Guid](types_dw_rest.dwrest.iorganization.md#guid)
- [Links](types_dw_rest.dwrest.iorganization.md#links)
- [Name](types_dw_rest.dwrest.iorganization.md#name)

## Properties

### AdditionalInfo

• **AdditionalInfo**: { `Administrator`: *string* ; `EMail`: *string* ; `OrganizationType`: *string* ; `RuntimeVersion`: *string* ; `SystemNumber`: *number*  }

#### Type declaration:

Name | Type |
------ | ------ |
`Administrator` | *string* |
`EMail` | *string* |
`OrganizationType` | *string* |
`RuntimeVersion` | *string* |
`SystemNumber` | *number* |

Defined in: [types/DW_Rest.d.ts:58](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L58)

___

### Guid

• **Guid**: *string*

Defined in: [types/DW_Rest.d.ts:57](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L57)

___

### Links

• `Optional` **Links**: *undefined* \| [*ILink*](types_dw_rest.dwrest.ilink.md)[]

Inherited from: [ILinkModel](types_dw_rest.dwrest.ilinkmodel.md).[Links](types_dw_rest.dwrest.ilinkmodel.md#links)

Defined in: [types/DW_Rest.d.ts:10](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L10)

___

### Name

• **Name**: *string*

Defined in: [types/DW_Rest.d.ts:56](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L56)
