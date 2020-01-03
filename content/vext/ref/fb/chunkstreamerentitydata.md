---
title: ChunkStreamerEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| ChunkStreamerEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| ChunkStreamerEntityData(ChunkStreamerEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| ChunkStreamerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [ChunkStreamerEntityData](ChunkStreamerEntityData).                            |
| ChunkStreamerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ChunkStreamerEntityData](ChunkStreamerEntityData).                    |
| ChunkStreamerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ChunkStreamerEntityData](ChunkStreamerEntityData).              |
| ChunkStreamerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ChunkStreamerEntityData](ChunkStreamerEntityData). |

## Properties

| Name  | Type                                       | Description |
| ----- | ------------------------------------------ | ----------- |
| cells | [ChunkStreamerCell](ChunkStreamerCell)\[\] |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ChunkStreamerEntityData](ChunkStreamerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ChunkStreamerEntityData](ChunkStreamerEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
