[Typedoc project reference documentation](../README.md) / [Modules](../modules.md) / [types/DW_Rest](../modules/types_dw_rest.md) / [DWRest](../modules/types_dw_rest.dwrest.md) / IDialog

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

Defined in: types/DW_Rest.d.ts:340

___

### Color

• **Color**: *string*

Defined in: types/DW_Rest.d.ts:341

___

### DisplayName

• **DisplayName**: *string*

Defined in: types/DW_Rest.d.ts:338

___

### Fields

• **Fields**: [*IDlgField*](types_dw_rest.dwrest.idlgfield.md)[]

Defined in: types/DW_Rest.d.ts:344

___

### FileCabinetId

• **FileCabinetId**: *string*

Defined in: types/DW_Rest.d.ts:336

___

### FileCabinetName

• **FileCabinetName**: *string*

Defined in: types/DW_Rest.d.ts:337

___

### Id

• **Id**: *string*

Defined in: types/DW_Rest.d.ts:335

___

### IsDefault

• **IsDefault**: *boolean*

Defined in: types/DW_Rest.d.ts:342

___

### IsForMobile

• **IsForMobile**: *boolean*

Defined in: types/DW_Rest.d.ts:339

___

### Links

• `Optional` **Links**: [*ILink*](types_dw_rest.dwrest.ilink.md)[]

Inherited from: [ILinkModel](types_dw_rest.dwrest.ilinkmodel.md).[Links](types_dw_rest.dwrest.ilinkmodel.md#links)

Defined in: types/DW_Rest.d.ts:10

___

### Properties

• **Properties**: { `LogicalOperator`: { `DefaultOperator`: [*Operation*](../enums/types_dw_rest.dwrest.operation.md) ; `Show`: *boolean*  }  }

#### Type declaration:

Name | Type |
------ | ------ |
`LogicalOperator` | { `DefaultOperator`: [*Operation*](../enums/types_dw_rest.dwrest.operation.md) ; `Show`: *boolean*  } |

Defined in: types/DW_Rest.d.ts:350

___

### Query

• **Query**: { `Expression`: *string* ; `Fields`: *string*[] ; `Links`: [*ILink*](types_dw_rest.dwrest.ilink.md)[]  }

#### Type declaration:

Name | Type |
------ | ------ |
`Expression` | *string* |
`Fields` | *string*[] |
`Links` | [*ILink*](types_dw_rest.dwrest.ilink.md)[] |

Defined in: types/DW_Rest.d.ts:345

___

### Type

• **Type**: [*DialogType*](../enums/types_dw_rest.dwrest.dialogtype.md)

Defined in: types/DW_Rest.d.ts:343
