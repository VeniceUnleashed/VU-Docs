---
title: HighPassFir64NodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[HighPassFir64NodeData](#constructor-0)**() |
| **[HighPassFir64NodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[HighPassFir64NodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[HighPassFir64NodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

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
| {{< static "HighPassFir64NodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### HighPassFir64NodeData {#constructor-0}
> **HighPassFir64NodeData**()

Creates a new [HighPassFir64NodeData](/vext/ref/fb/highpassfir64nodedata) frostbite instance.

### HighPassFir64NodeData {#constructor-1}
> **HighPassFir64NodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [HighPassFir64NodeData](/vext/ref/fb/highpassfir64nodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### HighPassFir64NodeData {#constructor-2}
> **HighPassFir64NodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [HighPassFir64NodeData](/vext/ref/fb/highpassfir64nodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [HighPassFir64NodeData](/vext/ref/fb/highpassfir64nodedata). |

### HighPassFir64NodeData {#constructor-3}
> **HighPassFir64NodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HighPassFir64NodeData](/vext/ref/fb/highpassfir64nodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [HighPassFir64NodeData](/vext/ref/fb/highpassfir64nodedata). |

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

The type information for the [HighPassFir64NodeData](/vext/ref/fb/highpassfir64nodedata) type.

