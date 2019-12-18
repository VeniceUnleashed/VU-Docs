---
title: GameTipData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                    | Description                                              |
| ------------------------------ | -------------------------------------------------------- |
| GameTipData()                  | Create a new instance of this structure type.            |
| GameTipData(GameTipData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| text | string |             |

## Methods

| Type                       | Name            | Parameters |
| -------------------------- | --------------- | ---------- |
| [GameTipData](GameTipData) | [Clone](#clone) |            |

### Clone

> [GameTipData](GameTipData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
