---
title: MedkitWeaponData
---
### Base Classes

[WeaponData](WeaponData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| MedkitWeaponData()                                                          | Create a new instance of this container type.                                                                           |
| MedkitWeaponData(MedkitWeaponData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| MedkitWeaponData([WeaponData](WeaponData) other)                            | Upcast an instance of type [WeaponData](WeaponData) to [MedkitWeaponData](MedkitWeaponData).                            |
| MedkitWeaponData([ToolData](ToolData) other)                                | Upcast an instance of type [ToolData](ToolData) to [MedkitWeaponData](MedkitWeaponData).                                |
| MedkitWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MedkitWeaponData](MedkitWeaponData). |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [MedkitWeaponData](MedkitWeaponData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MedkitWeaponData](MedkitWeaponData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
