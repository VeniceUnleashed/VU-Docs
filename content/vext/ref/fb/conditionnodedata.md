---
title: ConditionNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[ConditionNodeData](#constructor-0)**() |
| **[ConditionNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ConditionNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[ConditionNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "conditions" >}} | [ConditionGroup](/vext/ref/fb/conditiongroup)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ConditionNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ConditionNodeData {#constructor-0}

> **ConditionNodeData**()

Creates a new [ConditionNodeData](/vext/ref/fb/conditionnodedata) frostbite instance.

### ConditionNodeData {#constructor-1}

> **ConditionNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ConditionNodeData](/vext/ref/fb/conditionnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ConditionNodeData {#constructor-2}

> **ConditionNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [ConditionNodeData](/vext/ref/fb/conditionnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [ConditionNodeData](/vext/ref/fb/conditionnodedata). |

### ConditionNodeData {#constructor-3}

> **ConditionNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ConditionNodeData](/vext/ref/fb/conditionnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ConditionNodeData](/vext/ref/fb/conditionnodedata). |

## Properties

### {{% prop-heading "conditions" %}}

> **[ConditionGroup](/vext/ref/fb/conditiongroup)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ConditionNodeData](/vext/ref/fb/conditionnodedata) type.

