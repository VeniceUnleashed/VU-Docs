---
title: AutoAimData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                    | Description                                              |
| ------------------------------ | -------------------------------------------------------- |
| AutoAimData()                  | Create a new instance of this structure type.            |
| AutoAimData(AutoAimData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                   | Type                                   | Description |
| ---------------------- | -------------------------------------- | ----------- |
| autoAimOuterBoxOffset  | [Vec3](/vext/ref/shared/class/vec3)      |             |
| autoAimOuterBoxExtends | [Vec3](/vext/ref/shared/class/vec3)      |             |
| autoAimInnerBoxOffset  | [Vec3](/vext/ref/shared/class/vec3)      |             |
| autoAimInnerBoxExtends | [Vec3](/vext/ref/shared/class/vec3)      |             |
| poseType               | [CharacterPoseType](CharacterPoseType) |             |

## Methods

| Type                       | Name            | Parameters |
| -------------------------- | --------------- | ---------- |
| [AutoAimData](AutoAimData) | [Clone](#clone) |            |

### Clone

> [AutoAimData](AutoAimData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
