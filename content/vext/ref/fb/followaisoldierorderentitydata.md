---
title: FollowAISoldierOrderEntityData
---
### Base Classes

[FollowPlayerOrderEntityData](FollowPlayerOrderEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                      | Description                                                                                                                                                |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FollowAISoldierOrderEntityData()                                                                 | Create a new instance of this container type.                                                                                                              |
| FollowAISoldierOrderEntityData(FollowAISoldierOrderEntityData other)                             | Create a reference copy of an instance of the same type.                                                                                                   |
| FollowAISoldierOrderEntityData([FollowPlayerOrderEntityData](FollowPlayerOrderEntityData) other) | Upcast an instance of type [FollowPlayerOrderEntityData](FollowPlayerOrderEntityData) to [FollowAISoldierOrderEntityData](FollowAISoldierOrderEntityData). |
| FollowAISoldierOrderEntityData([BFOrderEntityData](BFOrderEntityData) other)                     | Upcast an instance of type [BFOrderEntityData](BFOrderEntityData) to [FollowAISoldierOrderEntityData](FollowAISoldierOrderEntityData).                     |
| FollowAISoldierOrderEntityData([OrderEntityData](OrderEntityData) other)                         | Upcast an instance of type [OrderEntityData](OrderEntityData) to [FollowAISoldierOrderEntityData](FollowAISoldierOrderEntityData).                         |
| FollowAISoldierOrderEntityData([EntityData](EntityData) other)                                   | Upcast an instance of type [EntityData](EntityData) to [FollowAISoldierOrderEntityData](FollowAISoldierOrderEntityData).                                   |
| FollowAISoldierOrderEntityData([GameObjectData](GameObjectData) other)                           | Upcast an instance of type [GameObjectData](GameObjectData) to [FollowAISoldierOrderEntityData](FollowAISoldierOrderEntityData).                           |
| FollowAISoldierOrderEntityData([GameDataContainer](GameDataContainer) other)                     | Upcast an instance of type [GameDataContainer](GameDataContainer) to [FollowAISoldierOrderEntityData](FollowAISoldierOrderEntityData).                     |
| FollowAISoldierOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other)        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FollowAISoldierOrderEntityData](FollowAISoldierOrderEntityData).        |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [FollowAISoldierOrderEntityData](FollowAISoldierOrderEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FollowAISoldierOrderEntityData](FollowAISoldierOrderEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
