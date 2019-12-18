---
title: SurfaceShaderBaseAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| SurfaceShaderBaseAsset()                                                          | Create a new instance of this container type.                                                                                       |
| SurfaceShaderBaseAsset(SurfaceShaderBaseAsset other)                              | Create a reference copy of an instance of the same type.                                                                            |
| SurfaceShaderBaseAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset).                                      |
| SurfaceShaderBaseAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
