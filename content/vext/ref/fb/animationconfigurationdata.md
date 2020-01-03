---
title: AnimationConfigurationData
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
| shootModuleData        | [AnimationConfigurationShootModuleData](/vext/ref/fb/animationconfigurationshootmoduledata/) |             |
| weaponOffsetModuleData | [WeaponOffsetData](/vext/ref/fb/weaponoffsetdata/)                                           |             |
| weaponSpeedModuleData  | [WeaponSpeedData](/vext/ref/fb/weaponspeeddata/)                                             |             |

## Methods

| Type                                                     | Name            | Parameters |
| -------------------------------------------------------- | --------------- | ---------- |
| [AnimationConfigurationData](/vext/ref/fb/animationconfigurationdata/) | [Clone](#clone) |            |

### Clone

> [AnimationConfigurationData](/vext/ref/fb/animationconfigurationdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
