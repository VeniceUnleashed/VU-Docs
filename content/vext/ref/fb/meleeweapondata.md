---
title: MeleeWeaponData
---
### Base Classes

[WeaponData](WeaponData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| MeleeWeaponData()                                                          | Create a new instance of this container type.                                                                         |
| MeleeWeaponData(MeleeWeaponData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| MeleeWeaponData([WeaponData](WeaponData) other)                            | Upcast an instance of type [WeaponData](WeaponData) to [MeleeWeaponData](MeleeWeaponData).                            |
| MeleeWeaponData([ToolData](ToolData) other)                                | Upcast an instance of type [ToolData](ToolData) to [MeleeWeaponData](MeleeWeaponData).                                |
| MeleeWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeleeWeaponData](MeleeWeaponData). |

## Properties

| Name               | Type | Description |
| ------------------ | ---- | ----------- |
| useCannedAnimation | bool |             |
| useSphereDamage    | bool |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [MeleeWeaponData](MeleeWeaponData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MeleeWeaponData](MeleeWeaponData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
