---
title: DynamicWeaponPickupEntityData
---
### Base Classes

[PickupEntityData](/vext/ref/fb/pickupentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DynamicWeaponPickupEntityData()                                                          | Create a new instance of this container type.                                                                                                     |
| DynamicWeaponPickupEntityData(DynamicWeaponPickupEntityData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| DynamicWeaponPickupEntityData([PickupEntityData](/vext/ref/fb/pickupentitydata/) other)                | Upcast an instance of type [PickupEntityData](/vext/ref/fb/pickupentitydata/) to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata/).                |
| DynamicWeaponPickupEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)      | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata/).      |
| DynamicWeaponPickupEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata/).                    |
| DynamicWeaponPickupEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata/).              |
| DynamicWeaponPickupEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata/).                            |
| DynamicWeaponPickupEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata/).                    |
| DynamicWeaponPickupEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata/).              |
| DynamicWeaponPickupEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata/). |

## Properties

| Name          | Type                                                           | Description |
| ------------- | -------------------------------------------------------------- | ----------- |
| weaponSlots   | [DynamicWeaponPickupSlotData](/vext/ref/fb/dynamicweaponpickupslotdata/)\[\] |             |
| keepAmmoState | bool                                                           |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
