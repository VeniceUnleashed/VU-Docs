---
title: WeaponModifier
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| WeaponModifier()                     | Create a new instance of this structure type.            |
| WeaponModifier(WeaponModifier other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                                 | Type                                                                         | Description |
| ------------------------------------ | ---------------------------------------------------------------------------- | ----------- |
| dummyToMakeFrostEDcompile            | number                                                                       |             |
| weaponMiscModifierSettings           | [WeaponMiscModifierSettings](WeaponMiscModifierSettings)                     |             |
| weaponFiringDataModifier             | [WeaponFiringDataModifier](WeaponFiringDataModifier)                         |             |
| weaponFiringEffectsModifier          | [WeaponFiringEffectsModifier](WeaponFiringEffectsModifier)                   |             |
| weaponSoundModifier                  | [WeaponSoundModifier](WeaponSoundModifier)                                   |             |
| weaponShotModifier                   | [WeaponShotModifier](WeaponShotModifier)                                     |             |
| weaponProjectileModifier             | [WeaponProjectileModifier](WeaponProjectileModifier)                         |             |
| weaponAimingSimulationModifier       | [WeaponAimingSimulationModifier](WeaponAimingSimulationModifier)             |             |
| weaponAnimationConfigurationModifier | [WeaponAnimationConfigurationModifier](WeaponAnimationConfigurationModifier) |             |
| weaponAnimTypeModifier               | [WeaponAnimTypeModifier](WeaponAnimTypeModifier)                             |             |
| weaponMagazineModifier               | [WeaponMagazineModifier](WeaponMagazineModifier)                             |             |
| weaponZoomModifier                   | [WeaponZoomModifier](WeaponZoomModifier)                                     |             |

## Methods

| Type                               | Name                                  | Parameters    |
| ---------------------------------- | ------------------------------------- | ------------- |
| [WeaponModifier](WeaponModifier)   | [Clone](#clone)                       |               |
| int                                | [GetUnlockCount](#getunlockcount)     |               |
| [UnlockAssetBase](UnlockAssetBase) | [GetUnlockAtIndex](#getunlockatindex) | int **index** |

### Clone

> [WeaponModifier](WeaponModifier) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).

### GetUnlockCount

> int **GetUnlockCount**()

### GetUnlockAtIndex

> [UnlockAssetBase](UnlockAssetBase) **GetUnlockAtIndex**(int **index**)

#### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| index | int  |             |
