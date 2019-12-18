---
title: DetonatedWeaponData (Frostbite Container)
---
### Base Classes

[WeaponData](WeaponData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| DetonatedWeaponData()                                                          | Create a new instance of this container type.                                                                                 |
| DetonatedWeaponData(DetonatedWeaponData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| DetonatedWeaponData([WeaponData](WeaponData) other)                            | Upcast an instance of type [WeaponData](WeaponData) to [DetonatedWeaponData](DetonatedWeaponData).                            |
| DetonatedWeaponData([ToolData](ToolData) other)                                | Upcast an instance of type [ToolData](ToolData) to [DetonatedWeaponData](DetonatedWeaponData).                                |
| DetonatedWeaponData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DetonatedWeaponData](DetonatedWeaponData). |

## Properties

| Name              | Type                                           | Description |
| ----------------- | ---------------------------------------------- | ----------- |
| lockingController | [LockingControllerData](LockingControllerData) |             |
| range             | number                                         |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [DetonatedWeaponData](DetonatedWeaponData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DetonatedWeaponData](DetonatedWeaponData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
