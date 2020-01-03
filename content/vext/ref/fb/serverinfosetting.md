---
title: ServerInfoSetting
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                | Description                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| ServerInfoSetting()                        | Create a new instance of this structure type.            |
| ServerInfoSetting(ServerInfoSetting other) | Create a reference copy of a structure of the same type. |

## Properties

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| key    | string |             |
| name   | string |             |
| isBool | bool   |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [ServerInfoSetting](/vext/ref/fb/serverinfosetting/) | [Clone](#clone) |            |

### Clone

> [ServerInfoSetting](/vext/ref/fb/serverinfosetting/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
