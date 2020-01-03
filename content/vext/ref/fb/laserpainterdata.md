---
title: LaserPainterData
---
### Base Classes

[LockingWeaponData](/vext/ref/fb/lockingweapondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| LaserPainterData()                                                          | Create a new instance of this container type.                                                                           |
| LaserPainterData(LaserPainterData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| LaserPainterData([LockingWeaponData](/vext/ref/fb/lockingweapondata/) other)              | Upcast an instance of type [LockingWeaponData](/vext/ref/fb/lockingweapondata/) to [LaserPainterData](/vext/ref/fb/laserpainterdata/).              |
| LaserPainterData([WeaponData](/vext/ref/fb/weapondata/) other)                            | Upcast an instance of type [WeaponData](/vext/ref/fb/weapondata/) to [LaserPainterData](/vext/ref/fb/laserpainterdata/).                            |
| LaserPainterData([ToolData](/vext/ref/fb/tooldata/) other)                                | Upcast an instance of type [ToolData](/vext/ref/fb/tooldata/) to [LaserPainterData](/vext/ref/fb/laserpainterdata/).                                |
| LaserPainterData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LaserPainterData](/vext/ref/fb/laserpainterdata/). |

## Properties

| Name                | Type   | Description |
| ------------------- | ------ | ----------- |
| timeObjectIsPainted | number |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [LaserPainterData](/vext/ref/fb/laserpainterdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LaserPainterData](/vext/ref/fb/laserpainterdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
