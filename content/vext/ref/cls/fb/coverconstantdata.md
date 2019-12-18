---
title: CoverConstantData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| CoverConstantData()                                                          | Create a new instance of this container type.                                                                             |
| CoverConstantData(CoverConstantData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| CoverConstantData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [CoverConstantData](CoverConstantData).                                      |
| CoverConstantData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CoverConstantData](CoverConstantData). |

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
| coverSelectionMethod                  | [CoverSelectionMethod](CoverSelectionMethod) |             |
| threatRadius                          | number                                       |             |
| inCoverDistance                       | number                                       |             |
| minAttackableEnemyDistance            | number                                       |             |
| coverFailIgnoreTime                   | number                                       |             |
| startMeleeFromCoverDistance           | number                                       |             |
| continueMeleeFromCoverDistance        | number                                       |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [CoverConstantData](CoverConstantData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CoverConstantData](CoverConstantData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
