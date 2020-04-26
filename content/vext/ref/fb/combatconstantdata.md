---
title: CombatConstantData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[CombatConstantData](#constructor-0)**() |
| **[CombatConstantData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CombatConstantData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[CombatConstantData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "poseTransitionFireDelay" >}} | float |
| {{< prop "changePoseStopDelay" >}} | float |
| {{< prop "allowCrouchFiringWaterLevel" >}} | float |
| {{< prop "poseChangeLockoutTime" >}} | float |
| {{< prop "explosionInterestRange" >}} | float |
| {{< prop "explosiveObjectSearchRadius" >}} | float |
| {{< prop "explosiveBlastMultiplier" >}} | float |
| {{< prop "maxSuppressDistance" >}} | float |
| {{< prop "maxSuppressorsRatio" >}} | float |
| {{< prop "suppressOffsetXz" >}} | float |
| {{< prop "suppressOffsetY" >}} | float |
| {{< prop "suppressMinLOFDistance" >}} | float |
| {{< prop "suppressMinLOFOffsetDistance" >}} | float |
| {{< prop "investigateCoverSearchWidth" >}} | float |
| {{< prop "investigateAroundTargetRadius" >}} | float |
| {{< prop "investigateFreeLookRadius" >}} | float |
| {{< prop "investigatePauseTimeMin" >}} | float |
| {{< prop "investigatePauseTimeMax" >}} | float |
| {{< prop "avoidC4Time" >}} | float |
| {{< prop "standStillMinTime" >}} | float |
| {{< prop "stationaryBailDistance" >}} | float |
| {{< prop "precisionTimeout" >}} | float |
| {{< prop "closeRangeAccuracyDistance" >}} | float |
| {{< prop "fightFromPathRadius" >}} | float |
| {{< prop "smokeRadius" >}} | float |
| {{< prop "smokeLifeTime" >}} | float |
| {{< prop "meleeCooldown" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CombatConstantData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CombatConstantData {#constructor-0}

> **CombatConstantData**()

Creates a new [CombatConstantData](/vext/ref/fb/combatconstantdata) frostbite instance.

### CombatConstantData {#constructor-1}

> **CombatConstantData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CombatConstantData](/vext/ref/fb/combatconstantdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CombatConstantData {#constructor-2}

> **CombatConstantData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [CombatConstantData](/vext/ref/fb/combatconstantdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [CombatConstantData](/vext/ref/fb/combatconstantdata). |

### CombatConstantData {#constructor-3}

> **CombatConstantData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CombatConstantData](/vext/ref/fb/combatconstantdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CombatConstantData](/vext/ref/fb/combatconstantdata). |

## Properties

### {{% prop-heading "poseTransitionFireDelay" %}}

> **float**

### {{% prop-heading "changePoseStopDelay" %}}

> **float**

### {{% prop-heading "allowCrouchFiringWaterLevel" %}}

> **float**

### {{% prop-heading "poseChangeLockoutTime" %}}

> **float**

### {{% prop-heading "explosionInterestRange" %}}

> **float**

### {{% prop-heading "explosiveObjectSearchRadius" %}}

> **float**

### {{% prop-heading "explosiveBlastMultiplier" %}}

> **float**

### {{% prop-heading "maxSuppressDistance" %}}

> **float**

### {{% prop-heading "maxSuppressorsRatio" %}}

> **float**

### {{% prop-heading "suppressOffsetXz" %}}

> **float**

### {{% prop-heading "suppressOffsetY" %}}

> **float**

### {{% prop-heading "suppressMinLOFDistance" %}}

> **float**

### {{% prop-heading "suppressMinLOFOffsetDistance" %}}

> **float**

### {{% prop-heading "investigateCoverSearchWidth" %}}

> **float**

### {{% prop-heading "investigateAroundTargetRadius" %}}

> **float**

### {{% prop-heading "investigateFreeLookRadius" %}}

> **float**

### {{% prop-heading "investigatePauseTimeMin" %}}

> **float**

### {{% prop-heading "investigatePauseTimeMax" %}}

> **float**

### {{% prop-heading "avoidC4Time" %}}

> **float**

### {{% prop-heading "standStillMinTime" %}}

> **float**

### {{% prop-heading "stationaryBailDistance" %}}

> **float**

### {{% prop-heading "precisionTimeout" %}}

> **float**

### {{% prop-heading "closeRangeAccuracyDistance" %}}

> **float**

### {{% prop-heading "fightFromPathRadius" %}}

> **float**

### {{% prop-heading "smokeRadius" %}}

> **float**

### {{% prop-heading "smokeLifeTime" %}}

> **float**

### {{% prop-heading "meleeCooldown" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CombatConstantData](/vext/ref/fb/combatconstantdata) type.

