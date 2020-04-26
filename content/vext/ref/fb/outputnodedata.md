---
title: OutputNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[OutputNodeData](#constructor-0)**() |
| **[OutputNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[OutputNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[OutputNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "bypassHeadroom" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "minDistance" >}} | float |
| {{< prop "attenuationCurve" >}} | [AudioCurve](/vext/ref/fb/audiocurve) |
| {{< prop "gain" >}} | float |
| {{< prop "hfDampingDistance" >}} | float |
| {{< prop "hfDampingObstruction" >}} | float |
| {{< prop "hfDampingOcclusion" >}} | float |
| {{< prop "mainSendPlugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |
| {{< prop "mainSend" >}} | [SoundBusData](/vext/ref/fb/soundbusdata) \| nil |
| {{< prop "outputName" >}} | string |
| {{< prop "transformSource" >}} | [OutputTransformSource](/vext/ref/fb/outputtransformsource) |
| {{< prop "outputNameHash" >}} | int |
| {{< prop "lowPassPlugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |
| {{< prop "vuPlugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |
| {{< prop "solo" >}} | bool |
| {{< prop "enableHdr" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "OutputNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### OutputNodeData {#constructor-0}
> **OutputNodeData**()

Creates a new [OutputNodeData](/vext/ref/fb/outputnodedata) frostbite instance.

### OutputNodeData {#constructor-1}
> **OutputNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [OutputNodeData](/vext/ref/fb/outputnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### OutputNodeData {#constructor-2}
> **OutputNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [OutputNodeData](/vext/ref/fb/outputnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [OutputNodeData](/vext/ref/fb/outputnodedata). |

### OutputNodeData {#constructor-3}
> **OutputNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OutputNodeData](/vext/ref/fb/outputnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [OutputNodeData](/vext/ref/fb/outputnodedata). |

## Properties
### {{% prop-heading "inValue" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "bypassHeadroom" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "minDistance" %}}
> **float**

### {{% prop-heading "attenuationCurve" %}}
> **[AudioCurve](/vext/ref/fb/audiocurve)**

### {{% prop-heading "gain" %}}
> **float**

### {{% prop-heading "hfDampingDistance" %}}
> **float**

### {{% prop-heading "hfDampingObstruction" %}}
> **float**

### {{% prop-heading "hfDampingOcclusion" %}}
> **float**

### {{% prop-heading "mainSendPlugin" %}}
> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

### {{% prop-heading "mainSend" %}}
> **[SoundBusData](/vext/ref/fb/soundbusdata)** | **nil**

### {{% prop-heading "outputName" %}}
> **string**

### {{% prop-heading "transformSource" %}}
> **[OutputTransformSource](/vext/ref/fb/outputtransformsource)**

### {{% prop-heading "outputNameHash" %}}
> **int**

### {{% prop-heading "lowPassPlugin" %}}
> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

### {{% prop-heading "vuPlugin" %}}
> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

### {{% prop-heading "solo" %}}
> **bool**

### {{% prop-heading "enableHdr" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [OutputNodeData](/vext/ref/fb/outputnodedata) type.

