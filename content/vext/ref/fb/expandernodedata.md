---
title: ExpanderNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[ExpanderNodeData](#constructor-0)**() |
| **[ExpanderNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ExpanderNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[ExpanderNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "threshold" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "ratio" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "attackTime" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "releaseTime" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "channelMode" >}} | [ExpanderChannelMode](/vext/ref/fb/expanderchannelmode) |
| {{< prop "plugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ExpanderNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ExpanderNodeData {#constructor-0}
> **ExpanderNodeData**()

Creates a new [ExpanderNodeData](/vext/ref/fb/expandernodedata) frostbite instance.

### ExpanderNodeData {#constructor-1}
> **ExpanderNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ExpanderNodeData](/vext/ref/fb/expandernodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ExpanderNodeData {#constructor-2}
> **ExpanderNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [ExpanderNodeData](/vext/ref/fb/expandernodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [ExpanderNodeData](/vext/ref/fb/expandernodedata). |

### ExpanderNodeData {#constructor-3}
> **ExpanderNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ExpanderNodeData](/vext/ref/fb/expandernodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ExpanderNodeData](/vext/ref/fb/expandernodedata). |

## Properties
### {{% prop-heading "inValue" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "threshold" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "ratio" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "attackTime" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "releaseTime" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "out" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "channelMode" %}}
> **[ExpanderChannelMode](/vext/ref/fb/expanderchannelmode)**

### {{% prop-heading "plugin" %}}
> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ExpanderNodeData](/vext/ref/fb/expandernodedata) type.

