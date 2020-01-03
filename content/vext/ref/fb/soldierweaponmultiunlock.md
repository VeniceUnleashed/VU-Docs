---
title: SoldierWeaponMultiUnlock
---
### Base Classes

[UnlockUserDataBase](/vext/ref/fb/unlockuserdatabase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierWeaponMultiUnlock()                                                          | Create a new instance of this container type.                                                                                           |
| SoldierWeaponMultiUnlock(SoldierWeaponMultiUnlock other)                            | Create a reference copy of an instance of the same type.                                                                                |
| SoldierWeaponMultiUnlock([UnlockUserDataBase](/vext/ref/fb/unlockuserdatabase/) other)            | Upcast an instance of type [UnlockUserDataBase](/vext/ref/fb/unlockuserdatabase/) to [SoldierWeaponMultiUnlock](/vext/ref/fb/soldierweaponmultiunlock/).            |
| SoldierWeaponMultiUnlock([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SoldierWeaponMultiUnlock](/vext/ref/fb/soldierweaponmultiunlock/).                                      |
| SoldierWeaponMultiUnlock([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierWeaponMultiUnlock](/vext/ref/fb/soldierweaponmultiunlock/). |

## Properties

| Name             | Type                                   | Description |
| ---------------- | -------------------------------------- | ----------- |
| first            | [UnlockAssetBase](/vext/ref/fb/unlockassetbase/)     |             |
| unlockAssetPairs | [UnlockAssetPair](/vext/ref/fb/unlockassetpair/)\[\] |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierWeaponMultiUnlock](/vext/ref/fb/soldierweaponmultiunlock/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierWeaponMultiUnlock](/vext/ref/fb/soldierweaponmultiunlock/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
