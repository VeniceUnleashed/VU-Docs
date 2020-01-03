---
title: ExplosionPackEntityData
---
### Base Classes

[MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                            |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| ExplosionPackEntityData()                                                           | Create a new instance of this container type.                                                                                          |
| ExplosionPackEntityData(ExplosionPackEntityData other)                              | Create a reference copy of an instance of the same type.                                                                               |
| ExplosionPackEntityData([MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/) other) | Upcast an instance of type [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/) to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata/). |
| ExplosionPackEntityData([ProjectileEntityData](/vext/ref/fb/projectileentitydata/) other)         | Upcast an instance of type [ProjectileEntityData](/vext/ref/fb/projectileentitydata/) to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata/).         |
| ExplosionPackEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)       | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata/).       |
| ExplosionPackEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                     | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata/).                     |
| ExplosionPackEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)               | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata/).               |
| ExplosionPackEntityData([EntityData](/vext/ref/fb/entitydata/) other)                             | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata/).                             |
| ExplosionPackEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                     | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata/).                     |
| ExplosionPackEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)               | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata/).               |
| ExplosionPackEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata/).  |

## Properties

| Name                             | Type                                           | Description |
| -------------------------------- | ---------------------------------------------- | ----------- |
| timeToLiveOnPlayerDeath          | number                                         |             |
| soldierDetonationData            | [SoldierDetonationData](/vext/ref/fb/soldierdetonationdata/) |             |
| vehicleDetonationActivationDelay | number                                         |             |
| vehicleDetonationRadius          | number                                         |             |
| icon                             | [UIHudIcon](/vext/ref/fb/uihudicon/)                         |             |
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
| [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
