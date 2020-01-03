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
| weaponMiscModifierSettings           | [WeaponMiscModifierSettings](/vext/ref/fb/weaponmiscmodifiersettings/)                     |             |
| weaponFiringDataModifier             | [WeaponFiringDataModifier](/vext/ref/fb/weaponfiringdatamodifier/)                         |             |
| weaponFiringEffectsModifier          | [WeaponFiringEffectsModifier](/vext/ref/fb/weaponfiringeffectsmodifier/)                   |             |
| weaponSoundModifier                  | [WeaponSoundModifier](/vext/ref/fb/weaponsoundmodifier/)                                   |             |
| weaponShotModifier                   | [WeaponShotModifier](/vext/ref/fb/weaponshotmodifier/)                                     |             |
| weaponProjectileModifier             | [WeaponProjectileModifier](/vext/ref/fb/weaponprojectilemodifier/)                         |             |
| weaponAimingSimulationModifier       | [WeaponAimingSimulationModifier](/vext/ref/fb/weaponaimingsimulationmodifier/)             |             |
| weaponAnimationConfigurationModifier | [WeaponAnimationConfigurationModifier](/vext/ref/fb/weaponanimationconfigurationmodifier/) |             |
| weaponAnimTypeModifier               | [WeaponAnimTypeModifier](/vext/ref/fb/weaponanimtypemodifier/)                             |             |
| weaponMagazineModifier               | [WeaponMagazineModifier](/vext/ref/fb/weaponmagazinemodifier/)                             |             |
| weaponZoomModifier                   | [WeaponZoomModifier](/vext/ref/fb/weaponzoommodifier/)                                     |             |

## Methods

| Type                               | Name                                  | Parameters    |
| ---------------------------------- | ------------------------------------- | ------------- |
| [WeaponModifier](/vext/ref/fb/weaponmodifier/)   | [Clone](#clone)                       |               |
| int                                | [GetUnlockCount](#getunlockcount)     |               |
| [UnlockAssetBase](/vext/ref/fb/unlockassetbase/) | [GetUnlockAtIndex](#getunlockatindex) | int **index** |

### Clone

> [WeaponModifier](/vext/ref/fb/weaponmodifier/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).

### GetUnlockCount

> int **GetUnlockCount**()

### GetUnlockAtIndex

> [UnlockAssetBase](/vext/ref/fb/unlockassetbase/) **GetUnlockAtIndex**(int **index**)

#### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| index | int  |             |
