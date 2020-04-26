---
title: FlatOutputNodeData
---

Inherits from [OutputNodeData](/vext/ref/fb/outputnodedata)

## Summary

### Constructors

|  |
| --- |
| **[FlatOutputNodeData](#constructor-0)**() |
| **[FlatOutputNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[FlatOutputNodeData](#constructor-2)**(other: [OutputNodeData](/vext/ref/fb/outputnodedata)) |
| **[FlatOutputNodeData](#constructor-3)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[FlatOutputNodeData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "angle" >}} | float |
| {{< prop "reverbGain" >}} | float |
| {{< prop "reverbSend" >}} | [SoundBusData](/vext/ref/fb/soundbusdata) \| nil |
| {{< prop "centerLevel" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "lfeLevel" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "panPlugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |
| {{< prop "reverbSendPlugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "FlatOutputNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### FlatOutputNodeData {#constructor-0}

> **FlatOutputNodeData**()

Creates a new [FlatOutputNodeData](/vext/ref/fb/flatoutputnodedata) frostbite instance.

### FlatOutputNodeData {#constructor-1}

> **FlatOutputNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [FlatOutputNodeData](/vext/ref/fb/flatoutputnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### FlatOutputNodeData {#constructor-2}

> **FlatOutputNodeData**(other: [OutputNodeData](/vext/ref/fb/outputnodedata))

Casts an instance of type [OutputNodeData](/vext/ref/fb/outputnodedata) to [FlatOutputNodeData](/vext/ref/fb/flatoutputnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [OutputNodeData](/vext/ref/fb/outputnodedata) | The instance to cast to [FlatOutputNodeData](/vext/ref/fb/flatoutputnodedata). |

### FlatOutputNodeData {#constructor-3}

> **FlatOutputNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [FlatOutputNodeData](/vext/ref/fb/flatoutputnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [FlatOutputNodeData](/vext/ref/fb/flatoutputnodedata). |

### FlatOutputNodeData {#constructor-4}

> **FlatOutputNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [FlatOutputNodeData](/vext/ref/fb/flatoutputnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [FlatOutputNodeData](/vext/ref/fb/flatoutputnodedata). |

## Properties

### {{% prop-heading "angle" %}}

> **float**

### {{% prop-heading "reverbGain" %}}

> **float**

### {{% prop-heading "reverbSend" %}}

> **[SoundBusData](/vext/ref/fb/soundbusdata)** \| **nil**

### {{% prop-heading "centerLevel" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "lfeLevel" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "panPlugin" %}}

> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

### {{% prop-heading "reverbSendPlugin" %}}

> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [FlatOutputNodeData](/vext/ref/fb/flatoutputnodedata) type.

