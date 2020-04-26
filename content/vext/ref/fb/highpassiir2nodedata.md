---
title: HighPassIir2NodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[HighPassIir2NodeData](#constructor-0)**() |
| **[HighPassIir2NodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[HighPassIir2NodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[HighPassIir2NodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

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
| {{< static "HighPassIir2NodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### HighPassIir2NodeData {#constructor-0}
> **HighPassIir2NodeData**()

Creates a new [HighPassIir2NodeData](/vext/ref/fb/highpassiir2nodedata) frostbite instance.

### HighPassIir2NodeData {#constructor-1}
> **HighPassIir2NodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [HighPassIir2NodeData](/vext/ref/fb/highpassiir2nodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### HighPassIir2NodeData {#constructor-2}
> **HighPassIir2NodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [HighPassIir2NodeData](/vext/ref/fb/highpassiir2nodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [HighPassIir2NodeData](/vext/ref/fb/highpassiir2nodedata). |

### HighPassIir2NodeData {#constructor-3}
> **HighPassIir2NodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HighPassIir2NodeData](/vext/ref/fb/highpassiir2nodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [HighPassIir2NodeData](/vext/ref/fb/highpassiir2nodedata). |

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

The type information for the [HighPassIir2NodeData](/vext/ref/fb/highpassiir2nodedata) type.

