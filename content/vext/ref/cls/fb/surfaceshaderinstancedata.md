---
title: SurfaceShaderInstanceData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SurfaceShaderInstanceData()                                                          | Create a new instance of this container type.                                                                                             |
| SurfaceShaderInstanceData(SurfaceShaderInstanceData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SurfaceShaderInstanceData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SurfaceShaderInstanceData](SurfaceShaderInstanceData). |

## Properties

| Name   | Type                                             | Description |
| ------ | ------------------------------------------------ | ----------- |
| shader | [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SurfaceShaderInstanceData](SurfaceShaderInstanceData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SurfaceShaderInstanceData](SurfaceShaderInstanceData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
