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
| shader                | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/)             |             |
| boolParameters        | [BoolShaderParameter](/vext/ref/fb/boolshaderparameter/)\[\]               |             |
| vectorParameters      | [VectorShaderParameter](/vext/ref/fb/vectorshaderparameter/)\[\]           |             |
| vectorArrayParameters | [VectorArrayShaderParameter](/vext/ref/fb/vectorarrayshaderparameter/)\[\] |             |
| textureParameters     | [TextureShaderParameter](/vext/ref/fb/textureshaderparameter/)\[\]         |             |

## Methods

| Type                                                               | Name            | Parameters |
| ------------------------------------------------------------------ | --------------- | ---------- |
| [SurfaceShaderInstanceDataStruct](/vext/ref/fb/surfaceshaderinstancedatastruct/) | [Clone](#clone) |            |

### Clone

> [SurfaceShaderInstanceDataStruct](/vext/ref/fb/surfaceshaderinstancedatastruct/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
