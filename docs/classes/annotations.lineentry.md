[Typedoc project reference documentation](../README.md) / [Modules](../modules.md) / [Annotations](../modules/annotations.md) / LineEntry

# Class: LineEntry

[Annotations](../modules/annotations.md).LineEntry

**`export`** 

**`implements`** {DWRest.ILineEntry}

## Hierarchy

* **LineEntry**

## Implements

* [*ILineEntry*](../interfaces/types_dw_rest.ilineentry.md)

## Table of contents

### Constructors

- [constructor](annotations.lineentry.md#constructor)

### Properties

- [$type](annotations.lineentry.md#$type)
- [Arrow](annotations.lineentry.md#arrow)
- [Color](annotations.lineentry.md#color)
- [Created](annotations.lineentry.md#created)
- [From](annotations.lineentry.md#from)
- [Id](annotations.lineentry.md#id)
- [Rotation](annotations.lineentry.md#rotation)
- [StrokeWidth](annotations.lineentry.md#strokewidth)
- [To](annotations.lineentry.md#to)
- [Transparent](annotations.lineentry.md#transparent)

## Constructors

### constructor

\+ **new LineEntry**(`from`: [*IAnnotationPoint*](../interfaces/types_dw_rest.iannotationpoint.md), `to`: [*IAnnotationPoint*](../interfaces/types_dw_rest.iannotationpoint.md)): [*LineEntry*](annotations.lineentry.md)

#### Parameters:

Name | Type |
------ | ------ |
`from` | [*IAnnotationPoint*](../interfaces/types_dw_rest.iannotationpoint.md) |
`to` | [*IAnnotationPoint*](../interfaces/types_dw_rest.iannotationpoint.md) |

**Returns:** [*LineEntry*](annotations.lineentry.md)

Defined in: Annotations.ts:49

## Properties

### $type

• **$type**: *string*= 'LineEntry'

Implementation of: [ILineEntry](../interfaces/types_dw_rest.ilineentry.md).[$type](../interfaces/types_dw_rest.ilineentry.md#$type)

Defined in: Annotations.ts:40

___

### Arrow

• `Optional` **Arrow**: *boolean*

Implementation of: [ILineEntry](../interfaces/types_dw_rest.ilineentry.md).[Arrow](../interfaces/types_dw_rest.ilineentry.md#arrow)

Defined in: Annotations.ts:43

___

### Color

• `Optional` **Color**: *string*

Implementation of: [ILineEntry](../interfaces/types_dw_rest.ilineentry.md).[Color](../interfaces/types_dw_rest.ilineentry.md#color)

Defined in: Annotations.ts:45

___

### Created

• `Optional` **Created**: [*ICreateInfo*](../interfaces/types_dw_rest.icreateinfo.md)

Implementation of: [ILineEntry](../interfaces/types_dw_rest.ilineentry.md).[Created](../interfaces/types_dw_rest.ilineentry.md#created)

Defined in: Annotations.ts:44

___

### From

• **From**: [*IAnnotationPoint*](../interfaces/types_dw_rest.iannotationpoint.md)

Implementation of: [ILineEntry](../interfaces/types_dw_rest.ilineentry.md).[From](../interfaces/types_dw_rest.ilineentry.md#from)

Defined in: Annotations.ts:41

___

### Id

• `Optional` **Id**: *string*

Implementation of: [ILineEntry](../interfaces/types_dw_rest.ilineentry.md).[Id](../interfaces/types_dw_rest.ilineentry.md#id)

Defined in: Annotations.ts:49

___

### Rotation

• `Optional` **Rotation**: [*Zero*](../enums/types_dw_rest.rotation.md#zero) \| [*Ninety*](../enums/types_dw_rest.rotation.md#ninety) \| [*HundredEighty*](../enums/types_dw_rest.rotation.md#hundredeighty) \| [*TwoHundredSeventy*](../enums/types_dw_rest.rotation.md#twohundredseventy)

Implementation of: [ILineEntry](../interfaces/types_dw_rest.ilineentry.md).[Rotation](../interfaces/types_dw_rest.ilineentry.md#rotation)

Defined in: Annotations.ts:46

___

### StrokeWidth

• `Optional` **StrokeWidth**: *number*

Implementation of: [ILineEntry](../interfaces/types_dw_rest.ilineentry.md).[StrokeWidth](../interfaces/types_dw_rest.ilineentry.md#strokewidth)

Defined in: Annotations.ts:48

___

### To

• **To**: [*IAnnotationPoint*](../interfaces/types_dw_rest.iannotationpoint.md)

Implementation of: [ILineEntry](../interfaces/types_dw_rest.ilineentry.md).[To](../interfaces/types_dw_rest.ilineentry.md#to)

Defined in: Annotations.ts:42

___

### Transparent

• `Optional` **Transparent**: *boolean*

Implementation of: [ILineEntry](../interfaces/types_dw_rest.ilineentry.md).[Transparent](../interfaces/types_dw_rest.ilineentry.md#transparent)

Defined in: Annotations.ts:47
