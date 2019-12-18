---
title: EnlightenPipelineTerrainMesh (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                      | Description                                              |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| EnlightenPipelineTerrainMesh()                                   | Create a new instance of this structure type.            |
| EnlightenPipelineTerrainMesh(EnlightenPipelineTerrainMesh other) | Create a reference copy of a structure of the same type. |

## Properties

| Name               | Type                                                  | Description |
| ------------------ | ----------------------------------------------------- | ----------- |
| uvTranslation      | [Vec2](/vext/ref/cls/shr/Vec2)                     |             |
| boundingBox        | [AxisAlignedBox](/vext/ref/cls/shr/AxisAlignedBox) |             |
| uvTransform        | [Vec4](/vext/ref/cls/shr/Vec4)                     |             |
| lightMapResolution | number                                                |             |
| terrainMeshName    | string                                                |             |

## Methods

| Type                                                         | Name            | Parameters |
| ------------------------------------------------------------ | --------------- | ---------- |
| [EnlightenPipelineTerrainMesh](EnlightenPipelineTerrainMesh) | [Clone](#clone) |            |

### Clone

> [EnlightenPipelineTerrainMesh](EnlightenPipelineTerrainMesh) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
