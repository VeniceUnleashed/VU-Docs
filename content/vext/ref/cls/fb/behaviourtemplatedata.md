---
title: BehaviourTemplateData (Frostbite Container)
---
### Base Classes

[GameBehaviourTemplateData](GameBehaviourTemplateData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                          |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| BehaviourTemplateData()                                                             | Create a new instance of this container type.                                                                                        |
| BehaviourTemplateData(BehaviourTemplateData other)                                  | Create a reference copy of an instance of the same type.                                                                             |
| BehaviourTemplateData([GameBehaviourTemplateData](GameBehaviourTemplateData) other) | Upcast an instance of type [GameBehaviourTemplateData](GameBehaviourTemplateData) to [BehaviourTemplateData](BehaviourTemplateData). |
| BehaviourTemplateData([Asset](Asset) other)                                         | Upcast an instance of type [Asset](Asset) to [BehaviourTemplateData](BehaviourTemplateData).                                         |
| BehaviourTemplateData([DataContainer](/vext/ref/cls/shr/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [BehaviourTemplateData](BehaviourTemplateData).    |

## Properties

| Name                                | Type                                           | Description |
| ----------------------------------- | ---------------------------------------------- | ----------- |
| standProbability                    | number                                         |             |
| crouchProbability                   | number                                         |             |
| turnAgainstTargetDistance           | number                                         |             |
| investigateStopDelay                | number                                         |             |
| explosiveObjectChance               | number                                         |             |
| minAttackBursts                     | number                                         |             |
| maxAttackBursts                     | number                                         |             |
| attackUrgencyModifier               | number                                         |             |
| altAttackProbability                | number                                         |             |
| readinessReactionTimeMultiplier     | number                                         |             |
| fireBlindOverBurstCount             | [UIntRange](UIntRange)                         |             |
| closeRangeAccuracyDistanceOverride  | number                                         |             |
| meleeRange                          | number                                         |             |
| meleeMaxTime                        | number                                         |             |
| meleeProbability                    | number                                         |             |
| coverSwitchTime                     | [FloatRangeDefaultZero](FloatRangeDefaultZero) |             |
| fireStyleTimeout                    | number                                         |             |
| fireLeanChance                      | number                                         |             |
| fireLeanBurstCount                  | [UIntRange](UIntRange)                         |             |
| fireStepOutChance                   | number                                         |             |
| fireStepOutBurstCount               | [UIntRange](UIntRange)                         |             |
| fireStepOutSlowChance               | number                                         |             |
| fireStepOutSlowBurstCount           | [UIntRange](UIntRange)                         |             |
| fireStepOutUrgentChance             | number                                         |             |
| fireStepOutUrgentBurstCount         | [UIntRange](UIntRange)                         |             |
| fireStepOutFireFromHipChance        | number                                         |             |
| fireStepOutFireFromHipBurstCount    | [UIntRange](UIntRange)                         |             |
| fireStepOutStandToCrouchChance      | number                                         |             |
| fireStepOutStandToCrouchBurstCount  | [UIntRange](UIntRange)                         |             |
| alwaysInFirePose                    | [CoverFireType](CoverFireType)                 |             |
| fireGrenadeStepOutChance            | number                                         |             |
| fireGrenadeStepOutBurstCount        | [UIntRange](UIntRange)                         |             |
| fireOverChance                      | number                                         |             |
| fireOverBurstCount                  | [UIntRange](UIntRange)                         |             |
| fireBlindOutChance                  | number                                         |             |
| fireBlindOutBurstCount              | [UIntRange](UIntRange)                         |             |
| fireBlindOverChance                 | number                                         |             |
| suppressingBurstCount               | number                                         |             |
| fireGrenadeBlindOverChance          | number                                         |             |
| fireGrenadeBlindOverBurstCount      | [UIntRange](UIntRange)                         |             |
| fireLmgChance                       | number                                         |             |
| fireLmgBurstCount                   | [UIntRange](UIntRange)                         |             |
| shotAtFireGrenadeBlindOverChance    | number                                         |             |
| suppressingBurstCountMin            | number                                         |             |
| suppressingBurstCountMax            | number                                         |             |
| coverWaitTime                       | [FloatRange](FloatRange)                       |             |
| maxAngleDiffForBlindFire            | number                                         |             |
| strafeToCoverProbablity             | number                                         |             |
| maxSuppressTime                     | number                                         |             |
| investigateVisualTestDist           | number                                         |             |
| alwaysStrafeToCoversWithinDistance  | number                                         |             |
| chargeSurpriseVelocity              | number                                         |             |
| chargeSurpriseNearDistance          | number                                         |             |
| chargeSurpriseFlankedDistance       | number                                         |             |
| shotAtFireBlindOutChance            | number                                         |             |
| shotAtFireBlindOverChance           | number                                         |             |
| accuracyIncreaseTime                | number                                         |             |
| targetStrengthFactor                | number                                         |             |
| reloadBelowPercent                  | number                                         |             |
| targetDistanceFactor                | number                                         |             |
| suppressIndirectProbability         | number                                         |             |
| targetDangerFactor                  | number                                         |             |
| targetIsAttackingFactor             | number                                         |             |
| accuracyModifierVsNonHumans         | number                                         |             |
| accuracyModifier                    | number                                         |             |
| soldierMovementVolumeOverride       | number                                         |             |
| alwaysUpdate                        | bool                                           |             |
| leaveVehicleOnSearchAndDestroyOrder | bool                                           |             |
| shouldFireThroughSmoke              | bool                                           |             |
| alwaysStrafeToFirstCover            | bool                                           |             |
| canMeleeFromScriptedCover           | bool                                           |             |
| alwaysStrafeToCoversBehindMe        | bool                                           |             |
| useShotAtSettings                   | bool                                           |             |
| stepBackIfBeingShot                 | bool                                           |             |
| disableMissileGravity               | bool                                           |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [BehaviourTemplateData](BehaviourTemplateData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [BehaviourTemplateData](BehaviourTemplateData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
