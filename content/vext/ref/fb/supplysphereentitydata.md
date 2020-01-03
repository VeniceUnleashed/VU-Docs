---
title: SupplySphereEntityData
---
### Base Classes

[ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                          |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| SupplySphereEntityData()                                                           | Create a new instance of this container type.                                                                                        |
| SupplySphereEntityData(SupplySphereEntityData other)                               | Create a reference copy of an instance of the same type.                                                                             |
| SupplySphereEntityData([ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata/) other)   | Upcast an instance of type [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata/) to [SupplySphereEntityData](/vext/ref/fb/supplysphereentitydata/).   |
| SupplySphereEntityData([MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/) other) | Upcast an instance of type [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/) to [SupplySphereEntityData](/vext/ref/fb/supplysphereentitydata/). |
| SupplySphereEntityData([ProjectileEntityData](/vext/ref/fb/projectileentitydata/) other)         | Upcast an instance of type [ProjectileEntityData](/vext/ref/fb/projectileentitydata/) to [SupplySphereEntityData](/vext/ref/fb/supplysphereentitydata/).         |
| SupplySphereEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)       | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [SupplySphereEntityData](/vext/ref/fb/supplysphereentitydata/).       |
| SupplySphereEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                     | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [SupplySphereEntityData](/vext/ref/fb/supplysphereentitydata/).                     |
| SupplySphereEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)               | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [SupplySphereEntityData](/vext/ref/fb/supplysphereentitydata/).               |
| SupplySphereEntityData([EntityData](/vext/ref/fb/entitydata/) other)                             | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SupplySphereEntityData](/vext/ref/fb/supplysphereentitydata/).                             |
| SupplySphereEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                     | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SupplySphereEntityData](/vext/ref/fb/supplysphereentitydata/).                     |
| SupplySphereEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)               | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SupplySphereEntityData](/vext/ref/fb/supplysphereentitydata/).               |
| SupplySphereEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SupplySphereEntityData](/vext/ref/fb/supplysphereentitydata/).  |

## Properties

| Name       | Type                     | Description |
| ---------- | ------------------------ | ----------- |
| supplyData | [SupplyData](/vext/ref/fb/supplydata/) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SupplySphereEntityData](/vext/ref/fb/supplysphereentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SupplySphereEntityData](/vext/ref/fb/supplysphereentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
