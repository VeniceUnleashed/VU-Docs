---
title: ChunkStreamerEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| ChunkStreamerEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| ChunkStreamerEntityData(ChunkStreamerEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| ChunkStreamerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [ChunkStreamerEntityData](/vext/ref/fb/chunkstreamerentitydata/).                            |
| ChunkStreamerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ChunkStreamerEntityData](/vext/ref/fb/chunkstreamerentitydata/).                    |
| ChunkStreamerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ChunkStreamerEntityData](/vext/ref/fb/chunkstreamerentitydata/).              |
| ChunkStreamerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ChunkStreamerEntityData](/vext/ref/fb/chunkstreamerentitydata/). |

## Properties

| Name  | Type                                       | Description |
| ----- | ------------------------------------------ | ----------- |
| cells | [ChunkStreamerCell](/vext/ref/fb/chunkstreamercell/)\[\] |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ChunkStreamerEntityData](/vext/ref/fb/chunkstreamerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ChunkStreamerEntityData](/vext/ref/fb/chunkstreamerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
