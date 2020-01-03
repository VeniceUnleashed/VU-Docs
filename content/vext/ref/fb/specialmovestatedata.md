---
title: SpecialMoveStateData
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
| motionPoints                     | [SpecialMoveInterpolatedPoint](/vext/ref/fb/specialmoveinterpolatedpoint/)\[\] |             |
| maxObjectLengthScale             | number                                                           |             |
| minObjectLengthScale             | number                                                           |             |
| exitAnimationDrivenStateVelocity | number                                                           |             |
| resetPose                        | [SpecialMovesPoseType](/vext/ref/fb/specialmovesposetype/)                     |             |
| overridePose                     | [SpecialMovesPoseType](/vext/ref/fb/specialmovesposetype/)                     |             |
| gravityPoints                    | [SpecialMoveInterpolatedPoint](/vext/ref/fb/specialmoveinterpolatedpoint/)\[\] |             |
| keepInitialSoldierDirection      | bool                                                             |             |
| scaleWithDistanceToObject        | bool                                                             |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata/) | [Clone](#clone) |            |

### Clone

> [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
