---
title: UpdateTextureCoordsData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| UpdateTextureCoordsData()                                                          | Create a new instance of this container type.                                                                                         |
| UpdateTextureCoordsData(UpdateTextureCoordsData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| UpdateTextureCoordsData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [UpdateTextureCoordsData](/vext/ref/fb/updatetexturecoordsdata/).                      |
| UpdateTextureCoordsData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [UpdateTextureCoordsData](/vext/ref/fb/updatetexturecoordsdata/).        |
| UpdateTextureCoordsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UpdateTextureCoordsData](/vext/ref/fb/updatetexturecoordsdata/). |

## Properties

| Name              | Type                                     | Description |
| ----------------- | ---------------------------------------- | ----------- |
| textureInfo1      | [EmitterTextureInfo](/vext/ref/fb/emittertextureinfo/) |             |
| textureBlendValue | number                                   |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UpdateTextureCoordsData](/vext/ref/fb/updatetexturecoordsdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UpdateTextureCoordsData](/vext/ref/fb/updatetexturecoordsdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
