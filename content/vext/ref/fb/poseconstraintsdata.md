---
title: PoseConstraintsData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| PoseConstraintsData()                          | Create a new instance of this structure type.            |
| PoseConstraintsData(PoseConstraintsData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| standPose  | bool |             |
| crouchPose | bool |             |
| pronePose  | bool |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [PoseConstraintsData](PoseConstraintsData) | [Clone](#clone) |            |

### Clone

> [PoseConstraintsData](PoseConstraintsData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
