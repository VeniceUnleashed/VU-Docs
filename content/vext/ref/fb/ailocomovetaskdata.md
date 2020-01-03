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
| wantedPos         | [Vec3](/vext/ref/shared/class/vec3) |             |
| worldAngle        | number                            |             |
| waitTime          | number                            |             |
| enterPose         | [AntPoseEnum](/vext/ref/fb/antposeenum/)        |             |
| exitPose          | [AntPoseEnum](/vext/ref/fb/antposeenum/)        |             |
| overrideAngle     | bool                              |             |
| useClientPosition | bool                              |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [AILocoMoveTaskData](/vext/ref/fb/ailocomovetaskdata/) | [Clone](#clone) |            |

### Clone

> [AILocoMoveTaskData](/vext/ref/fb/ailocomovetaskdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
