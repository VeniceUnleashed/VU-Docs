---
title: LevelDescriptionInclusionCategory (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                                | Description                                              |
| -------------------------------------------------------------------------- | -------------------------------------------------------- |
| LevelDescriptionInclusionCategory()                                        | Create a new instance of this structure type.            |
| LevelDescriptionInclusionCategory(LevelDescriptionInclusionCategory other) | Create a reference copy of a structure of the same type. |

## Properties

| Name     | Type       | Description |
| -------- | ---------- | ----------- |
| category | string     |             |
| mode     | string\[\] |             |

## Methods

| Type                                                                   | Name            | Parameters |
| ---------------------------------------------------------------------- | --------------- | ---------- |
| [LevelDescriptionInclusionCategory](LevelDescriptionInclusionCategory) | [Clone](#clone) |            |

### Clone

> [LevelDescriptionInclusionCategory](LevelDescriptionInclusionCategory) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
