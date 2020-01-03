---
title: LevelSetup
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                  | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
| LevelSetup()                 | Create a new instance of this structure type.            |
| LevelSetup(LevelSetup other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                 | Type                                     | Description |
| -------------------- | ---------------------------------------- | ----------- |
| name                 | string                                   |             |
| inclusionOptions     | [LevelSetupOption](/vext/ref/fb/levelsetupoption/)\[\] |             |
| difficultyIndex      | number                                   |             |
| subLevelNames        | string\[\]                               |             |
| subLevelStates       | number\[\]                               |             |
| isSaveGame           | bool                                     |             |
| forceReloadResources | bool                                     |             |

## Methods

| Type                     | Name            | Parameters |
| ------------------------ | --------------- | ---------- |
| [LevelSetup](/vext/ref/fb/levelsetup/) | [Clone](#clone) |            |

### Clone

> [LevelSetup](/vext/ref/fb/levelsetup/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
