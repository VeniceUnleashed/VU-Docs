---
title: LaserPainterData
---
### Base Classes

[LockingWeaponData](LockingWeaponData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| LaserPainterData()                                                          | Create a new instance of this container type.                                                                           |
| LaserPainterData(LaserPainterData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| LaserPainterData([LockingWeaponData](LockingWeaponData) other)              | Upcast an instance of type [LockingWeaponData](LockingWeaponData) to [LaserPainterData](LaserPainterData).              |
| LaserPainterData([WeaponData](WeaponData) other)                            | Upcast an instance of type [WeaponData](WeaponData) to [LaserPainterData](LaserPainterData).                            |
| LaserPainterData([ToolData](ToolData) other)                                | Upcast an instance of type [ToolData](ToolData) to [LaserPainterData](LaserPainterData).                                |
| LaserPainterData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LaserPainterData](LaserPainterData). |

## Properties

| Name                | Type   | Description |
| ------------------- | ------ | ----------- |
| timeObjectIsPainted | number |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [LaserPainterData](LaserPainterData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LaserPainterData](LaserPainterData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
