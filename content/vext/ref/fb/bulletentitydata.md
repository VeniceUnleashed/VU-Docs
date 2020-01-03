---
title: BulletEntityData
---
### Base Classes

[MeshProjectileEntityData](MeshProjectileEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                              |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| BulletEntityData()                                                           | Create a new instance of this container type.                                                                            |
| BulletEntityData(BulletEntityData other)                                     | Create a reference copy of an instance of the same type.                                                                 |
| BulletEntityData([MeshProjectileEntityData](MeshProjectileEntityData) other) | Upcast an instance of type [MeshProjectileEntityData](MeshProjectileEntityData) to [BulletEntityData](BulletEntityData). |
| BulletEntityData([ProjectileEntityData](ProjectileEntityData) other)         | Upcast an instance of type [ProjectileEntityData](ProjectileEntityData) to [BulletEntityData](BulletEntityData).         |
| BulletEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)       | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [BulletEntityData](BulletEntityData).       |
| BulletEntityData([GameEntityData](GameEntityData) other)                     | Upcast an instance of type [GameEntityData](GameEntityData) to [BulletEntityData](BulletEntityData).                     |
| BulletEntityData([SpatialEntityData](SpatialEntityData) other)               | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [BulletEntityData](BulletEntityData).               |
| BulletEntityData([EntityData](EntityData) other)                             | Upcast an instance of type [EntityData](EntityData) to [BulletEntityData](BulletEntityData).                             |
| BulletEntityData([GameObjectData](GameObjectData) other)                     | Upcast an instance of type [GameObjectData](GameObjectData) to [BulletEntityData](BulletEntityData).                     |
| BulletEntityData([GameDataContainer](GameDataContainer) other)               | Upcast an instance of type [GameDataContainer](GameDataContainer) to [BulletEntityData](BulletEntityData).               |
| BulletEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BulletEntityData](BulletEntityData).  |

## Properties

| Name                             | Type                                       | Description |
| -------------------------------- | ------------------------------------------ | ----------- |
| stamina                          | number                                     |             |
| flyBySound                       | [SoundAsset](SoundAsset)                   |             |
| dudExplosion                     | [ExplosionEntityData](ExplosionEntityData) |             |
| gravity                          | number                                     |             |
| impactImpulse                    | number                                     |             |
| detonationTimeVariation          | number                                     |             |
| vehicleDetonationRadius          | number                                     |             |
| vehicleDetonationActivationDelay | number                                     |             |
| flyBySoundRadius                 | number                                     |             |
| flyBySoundSpeed                  | number                                     |             |
| firstFrameTravelDistance         | number                                     |             |
| distributeDamageOverTime         | number                                     |             |
| startDamage                      | number                                     |             |
| endDamage                        | number                                     |             |
| damageFalloffStartDistance       | number                                     |             |
| damageFalloffEndDistance         | number                                     |             |
| timeToArmExplosion               | number                                     |             |
| hasVehicleDetonation             | bool                                       |             |
| instantHit                       | bool                                       |             |
| stopTrailEffectOnUnspawn         | bool                                       |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [BulletEntityData](BulletEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BulletEntityData](BulletEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
