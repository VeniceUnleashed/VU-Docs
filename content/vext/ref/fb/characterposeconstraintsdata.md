---
title: CharacterPoseConstraintsData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                      | Description                                              |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| CharacterPoseConstraintsData()                                   | Create a new instance of this structure type.            |
| CharacterPoseConstraintsData(CharacterPoseConstraintsData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| standPose  | bool |             |
| crouchPose | bool |             |
| pronePose  | bool |             |

## Methods

| Type                                                         | Name            | Parameters |
| ------------------------------------------------------------ | --------------- | ---------- |
| [CharacterPoseConstraintsData](/vext/ref/fb/characterposeconstraintsdata/) | [Clone](#clone) |            |

### Clone

> [CharacterPoseConstraintsData](/vext/ref/fb/characterposeconstraintsdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
