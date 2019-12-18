---
title: Ps3SkuSettings (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| Ps3SkuSettings()                     | Create a new instance of this structure type.            |
| Ps3SkuSettings(Ps3SkuSettings other) | Create a reference copy of a structure of the same type. |

## Properties

| Name             | Type   | Description |
| ---------------- | ------ | ----------- |
| titleId          | string |             |
| spId             | string |             |
| grantsOnlinePass | bool   |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [Ps3SkuSettings](Ps3SkuSettings) | [Clone](#clone) |            |

### Clone

> [Ps3SkuSettings](Ps3SkuSettings) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
