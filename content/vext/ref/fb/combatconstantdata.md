---
title: CombatConstantData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| CombatConstantData()                                                          | Create a new instance of this container type.                                                                               |
| CombatConstantData(CombatConstantData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| CombatConstantData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [CombatConstantData](CombatConstantData).                                      |
| CombatConstantData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CombatConstantData](CombatConstantData). |

## Properties

| Name                          | Type   | Description |
| ----------------------------- | ------ | ----------- |
| poseTransitionFireDelay       | number |             |
| changePoseStopDelay           | number |             |
| allowCrouchFiringWaterLevel   | number |             |
| poseChangeLockoutTime         | number |             |
| explosionInterestRange        | number |             |
| explosiveObjectSearchRadius   | number |             |
| explosiveBlastMultiplier      | number |             |
| maxSuppressDistance           | number |             |
| maxSuppressorsRatio           | number |             |
| suppressOffsetXz              | number |             |
| suppressOffsetY               | number |             |
| suppressMinLOFDistance        | number |             |
| suppressMinLOFOffsetDistance  | number |             |
| investigateCoverSearchWidth   | number |             |
| investigateAroundTargetRadius | number |             |
| investigateFreeLookRadius     | number |             |
| investigatePauseTimeMin       | number |             |
| investigatePauseTimeMax       | number |             |
| avoidC4Time                   | number |             |
| standStillMinTime             | number |             |
| stationaryBailDistance        | number |             |
| precisionTimeout              | number |             |
| closeRangeAccuracyDistance    | number |             |
| fightFromPathRadius           | number |             |
| smokeRadius                   | number |             |
| smokeLifeTime                 | number |             |
| meleeCooldown                 | number |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [CombatConstantData](CombatConstantData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CombatConstantData](CombatConstantData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
