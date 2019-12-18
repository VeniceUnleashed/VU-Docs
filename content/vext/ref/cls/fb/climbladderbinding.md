---
title: ClimbLadderBinding (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                  | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| ClimbLadderBinding()                         | Create a new instance of this structure type.            |
| ClimbLadderBinding(ClimbLadderBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                       | Type             | Description |
| -------------------------- | ---------------- | ----------- |
| climbLadderPhase           | [AntRef](AntRef) |             |
| climbLadderConnectPhase    | [AntRef](AntRef) |             |
| climbLadderTransitionPhase | [AntRef](AntRef) |             |
| onLadder                   | [AntRef](AntRef) |             |
| ladderTopTransition        | [AntRef](AntRef) |             |
| fallHigh                   | [AntRef](AntRef) |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [ClimbLadderBinding](ClimbLadderBinding) | [Clone](#clone) |            |

### Clone

> [ClimbLadderBinding](ClimbLadderBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
