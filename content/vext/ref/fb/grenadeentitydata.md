---
title: GrenadeEntityData
---
### Base Classes

[MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| GrenadeEntityData()                                                           | Create a new instance of this container type.                                                                              |
| GrenadeEntityData(GrenadeEntityData other)                                    | Create a reference copy of an instance of the same type.                                                                   |
| GrenadeEntityData([MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/) other) | Upcast an instance of type [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/) to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata/). |
| GrenadeEntityData([ProjectileEntityData](/vext/ref/fb/projectileentitydata/) other)         | Upcast an instance of type [ProjectileEntityData](/vext/ref/fb/projectileentitydata/) to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata/).         |
| GrenadeEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)       | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata/).       |
| GrenadeEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                     | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata/).                     |
| GrenadeEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)               | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata/).               |
| GrenadeEntityData([EntityData](/vext/ref/fb/entitydata/) other)                             | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata/).                             |
| GrenadeEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                     | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata/).                     |
| GrenadeEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)               | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata/).               |
| GrenadeEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GrenadeEntityData](/vext/ref/fb/grenadeentitydata/).  |

## Properties

| Name                     | Type                       | Description |
| ------------------------ | -------------------------- | ----------- |
| collisionSpeedMultiplier | number                     |             |
| gravity                  | number                     |             |
| grenadeType              | [GrenadeType](/vext/ref/fb/grenadetype/) |             |
| minBounceSpeed           | number                     |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [GrenadeEntityData](/vext/ref/fb/grenadeentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GrenadeEntityData](/vext/ref/fb/grenadeentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
