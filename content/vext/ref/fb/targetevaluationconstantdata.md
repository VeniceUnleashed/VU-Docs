---
title: TargetEvaluationConstantData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[TargetEvaluationConstantData](#constructor-0)**() |
| **[TargetEvaluationConstantData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[TargetEvaluationConstantData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[TargetEvaluationConstantData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "maxBattleStrength" >}} | float |
| {{< prop "defaultHumanTargetPreference" >}} | float |
| {{< prop "otherSquadAttackerFactorUsage" >}} | float |
| {{< prop "targetFlipFactorUsage" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "TargetEvaluationConstantData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### TargetEvaluationConstantData {#constructor-0}

> **TargetEvaluationConstantData**()

Creates a new [TargetEvaluationConstantData](/vext/ref/fb/targetevaluationconstantdata) frostbite instance.

### TargetEvaluationConstantData {#constructor-1}

> **TargetEvaluationConstantData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [TargetEvaluationConstantData](/vext/ref/fb/targetevaluationconstantdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### TargetEvaluationConstantData {#constructor-2}

> **TargetEvaluationConstantData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [TargetEvaluationConstantData](/vext/ref/fb/targetevaluationconstantdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [TargetEvaluationConstantData](/vext/ref/fb/targetevaluationconstantdata). |

### TargetEvaluationConstantData {#constructor-3}

> **TargetEvaluationConstantData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [TargetEvaluationConstantData](/vext/ref/fb/targetevaluationconstantdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [TargetEvaluationConstantData](/vext/ref/fb/targetevaluationconstantdata). |

## Properties

### {{% prop-heading "maxBattleStrength" %}}

> **float**

### {{% prop-heading "defaultHumanTargetPreference" %}}

> **float**

### {{% prop-heading "otherSquadAttackerFactorUsage" %}}

> **float**

### {{% prop-heading "targetFlipFactorUsage" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [TargetEvaluationConstantData](/vext/ref/fb/targetevaluationconstantdata) type.

