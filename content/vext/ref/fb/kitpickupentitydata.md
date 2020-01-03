---
title: KitPickupEntityData
---
### Base Classes

[PickupEntityData](/vext/ref/fb/pickupentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| KitPickupEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| KitPickupEntityData(KitPickupEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| KitPickupEntityData([PickupEntityData](/vext/ref/fb/pickupentitydata/) other)                | Upcast an instance of type [PickupEntityData](/vext/ref/fb/pickupentitydata/) to [KitPickupEntityData](/vext/ref/fb/kitpickupentitydata/).                |
| KitPickupEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)      | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [KitPickupEntityData](/vext/ref/fb/kitpickupentitydata/).      |
| KitPickupEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [KitPickupEntityData](/vext/ref/fb/kitpickupentitydata/).                    |
| KitPickupEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [KitPickupEntityData](/vext/ref/fb/kitpickupentitydata/).              |
| KitPickupEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [KitPickupEntityData](/vext/ref/fb/kitpickupentitydata/).                            |
| KitPickupEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [KitPickupEntityData](/vext/ref/fb/kitpickupentitydata/).                    |
| KitPickupEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [KitPickupEntityData](/vext/ref/fb/kitpickupentitydata/).              |
| KitPickupEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [KitPickupEntityData](/vext/ref/fb/kitpickupentitydata/). |

## Properties

| Name                  | Type | Description |
| --------------------- | ---- | ----------- |
| keepAdditionalWeapons | bool |             |
| keepAmmoState         | bool |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [KitPickupEntityData](/vext/ref/fb/kitpickupentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [KitPickupEntityData](/vext/ref/fb/kitpickupentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
