---
title: AILocoBinding
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| AILocoBinding()                    | Create a new instance of this structure type.            |
| AILocoBinding(AILocoBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                    | Type             | Description |
| ----------------------- | ---------------- | ----------- |
| locoTarget              | [AntRef](/vext/ref/fb/antref/) |             |
| attentionState          | [AntRef](/vext/ref/fb/antref/) |             |
| endPoseEnum             | [AntRef](/vext/ref/fb/antref/) |             |
| currentPoseEnum         | [AntRef](/vext/ref/fb/antref/) |             |
| enterExitPoseEnum       | [AntRef](/vext/ref/fb/antref/) |             |
| runStyle                | [AntRef](/vext/ref/fb/antref/) |             |
| targetWaypointPosition  | [AntRef](/vext/ref/fb/antref/) |             |
| targetSpeedLevel        | [AntRef](/vext/ref/fb/antref/) |             |
| enableProceduralHeadAim | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [AILocoBinding](/vext/ref/fb/ailocobinding/) | [Clone](#clone) |            |

### Clone

> [AILocoBinding](/vext/ref/fb/ailocobinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
