[Typedoc project reference documentation](../README.md) / [types/DW_Rest](../modules/types_dw_rest.md) / [DWRest](../modules/types_dw_rest.dwrest.md) / IDialog

# Interface: IDialog

[types/DW_Rest](../modules/types_dw_rest.md).[DWRest](../modules/types_dw_rest.dwrest.md).IDialog

DocuWare Dialog Model

**`interface`** IDialog

## Hierarchy

* [*ILinkModel*](types_dw_rest.dwrest.ilinkmodel.md)

  ↳ **IDialog**

## Table of contents

### Properties

- [AssignedDialogId](types_dw_rest.dwrest.idialog.md#assigneddialogid)
- [Color](types_dw_rest.dwrest.idialog.md#color)
- [DisplayName](types_dw_rest.dwrest.idialog.md#displayname)
- [Fields](types_dw_rest.dwrest.idialog.md#fields)
- [FileCabinetId](types_dw_rest.dwrest.idialog.md#filecabinetid)
- [FileCabinetName](types_dw_rest.dwrest.idialog.md#filecabinetname)
- [Id](types_dw_rest.dwrest.idialog.md#id)
- [IsDefault](types_dw_rest.dwrest.idialog.md#isdefault)
- [IsForMobile](types_dw_rest.dwrest.idialog.md#isformobile)
- [Links](types_dw_rest.dwrest.idialog.md#links)
- [Properties](types_dw_rest.dwrest.idialog.md#properties)
- [Query](types_dw_rest.dwrest.idialog.md#query)
- [Type](types_dw_rest.dwrest.idialog.md#type)

## Properties

### AssignedDialogId

• **AssignedDialogId**: *string*

Defined in: [types/DW_Rest.d.ts:355](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L355)

___

### Color

• **Color**: *string*

Defined in: [types/DW_Rest.d.ts:356](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L356)

___

### DisplayName

• **DisplayName**: *string*

Defined in: [types/DW_Rest.d.ts:353](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L353)

___

### Fields

• **Fields**: [*IDlgField*](types_dw_rest.dwrest.idlgfield.md)[]

Defined in: [types/DW_Rest.d.ts:359](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L359)

___

### FileCabinetId

• **FileCabinetId**: *string*

Defined in: [types/DW_Rest.d.ts:351](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L351)

___

### FileCabinetName

• **FileCabinetName**: *string*

Defined in: [types/DW_Rest.d.ts:352](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L352)

___

### Id

• **Id**: *string*

Defined in: [types/DW_Rest.d.ts:350](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L350)

___

### IsDefault

• **IsDefault**: *boolean*

Defined in: [types/DW_Rest.d.ts:357](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L357)

___

### IsForMobile

• **IsForMobile**: *boolean*

Defined in: [types/DW_Rest.d.ts:354](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L354)

___

### Links

• `Optional` **Links**: *undefined* \| [*ILink*](types_dw_rest.dwrest.ilink.md)[]

Inherited from: [ILinkModel](types_dw_rest.dwrest.ilinkmodel.md).[Links](types_dw_rest.dwrest.ilinkmodel.md#links)

Defined in: [types/DW_Rest.d.ts:10](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L10)

___

### Properties

• **Properties**: { `LogicalOperator`: { `DefaultOperator`: [*Operation*](../enums/types_dw_rest.dwrest.operation.md) ; `Show`: *boolean*  }  }

#### Type declaration:

Name | Type |
------ | ------ |
`LogicalOperator` | { `DefaultOperator`: [*Operation*](../enums/types_dw_rest.dwrest.operation.md) ; `Show`: *boolean*  } |

Defined in: [types/DW_Rest.d.ts:365](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L365)

___

### Query

• **Query**: { `Expression`: *string* ; `Fields`: *string*[] ; `Links`: [*ILink*](types_dw_rest.dwrest.ilink.md)[]  }

#### Type declaration:

Name | Type |
------ | ------ |
`Expression` | *string* |
`Fields` | *string*[] |
`Links` | [*ILink*](types_dw_rest.dwrest.ilink.md)[] |

Defined in: [types/DW_Rest.d.ts:360](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L360)

___

### Type

• **Type**: [*DialogType*](../enums/types_dw_rest.dwrest.dialogtype.md)

Defined in: [types/DW_Rest.d.ts:358](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/types/DW_Rest.d.ts#L358)
