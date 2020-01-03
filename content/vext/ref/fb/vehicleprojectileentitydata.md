---
title: VehicleProjectileEntityData
---
### Base Classes

[ProjectileEntityData](/vext/ref/fb/projectileentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| VehicleProjectileEntityData()                                                          | Create a new instance of this container type.                                                                                                 |
| VehicleProjectileEntityData(VehicleProjectileEntityData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| VehicleProjectileEntityData([ProjectileEntityData](/vext/ref/fb/projectileentitydata/) other)        | Upcast an instance of type [ProjectileEntityData](/vext/ref/fb/projectileentitydata/) to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata/).        |
| VehicleProjectileEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)      | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata/).      |
| VehicleProjectileEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata/).                    |
| VehicleProjectileEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata/).              |
| VehicleProjectileEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata/).                            |
| VehicleProjectileEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata/).                    |
| VehicleProjectileEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata/).              |
| VehicleProjectileEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata/). |

## Properties

| Name                              | Type                                 | Description |
| --------------------------------- | ------------------------------------ | ----------- |
| vehicle                           | [VehicleBlueprint](/vext/ref/fb/vehicleblueprint/) |             |
| enterDelay                        | number                               |             |
| noVehicleCollisionTime            | number                               |             |
| alignWithGroundRayLength          | number                               |             |
| autoEnter                         | bool                                 |             |
| alignWithGround                   | bool                                 |             |
| checkGroundWhenSpawned            | bool                                 |             |
| deployInsideNeutralCombatAreaOnly | bool                                 |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleProjectileEntityData](/vext/ref/fb/vehicleprojectileentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
