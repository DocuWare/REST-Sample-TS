[Typedoc project reference documentation](../README.md) / [types/DW_Rest](../modules/types_dw_rest.md) / IDialog

# Interface: IDialog

[types/DW_Rest](../modules/types_dw_rest.md).IDialog

DocuWare Dialog Model

**`interface`** IDialog

## Hierarchy

- [`ILinkModel`](types_dw_rest.ilinkmodel.md)

  ↳ **`IDialog`**

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

• **AssignedDialogId**: `string`

#### Defined in

[types/DW_Rest.d.ts:410](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L410)

___

### Color

• **Color**: `string`

#### Defined in

[types/DW_Rest.d.ts:411](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L411)

___

### DisplayName

• **DisplayName**: `string`

#### Defined in

[types/DW_Rest.d.ts:408](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L408)

___

### Fields

• **Fields**: [`IDlgField`](types_dw_rest.idlgfield.md)[]

#### Defined in

[types/DW_Rest.d.ts:414](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L414)

___

### FileCabinetId

• **FileCabinetId**: `string`

#### Defined in

[types/DW_Rest.d.ts:406](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L406)

___

### FileCabinetName

• **FileCabinetName**: `string`

#### Defined in

[types/DW_Rest.d.ts:407](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L407)

___

### Id

• **Id**: `string`

#### Defined in

[types/DW_Rest.d.ts:405](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L405)

___

### IsDefault

• **IsDefault**: `boolean`

#### Defined in

[types/DW_Rest.d.ts:412](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L412)

___

### IsForMobile

• **IsForMobile**: `boolean`

#### Defined in

[types/DW_Rest.d.ts:409](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L409)

___

### Links

• `Optional` **Links**: [`ILink`](types_dw_rest.ilink.md)[]

#### Inherited from

[ILinkModel](types_dw_rest.ilinkmodel.md).[Links](types_dw_rest.ilinkmodel.md#links)

#### Defined in

[types/DW_Rest.d.ts:8](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L8)

___

### Properties

• **Properties**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `LogicalOperator` | `Object` |
| `LogicalOperator.DefaultOperator` | [`Operation`](../enums/types_dw_rest.operation.md) |
| `LogicalOperator.Show` | `boolean` |

#### Defined in

[types/DW_Rest.d.ts:420](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L420)

___

### Query

• **Query**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Expression` | `string` |
| `Fields` | `string`[] |
| `Links` | [`ILink`](types_dw_rest.ilink.md)[] |

#### Defined in

[types/DW_Rest.d.ts:415](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L415)

___

### Type

• **Type**: [`DialogType`](../enums/types_dw_rest.dialogtype.md)

#### Defined in

[types/DW_Rest.d.ts:413](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L413)
