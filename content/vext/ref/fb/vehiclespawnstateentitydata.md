---
title: VehicleSpawnStateEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| VehicleSpawnStateEntityData()                                                          | Create a new instance of this container type.                                                                                                 |
| VehicleSpawnStateEntityData(VehicleSpawnStateEntityData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| VehicleSpawnStateEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [VehicleSpawnStateEntityData](/vext/ref/fb/vehiclespawnstateentitydata/).                            |
| VehicleSpawnStateEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VehicleSpawnStateEntityData](/vext/ref/fb/vehiclespawnstateentitydata/).                    |
| VehicleSpawnStateEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VehicleSpawnStateEntityData](/vext/ref/fb/vehiclespawnstateentitydata/).              |
| VehicleSpawnStateEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleSpawnStateEntityData](/vext/ref/fb/vehiclespawnstateentitydata/). |

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
| [VehicleSpawnStateEntityData](/vext/ref/fb/vehiclespawnstateentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleSpawnStateEntityData](/vext/ref/fb/vehiclespawnstateentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
