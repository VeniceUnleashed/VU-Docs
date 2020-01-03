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
| poseChangeMovingTowards      | [AntPoseEnum](/vext/ref/fb/antposeenum/)                     |             |
| attentionChangeMovingTowards | [AntAttentionStateEnum](/vext/ref/fb/antattentionstateenum/) |             |
| speedChangeMovingTowards     | [AntSpeedLevel](/vext/ref/fb/antspeedlevel/)                 |             |
| poseChange                   | [AntPoseEnum](/vext/ref/fb/antposeenum/)                     |             |
| attentionStateChange         | [AntAttentionStateEnum](/vext/ref/fb/antattentionstateenum/) |             |
| speedLevelChange             | [AntSpeedLevel](/vext/ref/fb/antspeedlevel/)                 |             |
| radius                       | number                                         |             |
| isScripted                   | bool                                           |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [AILocoBaseTaskData](/vext/ref/fb/ailocobasetaskdata/) | [Clone](#clone) |            |

### Clone

> [AILocoBaseTaskData](/vext/ref/fb/ailocobasetaskdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
