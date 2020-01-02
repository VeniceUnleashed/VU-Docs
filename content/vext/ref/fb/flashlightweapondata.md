---
title: FlashlightWeaponData
---
### Base Classes

[WeaponData](WeaponData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| FlashlightWeaponData()                                                          | Create a new instance of this container type.                                                                                   |
| FlashlightWeaponData(FlashlightWeaponData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| FlashlightWeaponData([WeaponData](WeaponData) other)                            | Upcast an instance of type [WeaponData](WeaponData) to [FlashlightWeaponData](FlashlightWeaponData).                            |
| FlashlightWeaponData([ToolData](ToolData) other)                                | Upcast an instance of type [ToolData](ToolData) to [FlashlightWeaponData](FlashlightWeaponData).                                |
| FlashlightWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FlashlightWeaponData](FlashlightWeaponData). |

## Properties

| Name            | Type   | Description |
| --------------- | ------ | ----------- |
| updateFrequency | number |             |
| range           | number |             |
| angle           | number |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [FlashlightWeaponData](FlashlightWeaponData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FlashlightWeaponData](FlashlightWeaponData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
