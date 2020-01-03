---
title: GameModeInformation
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
| platform               | [GamePlatform](/vext/ref/fb/gameplatform/)     |             |
| sizes                  | [GameModeSize](/vext/ref/fb/gamemodesize/)\[\] |             |
| defaultSize            | [GameModeSize](/vext/ref/fb/gamemodesize/)     |             |
| allowFallbackToDefault | bool                             |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [GameModeInformation](/vext/ref/fb/gamemodeinformation/) | [Clone](#clone) |            |

### Clone

> [GameModeInformation](/vext/ref/fb/gamemodeinformation/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
