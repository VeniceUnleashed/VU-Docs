---
title: FlareEntityData
---
### Base Classes

[GrenadeEntityData](/vext/ref/fb/grenadeentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                            |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| FlareEntityData()                                                           | Create a new instance of this container type.                                                                          |
| FlareEntityData(FlareEntityData other)                                      | Create a reference copy of an instance of the same type.                                                               |
| FlareEntityData([GrenadeEntityData](/vext/ref/fb/grenadeentitydata/) other)               | Upcast an instance of type [GrenadeEntityData](/vext/ref/fb/grenadeentitydata/) to [FlareEntityData](/vext/ref/fb/flareentitydata/).               |
| FlareEntityData([MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/) other) | Upcast an instance of type [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/) to [FlareEntityData](/vext/ref/fb/flareentitydata/). |
| FlareEntityData([ProjectileEntityData](/vext/ref/fb/projectileentitydata/) other)         | Upcast an instance of type [ProjectileEntityData](/vext/ref/fb/projectileentitydata/) to [FlareEntityData](/vext/ref/fb/flareentitydata/).         |
| FlareEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)       | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [FlareEntityData](/vext/ref/fb/flareentitydata/).       |
| FlareEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                     | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [FlareEntityData](/vext/ref/fb/flareentitydata/).                     |
| FlareEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)               | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [FlareEntityData](/vext/ref/fb/flareentitydata/).               |
| FlareEntityData([EntityData](/vext/ref/fb/entitydata/) other)                             | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [FlareEntityData](/vext/ref/fb/flareentitydata/).                             |
| FlareEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                     | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [FlareEntityData](/vext/ref/fb/flareentitydata/).                     |
| FlareEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)               | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [FlareEntityData](/vext/ref/fb/flareentitydata/).               |
| FlareEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FlareEntityData](/vext/ref/fb/flareentitydata/).  |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| flareRange | number |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [FlareEntityData](/vext/ref/fb/flareentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FlareEntityData](/vext/ref/fb/flareentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
