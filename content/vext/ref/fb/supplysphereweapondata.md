---
title: SupplySphereWeaponData
---
### Base Classes

[WeaponData](/vext/ref/fb/weapondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| SupplySphereWeaponData()                                                          | Create a new instance of this container type.                                                                                       |
| SupplySphereWeaponData(SupplySphereWeaponData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| SupplySphereWeaponData([WeaponData](/vext/ref/fb/weapondata/) other)                            | Upcast an instance of type [WeaponData](/vext/ref/fb/weapondata/) to [SupplySphereWeaponData](/vext/ref/fb/supplysphereweapondata/).                            |
| SupplySphereWeaponData([ToolData](/vext/ref/fb/tooldata/) other)                                | Upcast an instance of type [ToolData](/vext/ref/fb/tooldata/) to [SupplySphereWeaponData](/vext/ref/fb/supplysphereweapondata/).                                |
| SupplySphereWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SupplySphereWeaponData](/vext/ref/fb/supplysphereweapondata/). |

## Properties

| Name       | Type                     | Description |
| ---------- | ------------------------ | ----------- |
| supplyData | [SupplyData](/vext/ref/fb/supplydata/) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SupplySphereWeaponData](/vext/ref/fb/supplysphereweapondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SupplySphereWeaponData](/vext/ref/fb/supplysphereweapondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
