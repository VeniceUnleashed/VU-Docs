---
title: FlashlightWeaponData
---
### Base Classes

[WeaponData](/vext/ref/fb/weapondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| FlashlightWeaponData()                                                          | Create a new instance of this container type.                                                                                   |
| FlashlightWeaponData(FlashlightWeaponData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| FlashlightWeaponData([WeaponData](/vext/ref/fb/weapondata/) other)                            | Upcast an instance of type [WeaponData](/vext/ref/fb/weapondata/) to [FlashlightWeaponData](/vext/ref/fb/flashlightweapondata/).                            |
| FlashlightWeaponData([ToolData](/vext/ref/fb/tooldata/) other)                                | Upcast an instance of type [ToolData](/vext/ref/fb/tooldata/) to [FlashlightWeaponData](/vext/ref/fb/flashlightweapondata/).                                |
| FlashlightWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FlashlightWeaponData](/vext/ref/fb/flashlightweapondata/). |

## Properties

| Name            | Type   | Description |
| --------------- | ------ | ----------- |
| updateFrequency | number |             |
| range           | number |             |
| angle           | number |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [FlashlightWeaponData](/vext/ref/fb/flashlightweapondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FlashlightWeaponData](/vext/ref/fb/flashlightweapondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
