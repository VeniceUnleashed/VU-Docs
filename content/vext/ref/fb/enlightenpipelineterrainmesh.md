---
title: EnlightenPipelineTerrainMesh
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
| uvTranslation      | [Vec2](/vext/ref/shared/class/vec2)                     |             |
| boundingBox        | [AxisAlignedBox](/vext/ref/shared/class/axisalignedbox) |             |
| uvTransform        | [Vec4](/vext/ref/shared/class/vec4)                     |             |
| lightMapResolution | number                                                |             |
| terrainMeshName    | string                                                |             |

## Methods

| Type                                                         | Name            | Parameters |
| ------------------------------------------------------------ | --------------- | ---------- |
| [EnlightenPipelineTerrainMesh](/vext/ref/fb/enlightenpipelineterrainmesh/) | [Clone](#clone) |            |

### Clone

> [EnlightenPipelineTerrainMesh](/vext/ref/fb/enlightenpipelineterrainmesh/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
