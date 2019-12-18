---
title: Consumable (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                  | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
| Consumable()                 | Create a new instance of this structure type.            |
| Consumable(Consumable other) | Create a reference copy of a structure of the same type. |

## Properties

| Name     | Type                               | Description |
| -------- | ---------------------------------- | ----------- |
| instance | [Guid](/vext/ref/cls/shr/Guid)  |             |
| group    | [ConsumableGroup](ConsumableGroup) |             |

## Methods

| Type                     | Name            | Parameters |
| ------------------------ | --------------- | ---------- |
| [Consumable](Consumable) | [Clone](#clone) |            |

### Clone

> [Consumable](Consumable) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
