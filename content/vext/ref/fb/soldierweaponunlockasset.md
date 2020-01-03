---
title: SoldierWeaponUnlockAsset
---
### Base Classes

[UnlockAssetBase](/vext/ref/fb/unlockassetbase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierWeaponUnlockAsset()                                                          | Create a new instance of this container type.                                                                                           |
| SoldierWeaponUnlockAsset(SoldierWeaponUnlockAsset other)                            | Create a reference copy of an instance of the same type.                                                                                |
| SoldierWeaponUnlockAsset([UnlockAssetBase](/vext/ref/fb/unlockassetbase/) other)                  | Upcast an instance of type [UnlockAssetBase](/vext/ref/fb/unlockassetbase/) to [SoldierWeaponUnlockAsset](/vext/ref/fb/soldierweaponunlockasset/).                  |
| SoldierWeaponUnlockAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SoldierWeaponUnlockAsset](/vext/ref/fb/soldierweaponunlockasset/).                                      |
| SoldierWeaponUnlockAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierWeaponUnlockAsset](/vext/ref/fb/soldierweaponunlockasset/). |

## Properties

| Name             | Type                                             | Description |
| ---------------- | ------------------------------------------------ | ----------- |
| weapon           | [SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint/) |             |
| extra            | [UnlockAssetBase](/vext/ref/fb/unlockassetbase/)               |             |
| weaponIdentifier | number                                           |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierWeaponUnlockAsset](/vext/ref/fb/soldierweaponunlockasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierWeaponUnlockAsset](/vext/ref/fb/soldierweaponunlockasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
