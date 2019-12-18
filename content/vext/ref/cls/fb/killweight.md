---
title: KillWeight (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                  | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
| KillWeight()                 | Create a new instance of this structure type.            |
| KillWeight(KillWeight other) | Create a reference copy of a structure of the same type. |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| lowIntenseWeight  | number |             |
| highIntenseWeight | number |             |
| coolDownTime      | number |             |

## Methods

| Type                     | Name            | Parameters |
| ------------------------ | --------------- | ---------- |
| [KillWeight](KillWeight) | [Clone](#clone) |            |

### Clone

> [KillWeight](KillWeight) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
