---
title: PlayerScore (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                    | Description                                              |
| ------------------------------ | -------------------------------------------------------- |
| PlayerScore()                  | Create a new instance of this structure type.            |
| PlayerScore(PlayerScore other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                | Type   | Description |
| ------------------- | ------ | ----------- |
| rank                | number |             |
| kills               | number |             |
| deaths              | number |             |
| scoreMultiplier     | number |             |
| score               | number |             |
| globalScoreOriginal | number |             |
| globalScoreUpdated  | number |             |
| time                | number |             |
| gunMasterLevel      | number |             |

## Methods

| Type                       | Name            | Parameters |
| -------------------------- | --------------- | ---------- |
| [PlayerScore](PlayerScore) | [Clone](#clone) |            |

### Clone

> [PlayerScore](PlayerScore) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
