[Typedoc project reference documentation](../README.md) / [types/DW_Rest](../modules/types_dw_rest.md) / IPage

# Interface: IPage

[types/DW_Rest](../modules/types_dw_rest.md).IPage

DocuWare Page Model

**`interface`** IPage

## Hierarchy

- [`ILinkModel`](types_dw_rest.ilinkmodel.md)

  ↳ **`IPage`**

## Table of contents

### Properties

- [Data](types_dw_rest.ipage.md#data)
- [Links](types_dw_rest.ipage.md#links)
- [PageNum](types_dw_rest.ipage.md#pagenum)

## Properties

### Data

• **Data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ContentArea` | `Object` |
| `ContentArea.Height` | `number` |
| `ContentArea.Left` | `number` |
| `ContentArea.Top` | `number` |
| `ContentArea.Width` | `number` |
| `DpiX` | `number` |
| `DpiY` | `number` |
| `Height` | `number` |
| `LowQualitySize` | `number` |
| `RenderedImageFormat` | `string` |
| `TileSize` | `number` |
| `Width` | `number` |

#### Defined in

[types/DW_Rest.d.ts:274](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L274)

___

### Links

• `Optional` **Links**: [`ILink`](types_dw_rest.ilink.md)[]

#### Inherited from

[ILinkModel](types_dw_rest.ilinkmodel.md).[Links](types_dw_rest.ilinkmodel.md#links)

#### Defined in

[types/DW_Rest.d.ts:8](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L8)

___

### PageNum

• **PageNum**: `number`

#### Defined in

[types/DW_Rest.d.ts:273](https://github.com/DocuWare/REST-Sample-TS/blob/828b3d4/src/types/DW_Rest.d.ts#L273)
