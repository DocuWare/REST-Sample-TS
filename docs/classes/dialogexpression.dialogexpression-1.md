[Typedoc project reference documentation](../README.md) / [DialogExpression](../modules/dialogexpression.md) / DialogExpression

# Class: DialogExpression

[DialogExpression](../modules/dialogexpression.md).DialogExpression

**`export`** 

**`implements`** {DWRest.IDialogExpression}

## Hierarchy

* **DialogExpression**

## Implements

* [*IDialogExpression*](../interfaces/types_dw_rest.dwrest.idialogexpression.md)

## Table of contents

### Constructors

- [constructor](dialogexpression.dialogexpression-1.md#constructor)

### Properties

- [Condition](dialogexpression.dialogexpression-1.md#condition)
- [Operation](dialogexpression.dialogexpression-1.md#operation)

## Constructors

### constructor

\+ **new DialogExpression**(`Operation`: [*Operation*](../enums/types_dw_rest.dwrest.operation.md), `Condition`: [*ICondition*](../interfaces/types_dw_rest.dwrest.icondition.md)[]): [*DialogExpression*](dialogexpression.dialogexpression-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`Operation` | [*Operation*](../enums/types_dw_rest.dwrest.operation.md) |
`Condition` | [*ICondition*](../interfaces/types_dw_rest.dwrest.icondition.md)[] |

**Returns:** [*DialogExpression*](dialogexpression.dialogexpression-1.md)

Defined in: [DialogExpression.ts:11](https://github.com/DocuWare/REST-Sample-TS/blob/6171aa8/src/DialogExpression.ts#L11)

## Properties

### Condition

• **Condition**: [*ICondition*](../interfaces/types_dw_rest.dwrest.icondition.md)[]

Implementation of: [IDialogExpression](../interfaces/types_dw_rest.dwrest.idialogexpression.md).[Condition](../interfaces/types_dw_rest.dwrest.idialogexpression.md#condition)

___

### Operation

• **Operation**: [*Operation*](../enums/types_dw_rest.dwrest.operation.md)

Implementation of: [IDialogExpression](../interfaces/types_dw_rest.dwrest.idialogexpression.md).[Operation](../interfaces/types_dw_rest.dwrest.idialogexpression.md#operation)
