---
title: AILocoCoverTaskData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| AILocoCoverTaskData()                          | Create a new instance of this structure type.            |
| AILocoCoverTaskData(AILocoCoverTaskData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                   | Type                                     | Description |
| ---------------------- | ---------------------------------------- | ----------- |
| wantedPos              | [Vec3](/vext/ref/shared/class/vec3)        |             |
| threatPosition         | [Vec3](/vext/ref/shared/class/vec3)        |             |
| coverPose              | [AntPoseEnum](AntPoseEnum)               |             |
| waitTime               | number                                   |             |
| peekOut                | [CoverPeekType](CoverPeekType)           |             |
| worldAngle             | number                                   |             |
| offsetLength           | number                                   |             |
| exitPose               | [AntPoseEnum](AntPoseEnum)               |             |
| exitAngle              | number                                   |             |
| distanceToNextWaypoint | number                                   |             |
| coverType              | [AntCoverEnum](AntCoverEnum)             |             |
| enterStrategy          | [CoverEnterStrategy](CoverEnterStrategy) |             |
| exitStyle              | [CoverExitStyle](CoverExitStyle)         |             |
| prepareFireType        | [CoverFireType](CoverFireType)           |             |
| forceExitCover         | bool                                     |             |
| useClientPosition      | bool                                     |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [AILocoCoverTaskData](AILocoCoverTaskData) | [Clone](#clone) |            |

### Clone

> [AILocoCoverTaskData](AILocoCoverTaskData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
