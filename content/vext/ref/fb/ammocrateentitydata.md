---
title: AmmoCrateEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| AmmoCrateEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| AmmoCrateEntityData(AmmoCrateEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| AmmoCrateEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata/).                    |
| AmmoCrateEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata/).              |
| AmmoCrateEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata/).                            |
| AmmoCrateEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata/).                    |
| AmmoCrateEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata/).              |
| AmmoCrateEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata/). |

## Properties

| Name            | Type                                           | Description |
| --------------- | ---------------------------------------------- | ----------- |
| marker          | [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata/)     |             |
| model           | [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata/) |             |
| refillDelay     | number                                         |             |
| radius          | number                                         |             |
| enableReplenish | bool                                           |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
