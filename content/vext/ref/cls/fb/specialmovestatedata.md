---
title: SpecialMoveStateData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                      | Description                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| SpecialMoveStateData()                           | Create a new instance of this structure type.            |
| SpecialMoveStateData(SpecialMoveStateData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                             | Type                                                             | Description |
| -------------------------------- | ---------------------------------------------------------------- | ----------- |
| minHeightScale                   | number                                                           |             |
| optimumDistanceFromObject        | number                                                           |             |
| optimumHeightOfObject            | number                                                           |             |
| optimumLengthOfObject            | number                                                           |             |
| maxDistanceScale                 | number                                                           |             |
| minDistanceScale                 | number                                                           |             |
| maxHeightScale                   | number                                                           |             |
| motionPoints                     | [SpecialMoveInterpolatedPoint](SpecialMoveInterpolatedPoint)\[\] |             |
| maxObjectLengthScale             | number                                                           |             |
| minObjectLengthScale             | number                                                           |             |
| exitAnimationDrivenStateVelocity | number                                                           |             |
| resetPose                        | [SpecialMovesPoseType](SpecialMovesPoseType)                     |             |
| overridePose                     | [SpecialMovesPoseType](SpecialMovesPoseType)                     |             |
| gravityPoints                    | [SpecialMoveInterpolatedPoint](SpecialMoveInterpolatedPoint)\[\] |             |
| keepInitialSoldierDirection      | bool                                                             |             |
| scaleWithDistanceToObject        | bool                                                             |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [SpecialMoveStateData](SpecialMoveStateData) | [Clone](#clone) |            |

### Clone

> [SpecialMoveStateData](SpecialMoveStateData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
