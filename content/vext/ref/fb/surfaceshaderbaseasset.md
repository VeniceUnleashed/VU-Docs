---
title: SurfaceShaderBaseAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| SurfaceShaderBaseAsset()                                                          | Create a new instance of this container type.                                                                                       |
| SurfaceShaderBaseAsset(SurfaceShaderBaseAsset other)                              | Create a reference copy of an instance of the same type.                                                                            |
| SurfaceShaderBaseAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/).                                      |
| SurfaceShaderBaseAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
