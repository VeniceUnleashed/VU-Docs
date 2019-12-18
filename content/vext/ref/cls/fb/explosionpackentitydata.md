---
title: ExplosionPackEntityData (Frostbite Container)
---
### Base Classes

[MeshProjectileEntityData](MeshProjectileEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                            |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| ExplosionPackEntityData()                                                           | Create a new instance of this container type.                                                                                          |
| ExplosionPackEntityData(ExplosionPackEntityData other)                              | Create a reference copy of an instance of the same type.                                                                               |
| ExplosionPackEntityData([MeshProjectileEntityData](MeshProjectileEntityData) other) | Upcast an instance of type [MeshProjectileEntityData](MeshProjectileEntityData) to [ExplosionPackEntityData](ExplosionPackEntityData). |
| ExplosionPackEntityData([ProjectileEntityData](ProjectileEntityData) other)         | Upcast an instance of type [ProjectileEntityData](ProjectileEntityData) to [ExplosionPackEntityData](ExplosionPackEntityData).         |
| ExplosionPackEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)       | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [ExplosionPackEntityData](ExplosionPackEntityData).       |
| ExplosionPackEntityData([GameEntityData](GameEntityData) other)                     | Upcast an instance of type [GameEntityData](GameEntityData) to [ExplosionPackEntityData](ExplosionPackEntityData).                     |
| ExplosionPackEntityData([SpatialEntityData](SpatialEntityData) other)               | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [ExplosionPackEntityData](ExplosionPackEntityData).               |
| ExplosionPackEntityData([EntityData](EntityData) other)                             | Upcast an instance of type [EntityData](EntityData) to [ExplosionPackEntityData](ExplosionPackEntityData).                             |
| ExplosionPackEntityData([GameObjectData](GameObjectData) other)                     | Upcast an instance of type [GameObjectData](GameObjectData) to [ExplosionPackEntityData](ExplosionPackEntityData).                     |
| ExplosionPackEntityData([GameDataContainer](GameDataContainer) other)               | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ExplosionPackEntityData](ExplosionPackEntityData).               |
| ExplosionPackEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ExplosionPackEntityData](ExplosionPackEntityData).  |

## Properties

| Name                             | Type                                           | Description |
| -------------------------------- | ---------------------------------------------- | ----------- |
| timeToLiveOnPlayerDeath          | number                                         |             |
| soldierDetonationData            | [SoldierDetonationData](SoldierDetonationData) |             |
| vehicleDetonationActivationDelay | number                                         |             |
| vehicleDetonationRadius          | number                                         |             |
| icon                             | [UIHudIcon](UIHudIcon)                         |             |
| spottedTime                      | number                                         |             |
| defuseRadius                     | number                                         |             |
| health                           | number                                         |             |
| hasRemoteDetonator               | bool                                           |             |
| isDestructible                   | bool                                           |             |
| hasVehicleDetonation             | bool                                           |             |
| receivesExplosionDamage          | bool                                           |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ExplosionPackEntityData](ExplosionPackEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ExplosionPackEntityData](ExplosionPackEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
