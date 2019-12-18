---
title: GameModeSize (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                      | Description                                              |
| -------------------------------- | -------------------------------------------------------- |
| GameModeSize()                   | Create a new instance of this structure type.            |
| GameModeSize(GameModeSize other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type                                     | Description |
| -------------- | ---------------------------------------- | ----------- |
| name           | string                                   |             |
| shortName      | string                                   |             |
| metaIdentifier | string                                   |             |
| playerCount    | number                                   |             |
| teams          | [GameModeTeamSize](GameModeTeamSize)\[\] |             |
| roundsPerMap   | number                                   |             |
| forceSquad     | bool                                     |             |

## Methods

| Type                         | Name            | Parameters |
| ---------------------------- | --------------- | ---------- |
| [GameModeSize](GameModeSize) | [Clone](#clone) |            |

### Clone

> [GameModeSize](GameModeSize) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
