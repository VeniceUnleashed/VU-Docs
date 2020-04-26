---
title: MultiCrossfaderNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[MultiCrossfaderNodeData](#constructor-0)**() |
| **[MultiCrossfaderNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MultiCrossfaderNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[MultiCrossfaderNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "crossfaderGroups" >}} | [MultiCrossfaderGroup](/vext/ref/fb/multicrossfadergroup)[] |
| {{< prop "start" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "stop" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "control" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "lockControlValue" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MultiCrossfaderNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MultiCrossfaderNodeData {#constructor-0}

> **MultiCrossfaderNodeData**()

Creates a new [MultiCrossfaderNodeData](/vext/ref/fb/multicrossfadernodedata) frostbite instance.

### MultiCrossfaderNodeData {#constructor-1}

> **MultiCrossfaderNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MultiCrossfaderNodeData](/vext/ref/fb/multicrossfadernodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MultiCrossfaderNodeData {#constructor-2}

> **MultiCrossfaderNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [MultiCrossfaderNodeData](/vext/ref/fb/multicrossfadernodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [MultiCrossfaderNodeData](/vext/ref/fb/multicrossfadernodedata). |

### MultiCrossfaderNodeData {#constructor-3}

> **MultiCrossfaderNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MultiCrossfaderNodeData](/vext/ref/fb/multicrossfadernodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MultiCrossfaderNodeData](/vext/ref/fb/multicrossfadernodedata). |

## Properties

### {{% prop-heading "crossfaderGroups" %}}

> **[MultiCrossfaderGroup](/vext/ref/fb/multicrossfadergroup)**[]

### {{% prop-heading "start" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "stop" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "control" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "lockControlValue" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MultiCrossfaderNodeData](/vext/ref/fb/multicrossfadernodedata) type.

