---
title: CrossfaderNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[CrossfaderNodeData](#constructor-0)**() |
| **[CrossfaderNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CrossfaderNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[CrossfaderNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "in1" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "in2" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "ctrl" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "plugin1" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |
| {{< prop "plugin2" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CrossfaderNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CrossfaderNodeData {#constructor-0}

> **CrossfaderNodeData**()

Creates a new [CrossfaderNodeData](/vext/ref/fb/crossfadernodedata) frostbite instance.

### CrossfaderNodeData {#constructor-1}

> **CrossfaderNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CrossfaderNodeData](/vext/ref/fb/crossfadernodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CrossfaderNodeData {#constructor-2}

> **CrossfaderNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [CrossfaderNodeData](/vext/ref/fb/crossfadernodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [CrossfaderNodeData](/vext/ref/fb/crossfadernodedata). |

### CrossfaderNodeData {#constructor-3}

> **CrossfaderNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CrossfaderNodeData](/vext/ref/fb/crossfadernodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CrossfaderNodeData](/vext/ref/fb/crossfadernodedata). |

## Properties

### {{% prop-heading "in1" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "in2" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "ctrl" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "out" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "plugin1" %}}

> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

### {{% prop-heading "plugin2" %}}

> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CrossfaderNodeData](/vext/ref/fb/crossfadernodedata) type.

