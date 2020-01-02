---
title: AutoSquadEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| AutoSquadEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| AutoSquadEntityData(AutoSquadEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| AutoSquadEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [AutoSquadEntityData](AutoSquadEntityData).                    |
| AutoSquadEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [AutoSquadEntityData](AutoSquadEntityData).              |
| AutoSquadEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [AutoSquadEntityData](AutoSquadEntityData).                            |
| AutoSquadEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AutoSquadEntityData](AutoSquadEntityData).                    |
| AutoSquadEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AutoSquadEntityData](AutoSquadEntityData).              |
| AutoSquadEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AutoSquadEntityData](AutoSquadEntityData). |

## Properties

| Name    | Type               | Description |
| ------- | ------------------ | ----------- |
| squadId | [SquadId](SquadId) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [AutoSquadEntityData](AutoSquadEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AutoSquadEntityData](AutoSquadEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
