---
title: DefibrillatorWeaponData
---
### Base Classes

[WeaponData](/vext/ref/fb/weapondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| DefibrillatorWeaponData()                                                          | Create a new instance of this container type.                                                                                         |
| DefibrillatorWeaponData(DefibrillatorWeaponData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| DefibrillatorWeaponData([WeaponData](/vext/ref/fb/weapondata/) other)                            | Upcast an instance of type [WeaponData](/vext/ref/fb/weapondata/) to [DefibrillatorWeaponData](/vext/ref/fb/defibrillatorweapondata/).                            |
| DefibrillatorWeaponData([ToolData](/vext/ref/fb/tooldata/) other)                                | Upcast an instance of type [ToolData](/vext/ref/fb/tooldata/) to [DefibrillatorWeaponData](/vext/ref/fb/defibrillatorweapondata/).                                |
| DefibrillatorWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DefibrillatorWeaponData](/vext/ref/fb/defibrillatorweapondata/). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| reviveTime | number |             |
| attackTime | number |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DefibrillatorWeaponData](/vext/ref/fb/defibrillatorweapondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DefibrillatorWeaponData](/vext/ref/fb/defibrillatorweapondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
