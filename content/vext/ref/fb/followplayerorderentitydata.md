---
title: FollowPlayerOrderEntityData
---
### Base Classes

[BFOrderEntityData](BFOrderEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| FollowPlayerOrderEntityData()                                                          | Create a new instance of this container type.                                                                                                 |
| FollowPlayerOrderEntityData(FollowPlayerOrderEntityData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| FollowPlayerOrderEntityData([BFOrderEntityData](BFOrderEntityData) other)              | Upcast an instance of type [BFOrderEntityData](BFOrderEntityData) to [FollowPlayerOrderEntityData](FollowPlayerOrderEntityData).              |
| FollowPlayerOrderEntityData([OrderEntityData](OrderEntityData) other)                  | Upcast an instance of type [OrderEntityData](OrderEntityData) to [FollowPlayerOrderEntityData](FollowPlayerOrderEntityData).                  |
| FollowPlayerOrderEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [FollowPlayerOrderEntityData](FollowPlayerOrderEntityData).                            |
| FollowPlayerOrderEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [FollowPlayerOrderEntityData](FollowPlayerOrderEntityData).                    |
| FollowPlayerOrderEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [FollowPlayerOrderEntityData](FollowPlayerOrderEntityData).              |
| FollowPlayerOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FollowPlayerOrderEntityData](FollowPlayerOrderEntityData). |

## Properties

| Name            | Type                           | Description |
| --------------- | ------------------------------ | ----------- |
| formation       | [FormationData](FormationData) |             |
| combatForbidden | bool                           |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [FollowPlayerOrderEntityData](FollowPlayerOrderEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FollowPlayerOrderEntityData](FollowPlayerOrderEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
