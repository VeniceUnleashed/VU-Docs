---
title: WeaponData
---
### Base Classes

[ToolData](/vext/ref/fb/tooldata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| WeaponData()                                                          | Create a new instance of this container type.                                                               |
| WeaponData(WeaponData other)                                          | Create a reference copy of an instance of the same type.                                                    |
| WeaponData([ToolData](/vext/ref/fb/tooldata/) other)                                | Upcast an instance of type [ToolData](/vext/ref/fb/tooldata/) to [WeaponData](/vext/ref/fb/weapondata/).                                |
| WeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponData](/vext/ref/fb/weapondata/). |

## Properties

| Name                     | Type | Description |
| ------------------------ | ---- | ----------- |
| showLaserPaintedVehicles | bool |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [WeaponData](/vext/ref/fb/weapondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponData](/vext/ref/fb/weapondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
