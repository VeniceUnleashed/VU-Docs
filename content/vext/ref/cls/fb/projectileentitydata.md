---
title: ProjectileEntityData (Frostbite Container)
---
### Base Classes

[GamePhysicsEntityData](GamePhysicsEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ProjectileEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| ProjectileEntityData(ProjectileEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| ProjectileEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)      | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [ProjectileEntityData](ProjectileEntityData).      |
| ProjectileEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [ProjectileEntityData](ProjectileEntityData).                    |
| ProjectileEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [ProjectileEntityData](ProjectileEntityData).              |
| ProjectileEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [ProjectileEntityData](ProjectileEntityData).                            |
| ProjectileEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ProjectileEntityData](ProjectileEntityData).                    |
| ProjectileEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ProjectileEntityData](ProjectileEntityData).              |
| ProjectileEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ProjectileEntityData](ProjectileEntityData). |

## Properties

| Name                       | Type                                                 | Description |
| -------------------------- | ---------------------------------------------------- | ----------- |
| visualConvergeDistance     | number                                               |             |
| initialSpeed               | number                                               |             |
| timeToLive                 | number                                               |             |
| maxCount                   | number                                               |             |
| initMeshHideTime           | number                                               |             |
| materialPair               | [MaterialContainerPair](MaterialContainerPair)       |             |
| hitReactionWeaponType      | [AntHitReactionWeaponType](AntHitReactionWeaponType) |             |
| explosion                  | [ExplosionEntityData](ExplosionEntityData)           |             |
| suppressionData            | [WeaponSuppressionData](WeaponSuppressionData)       |             |
| ammunitionType             | string                                               |             |
| serverProjectileDisabled   | bool                                                 |             |
| detonateOnTimeout          | bool                                                 |             |
| suppressOwnerVehicleDamage | bool                                                 |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [ProjectileEntityData](ProjectileEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ProjectileEntityData](ProjectileEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
