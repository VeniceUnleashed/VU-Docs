---
title: SettingConfig
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| SettingConfig()                    | Create a new instance of this structure type.            |
| SettingConfig(SettingConfig other) | Create a reference copy of a structure of the same type. |

## Properties

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| key     | string |             |
| nameSid | string |             |
| descSid | string |             |
| max     | number |             |
| default | number |             |
| min     | number |             |
| ranked  | bool   |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [SettingConfig](SettingConfig) | [Clone](#clone) |            |

### Clone

> [SettingConfig](SettingConfig) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
