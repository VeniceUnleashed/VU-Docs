---
title: SoldierWeaponUnlockAsset
---
### Base Classes

[UnlockAssetBase](UnlockAssetBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierWeaponUnlockAsset()                                                          | Create a new instance of this container type.                                                                                           |
| SoldierWeaponUnlockAsset(SoldierWeaponUnlockAsset other)                            | Create a reference copy of an instance of the same type.                                                                                |
| SoldierWeaponUnlockAsset([UnlockAssetBase](UnlockAssetBase) other)                  | Upcast an instance of type [UnlockAssetBase](UnlockAssetBase) to [SoldierWeaponUnlockAsset](SoldierWeaponUnlockAsset).                  |
| SoldierWeaponUnlockAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SoldierWeaponUnlockAsset](SoldierWeaponUnlockAsset).                                      |
| SoldierWeaponUnlockAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierWeaponUnlockAsset](SoldierWeaponUnlockAsset). |

## Properties

| Name             | Type                                             | Description |
| ---------------- | ------------------------------------------------ | ----------- |
| weapon           | [SoldierWeaponBlueprint](SoldierWeaponBlueprint) |             |
| extra            | [UnlockAssetBase](UnlockAssetBase)               |             |
| weaponIdentifier | number                                           |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierWeaponUnlockAsset](SoldierWeaponUnlockAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierWeaponUnlockAsset](SoldierWeaponUnlockAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
