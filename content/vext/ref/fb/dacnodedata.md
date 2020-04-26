---
title: DacNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[DacNodeData](#constructor-0)**() |
| **[DacNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DacNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[DacNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "speakerCount" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "sampleRate" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "vuPlugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |
| {{< prop "gainPlugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |
| {{< prop "dacPlugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DacNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DacNodeData {#constructor-0}
> **DacNodeData**()

Creates a new [DacNodeData](/vext/ref/fb/dacnodedata) frostbite instance.

### DacNodeData {#constructor-1}
> **DacNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DacNodeData](/vext/ref/fb/dacnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DacNodeData {#constructor-2}
> **DacNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [DacNodeData](/vext/ref/fb/dacnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [DacNodeData](/vext/ref/fb/dacnodedata). |

### DacNodeData {#constructor-3}
> **DacNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DacNodeData](/vext/ref/fb/dacnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DacNodeData](/vext/ref/fb/dacnodedata). |

## Properties
### {{% prop-heading "inValue" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "speakerCount" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "sampleRate" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "vuPlugin" %}}
> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

### {{% prop-heading "gainPlugin" %}}
> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

### {{% prop-heading "dacPlugin" %}}
> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DacNodeData](/vext/ref/fb/dacnodedata) type.

