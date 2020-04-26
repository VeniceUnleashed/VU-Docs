---
title: DeMuxNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[DeMuxNodeData](#constructor-0)**() |
| **[DeMuxNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DeMuxNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[DeMuxNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "outputs" >}} | [DeMuxOutput](/vext/ref/fb/demuxoutput)[] |
| {{< prop "trigger" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "value" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "wrapValue" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DeMuxNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DeMuxNodeData {#constructor-0}

> **DeMuxNodeData**()

Creates a new [DeMuxNodeData](/vext/ref/fb/demuxnodedata) frostbite instance.

### DeMuxNodeData {#constructor-1}

> **DeMuxNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DeMuxNodeData](/vext/ref/fb/demuxnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DeMuxNodeData {#constructor-2}

> **DeMuxNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [DeMuxNodeData](/vext/ref/fb/demuxnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [DeMuxNodeData](/vext/ref/fb/demuxnodedata). |

### DeMuxNodeData {#constructor-3}

> **DeMuxNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DeMuxNodeData](/vext/ref/fb/demuxnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DeMuxNodeData](/vext/ref/fb/demuxnodedata). |

## Properties

### {{% prop-heading "outputs" %}}

> **[DeMuxOutput](/vext/ref/fb/demuxoutput)**[]

### {{% prop-heading "trigger" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "value" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "wrapValue" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DeMuxNodeData](/vext/ref/fb/demuxnodedata) type.

