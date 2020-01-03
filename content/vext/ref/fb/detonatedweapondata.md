---
title: DetonatedWeaponData
---
### Base Classes

[WeaponData](/vext/ref/fb/weapondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| DetonatedWeaponData()                                                          | Create a new instance of this container type.                                                                                 |
| DetonatedWeaponData(DetonatedWeaponData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| DetonatedWeaponData([WeaponData](/vext/ref/fb/weapondata/) other)                            | Upcast an instance of type [WeaponData](/vext/ref/fb/weapondata/) to [DetonatedWeaponData](/vext/ref/fb/detonatedweapondata/).                            |
| DetonatedWeaponData([ToolData](/vext/ref/fb/tooldata/) other)                                | Upcast an instance of type [ToolData](/vext/ref/fb/tooldata/) to [DetonatedWeaponData](/vext/ref/fb/detonatedweapondata/).                                |
| DetonatedWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DetonatedWeaponData](/vext/ref/fb/detonatedweapondata/). |

## Properties

| Name              | Type                                           | Description |
| ----------------- | ---------------------------------------------- | ----------- |
| lockingController | [LockingControllerData](/vext/ref/fb/lockingcontrollerdata/) |             |
| range             | number                                         |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [DetonatedWeaponData](/vext/ref/fb/detonatedweapondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DetonatedWeaponData](/vext/ref/fb/detonatedweapondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
