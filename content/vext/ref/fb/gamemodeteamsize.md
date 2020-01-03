---
title: GameModeTeamSize
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| GameModeTeamSize()                       | Create a new instance of this structure type.            |
| GameModeTeamSize(GameModeTeamSize other) | Create a reference copy of a structure of the same type. |

## Properties

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| playerCount | number |             |
| squadSize   | number |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [GameModeTeamSize](/vext/ref/fb/gamemodeteamsize/) | [Clone](#clone) |            |

### Clone

> [GameModeTeamSize](/vext/ref/fb/gamemodeteamsize/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
