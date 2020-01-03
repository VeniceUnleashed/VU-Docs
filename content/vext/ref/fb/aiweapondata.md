---
title: AIWeaponData
---
### Base Classes

[GameAIWeaponData](/vext/ref/fb/gameaiweapondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| AIWeaponData()                                                          | Create a new instance of this container type.                                                                   |
| AIWeaponData(AIWeaponData other)                                        | Create a reference copy of an instance of the same type.                                                        |
| AIWeaponData([GameAIWeaponData](/vext/ref/fb/gameaiweapondata/) other)                | Upcast an instance of type [GameAIWeaponData](/vext/ref/fb/gameaiweapondata/) to [AIWeaponData](/vext/ref/fb/aiweapondata/).                |
| AIWeaponData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [AIWeaponData](/vext/ref/fb/aiweapondata/).                                      |
| AIWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AIWeaponData](/vext/ref/fb/aiweapondata/). |

## Properties

| Name                                | Type                                     | Description |
| ----------------------------------- | ---------------------------------------- | ----------- |
| strengths                           | [Strengths](/vext/ref/fb/strengths/)                   |             |
| maxBurstCoolDownTime                | number                                   |             |
| lostTargetBurstCoolDownModifier     | number                                   |             |
| finalAccuracyPercentage             | number                                   |             |
| aimTransitionFireDelay              | number                                   |             |
| minRange                            | number                                   |             |
| maxRange                            | number                                   |             |
| optimalRangePercentage              | number                                   |             |
| reloadBehavior                      | [ReloadBehavior](/vext/ref/fb/reloadbehavior/)         |             |
| minExtraReloadTime                  | number                                   |             |
| maxExtraReloadTime                  | number                                   |             |
| minBurstCoolDownTime                | number                                   |             |
| aimAngularVelocity                  | number                                   |             |
| innerInaccurateDistance             | number                                   |             |
| angleToTargetSnap                   | number                                   |             |
| sweepDistance                       | number                                   |             |
| sweepTime                           | number                                   |             |
| waitTimeBeforeFire                  | number                                   |             |
| burstLimitNear                      | [BurstLimit](/vext/ref/fb/burstlimit/)                 |             |
| burstLimitFar                       | [BurstLimit](/vext/ref/fb/burstlimit/)                 |             |
| startAccuracyPercentage             | number                                   |             |
| minimumAccuracyBeforeFiring         | number                                   |             |
| outerInaccurateDistance             | number                                   |             |
| additionalMinimumAccuracyAtMinRange | number                                   |             |
| gravityModifier                     | number                                   |             |
| sweepType                           | [SweepSelectionType](/vext/ref/fb/sweepselectiontype/) |             |
| aimOrigin                           | [AimOrigin](/vext/ref/fb/aimorigin/)                   |             |
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
| [AIWeaponData](/vext/ref/fb/aiweapondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AIWeaponData](/vext/ref/fb/aiweapondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
