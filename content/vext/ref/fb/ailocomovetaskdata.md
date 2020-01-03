---
title: AILocoMoveTaskData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                  | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| AILocoMoveTaskData()                         | Create a new instance of this structure type.            |
| AILocoMoveTaskData(AILocoMoveTaskData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name              | Type                              | Description |
| ----------------- | --------------------------------- | ----------- |
| wantedPos         | [Vec3](/vext/ref/shared/class/Vec3) |             |
| worldAngle        | number                            |             |
| waitTime          | number                            |             |
| enterPose         | [AntPoseEnum](AntPoseEnum)        |             |
| exitPose          | [AntPoseEnum](AntPoseEnum)        |             |
| overrideAngle     | bool                              |             |
| useClientPosition | bool                              |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [AILocoMoveTaskData](AILocoMoveTaskData) | [Clone](#clone) |            |

### Clone

> [AILocoMoveTaskData](AILocoMoveTaskData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
