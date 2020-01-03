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
| locoTarget              | [AntRef](AntRef) |             |
| attentionState          | [AntRef](AntRef) |             |
| endPoseEnum             | [AntRef](AntRef) |             |
| currentPoseEnum         | [AntRef](AntRef) |             |
| enterExitPoseEnum       | [AntRef](AntRef) |             |
| runStyle                | [AntRef](AntRef) |             |
| targetWaypointPosition  | [AntRef](AntRef) |             |
| targetSpeedLevel        | [AntRef](AntRef) |             |
| enableProceduralHeadAim | [AntRef](AntRef) |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [AILocoBinding](AILocoBinding) | [Clone](#clone) |            |

### Clone

> [AILocoBinding](AILocoBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
