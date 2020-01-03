---
title: WeaponUnlockPickupEntityData
---
### Base Classes

[PickupEntityData](/vext/ref/fb/pickupentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| WeaponUnlockPickupEntityData()                                                          | Create a new instance of this container type.                                                                                                   |
| WeaponUnlockPickupEntityData(WeaponUnlockPickupEntityData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| WeaponUnlockPickupEntityData([PickupEntityData](/vext/ref/fb/pickupentitydata/) other)                | Upcast an instance of type [PickupEntityData](/vext/ref/fb/pickupentitydata/) to [WeaponUnlockPickupEntityData](/vext/ref/fb/weaponunlockpickupentitydata/).                |
| WeaponUnlockPickupEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)      | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [WeaponUnlockPickupEntityData](/vext/ref/fb/weaponunlockpickupentitydata/).      |
| WeaponUnlockPickupEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [WeaponUnlockPickupEntityData](/vext/ref/fb/weaponunlockpickupentitydata/).                    |
| WeaponUnlockPickupEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [WeaponUnlockPickupEntityData](/vext/ref/fb/weaponunlockpickupentitydata/).              |
| WeaponUnlockPickupEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [WeaponUnlockPickupEntityData](/vext/ref/fb/weaponunlockpickupentitydata/).                            |
| WeaponUnlockPickupEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [WeaponUnlockPickupEntityData](/vext/ref/fb/weaponunlockpickupentitydata/).                    |
| WeaponUnlockPickupEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [WeaponUnlockPickupEntityData](/vext/ref/fb/weaponunlockpickupentitydata/).              |
| WeaponUnlockPickupEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponUnlockPickupEntityData](/vext/ref/fb/weaponunlockpickupentitydata/). |

## Properties

| Name                    | Type                                                 | Description |
| ----------------------- | ---------------------------------------------------- | ----------- |
| weapons                 | [WeaponUnlockPickupData](/vext/ref/fb/weaponunlockpickupdata/)\[\] |             |
| useForPersistence       | bool                                                 |             |
| randomlySelectOneWeapon | bool                                                 |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponUnlockPickupEntityData](/vext/ref/fb/weaponunlockpickupentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponUnlockPickupEntityData](/vext/ref/fb/weaponunlockpickupentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
