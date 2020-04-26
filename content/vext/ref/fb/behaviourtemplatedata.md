---
title: BehaviourTemplateData
---

Inherits from [GameBehaviourTemplateData](/vext/ref/fb/gamebehaviourtemplatedata)

## Summary

### Constructors

|  |
| --- |
| **[BehaviourTemplateData](#constructor-0)**() |
| **[BehaviourTemplateData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[BehaviourTemplateData](#constructor-2)**(other: [GameBehaviourTemplateData](/vext/ref/fb/gamebehaviourtemplatedata)) |
| **[BehaviourTemplateData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[BehaviourTemplateData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "standProbability" >}} | float |
| {{< prop "crouchProbability" >}} | float |
| {{< prop "turnAgainstTargetDistance" >}} | float |
| {{< prop "investigateStopDelay" >}} | float |
| {{< prop "explosiveObjectChance" >}} | float |
| {{< prop "minAttackBursts" >}} | int |
| {{< prop "maxAttackBursts" >}} | int |
| {{< prop "attackUrgencyModifier" >}} | float |
| {{< prop "altAttackProbability" >}} | float |
| {{< prop "readinessReactionTimeMultiplier" >}} | float |
| {{< prop "fireBlindOverBurstCount" >}} | [UIntRange](/vext/ref/fb/uintrange) |
| {{< prop "closeRangeAccuracyDistanceOverride" >}} | float |
| {{< prop "meleeRange" >}} | float |
| {{< prop "meleeMaxTime" >}} | float |
| {{< prop "meleeProbability" >}} | float |
| {{< prop "coverSwitchTime" >}} | [FloatRangeDefaultZero](/vext/ref/fb/floatrangedefaultzero) |
| {{< prop "fireStyleTimeout" >}} | float |
| {{< prop "fireLeanChance" >}} | float |
| {{< prop "fireLeanBurstCount" >}} | [UIntRange](/vext/ref/fb/uintrange) |
| {{< prop "fireStepOutChance" >}} | float |
| {{< prop "fireStepOutBurstCount" >}} | [UIntRange](/vext/ref/fb/uintrange) |
| {{< prop "fireStepOutSlowChance" >}} | float |
| {{< prop "fireStepOutSlowBurstCount" >}} | [UIntRange](/vext/ref/fb/uintrange) |
| {{< prop "fireStepOutUrgentChance" >}} | float |
| {{< prop "fireStepOutUrgentBurstCount" >}} | [UIntRange](/vext/ref/fb/uintrange) |
| {{< prop "fireStepOutFireFromHipChance" >}} | float |
| {{< prop "fireStepOutFireFromHipBurstCount" >}} | [UIntRange](/vext/ref/fb/uintrange) |
| {{< prop "fireStepOutStandToCrouchChance" >}} | float |
| {{< prop "fireStepOutStandToCrouchBurstCount" >}} | [UIntRange](/vext/ref/fb/uintrange) |
| {{< prop "alwaysInFirePose" >}} | [CoverFireType](/vext/ref/fb/coverfiretype) |
| {{< prop "fireGrenadeStepOutChance" >}} | float |
| {{< prop "fireGrenadeStepOutBurstCount" >}} | [UIntRange](/vext/ref/fb/uintrange) |
| {{< prop "fireOverChance" >}} | float |
| {{< prop "fireOverBurstCount" >}} | [UIntRange](/vext/ref/fb/uintrange) |
| {{< prop "fireBlindOutChance" >}} | float |
| {{< prop "fireBlindOutBurstCount" >}} | [UIntRange](/vext/ref/fb/uintrange) |
| {{< prop "fireBlindOverChance" >}} | float |
| {{< prop "suppressingBurstCount" >}} | int |
| {{< prop "fireGrenadeBlindOverChance" >}} | float |
| {{< prop "fireGrenadeBlindOverBurstCount" >}} | [UIntRange](/vext/ref/fb/uintrange) |
| {{< prop "fireLmgChance" >}} | float |
| {{< prop "fireLmgBurstCount" >}} | [UIntRange](/vext/ref/fb/uintrange) |
| {{< prop "shotAtFireGrenadeBlindOverChance" >}} | float |
| {{< prop "suppressingBurstCountMin" >}} | int |
| {{< prop "suppressingBurstCountMax" >}} | int |
| {{< prop "coverWaitTime" >}} | [FloatRange](/vext/ref/fb/floatrange) |
| {{< prop "maxAngleDiffForBlindFire" >}} | float |
| {{< prop "strafeToCoverProbablity" >}} | float |
| {{< prop "maxSuppressTime" >}} | float |
| {{< prop "investigateVisualTestDist" >}} | float |
| {{< prop "alwaysStrafeToCoversWithinDistance" >}} | float |
| {{< prop "chargeSurpriseVelocity" >}} | float |
| {{< prop "chargeSurpriseNearDistance" >}} | float |
| {{< prop "chargeSurpriseFlankedDistance" >}} | float |
| {{< prop "shotAtFireBlindOutChance" >}} | float |
| {{< prop "shotAtFireBlindOverChance" >}} | float |
| {{< prop "accuracyIncreaseTime" >}} | float |
| {{< prop "targetStrengthFactor" >}} | float |
| {{< prop "reloadBelowPercent" >}} | float |
| {{< prop "targetDistanceFactor" >}} | float |
| {{< prop "suppressIndirectProbability" >}} | float |
| {{< prop "targetDangerFactor" >}} | float |
| {{< prop "targetIsAttackingFactor" >}} | float |
| {{< prop "accuracyModifierVsNonHumans" >}} | float |
| {{< prop "accuracyModifier" >}} | float |
| {{< prop "soldierMovementVolumeOverride" >}} | float |
| {{< prop "alwaysUpdate" >}} | bool |
| {{< prop "leaveVehicleOnSearchAndDestroyOrder" >}} | bool |
| {{< prop "shouldFireThroughSmoke" >}} | bool |
| {{< prop "alwaysStrafeToFirstCover" >}} | bool |
| {{< prop "canMeleeFromScriptedCover" >}} | bool |
| {{< prop "alwaysStrafeToCoversBehindMe" >}} | bool |
| {{< prop "useShotAtSettings" >}} | bool |
| {{< prop "stepBackIfBeingShot" >}} | bool |
| {{< prop "disableMissileGravity" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BehaviourTemplateData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BehaviourTemplateData {#constructor-0}

> **BehaviourTemplateData**()

Creates a new [BehaviourTemplateData](/vext/ref/fb/behaviourtemplatedata) frostbite instance.

### BehaviourTemplateData {#constructor-1}

> **BehaviourTemplateData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BehaviourTemplateData](/vext/ref/fb/behaviourtemplatedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### BehaviourTemplateData {#constructor-2}

> **BehaviourTemplateData**(other: [GameBehaviourTemplateData](/vext/ref/fb/gamebehaviourtemplatedata))

Casts an instance of type [GameBehaviourTemplateData](/vext/ref/fb/gamebehaviourtemplatedata) to [BehaviourTemplateData](/vext/ref/fb/behaviourtemplatedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameBehaviourTemplateData](/vext/ref/fb/gamebehaviourtemplatedata) | The instance to cast to [BehaviourTemplateData](/vext/ref/fb/behaviourtemplatedata). |

### BehaviourTemplateData {#constructor-3}

> **BehaviourTemplateData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [BehaviourTemplateData](/vext/ref/fb/behaviourtemplatedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [BehaviourTemplateData](/vext/ref/fb/behaviourtemplatedata). |

### BehaviourTemplateData {#constructor-4}

> **BehaviourTemplateData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [BehaviourTemplateData](/vext/ref/fb/behaviourtemplatedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [BehaviourTemplateData](/vext/ref/fb/behaviourtemplatedata). |

## Properties

### {{% prop-heading "standProbability" %}}

> **float**

### {{% prop-heading "crouchProbability" %}}

> **float**

### {{% prop-heading "turnAgainstTargetDistance" %}}

> **float**

### {{% prop-heading "investigateStopDelay" %}}

> **float**

### {{% prop-heading "explosiveObjectChance" %}}

> **float**

### {{% prop-heading "minAttackBursts" %}}

> **int**

### {{% prop-heading "maxAttackBursts" %}}

> **int**

### {{% prop-heading "attackUrgencyModifier" %}}

> **float**

### {{% prop-heading "altAttackProbability" %}}

> **float**

### {{% prop-heading "readinessReactionTimeMultiplier" %}}

> **float**

### {{% prop-heading "fireBlindOverBurstCount" %}}

> **[UIntRange](/vext/ref/fb/uintrange)**

### {{% prop-heading "closeRangeAccuracyDistanceOverride" %}}

> **float**

### {{% prop-heading "meleeRange" %}}

> **float**

### {{% prop-heading "meleeMaxTime" %}}

> **float**

### {{% prop-heading "meleeProbability" %}}

> **float**

### {{% prop-heading "coverSwitchTime" %}}

> **[FloatRangeDefaultZero](/vext/ref/fb/floatrangedefaultzero)**

### {{% prop-heading "fireStyleTimeout" %}}

> **float**

### {{% prop-heading "fireLeanChance" %}}

> **float**

### {{% prop-heading "fireLeanBurstCount" %}}

> **[UIntRange](/vext/ref/fb/uintrange)**

### {{% prop-heading "fireStepOutChance" %}}

> **float**

### {{% prop-heading "fireStepOutBurstCount" %}}

> **[UIntRange](/vext/ref/fb/uintrange)**

### {{% prop-heading "fireStepOutSlowChance" %}}

> **float**

### {{% prop-heading "fireStepOutSlowBurstCount" %}}

> **[UIntRange](/vext/ref/fb/uintrange)**

### {{% prop-heading "fireStepOutUrgentChance" %}}

> **float**

### {{% prop-heading "fireStepOutUrgentBurstCount" %}}

> **[UIntRange](/vext/ref/fb/uintrange)**

### {{% prop-heading "fireStepOutFireFromHipChance" %}}

> **float**

### {{% prop-heading "fireStepOutFireFromHipBurstCount" %}}

> **[UIntRange](/vext/ref/fb/uintrange)**

### {{% prop-heading "fireStepOutStandToCrouchChance" %}}

> **float**

### {{% prop-heading "fireStepOutStandToCrouchBurstCount" %}}

> **[UIntRange](/vext/ref/fb/uintrange)**

### {{% prop-heading "alwaysInFirePose" %}}

> **[CoverFireType](/vext/ref/fb/coverfiretype)**

### {{% prop-heading "fireGrenadeStepOutChance" %}}

> **float**

### {{% prop-heading "fireGrenadeStepOutBurstCount" %}}

> **[UIntRange](/vext/ref/fb/uintrange)**

### {{% prop-heading "fireOverChance" %}}

> **float**

### {{% prop-heading "fireOverBurstCount" %}}

> **[UIntRange](/vext/ref/fb/uintrange)**

### {{% prop-heading "fireBlindOutChance" %}}

> **float**

### {{% prop-heading "fireBlindOutBurstCount" %}}

> **[UIntRange](/vext/ref/fb/uintrange)**

### {{% prop-heading "fireBlindOverChance" %}}

> **float**

### {{% prop-heading "suppressingBurstCount" %}}

> **int**

### {{% prop-heading "fireGrenadeBlindOverChance" %}}

> **float**

### {{% prop-heading "fireGrenadeBlindOverBurstCount" %}}

> **[UIntRange](/vext/ref/fb/uintrange)**

### {{% prop-heading "fireLmgChance" %}}

> **float**

### {{% prop-heading "fireLmgBurstCount" %}}

> **[UIntRange](/vext/ref/fb/uintrange)**

### {{% prop-heading "shotAtFireGrenadeBlindOverChance" %}}

> **float**

### {{% prop-heading "suppressingBurstCountMin" %}}

> **int**

### {{% prop-heading "suppressingBurstCountMax" %}}

> **int**

### {{% prop-heading "coverWaitTime" %}}

> **[FloatRange](/vext/ref/fb/floatrange)**

### {{% prop-heading "maxAngleDiffForBlindFire" %}}

> **float**

### {{% prop-heading "strafeToCoverProbablity" %}}

> **float**

### {{% prop-heading "maxSuppressTime" %}}

> **float**

### {{% prop-heading "investigateVisualTestDist" %}}

> **float**

### {{% prop-heading "alwaysStrafeToCoversWithinDistance" %}}

> **float**

### {{% prop-heading "chargeSurpriseVelocity" %}}

> **float**

### {{% prop-heading "chargeSurpriseNearDistance" %}}

> **float**

### {{% prop-heading "chargeSurpriseFlankedDistance" %}}

> **float**

### {{% prop-heading "shotAtFireBlindOutChance" %}}

> **float**

### {{% prop-heading "shotAtFireBlindOverChance" %}}

> **float**

### {{% prop-heading "accuracyIncreaseTime" %}}

> **float**

### {{% prop-heading "targetStrengthFactor" %}}

> **float**

### {{% prop-heading "reloadBelowPercent" %}}

> **float**

### {{% prop-heading "targetDistanceFactor" %}}

> **float**

### {{% prop-heading "suppressIndirectProbability" %}}

> **float**

### {{% prop-heading "targetDangerFactor" %}}

> **float**

### {{% prop-heading "targetIsAttackingFactor" %}}

> **float**

### {{% prop-heading "accuracyModifierVsNonHumans" %}}

> **float**

### {{% prop-heading "accuracyModifier" %}}

> **float**

### {{% prop-heading "soldierMovementVolumeOverride" %}}

> **float**

### {{% prop-heading "alwaysUpdate" %}}

> **bool**

### {{% prop-heading "leaveVehicleOnSearchAndDestroyOrder" %}}

> **bool**

### {{% prop-heading "shouldFireThroughSmoke" %}}

> **bool**

### {{% prop-heading "alwaysStrafeToFirstCover" %}}

> **bool**

### {{% prop-heading "canMeleeFromScriptedCover" %}}

> **bool**

### {{% prop-heading "alwaysStrafeToCoversBehindMe" %}}

> **bool**

### {{% prop-heading "useShotAtSettings" %}}

> **bool**

### {{% prop-heading "stepBackIfBeingShot" %}}

> **bool**

### {{% prop-heading "disableMissileGravity" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BehaviourTemplateData](/vext/ref/fb/behaviourtemplatedata) type.

