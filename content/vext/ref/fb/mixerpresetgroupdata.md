---
title: MixerPresetGroupData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                      | Description                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| MixerPresetGroupData()                           | Create a new instance of this structure type.            |
| MixerPresetGroupData(MixerPresetGroupData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name        | Type                                               | Description |
| ----------- | -------------------------------------------------- | ----------- |
| group       | [MixGroup](/vext/ref/fb/mixgroup/)                               |             |
| state       | [MixGroupState](/vext/ref/fb/mixgroupstate/)                     |             |
| attackTime  | number                                             |             |
| releaseTime | number                                             |             |
| properties  | [MixGroupPropertyValue](/vext/ref/fb/mixgrouppropertyvalue/)\[\] |             |
| isDominant  | bool                                               |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [MixerPresetGroupData](/vext/ref/fb/mixerpresetgroupdata/) | [Clone](#clone) |            |

### Clone

> [MixerPresetGroupData](/vext/ref/fb/mixerpresetgroupdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
