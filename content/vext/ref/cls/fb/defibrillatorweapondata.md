---
title: DefibrillatorWeaponData (Frostbite Container)
---
### Base Classes

[WeaponData](WeaponData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| DefibrillatorWeaponData()                                                          | Create a new instance of this container type.                                                                                         |
| DefibrillatorWeaponData(DefibrillatorWeaponData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| DefibrillatorWeaponData([WeaponData](WeaponData) other)                            | Upcast an instance of type [WeaponData](WeaponData) to [DefibrillatorWeaponData](DefibrillatorWeaponData).                            |
| DefibrillatorWeaponData([ToolData](ToolData) other)                                | Upcast an instance of type [ToolData](ToolData) to [DefibrillatorWeaponData](DefibrillatorWeaponData).                                |
| DefibrillatorWeaponData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DefibrillatorWeaponData](DefibrillatorWeaponData). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| reviveTime | number |             |
| attackTime | number |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DefibrillatorWeaponData](DefibrillatorWeaponData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DefibrillatorWeaponData](DefibrillatorWeaponData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
