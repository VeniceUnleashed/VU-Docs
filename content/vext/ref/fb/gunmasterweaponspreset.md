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
| gunMasterLevelInfos | [GunMasterLevelInfo](GunMasterLevelInfo)\[\]     |             |
| levelOverrides      | [CustomizeSoldierData](CustomizeSoldierData)\[\] |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [GunMasterWeaponsPreset](GunMasterWeaponsPreset) | [Clone](#clone) |            |

### Clone

> [GunMasterWeaponsPreset](GunMasterWeaponsPreset) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
