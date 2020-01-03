---
title: AlternateSpawnEntityData
---
### Base Classes

[SpatialEntityData](SpatialEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| AlternateSpawnEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| AlternateSpawnEntityData(AlternateSpawnEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| AlternateSpawnEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [AlternateSpawnEntityData](AlternateSpawnEntityData).              |
| AlternateSpawnEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [AlternateSpawnEntityData](AlternateSpawnEntityData).                            |
| AlternateSpawnEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AlternateSpawnEntityData](AlternateSpawnEntityData).                    |
| AlternateSpawnEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AlternateSpawnEntityData](AlternateSpawnEntityData).              |
| AlternateSpawnEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AlternateSpawnEntityData](AlternateSpawnEntityData). |

## Properties

| Name     | Type             | Description |
| -------- | ---------------- | ----------- |
| team     | [TeamId](TeamId) |             |
| priority | number           |             |
| enabled  | bool             |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AlternateSpawnEntityData](AlternateSpawnEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AlternateSpawnEntityData](AlternateSpawnEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
