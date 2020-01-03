---
title: SurfaceShaderInstanceData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SurfaceShaderInstanceData()                                                          | Create a new instance of this container type.                                                                                             |
| SurfaceShaderInstanceData(SurfaceShaderInstanceData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SurfaceShaderInstanceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SurfaceShaderInstanceData](/vext/ref/fb/surfaceshaderinstancedata/). |

## Properties

| Name   | Type                                             | Description |
| ------ | ------------------------------------------------ | ----------- |
| shader | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SurfaceShaderInstanceData](/vext/ref/fb/surfaceshaderinstancedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SurfaceShaderInstanceData](/vext/ref/fb/surfaceshaderinstancedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
