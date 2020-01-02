---
title: VehicleProjectileEntityData
---
### Base Classes

[ProjectileEntityData](ProjectileEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| VehicleProjectileEntityData()                                                          | Create a new instance of this container type.                                                                                                 |
| VehicleProjectileEntityData(VehicleProjectileEntityData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| VehicleProjectileEntityData([ProjectileEntityData](ProjectileEntityData) other)        | Upcast an instance of type [ProjectileEntityData](ProjectileEntityData) to [VehicleProjectileEntityData](VehicleProjectileEntityData).        |
| VehicleProjectileEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)      | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [VehicleProjectileEntityData](VehicleProjectileEntityData).      |
| VehicleProjectileEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [VehicleProjectileEntityData](VehicleProjectileEntityData).                    |
| VehicleProjectileEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [VehicleProjectileEntityData](VehicleProjectileEntityData).              |
| VehicleProjectileEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [VehicleProjectileEntityData](VehicleProjectileEntityData).                            |
| VehicleProjectileEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VehicleProjectileEntityData](VehicleProjectileEntityData).                    |
| VehicleProjectileEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VehicleProjectileEntityData](VehicleProjectileEntityData).              |
| VehicleProjectileEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleProjectileEntityData](VehicleProjectileEntityData). |

## Properties

| Name                              | Type                                 | Description |
| --------------------------------- | ------------------------------------ | ----------- |
| vehicle                           | [VehicleBlueprint](VehicleBlueprint) |             |
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
| [VehicleProjectileEntityData](VehicleProjectileEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleProjectileEntityData](VehicleProjectileEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
