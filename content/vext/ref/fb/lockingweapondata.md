---
title: LockingWeaponData
---
### Base Classes

[WeaponData](/vext/ref/fb/weapondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| LockingWeaponData()                                                          | Create a new instance of this container type.                                                                             |
| LockingWeaponData(LockingWeaponData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| LockingWeaponData([WeaponData](/vext/ref/fb/weapondata/) other)                            | Upcast an instance of type [WeaponData](/vext/ref/fb/weapondata/) to [LockingWeaponData](/vext/ref/fb/lockingweapondata/).                            |
| LockingWeaponData([ToolData](/vext/ref/fb/tooldata/) other)                                | Upcast an instance of type [ToolData](/vext/ref/fb/tooldata/) to [LockingWeaponData](/vext/ref/fb/lockingweapondata/).                                |
| LockingWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LockingWeaponData](/vext/ref/fb/lockingweapondata/). |

## Properties

| Name                       | Type                                           | Description |
| -------------------------- | ---------------------------------------------- | ----------- |
| lockingController          | [LockingControllerData](/vext/ref/fb/lockingcontrollerdata/) |             |
| secondaryLockingController | [LockingControllerData](/vext/ref/fb/lockingcontrollerdata/) |             |
| warnLock                   | [WarnTarget](/vext/ref/fb/warntarget/)                       |             |
| isHoming                   | bool                                           |             |
| isGuidedWhenZoomed         | bool                                           |             |
| fireOnlyWhenLockedOn       | bool                                           |             |
| isGuided                   | bool                                           |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [LockingWeaponData](/vext/ref/fb/lockingweapondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LockingWeaponData](/vext/ref/fb/lockingweapondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
