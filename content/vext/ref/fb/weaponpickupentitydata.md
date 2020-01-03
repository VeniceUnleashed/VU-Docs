---
title: WeaponPickupEntityData
---
### Base Classes

[PickupEntityData](/vext/ref/fb/pickupentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| WeaponPickupEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| WeaponPickupEntityData(WeaponPickupEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| WeaponPickupEntityData([PickupEntityData](/vext/ref/fb/pickupentitydata/) other)                | Upcast an instance of type [PickupEntityData](/vext/ref/fb/pickupentitydata/) to [WeaponPickupEntityData](/vext/ref/fb/weaponpickupentitydata/).                |
| WeaponPickupEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)      | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [WeaponPickupEntityData](/vext/ref/fb/weaponpickupentitydata/).      |
| WeaponPickupEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [WeaponPickupEntityData](/vext/ref/fb/weaponpickupentitydata/).                    |
| WeaponPickupEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [WeaponPickupEntityData](/vext/ref/fb/weaponpickupentitydata/).              |
| WeaponPickupEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [WeaponPickupEntityData](/vext/ref/fb/weaponpickupentitydata/).                            |
| WeaponPickupEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [WeaponPickupEntityData](/vext/ref/fb/weaponpickupentitydata/).                    |
| WeaponPickupEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [WeaponPickupEntityData](/vext/ref/fb/weaponpickupentitydata/).              |
| WeaponPickupEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponPickupEntityData](/vext/ref/fb/weaponpickupentitydata/). |

## Properties

| Name              | Type                                     | Description |
| ----------------- | ---------------------------------------- | ----------- |
| weapons           | [WeaponPickupData](/vext/ref/fb/weaponpickupdata/)\[\] |             |
| useForPersistence | bool                                     |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponPickupEntityData](/vext/ref/fb/weaponpickupentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponPickupEntityData](/vext/ref/fb/weaponpickupentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
