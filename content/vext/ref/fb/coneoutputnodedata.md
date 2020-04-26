---
title: ConeOutputNodeData
---

Inherits from [OutputNodeData](/vext/ref/fb/outputnodedata)

## Summary

### Constructors

|  |
| --- |
| **[ConeOutputNodeData](#constructor-0)**() |
| **[ConeOutputNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ConeOutputNodeData](#constructor-2)**(other: [OutputNodeData](/vext/ref/fb/outputnodedata)) |
| **[ConeOutputNodeData](#constructor-3)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[ConeOutputNodeData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "direction" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "positionY" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "positionX" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "positionZ" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "outerAngle" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "innerAngle" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "outsideGain" >}} | float |
| {{< prop "panSize" >}} | float |
| {{< prop "centerLevel" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "lfeLevel" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "hfDampingAngle" >}} | float |
| {{< prop "reverbGain" >}} | float |
| {{< prop "reverbSend" >}} | [SoundBusData](/vext/ref/fb/soundbusdata) \| nil |
| {{< prop "panPlugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |
| {{< prop "reverbSendPlugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ConeOutputNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ConeOutputNodeData {#constructor-0}

> **ConeOutputNodeData**()

Creates a new [ConeOutputNodeData](/vext/ref/fb/coneoutputnodedata) frostbite instance.

### ConeOutputNodeData {#constructor-1}

> **ConeOutputNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ConeOutputNodeData](/vext/ref/fb/coneoutputnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ConeOutputNodeData {#constructor-2}

> **ConeOutputNodeData**(other: [OutputNodeData](/vext/ref/fb/outputnodedata))

Casts an instance of type [OutputNodeData](/vext/ref/fb/outputnodedata) to [ConeOutputNodeData](/vext/ref/fb/coneoutputnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [OutputNodeData](/vext/ref/fb/outputnodedata) | The instance to cast to [ConeOutputNodeData](/vext/ref/fb/coneoutputnodedata). |

### ConeOutputNodeData {#constructor-3}

> **ConeOutputNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [ConeOutputNodeData](/vext/ref/fb/coneoutputnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [ConeOutputNodeData](/vext/ref/fb/coneoutputnodedata). |

### ConeOutputNodeData {#constructor-4}

> **ConeOutputNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ConeOutputNodeData](/vext/ref/fb/coneoutputnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ConeOutputNodeData](/vext/ref/fb/coneoutputnodedata). |

## Properties

### {{% prop-heading "direction" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "positionY" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "positionX" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "positionZ" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "outerAngle" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "innerAngle" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "outsideGain" %}}

> **float**

### {{% prop-heading "panSize" %}}

> **float**

### {{% prop-heading "centerLevel" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "lfeLevel" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "hfDampingAngle" %}}

> **float**

### {{% prop-heading "reverbGain" %}}

> **float**

### {{% prop-heading "reverbSend" %}}

> **[SoundBusData](/vext/ref/fb/soundbusdata)** \| **nil**

### {{% prop-heading "panPlugin" %}}

> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

### {{% prop-heading "reverbSendPlugin" %}}

> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ConeOutputNodeData](/vext/ref/fb/coneoutputnodedata) type.

