---
title: EnlightenDbInstance (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| EnlightenDbInstance()                          | Create a new instance of this structure type.            |
| EnlightenDbInstance(EnlightenDbInstance other) | Create a reference copy of a structure of the same type. |

## Properties

| Name              | Type                                                    | Description |
| ----------------- | ------------------------------------------------------- | ----------- |
| worldBoundingbox  | [AxisAlignedBox](/vext/ref/cls/shr/AxisAlignedBox)   |             |
| worldTransform    | [LinearTransform](/vext/ref/cls/shr/LinearTransform) |             |
| uvTranslation     | [Vec2](/vext/ref/cls/shr/Vec2)                       |             |
| uvTransform       | [Vec4](/vext/ref/cls/shr/Vec4)                       |             |
| geometryId        | number                                                  |             |
| objectVariation   | string                                                  |             |
| guidString        | string                                                  |             |
| uvSizeX           | number                                                  |             |
| uvSizeY           | number                                                  |             |
| pixelSize         | number                                                  |             |
| enlightenMeshName | string                                                  |             |
| meshAsset         | string                                                  |             |
| instanceAlbedos   | number\[\]                                              |             |
| cacheKey          | [Guid](/vext/ref/cls/shr/Guid)                       |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [EnlightenDbInstance](EnlightenDbInstance) | [Clone](#clone) |            |

### Clone

> [EnlightenDbInstance](EnlightenDbInstance) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
