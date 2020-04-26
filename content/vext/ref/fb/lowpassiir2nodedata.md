---
title: LowPassIir2NodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[LowPassIir2NodeData](#constructor-0)**() |
| **[LowPassIir2NodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[LowPassIir2NodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[LowPassIir2NodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "frequency" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "plugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LowPassIir2NodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LowPassIir2NodeData {#constructor-0}
> **LowPassIir2NodeData**()

Creates a new [LowPassIir2NodeData](/vext/ref/fb/lowpassiir2nodedata) frostbite instance.

### LowPassIir2NodeData {#constructor-1}
> **LowPassIir2NodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [LowPassIir2NodeData](/vext/ref/fb/lowpassiir2nodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### LowPassIir2NodeData {#constructor-2}
> **LowPassIir2NodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [LowPassIir2NodeData](/vext/ref/fb/lowpassiir2nodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [LowPassIir2NodeData](/vext/ref/fb/lowpassiir2nodedata). |

### LowPassIir2NodeData {#constructor-3}
> **LowPassIir2NodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LowPassIir2NodeData](/vext/ref/fb/lowpassiir2nodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [LowPassIir2NodeData](/vext/ref/fb/lowpassiir2nodedata). |

## Properties
### {{% prop-heading "inValue" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "frequency" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "out" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "plugin" %}}
> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LowPassIir2NodeData](/vext/ref/fb/lowpassiir2nodedata) type.

