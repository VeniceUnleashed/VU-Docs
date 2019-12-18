---
title: PoseTransitionTime (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                  | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| PoseTransitionTime()                         | Create a new instance of this structure type.            |
| PoseTransitionTime(PoseTransitionTime other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type                                   | Description |
| -------------- | -------------------------------------- | ----------- |
| toPose         | [CharacterPoseType](CharacterPoseType) |             |
| transitionTime | number                                 |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [PoseTransitionTime](PoseTransitionTime) | [Clone](#clone) |            |

### Clone

> [PoseTransitionTime](PoseTransitionTime) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
