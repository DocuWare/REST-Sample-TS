[Typedoc project reference documentation](../README.md) / [DialogExpression](../modules/dialogexpression.md) / DialogExpression

# Class: DialogExpression

[DialogExpression](../modules/dialogexpression.md).DialogExpression

**`export`**

**`implements`** {DWRest.IDialogExpression}

## Implements

- [`IDialogExpression`](../interfaces/types_dw_rest.idialogexpression.md)

## Table of contents

### Constructors

- [constructor](dialogexpression.dialogexpression-1.md#constructor)

### Properties

- [Condition](dialogexpression.dialogexpression-1.md#condition)
- [Operation](dialogexpression.dialogexpression-1.md#operation)

## Constructors

### constructor

• **new DialogExpression**(`Operation`, `Condition`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `Operation` | [`Operation`](../enums/types_dw_rest.operation.md) |
| `Condition` | [`ICondition`](../interfaces/types_dw_rest.icondition.md)[] |

#### Defined in

[DialogExpression.ts:10](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/DialogExpression.ts#L10)

## Properties

### Condition

• **Condition**: [`ICondition`](../interfaces/types_dw_rest.icondition.md)[]

#### Implementation of

[IDialogExpression](../interfaces/types_dw_rest.idialogexpression.md).[Condition](../interfaces/types_dw_rest.idialogexpression.md#condition)

___

### Operation

• **Operation**: [`Operation`](../enums/types_dw_rest.operation.md)

#### Implementation of

[IDialogExpression](../interfaces/types_dw_rest.idialogexpression.md).[Operation](../interfaces/types_dw_rest.idialogexpression.md#operation)
