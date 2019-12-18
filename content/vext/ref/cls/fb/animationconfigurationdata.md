---
title: AnimationConfigurationData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                  | Description                                              |
| ------------------------------------------------------------ | -------------------------------------------------------- |
| AnimationConfigurationData()                                 | Create a new instance of this structure type.            |
| AnimationConfigurationData(AnimationConfigurationData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                   | Type                                                                           | Description |
| ---------------------- | ------------------------------------------------------------------------------ | ----------- |
| shootModuleData        | [AnimationConfigurationShootModuleData](AnimationConfigurationShootModuleData) |             |
| weaponOffsetModuleData | [WeaponOffsetData](WeaponOffsetData)                                           |             |
| weaponSpeedModuleData  | [WeaponSpeedData](WeaponSpeedData)                                             |             |

## Methods

| Type                                                     | Name            | Parameters |
| -------------------------------------------------------- | --------------- | ---------- |
| [AnimationConfigurationData](AnimationConfigurationData) | [Clone](#clone) |            |

### Clone

> [AnimationConfigurationData](AnimationConfigurationData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
