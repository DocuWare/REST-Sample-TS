[Typedoc project reference documentation](../README.md) / [Modules](../modules.md) / [types/DW_Rest](../modules/types_dw_rest.md) / IDialog

# Interface: IDialog

[types/DW_Rest](../modules/types_dw_rest.md).IDialog

DocuWare Dialog Model

**`interface`** IDialog

## Hierarchy

* [*ILinkModel*](types_dw_rest.ilinkmodel.md)

  ↳ **IDialog**

## Table of contents

### Properties

- [AssignedDialogId](types_dw_rest.idialog.md#assigneddialogid)
- [Color](types_dw_rest.idialog.md#color)
- [DisplayName](types_dw_rest.idialog.md#displayname)
- [Fields](types_dw_rest.idialog.md#fields)
- [FileCabinetId](types_dw_rest.idialog.md#filecabinetid)
- [FileCabinetName](types_dw_rest.idialog.md#filecabinetname)
- [Id](types_dw_rest.idialog.md#id)
- [IsDefault](types_dw_rest.idialog.md#isdefault)
- [IsForMobile](types_dw_rest.idialog.md#isformobile)
- [Links](types_dw_rest.idialog.md#links)
- [Properties](types_dw_rest.idialog.md#properties)
- [Query](types_dw_rest.idialog.md#query)
- [Type](types_dw_rest.idialog.md#type)

## Properties

### AssignedDialogId

• **AssignedDialogId**: *string*

Defined in: types/DW_Rest.d.ts:332

___

### Color

• **Color**: *string*

Defined in: types/DW_Rest.d.ts:333

___

### DisplayName

• **DisplayName**: *string*

Defined in: types/DW_Rest.d.ts:330

___

### Fields

• **Fields**: [*IDlgField*](types_dw_rest.idlgfield.md)[]

Defined in: types/DW_Rest.d.ts:336

___

### FileCabinetId

• **FileCabinetId**: *string*

Defined in: types/DW_Rest.d.ts:328

___

### FileCabinetName

• **FileCabinetName**: *string*

Defined in: types/DW_Rest.d.ts:329

___

### Id

• **Id**: *string*

Defined in: types/DW_Rest.d.ts:327

___

### IsDefault

• **IsDefault**: *boolean*

Defined in: types/DW_Rest.d.ts:334

___

### IsForMobile

• **IsForMobile**: *boolean*

Defined in: types/DW_Rest.d.ts:331

___

### Links

• `Optional` **Links**: [*ILink*](types_dw_rest.ilink.md)[]

Inherited from: [ILinkModel](types_dw_rest.ilinkmodel.md).[Links](types_dw_rest.ilinkmodel.md#links)

Defined in: types/DW_Rest.d.ts:12

___

### Properties

• **Properties**: { `LogicalOperator`: { `DefaultOperator`: [*Operation*](../enums/types_dw_rest.operation.md) ; `Show`: *boolean*  }  }

#### Type declaration:

Name | Type |
------ | ------ |
`LogicalOperator` | { `DefaultOperator`: [*Operation*](../enums/types_dw_rest.operation.md) ; `Show`: *boolean*  } |

Defined in: types/DW_Rest.d.ts:342

___

### Query

• **Query**: { `Expression`: *string* ; `Fields`: *string*[] ; `Links`: [*ILink*](types_dw_rest.ilink.md)[]  }

#### Type declaration:

Name | Type |
------ | ------ |
`Expression` | *string* |
`Fields` | *string*[] |
`Links` | [*ILink*](types_dw_rest.ilink.md)[] |

Defined in: types/DW_Rest.d.ts:337

___

### Type

• **Type**: [*DialogType*](../enums/types_dw_rest.dialogtype.md)

Defined in: types/DW_Rest.d.ts:335
