---
title: PathfindingSystemEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| PathfindingSystemEntityData()                                                          | Create a new instance of this container type.                                                                                                 |
| PathfindingSystemEntityData(PathfindingSystemEntityData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| PathfindingSystemEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [PathfindingSystemEntityData](PathfindingSystemEntityData).                            |
| PathfindingSystemEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PathfindingSystemEntityData](PathfindingSystemEntityData).                    |
| PathfindingSystemEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PathfindingSystemEntityData](PathfindingSystemEntityData).              |
| PathfindingSystemEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PathfindingSystemEntityData](PathfindingSystemEntityData). |

## Properties

| Name                    | Type       | Description |
| ----------------------- | ---------- | ----------- |
| pathfindingTypesOnLevel | number\[\] |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PathfindingSystemEntityData](PathfindingSystemEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PathfindingSystemEntityData](PathfindingSystemEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
