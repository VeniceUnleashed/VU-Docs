---
title: OnlineEnvironmentUrl (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                      | Description                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| OnlineEnvironmentUrl()                           | Create a new instance of this structure type.            |
| OnlineEnvironmentUrl(OnlineEnvironmentUrl other) | Create a reference copy of a structure of the same type. |

## Properties

| Name | Type                                                     | Description |
| ---- | -------------------------------------------------------- | ----------- |
| urls | [OnlineEnvironmentUrlData](OnlineEnvironmentUrlData)\[\] |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [OnlineEnvironmentUrl](OnlineEnvironmentUrl) | [Clone](#clone) |            |

### Clone

> [OnlineEnvironmentUrl](OnlineEnvironmentUrl) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
