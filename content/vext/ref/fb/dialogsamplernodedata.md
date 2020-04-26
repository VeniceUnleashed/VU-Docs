---
title: DialogSamplerNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[DialogSamplerNodeData](#constructor-0)**() |
| **[DialogSamplerNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DialogSamplerNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[DialogSamplerNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "pitch" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "amplitude" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "continue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "output" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "triggered" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "finished" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "sndPlayerPlugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |
| {{< prop "resamplePlugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |
| {{< prop "pausePlugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |
| {{< prop "gainPlugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |
| {{< prop "tailLength" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DialogSamplerNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DialogSamplerNodeData {#constructor-0}

> **DialogSamplerNodeData**()

Creates a new [DialogSamplerNodeData](/vext/ref/fb/dialogsamplernodedata) frostbite instance.

### DialogSamplerNodeData {#constructor-1}

> **DialogSamplerNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DialogSamplerNodeData](/vext/ref/fb/dialogsamplernodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DialogSamplerNodeData {#constructor-2}

> **DialogSamplerNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [DialogSamplerNodeData](/vext/ref/fb/dialogsamplernodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [DialogSamplerNodeData](/vext/ref/fb/dialogsamplernodedata). |

### DialogSamplerNodeData {#constructor-3}

> **DialogSamplerNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DialogSamplerNodeData](/vext/ref/fb/dialogsamplernodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DialogSamplerNodeData](/vext/ref/fb/dialogsamplernodedata). |

## Properties

### {{% prop-heading "pitch" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "amplitude" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "continue" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "output" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "triggered" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "finished" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "sndPlayerPlugin" %}}

> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

### {{% prop-heading "resamplePlugin" %}}

> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

### {{% prop-heading "pausePlugin" %}}

> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

### {{% prop-heading "gainPlugin" %}}

> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

### {{% prop-heading "tailLength" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DialogSamplerNodeData](/vext/ref/fb/dialogsamplernodedata) type.

