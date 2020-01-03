---
title: VeniceExplosionEntityData
---
### Base Classes

[ExplosionEntityData](/vext/ref/fb/explosionentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| VeniceExplosionEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| VeniceExplosionEntityData(VeniceExplosionEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| VeniceExplosionEntityData([ExplosionEntityData](/vext/ref/fb/explosionentitydata/) other)          | Upcast an instance of type [ExplosionEntityData](/vext/ref/fb/explosionentitydata/) to [VeniceExplosionEntityData](/vext/ref/fb/veniceexplosionentitydata/).          |
| VeniceExplosionEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [VeniceExplosionEntityData](/vext/ref/fb/veniceexplosionentitydata/).                    |
| VeniceExplosionEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [VeniceExplosionEntityData](/vext/ref/fb/veniceexplosionentitydata/).              |
| VeniceExplosionEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [VeniceExplosionEntityData](/vext/ref/fb/veniceexplosionentitydata/).                            |
| VeniceExplosionEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VeniceExplosionEntityData](/vext/ref/fb/veniceexplosionentitydata/).                    |
| VeniceExplosionEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VeniceExplosionEntityData](/vext/ref/fb/veniceexplosionentitydata/).              |
| VeniceExplosionEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceExplosionEntityData](/vext/ref/fb/veniceexplosionentitydata/). |

## Properties

| Name                 | Type   | Description |
| -------------------- | ------ | ----------- |
| unspottableTime      | number |             |
| unspotsOnExplode     | bool   |             |
| spotsOnExplode       | bool   |             |
| isCausingSuppression | bool   |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VeniceExplosionEntityData](/vext/ref/fb/veniceexplosionentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceExplosionEntityData](/vext/ref/fb/veniceexplosionentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
