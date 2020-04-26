---
title: DeltaNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[DeltaNodeData](#constructor-0)**() |
| **[DeltaNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DeltaNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[DeltaNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "deltas" >}} | [DeltaGroup](/vext/ref/fb/deltagroup)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DeltaNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DeltaNodeData {#constructor-0}

> **DeltaNodeData**()

Creates a new [DeltaNodeData](/vext/ref/fb/deltanodedata) frostbite instance.

### DeltaNodeData {#constructor-1}

> **DeltaNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DeltaNodeData](/vext/ref/fb/deltanodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DeltaNodeData {#constructor-2}

> **DeltaNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [DeltaNodeData](/vext/ref/fb/deltanodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [DeltaNodeData](/vext/ref/fb/deltanodedata). |

### DeltaNodeData {#constructor-3}

> **DeltaNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DeltaNodeData](/vext/ref/fb/deltanodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DeltaNodeData](/vext/ref/fb/deltanodedata). |

## Properties

### {{% prop-heading "deltas" %}}

> **[DeltaGroup](/vext/ref/fb/deltagroup)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DeltaNodeData](/vext/ref/fb/deltanodedata) type.

