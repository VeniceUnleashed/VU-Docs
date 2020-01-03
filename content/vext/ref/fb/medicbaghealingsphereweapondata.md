---
title: MedicBagHealingSphereWeaponData
---
### Base Classes

[WeaponData](/vext/ref/fb/weapondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| MedicBagHealingSphereWeaponData()                                                          | Create a new instance of this container type.                                                                                                         |
| MedicBagHealingSphereWeaponData(MedicBagHealingSphereWeaponData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| MedicBagHealingSphereWeaponData([WeaponData](/vext/ref/fb/weapondata/) other)                            | Upcast an instance of type [WeaponData](/vext/ref/fb/weapondata/) to [MedicBagHealingSphereWeaponData](/vext/ref/fb/medicbaghealingsphereweapondata/).                            |
| MedicBagHealingSphereWeaponData([ToolData](/vext/ref/fb/tooldata/) other)                                | Upcast an instance of type [ToolData](/vext/ref/fb/tooldata/) to [MedicBagHealingSphereWeaponData](/vext/ref/fb/medicbaghealingsphereweapondata/).                                |
| MedicBagHealingSphereWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MedicBagHealingSphereWeaponData](/vext/ref/fb/medicbaghealingsphereweapondata/). |

## Properties

| Name                    | Type                                   | Description |
| ----------------------- | -------------------------------------- | ----------- |
| healer                  | [HealingSphereData](/vext/ref/fb/healingspheredata/) |             |
| healthPointsRefillSpeed | number                                 |             |
| healthPointsPerBag      | number                                 |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MedicBagHealingSphereWeaponData](/vext/ref/fb/medicbaghealingsphereweapondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MedicBagHealingSphereWeaponData](/vext/ref/fb/medicbaghealingsphereweapondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
