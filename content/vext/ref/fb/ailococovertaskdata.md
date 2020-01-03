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
| coverPose              | [AntPoseEnum](/vext/ref/fb/antposeenum/)               |             |
| waitTime               | number                                   |             |
| peekOut                | [CoverPeekType](/vext/ref/fb/coverpeektype/)           |             |
| worldAngle             | number                                   |             |
| offsetLength           | number                                   |             |
| exitPose               | [AntPoseEnum](/vext/ref/fb/antposeenum/)               |             |
| exitAngle              | number                                   |             |
| distanceToNextWaypoint | number                                   |             |
| coverType              | [AntCoverEnum](/vext/ref/fb/antcoverenum/)             |             |
| enterStrategy          | [CoverEnterStrategy](/vext/ref/fb/coverenterstrategy/) |             |
| exitStyle              | [CoverExitStyle](/vext/ref/fb/coverexitstyle/)         |             |
| prepareFireType        | [CoverFireType](/vext/ref/fb/coverfiretype/)           |             |
| forceExitCover         | bool                                     |             |
| useClientPosition      | bool                                     |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [AILocoCoverTaskData](/vext/ref/fb/ailococovertaskdata/) | [Clone](#clone) |            |

### Clone

> [AILocoCoverTaskData](/vext/ref/fb/ailococovertaskdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
