---
title: GunMasterWeaponsPreset
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                          | Description                                              |
| ---------------------------------------------------- | -------------------------------------------------------- |
| GunMasterWeaponsPreset()                             | Create a new instance of this structure type.            |
| GunMasterWeaponsPreset(GunMasterWeaponsPreset other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                | Type                                             | Description |
| ------------------- | ------------------------------------------------ | ----------- |
| gunMasterLevelInfos | [GunMasterLevelInfo](/vext/ref/fb/gunmasterlevelinfo/)\[\]     |             |
| levelOverrides      | [CustomizeSoldierData](/vext/ref/fb/customizesoldierdata/)\[\] |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [GunMasterWeaponsPreset](/vext/ref/fb/gunmasterweaponspreset/) | [Clone](#clone) |            |

### Clone

> [GunMasterWeaponsPreset](/vext/ref/fb/gunmasterweaponspreset/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
