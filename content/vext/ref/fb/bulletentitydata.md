---
title: BulletEntityData
---
### Base Classes

[MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                              |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| BulletEntityData()                                                           | Create a new instance of this container type.                                                                            |
| BulletEntityData(BulletEntityData other)                                     | Create a reference copy of an instance of the same type.                                                                 |
| BulletEntityData([MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/) other) | Upcast an instance of type [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/) to [BulletEntityData](/vext/ref/fb/bulletentitydata/). |
| BulletEntityData([ProjectileEntityData](/vext/ref/fb/projectileentitydata/) other)         | Upcast an instance of type [ProjectileEntityData](/vext/ref/fb/projectileentitydata/) to [BulletEntityData](/vext/ref/fb/bulletentitydata/).         |
| BulletEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)       | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [BulletEntityData](/vext/ref/fb/bulletentitydata/).       |
| BulletEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                     | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [BulletEntityData](/vext/ref/fb/bulletentitydata/).                     |
| BulletEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)               | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [BulletEntityData](/vext/ref/fb/bulletentitydata/).               |
| BulletEntityData([EntityData](/vext/ref/fb/entitydata/) other)                             | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [BulletEntityData](/vext/ref/fb/bulletentitydata/).                             |
| BulletEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                     | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [BulletEntityData](/vext/ref/fb/bulletentitydata/).                     |
| BulletEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)               | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [BulletEntityData](/vext/ref/fb/bulletentitydata/).               |
| BulletEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BulletEntityData](/vext/ref/fb/bulletentitydata/).  |

## Properties

| Name                             | Type                                       | Description |
| -------------------------------- | ------------------------------------------ | ----------- |
| stamina                          | number                                     |             |
| flyBySound                       | [SoundAsset](/vext/ref/fb/soundasset/)                   |             |
| dudExplosion                     | [ExplosionEntityData](/vext/ref/fb/explosionentitydata/) |             |
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
| [BulletEntityData](/vext/ref/fb/bulletentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BulletEntityData](/vext/ref/fb/bulletentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
