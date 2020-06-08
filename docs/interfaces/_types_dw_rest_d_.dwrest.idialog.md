[Typedoc project reference documentation](../README.md) > ["types/DW_Rest.d"](../modules/_types_dw_rest_d_.md) > [DWRest](../modules/_types_dw_rest_d_.dwrest.md) > [IDialog](../interfaces/_types_dw_rest_d_.dwrest.idialog.md)

# Interface: IDialog

DocuWare Dialog Model

*__interface__*: IDialog

*__extends__*: {ILinkModel}

## Hierarchy

 [ILinkModel](_types_dw_rest_d_.dwrest.ilinkmodel.md)

**↳ IDialog**

## Index

### Properties

* [AssignedDialogId](_types_dw_rest_d_.dwrest.idialog.md#assigneddialogid)
* [Color](_types_dw_rest_d_.dwrest.idialog.md#color)
* [DisplayName](_types_dw_rest_d_.dwrest.idialog.md#displayname)
* [Fields](_types_dw_rest_d_.dwrest.idialog.md#fields)
* [FileCabinetId](_types_dw_rest_d_.dwrest.idialog.md#filecabinetid)
* [FileCabinetName](_types_dw_rest_d_.dwrest.idialog.md#filecabinetname)
* [Id](_types_dw_rest_d_.dwrest.idialog.md#id)
* [IsDefault](_types_dw_rest_d_.dwrest.idialog.md#isdefault)
* [IsForMobile](_types_dw_rest_d_.dwrest.idialog.md#isformobile)
* [Links](_types_dw_rest_d_.dwrest.idialog.md#links)
* [Properties](_types_dw_rest_d_.dwrest.idialog.md#properties)
* [Query](_types_dw_rest_d_.dwrest.idialog.md#query)
* [Type](_types_dw_rest_d_.dwrest.idialog.md#type)

---

## Properties

<a id="assigneddialogid"></a>

###  AssignedDialogId

**● AssignedDialogId**: *`string`*

*Defined in [types/DW_Rest.d.ts:354](https://github.com/DocuWare/REST-Sample-TS/blob/0222c3e/src/types/DW_Rest.d.ts#L354)*

___
<a id="color"></a>

###  Color

**● Color**: *`string`*

*Defined in [types/DW_Rest.d.ts:355](https://github.com/DocuWare/REST-Sample-TS/blob/0222c3e/src/types/DW_Rest.d.ts#L355)*

___
<a id="displayname"></a>

###  DisplayName

**● DisplayName**: *`string`*

*Defined in [types/DW_Rest.d.ts:352](https://github.com/DocuWare/REST-Sample-TS/blob/0222c3e/src/types/DW_Rest.d.ts#L352)*

___
<a id="fields"></a>

###  Fields

**● Fields**: *[IDlgField](_types_dw_rest_d_.dwrest.idlgfield.md)[]*

*Defined in [types/DW_Rest.d.ts:358](https://github.com/DocuWare/REST-Sample-TS/blob/0222c3e/src/types/DW_Rest.d.ts#L358)*

___
<a id="filecabinetid"></a>

###  FileCabinetId

**● FileCabinetId**: *`string`*

*Defined in [types/DW_Rest.d.ts:350](https://github.com/DocuWare/REST-Sample-TS/blob/0222c3e/src/types/DW_Rest.d.ts#L350)*

___
<a id="filecabinetname"></a>

###  FileCabinetName

**● FileCabinetName**: *`string`*

*Defined in [types/DW_Rest.d.ts:351](https://github.com/DocuWare/REST-Sample-TS/blob/0222c3e/src/types/DW_Rest.d.ts#L351)*

___
<a id="id"></a>

###  Id

**● Id**: *`string`*

*Defined in [types/DW_Rest.d.ts:349](https://github.com/DocuWare/REST-Sample-TS/blob/0222c3e/src/types/DW_Rest.d.ts#L349)*

___
<a id="isdefault"></a>

###  IsDefault

**● IsDefault**: *`boolean`*

*Defined in [types/DW_Rest.d.ts:356](https://github.com/DocuWare/REST-Sample-TS/blob/0222c3e/src/types/DW_Rest.d.ts#L356)*

___
<a id="isformobile"></a>

###  IsForMobile

**● IsForMobile**: *`boolean`*

*Defined in [types/DW_Rest.d.ts:353](https://github.com/DocuWare/REST-Sample-TS/blob/0222c3e/src/types/DW_Rest.d.ts#L353)*

___
<a id="links"></a>

### `<Optional>` Links

**● Links**: *[ILink](_types_dw_rest_d_.dwrest.ilink.md)[]*

*Inherited from [ILinkModel](_types_dw_rest_d_.dwrest.ilinkmodel.md).[Links](_types_dw_rest_d_.dwrest.ilinkmodel.md#links)*

*Defined in [types/DW_Rest.d.ts:10](https://github.com/DocuWare/REST-Sample-TS/blob/0222c3e/src/types/DW_Rest.d.ts#L10)*

___
<a id="properties"></a>

###  Properties

**● Properties**: *`object`*

*Defined in [types/DW_Rest.d.ts:364](https://github.com/DocuWare/REST-Sample-TS/blob/0222c3e/src/types/DW_Rest.d.ts#L364)*

#### Type declaration

 LogicalOperator: `object`

 DefaultOperator: [Operation](../enums/_types_dw_rest_d_.dwrest.operation.md)

 Show: `boolean`

___
<a id="query"></a>

###  Query

**● Query**: *`object`*

*Defined in [types/DW_Rest.d.ts:359](https://github.com/DocuWare/REST-Sample-TS/blob/0222c3e/src/types/DW_Rest.d.ts#L359)*

#### Type declaration

 Expression: `string`

 Fields: `string`[]

 Links: [ILink](_types_dw_rest_d_.dwrest.ilink.md)[]

___
<a id="type"></a>

###  Type

**● Type**: *[DialogType](../enums/_types_dw_rest_d_.dwrest.dialogtype.md)*

*Defined in [types/DW_Rest.d.ts:357](https://github.com/DocuWare/REST-Sample-TS/blob/0222c3e/src/types/DW_Rest.d.ts#L357)*

___

