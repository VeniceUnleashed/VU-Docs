---
title: MortarStrikeWeaponData
---
### Base Classes

[WeaponData](WeaponData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| MortarStrikeWeaponData()                                                          | Create a new instance of this container type.                                                                                       |
| MortarStrikeWeaponData(MortarStrikeWeaponData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| MortarStrikeWeaponData([WeaponData](WeaponData) other)                            | Upcast an instance of type [WeaponData](WeaponData) to [MortarStrikeWeaponData](MortarStrikeWeaponData).                            |
| MortarStrikeWeaponData([ToolData](ToolData) other)                                | Upcast an instance of type [ToolData](ToolData) to [MortarStrikeWeaponData](MortarStrikeWeaponData).                                |
| MortarStrikeWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MortarStrikeWeaponData](MortarStrikeWeaponData). |

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
| [MortarStrikeWeaponData](MortarStrikeWeaponData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MortarStrikeWeaponData](MortarStrikeWeaponData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
