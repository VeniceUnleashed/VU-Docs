---
title: MortarStrikeWeaponData
---
### Base Classes

[WeaponData](/vext/ref/fb/weapondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| MortarStrikeWeaponData()                                                          | Create a new instance of this container type.                                                                                       |
| MortarStrikeWeaponData(MortarStrikeWeaponData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| MortarStrikeWeaponData([WeaponData](/vext/ref/fb/weapondata/) other)                            | Upcast an instance of type [WeaponData](/vext/ref/fb/weapondata/) to [MortarStrikeWeaponData](/vext/ref/fb/mortarstrikeweapondata/).                            |
| MortarStrikeWeaponData([ToolData](/vext/ref/fb/tooldata/) other)                                | Upcast an instance of type [ToolData](/vext/ref/fb/tooldata/) to [MortarStrikeWeaponData](/vext/ref/fb/mortarstrikeweapondata/).                                |
| MortarStrikeWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MortarStrikeWeaponData](/vext/ref/fb/mortarstrikeweapondata/). |

## Properties

| Name                 | Type   | Description |
| -------------------- | ------ | ----------- |
| holdingTolerance     | number |             |
| maxStrikeDistance    | number |             |
| strikeRadius         | number |             |
| maxRandomSpawnHeight | number |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MortarStrikeWeaponData](/vext/ref/fb/mortarstrikeweapondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MortarStrikeWeaponData](/vext/ref/fb/mortarstrikeweapondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
