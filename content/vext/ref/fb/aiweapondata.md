---
title: AIWeaponData
---

Inherits from 
[GameAIWeaponData](/vext/ref/fb/gameaiweapondata)

## Summary
### Constructors
| |
| ----------- |
| **[AIWeaponData](#constructor-0)**() |
| **[AIWeaponData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AIWeaponData](#constructor-2)**(other: [GameAIWeaponData](/vext/ref/fb/gameaiweapondata)) |
| **[AIWeaponData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[AIWeaponData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "strengths" >}} | [Strengths](/vext/ref/fb/strengths) |
| {{< prop "maxBurstCoolDownTime" >}} | float |
| {{< prop "lostTargetBurstCoolDownModifier" >}} | float |
| {{< prop "finalAccuracyPercentage" >}} | float |
| {{< prop "aimTransitionFireDelay" >}} | float |
| {{< prop "minRange" >}} | float |
| {{< prop "maxRange" >}} | float |
| {{< prop "optimalRangePercentage" >}} | float |
| {{< prop "reloadBehavior" >}} | [ReloadBehavior](/vext/ref/fb/reloadbehavior) |
| {{< prop "minExtraReloadTime" >}} | float |
| {{< prop "maxExtraReloadTime" >}} | float |
| {{< prop "minBurstCoolDownTime" >}} | float |
| {{< prop "aimAngularVelocity" >}} | float |
| {{< prop "innerInaccurateDistance" >}} | float |
| {{< prop "angleToTargetSnap" >}} | float |
| {{< prop "sweepDistance" >}} | float |
| {{< prop "sweepTime" >}} | float |
| {{< prop "waitTimeBeforeFire" >}} | float |
| {{< prop "burstLimitNear" >}} | [BurstLimit](/vext/ref/fb/burstlimit) |
| {{< prop "burstLimitFar" >}} | [BurstLimit](/vext/ref/fb/burstlimit) |
| {{< prop "startAccuracyPercentage" >}} | float |
| {{< prop "minimumAccuracyBeforeFiring" >}} | float |
| {{< prop "outerInaccurateDistance" >}} | float |
| {{< prop "additionalMinimumAccuracyAtMinRange" >}} | float |
| {{< prop "gravityModifier" >}} | float |
| {{< prop "sweepType" >}} | [SweepSelectionType](/vext/ref/fb/sweepselectiontype) |
| {{< prop "aimOrigin" >}} | [AimOrigin](/vext/ref/fb/aimorigin) |
| {{< prop "useZoom" >}} | bool |
| {{< prop "allowedAgainstImmortals" >}} | bool |
| {{< prop "aimWhileReloading" >}} | bool |
| {{< prop "aimHighIndirectPath" >}} | bool |
| {{< prop "indirect" >}} | bool |
| {{< prop "isMelee" >}} | bool |
| {{< prop "sweepFirstAttack" >}} | bool |
| {{< prop "isBlindFireAllowed" >}} | bool |
| {{< prop "canAltAttack" >}} | bool |
| {{< prop "isStandStill" >}} | bool |
| {{< prop "canSuppress" >}} | bool |
| {{< prop "useFromCover" >}} | bool |
| {{< prop "inaccuracyFollowsTarget" >}} | bool |
| {{< prop "useInaccuracyAtCloseRange" >}} | bool |
| {{< prop "disableWeaponSway" >}} | bool |
| {{< prop "isAiAllowed" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AIWeaponData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AIWeaponData {#constructor-0}
> **AIWeaponData**()

Creates a new [AIWeaponData](/vext/ref/fb/aiweapondata) frostbite instance.

### AIWeaponData {#constructor-1}
> **AIWeaponData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AIWeaponData](/vext/ref/fb/aiweapondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AIWeaponData {#constructor-2}
> **AIWeaponData**(other: [GameAIWeaponData](/vext/ref/fb/gameaiweapondata))

Casts an instance of type [GameAIWeaponData](/vext/ref/fb/gameaiweapondata) to [AIWeaponData](/vext/ref/fb/aiweapondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameAIWeaponData](/vext/ref/fb/gameaiweapondata) | The instance to cast to [AIWeaponData](/vext/ref/fb/aiweapondata). |

### AIWeaponData {#constructor-3}
> **AIWeaponData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [AIWeaponData](/vext/ref/fb/aiweapondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [AIWeaponData](/vext/ref/fb/aiweapondata). |

### AIWeaponData {#constructor-4}
> **AIWeaponData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AIWeaponData](/vext/ref/fb/aiweapondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AIWeaponData](/vext/ref/fb/aiweapondata). |

## Properties
### {{% prop-heading "strengths" %}}
> **[Strengths](/vext/ref/fb/strengths)**

### {{% prop-heading "maxBurstCoolDownTime" %}}
> **float**

### {{% prop-heading "lostTargetBurstCoolDownModifier" %}}
> **float**

### {{% prop-heading "finalAccuracyPercentage" %}}
> **float**

### {{% prop-heading "aimTransitionFireDelay" %}}
> **float**

### {{% prop-heading "minRange" %}}
> **float**

### {{% prop-heading "maxRange" %}}
> **float**

### {{% prop-heading "optimalRangePercentage" %}}
> **float**

### {{% prop-heading "reloadBehavior" %}}
> **[ReloadBehavior](/vext/ref/fb/reloadbehavior)**

### {{% prop-heading "minExtraReloadTime" %}}
> **float**

### {{% prop-heading "maxExtraReloadTime" %}}
> **float**

### {{% prop-heading "minBurstCoolDownTime" %}}
> **float**

### {{% prop-heading "aimAngularVelocity" %}}
> **float**

### {{% prop-heading "innerInaccurateDistance" %}}
> **float**

### {{% prop-heading "angleToTargetSnap" %}}
> **float**

### {{% prop-heading "sweepDistance" %}}
> **float**

### {{% prop-heading "sweepTime" %}}
> **float**

### {{% prop-heading "waitTimeBeforeFire" %}}
> **float**

### {{% prop-heading "burstLimitNear" %}}
> **[BurstLimit](/vext/ref/fb/burstlimit)**

### {{% prop-heading "burstLimitFar" %}}
> **[BurstLimit](/vext/ref/fb/burstlimit)**

### {{% prop-heading "startAccuracyPercentage" %}}
> **float**

### {{% prop-heading "minimumAccuracyBeforeFiring" %}}
> **float**

### {{% prop-heading "outerInaccurateDistance" %}}
> **float**

### {{% prop-heading "additionalMinimumAccuracyAtMinRange" %}}
> **float**

### {{% prop-heading "gravityModifier" %}}
> **float**

### {{% prop-heading "sweepType" %}}
> **[SweepSelectionType](/vext/ref/fb/sweepselectiontype)**

### {{% prop-heading "aimOrigin" %}}
> **[AimOrigin](/vext/ref/fb/aimorigin)**

### {{% prop-heading "useZoom" %}}
> **bool**

### {{% prop-heading "allowedAgainstImmortals" %}}
> **bool**

### {{% prop-heading "aimWhileReloading" %}}
> **bool**

### {{% prop-heading "aimHighIndirectPath" %}}
> **bool**

### {{% prop-heading "indirect" %}}
> **bool**

### {{% prop-heading "isMelee" %}}
> **bool**

### {{% prop-heading "sweepFirstAttack" %}}
> **bool**

### {{% prop-heading "isBlindFireAllowed" %}}
> **bool**

### {{% prop-heading "canAltAttack" %}}
> **bool**

### {{% prop-heading "isStandStill" %}}
> **bool**

### {{% prop-heading "canSuppress" %}}
> **bool**

### {{% prop-heading "useFromCover" %}}
> **bool**

### {{% prop-heading "inaccuracyFollowsTarget" %}}
> **bool**

### {{% prop-heading "useInaccuracyAtCloseRange" %}}
> **bool**

### {{% prop-heading "disableWeaponSway" %}}
> **bool**

### {{% prop-heading "isAiAllowed" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AIWeaponData](/vext/ref/fb/aiweapondata) type.

