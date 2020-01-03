---
title: LevelDescription
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| LevelDescription()                       | Create a new instance of this structure type.            |
| LevelDescription(LevelDescription other) | Create a reference copy of a structure of the same type. |

## Properties

| Name          | Type                                                       | Description |
| ------------- | ---------------------------------------------------------- | ----------- |
| name          | string                                                     |             |
| description   | string                                                     |             |
| components    | [LevelDescriptionComponent](LevelDescriptionComponent)\[\] |             |
| isCoop        | bool                                                       |             |
| isMenu        | bool                                                       |             |
| isMultiplayer | bool                                                       |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [LevelDescription](LevelDescription) | [Clone](#clone) |            |

### Clone

> [LevelDescription](LevelDescription) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
