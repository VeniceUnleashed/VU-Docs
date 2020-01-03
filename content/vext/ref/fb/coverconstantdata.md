---
title: CoverConstantData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| CoverConstantData()                                                          | Create a new instance of this container type.                                                                             |
| CoverConstantData(CoverConstantData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| CoverConstantData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [CoverConstantData](/vext/ref/fb/coverconstantdata/).                                      |
| CoverConstantData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CoverConstantData](/vext/ref/fb/coverconstantdata/). |

## Properties

| Name                                  | Type                                         | Description |
| ------------------------------------- | -------------------------------------------- | ----------- |
| slotSize                              | number                                       |             |
| slotSpacing                           | number                                       |             |
| slotEdgeDistance                      | number                                       |             |
| slotBlockedEdgeDistance               | number                                       |             |
| minimumOpenCoverWidth                 | number                                       |             |
| proneHeight                           | number                                       |             |
| crouchHeight                          | number                                       |             |
| mediumHeight                          | number                                       |             |
| standHeight                           | number                                       |             |
| maxCoversInMemory                     | number                                       |             |
| searchRadius                          | number                                       |             |
| proneCoverModifier                    | number                                       |             |
| crouchCoverModifier                   | number                                       |             |
| mediumCoverModifier                   | number                                       |             |
| standCoverModifier                    | number                                       |             |
| intermediateCoverSlotModifier         | number                                       |             |
| distanceEvaluationWeight              | number                                       |             |
| enemiesEvaluationWeight               | number                                       |             |
| attackPositionEvaluationWeight        | number                                       |             |
| optimalWeaponDistanceEvaluationWeight | number                                       |             |
| dislikePreviousCoverWeight            | number                                       |             |
| maxHeightDifference                   | number                                       |             |
| switchCoverUrgencyThreshold           | number                                       |             |
| extraCoverSize                        | number                                       |             |
| reevaluationTime                      | number                                       |             |
| coverSelectionMethod                  | [CoverSelectionMethod](/vext/ref/fb/coverselectionmethod/) |             |
| threatRadius                          | number                                       |             |
| inCoverDistance                       | number                                       |             |
| minAttackableEnemyDistance            | number                                       |             |
| coverFailIgnoreTime                   | number                                       |             |
| startMeleeFromCoverDistance           | number                                       |             |
| continueMeleeFromCoverDistance        | number                                       |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [CoverConstantData](/vext/ref/fb/coverconstantdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CoverConstantData](/vext/ref/fb/coverconstantdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
