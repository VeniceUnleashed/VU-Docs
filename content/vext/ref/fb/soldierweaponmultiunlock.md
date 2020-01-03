---
title: SoldierWeaponMultiUnlock
---
### Base Classes

[UnlockUserDataBase](UnlockUserDataBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierWeaponMultiUnlock()                                                          | Create a new instance of this container type.                                                                                           |
| SoldierWeaponMultiUnlock(SoldierWeaponMultiUnlock other)                            | Create a reference copy of an instance of the same type.                                                                                |
| SoldierWeaponMultiUnlock([UnlockUserDataBase](UnlockUserDataBase) other)            | Upcast an instance of type [UnlockUserDataBase](UnlockUserDataBase) to [SoldierWeaponMultiUnlock](SoldierWeaponMultiUnlock).            |
| SoldierWeaponMultiUnlock([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SoldierWeaponMultiUnlock](SoldierWeaponMultiUnlock).                                      |
| SoldierWeaponMultiUnlock([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierWeaponMultiUnlock](SoldierWeaponMultiUnlock). |

## Properties

| Name             | Type                                   | Description |
| ---------------- | -------------------------------------- | ----------- |
| first            | [UnlockAssetBase](UnlockAssetBase)     |             |
| unlockAssetPairs | [UnlockAssetPair](UnlockAssetPair)\[\] |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierWeaponMultiUnlock](SoldierWeaponMultiUnlock) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierWeaponMultiUnlock](SoldierWeaponMultiUnlock) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
