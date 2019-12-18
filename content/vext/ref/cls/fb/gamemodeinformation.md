---
title: GameModeInformation (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| GameModeInformation()                          | Create a new instance of this structure type.            |
| GameModeInformation(GameModeInformation other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                   | Type                             | Description |
| ---------------------- | -------------------------------- | ----------- |
| platform               | [GamePlatform](GamePlatform)     |             |
| sizes                  | [GameModeSize](GameModeSize)\[\] |             |
| defaultSize            | [GameModeSize](GameModeSize)     |             |
| allowFallbackToDefault | bool                             |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [GameModeInformation](GameModeInformation) | [Clone](#clone) |            |

### Clone

> [GameModeInformation](GameModeInformation) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
