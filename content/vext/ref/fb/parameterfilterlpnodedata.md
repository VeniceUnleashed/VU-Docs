---
title: ParameterFilterLpNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[ParameterFilterLpNodeData](#constructor-0)**() |
| **[ParameterFilterLpNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ParameterFilterLpNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[ParameterFilterLpNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "hz" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ParameterFilterLpNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ParameterFilterLpNodeData {#constructor-0}

> **ParameterFilterLpNodeData**()

Creates a new [ParameterFilterLpNodeData](/vext/ref/fb/parameterfilterlpnodedata) frostbite instance.

### ParameterFilterLpNodeData {#constructor-1}

> **ParameterFilterLpNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ParameterFilterLpNodeData](/vext/ref/fb/parameterfilterlpnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ParameterFilterLpNodeData {#constructor-2}

> **ParameterFilterLpNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [ParameterFilterLpNodeData](/vext/ref/fb/parameterfilterlpnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [ParameterFilterLpNodeData](/vext/ref/fb/parameterfilterlpnodedata). |

### ParameterFilterLpNodeData {#constructor-3}

> **ParameterFilterLpNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ParameterFilterLpNodeData](/vext/ref/fb/parameterfilterlpnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ParameterFilterLpNodeData](/vext/ref/fb/parameterfilterlpnodedata). |

## Properties

### {{% prop-heading "inValue" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "out" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "hz" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ParameterFilterLpNodeData](/vext/ref/fb/parameterfilterlpnodedata) type.

