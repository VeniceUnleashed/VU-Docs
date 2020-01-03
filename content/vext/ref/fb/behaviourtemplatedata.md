---
title: BehaviourTemplateData
---
### Base Classes

[GameBehaviourTemplateData](/vext/ref/fb/gamebehaviourtemplatedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                          |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| BehaviourTemplateData()                                                             | Create a new instance of this container type.                                                                                        |
| BehaviourTemplateData(BehaviourTemplateData other)                                  | Create a reference copy of an instance of the same type.                                                                             |
| BehaviourTemplateData([GameBehaviourTemplateData](/vext/ref/fb/gamebehaviourtemplatedata/) other) | Upcast an instance of type [GameBehaviourTemplateData](/vext/ref/fb/gamebehaviourtemplatedata/) to [BehaviourTemplateData](/vext/ref/fb/behaviourtemplatedata/). |
| BehaviourTemplateData([Asset](/vext/ref/fb/asset/) other)                                         | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [BehaviourTemplateData](/vext/ref/fb/behaviourtemplatedata/).                                         |
| BehaviourTemplateData([DataContainer](/vext/ref/shared/class/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BehaviourTemplateData](/vext/ref/fb/behaviourtemplatedata/).    |

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
| fireBlindOverBurstCount             | [UIntRange](/vext/ref/fb/uintrange/)                         |             |
| closeRangeAccuracyDistanceOverride  | number                                         |             |
| meleeRange                          | number                                         |             |
| meleeMaxTime                        | number                                         |             |
| meleeProbability                    | number                                         |             |
| coverSwitchTime                     | [FloatRangeDefaultZero](/vext/ref/fb/floatrangedefaultzero/) |             |
| fireStyleTimeout                    | number                                         |             |
| fireLeanChance                      | number                                         |             |
| fireLeanBurstCount                  | [UIntRange](/vext/ref/fb/uintrange/)                         |             |
| fireStepOutChance                   | number                                         |             |
| fireStepOutBurstCount               | [UIntRange](/vext/ref/fb/uintrange/)                         |             |
| fireStepOutSlowChance               | number                                         |             |
| fireStepOutSlowBurstCount           | [UIntRange](/vext/ref/fb/uintrange/)                         |             |
| fireStepOutUrgentChance             | number                                         |             |
| fireStepOutUrgentBurstCount         | [UIntRange](/vext/ref/fb/uintrange/)                         |             |
| fireStepOutFireFromHipChance        | number                                         |             |
| fireStepOutFireFromHipBurstCount    | [UIntRange](/vext/ref/fb/uintrange/)                         |             |
| fireStepOutStandToCrouchChance      | number                                         |             |
| fireStepOutStandToCrouchBurstCount  | [UIntRange](/vext/ref/fb/uintrange/)                         |             |
| alwaysInFirePose                    | [CoverFireType](/vext/ref/fb/coverfiretype/)                 |             |
| fireGrenadeStepOutChance            | number                                         |             |
| fireGrenadeStepOutBurstCount        | [UIntRange](/vext/ref/fb/uintrange/)                         |             |
| fireOverChance                      | number                                         |             |
| fireOverBurstCount                  | [UIntRange](/vext/ref/fb/uintrange/)                         |             |
| fireBlindOutChance                  | number                                         |             |
| fireBlindOutBurstCount              | [UIntRange](/vext/ref/fb/uintrange/)                         |             |
| fireBlindOverChance                 | number                                         |             |
| suppressingBurstCount               | number                                         |             |
| fireGrenadeBlindOverChance          | number                                         |             |
| fireGrenadeBlindOverBurstCount      | [UIntRange](/vext/ref/fb/uintrange/)                         |             |
| fireLmgChance                       | number                                         |             |
| fireLmgBurstCount                   | [UIntRange](/vext/ref/fb/uintrange/)                         |             |
| shotAtFireGrenadeBlindOverChance    | number                                         |             |
| suppressingBurstCountMin            | number                                         |             |
| suppressingBurstCountMax            | number                                         |             |
| coverWaitTime                       | [FloatRange](/vext/ref/fb/floatrange/)                       |             |
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
| [BehaviourTemplateData](/vext/ref/fb/behaviourtemplatedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BehaviourTemplateData](/vext/ref/fb/behaviourtemplatedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
