---
title: DecisionConstantData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[DecisionConstantData](#constructor-0)**() |
| **[DecisionConstantData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DecisionConstantData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[DecisionConstantData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "newEnemyDecideMaxDistance" >}} | float |
| {{< prop "allowEmergencyGoalInterrupt" >}} | bool |
| {{< prop "allowUninterruptibleBehaviours" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DecisionConstantData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DecisionConstantData {#constructor-0}

> **DecisionConstantData**()

Creates a new [DecisionConstantData](/vext/ref/fb/decisionconstantdata) frostbite instance.

### DecisionConstantData {#constructor-1}

> **DecisionConstantData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DecisionConstantData](/vext/ref/fb/decisionconstantdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DecisionConstantData {#constructor-2}

> **DecisionConstantData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [DecisionConstantData](/vext/ref/fb/decisionconstantdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [DecisionConstantData](/vext/ref/fb/decisionconstantdata). |

### DecisionConstantData {#constructor-3}

> **DecisionConstantData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DecisionConstantData](/vext/ref/fb/decisionconstantdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DecisionConstantData](/vext/ref/fb/decisionconstantdata). |

## Properties

### {{% prop-heading "newEnemyDecideMaxDistance" %}}

> **float**

### {{% prop-heading "allowEmergencyGoalInterrupt" %}}

> **bool**

### {{% prop-heading "allowUninterruptibleBehaviours" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DecisionConstantData](/vext/ref/fb/decisionconstantdata) type.

