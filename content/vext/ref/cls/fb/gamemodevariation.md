---
title: GameModeVariation (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                | Description                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| GameModeVariation()                        | Create a new instance of this structure type.            |
| GameModeVariation(GameModeVariation other) | Create a reference copy of a structure of the same type. |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| identifier | string |             |
| name       | string |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [GameModeVariation](GameModeVariation) | [Clone](#clone) |            |

### Clone

> [GameModeVariation](GameModeVariation) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
