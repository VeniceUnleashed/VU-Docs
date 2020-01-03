---
title: WeaponData
---
### Base Classes

[ToolData](ToolData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| WeaponData()                                                          | Create a new instance of this container type.                                                               |
| WeaponData(WeaponData other)                                          | Create a reference copy of an instance of the same type.                                                    |
| WeaponData([ToolData](ToolData) other)                                | Upcast an instance of type [ToolData](ToolData) to [WeaponData](WeaponData).                                |
| WeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponData](WeaponData). |

## Properties

| Name                     | Type | Description |
| ------------------------ | ---- | ----------- |
| showLaserPaintedVehicles | bool |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [WeaponData](WeaponData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponData](WeaponData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
