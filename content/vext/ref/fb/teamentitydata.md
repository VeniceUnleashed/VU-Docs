---
title: TeamEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| TeamEntityData()                                                          | Create a new instance of this container type.                                                                       |
| TeamEntityData(TeamEntityData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| TeamEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [TeamEntityData](TeamEntityData).                    |
| TeamEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [TeamEntityData](TeamEntityData).              |
| TeamEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [TeamEntityData](TeamEntityData).                            |
| TeamEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TeamEntityData](TeamEntityData).                    |
| TeamEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TeamEntityData](TeamEntityData).              |
| TeamEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TeamEntityData](TeamEntityData). |

## Properties

| Name | Type                 | Description |
| ---- | -------------------- | ----------- |
| team | [TeamData](TeamData) |             |
| id   | [TeamId](TeamId)     |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [TeamEntityData](TeamEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TeamEntityData](TeamEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
