[Typedoc project reference documentation](../README.md) / [Annotations](../modules/annotations.md) / TextEntry

# Class: TextEntry

[Annotations](../modules/annotations.md).TextEntry

**`export`** 

**`implements`** {DWRest.ITextEntry}

## Hierarchy

* **TextEntry**

## Implements

* [*ITextEntry*](../interfaces/types_dw_rest.dwrest.itextentry.md)

## Table of contents

### Constructors

- [constructor](annotations.textentry.md#constructor)

### Properties

- [$type](annotations.textentry.md#$type)
- [Color](annotations.textentry.md#color)
- [Created](annotations.textentry.md#created)
- [Font](annotations.textentry.md#font)
- [Id](annotations.textentry.md#id)
- [Location](annotations.textentry.md#location)
- [Rotation](annotations.textentry.md#rotation)
- [StrokeWidth](annotations.textentry.md#strokewidth)
- [Transparent](annotations.textentry.md#transparent)
- [Value](annotations.textentry.md#value)

## Constructors

### constructor

\+ **new TextEntry**(`value`: *string*, `font`: [*IFont*](../interfaces/types_dw_rest.dwrest.ifont.md), `location`: [*IAnnotationRectangle*](../interfaces/types_dw_rest.dwrest.iannotationrectangle.md)): [*TextEntry*](annotations.textentry.md)

#### Parameters:

Name | Type |
------ | ------ |
`value` | *string* |
`font` | [*IFont*](../interfaces/types_dw_rest.dwrest.ifont.md) |
`location` | [*IAnnotationRectangle*](../interfaces/types_dw_rest.dwrest.iannotationrectangle.md) |

**Returns:** [*TextEntry*](annotations.textentry.md)

Defined in: [Annotations.ts:22](https://github.com/DocuWare/REST-Sample-TS/blob/6f07cff/src/Annotations.ts#L22)

## Properties

### $type

• **$type**: *string*= 'DocuWare.DocumentContentProcessing.Annotations.TextEntry, DocuWare.DocumentContentProcessing.Annotations'

Implementation of: [ITextEntry](../interfaces/types_dw_rest.dwrest.itextentry.md).[$type](../interfaces/types_dw_rest.dwrest.itextentry.md#$type)

Defined in: [Annotations.ts:13](https://github.com/DocuWare/REST-Sample-TS/blob/6f07cff/src/Annotations.ts#L13)

___

### Color

• `Optional` **Color**: *undefined* \| *string*

Implementation of: [ITextEntry](../interfaces/types_dw_rest.dwrest.itextentry.md).[Color](../interfaces/types_dw_rest.dwrest.itextentry.md#color)

Defined in: [Annotations.ts:18](https://github.com/DocuWare/REST-Sample-TS/blob/6f07cff/src/Annotations.ts#L18)

___

### Created

• `Optional` **Created**: *undefined* \| [*ICreateInfo*](../interfaces/types_dw_rest.dwrest.icreateinfo.md)

Implementation of: [ITextEntry](../interfaces/types_dw_rest.dwrest.itextentry.md).[Created](../interfaces/types_dw_rest.dwrest.itextentry.md#created)

Defined in: [Annotations.ts:17](https://github.com/DocuWare/REST-Sample-TS/blob/6f07cff/src/Annotations.ts#L17)

___

### Font

• **Font**: [*IFont*](../interfaces/types_dw_rest.dwrest.ifont.md)

Implementation of: [ITextEntry](../interfaces/types_dw_rest.dwrest.itextentry.md).[Font](../interfaces/types_dw_rest.dwrest.itextentry.md#font)

Defined in: [Annotations.ts:15](https://github.com/DocuWare/REST-Sample-TS/blob/6f07cff/src/Annotations.ts#L15)

___

### Id

• `Optional` **Id**: *undefined* \| *string*

Implementation of: [ITextEntry](../interfaces/types_dw_rest.dwrest.itextentry.md).[Id](../interfaces/types_dw_rest.dwrest.itextentry.md#id)

Defined in: [Annotations.ts:22](https://github.com/DocuWare/REST-Sample-TS/blob/6f07cff/src/Annotations.ts#L22)

___

### Location

• **Location**: [*IAnnotationRectangle*](../interfaces/types_dw_rest.dwrest.iannotationrectangle.md)

Implementation of: [ITextEntry](../interfaces/types_dw_rest.dwrest.itextentry.md).[Location](../interfaces/types_dw_rest.dwrest.itextentry.md#location)

Defined in: [Annotations.ts:16](https://github.com/DocuWare/REST-Sample-TS/blob/6f07cff/src/Annotations.ts#L16)

___

### Rotation

• `Optional` **Rotation**: *undefined* \| [*Zero*](../enums/types_dw_rest.dwrest.rotation.md#zero) \| [*Ninety*](../enums/types_dw_rest.dwrest.rotation.md#ninety) \| [*HundredEighty*](../enums/types_dw_rest.dwrest.rotation.md#hundredeighty) \| [*TwoHundredSeventy*](../enums/types_dw_rest.dwrest.rotation.md#twohundredseventy)

Implementation of: [ITextEntry](../interfaces/types_dw_rest.dwrest.itextentry.md).[Rotation](../interfaces/types_dw_rest.dwrest.itextentry.md#rotation)

Defined in: [Annotations.ts:19](https://github.com/DocuWare/REST-Sample-TS/blob/6f07cff/src/Annotations.ts#L19)

___

### StrokeWidth

• `Optional` **StrokeWidth**: *undefined* \| *number*

Implementation of: [ITextEntry](../interfaces/types_dw_rest.dwrest.itextentry.md).[StrokeWidth](../interfaces/types_dw_rest.dwrest.itextentry.md#strokewidth)

Defined in: [Annotations.ts:21](https://github.com/DocuWare/REST-Sample-TS/blob/6f07cff/src/Annotations.ts#L21)

___

### Transparent

• `Optional` **Transparent**: *undefined* \| *boolean*

Implementation of: [ITextEntry](../interfaces/types_dw_rest.dwrest.itextentry.md).[Transparent](../interfaces/types_dw_rest.dwrest.itextentry.md#transparent)

Defined in: [Annotations.ts:20](https://github.com/DocuWare/REST-Sample-TS/blob/6f07cff/src/Annotations.ts#L20)

___

### Value

• **Value**: *string*

Implementation of: [ITextEntry](../interfaces/types_dw_rest.dwrest.itextentry.md).[Value](../interfaces/types_dw_rest.dwrest.itextentry.md#value)

Defined in: [Annotations.ts:14](https://github.com/DocuWare/REST-Sample-TS/blob/6f07cff/src/Annotations.ts#L14)
