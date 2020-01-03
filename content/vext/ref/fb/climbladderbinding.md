---
title: ClimbLadderBinding
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
| climbLadderPhase           | [AntRef](/vext/ref/fb/antref/) |             |
| climbLadderConnectPhase    | [AntRef](/vext/ref/fb/antref/) |             |
| climbLadderTransitionPhase | [AntRef](/vext/ref/fb/antref/) |             |
| onLadder                   | [AntRef](/vext/ref/fb/antref/) |             |
| ladderTopTransition        | [AntRef](/vext/ref/fb/antref/) |             |
| fallHigh                   | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [ClimbLadderBinding](/vext/ref/fb/climbladderbinding/) | [Clone](#clone) |            |

### Clone

> [ClimbLadderBinding](/vext/ref/fb/climbladderbinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
