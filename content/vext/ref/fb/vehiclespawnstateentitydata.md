---
title: VehicleSpawnStateEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| VehicleSpawnStateEntityData()                                                          | Create a new instance of this container type.                                                                                                 |
| VehicleSpawnStateEntityData(VehicleSpawnStateEntityData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| VehicleSpawnStateEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [VehicleSpawnStateEntityData](VehicleSpawnStateEntityData).                            |
| VehicleSpawnStateEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VehicleSpawnStateEntityData](VehicleSpawnStateEntityData).                    |
| VehicleSpawnStateEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VehicleSpawnStateEntityData](VehicleSpawnStateEntityData).              |
| VehicleSpawnStateEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleSpawnStateEntityData](VehicleSpawnStateEntityData). |

## Properties

| Name                 | Type                              | Description |
| -------------------- | --------------------------------- | ----------- |
| initialVelocity      | [Vec3](/vext/ref/shared/class/vec3) |             |
| startupDelayModifier | number                            |             |
| initialThrottle      | number                            |             |
| engineIndex          | number                            |             |
| initialRpmModifier   | number                            |             |
| heightOffset         | number                            |             |
| radius               | number                            |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VehicleSpawnStateEntityData](VehicleSpawnStateEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleSpawnStateEntityData](VehicleSpawnStateEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
