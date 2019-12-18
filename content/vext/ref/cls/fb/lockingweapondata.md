---
title: LockingWeaponData (Frostbite Container)
---
### Base Classes

[WeaponData](WeaponData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| LockingWeaponData()                                                          | Create a new instance of this container type.                                                                             |
| LockingWeaponData(LockingWeaponData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| LockingWeaponData([WeaponData](WeaponData) other)                            | Upcast an instance of type [WeaponData](WeaponData) to [LockingWeaponData](LockingWeaponData).                            |
| LockingWeaponData([ToolData](ToolData) other)                                | Upcast an instance of type [ToolData](ToolData) to [LockingWeaponData](LockingWeaponData).                                |
| LockingWeaponData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [LockingWeaponData](LockingWeaponData). |

## Properties

| Name                       | Type                                           | Description |
| -------------------------- | ---------------------------------------------- | ----------- |
| lockingController          | [LockingControllerData](LockingControllerData) |             |
| secondaryLockingController | [LockingControllerData](LockingControllerData) |             |
| warnLock                   | [WarnTarget](WarnTarget)                       |             |
| isHoming                   | bool                                           |             |
| isGuidedWhenZoomed         | bool                                           |             |
| fireOnlyWhenLockedOn       | bool                                           |             |
| isGuided                   | bool                                           |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [LockingWeaponData](LockingWeaponData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [LockingWeaponData](LockingWeaponData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
