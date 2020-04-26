---
title: ValueDebugNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[ValueDebugNodeData](#constructor-0)**() |
| **[ValueDebugNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ValueDebugNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[ValueDebugNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "values" >}} | [DebugValueInput](/vext/ref/fb/debugvalueinput)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ValueDebugNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ValueDebugNodeData {#constructor-0}

> **ValueDebugNodeData**()

Creates a new [ValueDebugNodeData](/vext/ref/fb/valuedebugnodedata) frostbite instance.

### ValueDebugNodeData {#constructor-1}

> **ValueDebugNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ValueDebugNodeData](/vext/ref/fb/valuedebugnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ValueDebugNodeData {#constructor-2}

> **ValueDebugNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [ValueDebugNodeData](/vext/ref/fb/valuedebugnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [ValueDebugNodeData](/vext/ref/fb/valuedebugnodedata). |

### ValueDebugNodeData {#constructor-3}

> **ValueDebugNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ValueDebugNodeData](/vext/ref/fb/valuedebugnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ValueDebugNodeData](/vext/ref/fb/valuedebugnodedata). |

## Properties

### {{% prop-heading "values" %}}

> **[DebugValueInput](/vext/ref/fb/debugvalueinput)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ValueDebugNodeData](/vext/ref/fb/valuedebugnodedata) type.

