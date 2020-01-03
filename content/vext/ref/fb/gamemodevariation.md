---
title: GameModeVariation
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
| [GameModeVariation](/vext/ref/fb/gamemodevariation/) | [Clone](#clone) |            |

### Clone

> [GameModeVariation](/vext/ref/fb/gamemodevariation/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
