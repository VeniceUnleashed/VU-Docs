---
title: GunMasterLevelInfo (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                  | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| GunMasterLevelInfo()                         | Create a new instance of this structure type.            |
| GunMasterLevelInfo(GunMasterLevelInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name          | Type                                         | Description |
| ------------- | -------------------------------------------- | ----------- |
| customizeData | [CustomizeSoldierData](CustomizeSoldierData) |             |
| killsNeeded   | number                                       |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [GunMasterLevelInfo](GunMasterLevelInfo) | [Clone](#clone) |            |

### Clone

> [GunMasterLevelInfo](GunMasterLevelInfo) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
