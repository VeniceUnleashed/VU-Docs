---
title: UnlockWeaponAndSlot
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| UnlockWeaponAndSlot()                          | Create a new instance of this structure type.            |
| UnlockWeaponAndSlot(UnlockWeaponAndSlot other) | Create a reference copy of a structure of the same type. |

## Properties

| Name         | Type                                                 | Description |
| ------------ | ---------------------------------------------------- | ----------- |
| weapon       | [SoldierWeaponUnlockAsset](/vext/ref/fb/soldierweaponunlockasset/) |             |
| slot         | [WeaponSlot](/vext/ref/fb/weaponslot/)                             |             |
| unlockAssets | [UnlockAssetBase](/vext/ref/fb/unlockassetbase/)\[\]               |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [UnlockWeaponAndSlot](/vext/ref/fb/unlockweaponandslot/) | [Clone](#clone) |            |

### Clone

> [UnlockWeaponAndSlot](/vext/ref/fb/unlockweaponandslot/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
