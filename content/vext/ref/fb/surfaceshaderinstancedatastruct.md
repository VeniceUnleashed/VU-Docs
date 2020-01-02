---
title: SurfaceShaderInstanceDataStruct
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                            | Description                                              |
| ---------------------------------------------------------------------- | -------------------------------------------------------- |
| SurfaceShaderInstanceDataStruct()                                      | Create a new instance of this structure type.            |
| SurfaceShaderInstanceDataStruct(SurfaceShaderInstanceDataStruct other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                  | Type                                                         | Description |
| --------------------- | ------------------------------------------------------------ | ----------- |
| shader                | [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset)             |             |
| boolParameters        | [BoolShaderParameter](BoolShaderParameter)\[\]               |             |
| vectorParameters      | [VectorShaderParameter](VectorShaderParameter)\[\]           |             |
| vectorArrayParameters | [VectorArrayShaderParameter](VectorArrayShaderParameter)\[\] |             |
| textureParameters     | [TextureShaderParameter](TextureShaderParameter)\[\]         |             |

## Methods

| Type                                                               | Name            | Parameters |
| ------------------------------------------------------------------ | --------------- | ---------- |
| [SurfaceShaderInstanceDataStruct](SurfaceShaderInstanceDataStruct) | [Clone](#clone) |            |

### Clone

> [SurfaceShaderInstanceDataStruct](SurfaceShaderInstanceDataStruct) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
