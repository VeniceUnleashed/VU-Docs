---
title: DivisibleLoopPlayerNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[DivisibleLoopPlayerNodeData](#constructor-0)**() |
| **[DivisibleLoopPlayerNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DivisibleLoopPlayerNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[DivisibleLoopPlayerNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "start" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "stop" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "amplitude" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "freezeSegment" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "output" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "wave" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |
| {{< prop "externalWave" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "plugins" >}} | [DivisibleLoopPlayerPlugins](/vext/ref/fb/divisibleloopplayerplugins)[] |
| {{< prop "crossFadeLength" >}} | float |
| {{< prop "startAtRandomPosition" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DivisibleLoopPlayerNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DivisibleLoopPlayerNodeData {#constructor-0}
> **DivisibleLoopPlayerNodeData**()

Creates a new [DivisibleLoopPlayerNodeData](/vext/ref/fb/divisibleloopplayernodedata) frostbite instance.

### DivisibleLoopPlayerNodeData {#constructor-1}
> **DivisibleLoopPlayerNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DivisibleLoopPlayerNodeData](/vext/ref/fb/divisibleloopplayernodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DivisibleLoopPlayerNodeData {#constructor-2}
> **DivisibleLoopPlayerNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [DivisibleLoopPlayerNodeData](/vext/ref/fb/divisibleloopplayernodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [DivisibleLoopPlayerNodeData](/vext/ref/fb/divisibleloopplayernodedata). |

### DivisibleLoopPlayerNodeData {#constructor-3}
> **DivisibleLoopPlayerNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DivisibleLoopPlayerNodeData](/vext/ref/fb/divisibleloopplayernodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DivisibleLoopPlayerNodeData](/vext/ref/fb/divisibleloopplayernodedata). |

## Properties
### {{% prop-heading "start" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "stop" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "amplitude" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "freezeSegment" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "output" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "wave" %}}
> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** | **nil**

### {{% prop-heading "externalWave" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "plugins" %}}
> **[DivisibleLoopPlayerPlugins](/vext/ref/fb/divisibleloopplayerplugins)**[]

### {{% prop-heading "crossFadeLength" %}}
> **float**

### {{% prop-heading "startAtRandomPosition" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DivisibleLoopPlayerNodeData](/vext/ref/fb/divisibleloopplayernodedata) type.

