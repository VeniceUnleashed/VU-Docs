---
title: UpdateTextureCoordsData
---
### Base Classes

[ProcessorData](ProcessorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| UpdateTextureCoordsData()                                                          | Create a new instance of this container type.                                                                                         |
| UpdateTextureCoordsData(UpdateTextureCoordsData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| UpdateTextureCoordsData([ProcessorData](ProcessorData) other)                      | Upcast an instance of type [ProcessorData](ProcessorData) to [UpdateTextureCoordsData](UpdateTextureCoordsData).                      |
| UpdateTextureCoordsData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [UpdateTextureCoordsData](UpdateTextureCoordsData).        |
| UpdateTextureCoordsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UpdateTextureCoordsData](UpdateTextureCoordsData). |

## Properties

| Name              | Type                                     | Description |
| ----------------- | ---------------------------------------- | ----------- |
| textureInfo1      | [EmitterTextureInfo](EmitterTextureInfo) |             |
| textureBlendValue | number                                   |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UpdateTextureCoordsData](UpdateTextureCoordsData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UpdateTextureCoordsData](UpdateTextureCoordsData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
