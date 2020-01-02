---
title: AILocoBaseTaskData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                  | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| AILocoBaseTaskData()                         | Create a new instance of this structure type.            |
| AILocoBaseTaskData(AILocoBaseTaskData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                         | Type                                           | Description |
| ---------------------------- | ---------------------------------------------- | ----------- |
| poseChangeMovingTowards      | [AntPoseEnum](AntPoseEnum)                     |             |
| attentionChangeMovingTowards | [AntAttentionStateEnum](AntAttentionStateEnum) |             |
| speedChangeMovingTowards     | [AntSpeedLevel](AntSpeedLevel)                 |             |
| poseChange                   | [AntPoseEnum](AntPoseEnum)                     |             |
| attentionStateChange         | [AntAttentionStateEnum](AntAttentionStateEnum) |             |
| speedLevelChange             | [AntSpeedLevel](AntSpeedLevel)                 |             |
| radius                       | number                                         |             |
| isScripted                   | bool                                           |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [AILocoBaseTaskData](AILocoBaseTaskData) | [Clone](#clone) |            |

### Clone

> [AILocoBaseTaskData](AILocoBaseTaskData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
