---
title: ProjectileEntityData
---
### Base Classes

[GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ProjectileEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| ProjectileEntityData(ProjectileEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| ProjectileEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)      | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [ProjectileEntityData](/vext/ref/fb/projectileentitydata/).      |
| ProjectileEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [ProjectileEntityData](/vext/ref/fb/projectileentitydata/).                    |
| ProjectileEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [ProjectileEntityData](/vext/ref/fb/projectileentitydata/).              |
| ProjectileEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [ProjectileEntityData](/vext/ref/fb/projectileentitydata/).                            |
| ProjectileEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ProjectileEntityData](/vext/ref/fb/projectileentitydata/).                    |
| ProjectileEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ProjectileEntityData](/vext/ref/fb/projectileentitydata/).              |
| ProjectileEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ProjectileEntityData](/vext/ref/fb/projectileentitydata/). |

## Properties

| Name                       | Type                                                 | Description |
| -------------------------- | ---------------------------------------------------- | ----------- |
| visualConvergeDistance     | number                                               |             |
| initialSpeed               | number                                               |             |
| timeToLive                 | number                                               |             |
| maxCount                   | number                                               |             |
| initMeshHideTime           | number                                               |             |
| materialPair               | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair/)       |             |
| hitReactionWeaponType      | [AntHitReactionWeaponType](/vext/ref/fb/anthitreactionweapontype/) |             |
| explosion                  | [ExplosionEntityData](/vext/ref/fb/explosionentitydata/)           |             |
| suppressionData            | [WeaponSuppressionData](/vext/ref/fb/weaponsuppressiondata/)       |             |
| ammunitionType             | string                                               |             |
| serverProjectileDisabled   | bool                                                 |             |
| detonateOnTimeout          | bool                                                 |             |
| suppressOwnerVehicleDamage | bool                                                 |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [ProjectileEntityData](/vext/ref/fb/projectileentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ProjectileEntityData](/vext/ref/fb/projectileentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
