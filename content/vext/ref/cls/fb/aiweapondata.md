---
title: AIWeaponData (Frostbite Container)
---
### Base Classes

[GameAIWeaponData](GameAIWeaponData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| AIWeaponData()                                                          | Create a new instance of this container type.                                                                   |
| AIWeaponData(AIWeaponData other)                                        | Create a reference copy of an instance of the same type.                                                        |
| AIWeaponData([GameAIWeaponData](GameAIWeaponData) other)                | Upcast an instance of type [GameAIWeaponData](GameAIWeaponData) to [AIWeaponData](AIWeaponData).                |
| AIWeaponData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [AIWeaponData](AIWeaponData).                                      |
| AIWeaponData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AIWeaponData](AIWeaponData). |

## Properties

| Name                                | Type                                     | Description |
| ----------------------------------- | ---------------------------------------- | ----------- |
| strengths                           | [Strengths](Strengths)                   |             |
| maxBurstCoolDownTime                | number                                   |             |
| lostTargetBurstCoolDownModifier     | number                                   |             |
| finalAccuracyPercentage             | number                                   |             |
| aimTransitionFireDelay              | number                                   |             |
| minRange                            | number                                   |             |
| maxRange                            | number                                   |             |
| optimalRangePercentage              | number                                   |             |
| reloadBehavior                      | [ReloadBehavior](ReloadBehavior)         |             |
| minExtraReloadTime                  | number                                   |             |
| maxExtraReloadTime                  | number                                   |             |
| minBurstCoolDownTime                | number                                   |             |
| aimAngularVelocity                  | number                                   |             |
| innerInaccurateDistance             | number                                   |             |
| angleToTargetSnap                   | number                                   |             |
| sweepDistance                       | number                                   |             |
| sweepTime                           | number                                   |             |
| waitTimeBeforeFire                  | number                                   |             |
| burstLimitNear                      | [BurstLimit](BurstLimit)                 |             |
| burstLimitFar                       | [BurstLimit](BurstLimit)                 |             |
| startAccuracyPercentage             | number                                   |             |
| minimumAccuracyBeforeFiring         | number                                   |             |
| outerInaccurateDistance             | number                                   |             |
| additionalMinimumAccuracyAtMinRange | number                                   |             |
| gravityModifier                     | number                                   |             |
| sweepType                           | [SweepSelectionType](SweepSelectionType) |             |
| aimOrigin                           | [AimOrigin](AimOrigin)                   |             |
| useZoom                             | bool                                     |             |
| allowedAgainstImmortals             | bool                                     |             |
| aimWhileReloading                   | bool                                     |             |
| aimHighIndirectPath                 | bool                                     |             |
| indirect                            | bool                                     |             |
| isMelee                             | bool                                     |             |
| sweepFirstAttack                    | bool                                     |             |
| isBlindFireAllowed                  | bool                                     |             |
| canAltAttack                        | bool                                     |             |
| isStandStill                        | bool                                     |             |
| canSuppress                         | bool                                     |             |
| useFromCover                        | bool                                     |             |
| inaccuracyFollowsTarget             | bool                                     |             |
| useInaccuracyAtCloseRange           | bool                                     |             |
| disableWeaponSway                   | bool                                     |             |
| isAiAllowed                         | bool                                     |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [AIWeaponData](AIWeaponData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AIWeaponData](AIWeaponData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
