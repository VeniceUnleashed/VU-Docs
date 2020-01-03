---
title: PresetTypeConfig
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| PresetTypeConfig()                       | Create a new instance of this structure type.            |
| PresetTypeConfig(PresetTypeConfig other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type                                           | Description |
| -------------- | ---------------------------------------------- | ----------- |
| presetId       | number                                         |             |
| key            | string                                         |             |
| nameSid        | string                                         |             |
| descSid        | string                                         |             |
| lockedSettings | [LockedSettingConfig](LockedSettingConfig)\[\] |             |
| predefined     | bool                                           |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [PresetTypeConfig](PresetTypeConfig) | [Clone](#clone) |            |

### Clone

> [PresetTypeConfig](PresetTypeConfig) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
