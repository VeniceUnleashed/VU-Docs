---
title: SamplerNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[SamplerNodeData](#constructor-0)**() |
| **[SamplerNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SamplerNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[SamplerNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "externalWave" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "variation" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "offset" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "delay" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "pitch" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "amplitude" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "enableStep" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "buffer" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "trigger" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "release" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "step" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "output" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "finished" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "buffered" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "position" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "wave" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |
| {{< prop "basePitch" >}} | float |
| {{< prop "loop" >}} | [LoopType](/vext/ref/fb/looptype) |
| {{< prop "plugins" >}} | [SamplerPlugins](/vext/ref/fb/samplerplugins)[] |
| {{< prop "shuffleSegments" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SamplerNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SamplerNodeData {#constructor-0}
> **SamplerNodeData**()

Creates a new [SamplerNodeData](/vext/ref/fb/samplernodedata) frostbite instance.

### SamplerNodeData {#constructor-1}
> **SamplerNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SamplerNodeData](/vext/ref/fb/samplernodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SamplerNodeData {#constructor-2}
> **SamplerNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [SamplerNodeData](/vext/ref/fb/samplernodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [SamplerNodeData](/vext/ref/fb/samplernodedata). |

### SamplerNodeData {#constructor-3}
> **SamplerNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SamplerNodeData](/vext/ref/fb/samplernodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SamplerNodeData](/vext/ref/fb/samplernodedata). |

## Properties
### {{% prop-heading "externalWave" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "variation" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "offset" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "delay" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "pitch" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "amplitude" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "enableStep" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "buffer" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "trigger" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "release" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "step" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "output" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "finished" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "buffered" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "position" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "wave" %}}
> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** | **nil**

### {{% prop-heading "basePitch" %}}
> **float**

### {{% prop-heading "loop" %}}
> **[LoopType](/vext/ref/fb/looptype)**

### {{% prop-heading "plugins" %}}
> **[SamplerPlugins](/vext/ref/fb/samplerplugins)**[]

### {{% prop-heading "shuffleSegments" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SamplerNodeData](/vext/ref/fb/samplernodedata) type.

