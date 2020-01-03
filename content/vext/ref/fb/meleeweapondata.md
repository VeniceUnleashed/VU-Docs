---
title: MeleeWeaponData
---
### Base Classes

[WeaponData](/vext/ref/fb/weapondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| MeleeWeaponData()                                                          | Create a new instance of this container type.                                                                         |
| MeleeWeaponData(MeleeWeaponData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| MeleeWeaponData([WeaponData](/vext/ref/fb/weapondata/) other)                            | Upcast an instance of type [WeaponData](/vext/ref/fb/weapondata/) to [MeleeWeaponData](/vext/ref/fb/meleeweapondata/).                            |
| MeleeWeaponData([ToolData](/vext/ref/fb/tooldata/) other)                                | Upcast an instance of type [ToolData](/vext/ref/fb/tooldata/) to [MeleeWeaponData](/vext/ref/fb/meleeweapondata/).                                |
| MeleeWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeleeWeaponData](/vext/ref/fb/meleeweapondata/). |

## Properties

| Name               | Type | Description |
| ------------------ | ---- | ----------- |
| useCannedAnimation | bool |             |
| useSphereDamage    | bool |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [MeleeWeaponData](/vext/ref/fb/meleeweapondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MeleeWeaponData](/vext/ref/fb/meleeweapondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
