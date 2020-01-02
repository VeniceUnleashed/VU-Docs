---
title: FollowClosestHumanOrderEntityData
---
### Base Classes

[FollowPlayerOrderEntityData](FollowPlayerOrderEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                         | Description                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FollowClosestHumanOrderEntityData()                                                                 | Create a new instance of this container type.                                                                                                                    |
| FollowClosestHumanOrderEntityData(FollowClosestHumanOrderEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                                         |
| FollowClosestHumanOrderEntityData([FollowPlayerOrderEntityData](FollowPlayerOrderEntityData) other) | Upcast an instance of type [FollowPlayerOrderEntityData](FollowPlayerOrderEntityData) to [FollowClosestHumanOrderEntityData](FollowClosestHumanOrderEntityData). |
| FollowClosestHumanOrderEntityData([BFOrderEntityData](BFOrderEntityData) other)                     | Upcast an instance of type [BFOrderEntityData](BFOrderEntityData) to [FollowClosestHumanOrderEntityData](FollowClosestHumanOrderEntityData).                     |
| FollowClosestHumanOrderEntityData([OrderEntityData](OrderEntityData) other)                         | Upcast an instance of type [OrderEntityData](OrderEntityData) to [FollowClosestHumanOrderEntityData](FollowClosestHumanOrderEntityData).                         |
| FollowClosestHumanOrderEntityData([EntityData](EntityData) other)                                   | Upcast an instance of type [EntityData](EntityData) to [FollowClosestHumanOrderEntityData](FollowClosestHumanOrderEntityData).                                   |
| FollowClosestHumanOrderEntityData([GameObjectData](GameObjectData) other)                           | Upcast an instance of type [GameObjectData](GameObjectData) to [FollowClosestHumanOrderEntityData](FollowClosestHumanOrderEntityData).                           |
| FollowClosestHumanOrderEntityData([GameDataContainer](GameDataContainer) other)                     | Upcast an instance of type [GameDataContainer](GameDataContainer) to [FollowClosestHumanOrderEntityData](FollowClosestHumanOrderEntityData).                     |
| FollowClosestHumanOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other)        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FollowClosestHumanOrderEntityData](FollowClosestHumanOrderEntityData).        |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [FollowClosestHumanOrderEntityData](FollowClosestHumanOrderEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FollowClosestHumanOrderEntityData](FollowClosestHumanOrderEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
