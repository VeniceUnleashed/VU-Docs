---
title: GainFaderNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[GainFaderNodeData](#constructor-0)**() |
| **[GainFaderNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[GainFaderNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[GainFaderNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "start" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "startTime" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "fadeTime" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "amplitude" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "fadeType" >}} | [GainFaderFadeType](/vext/ref/fb/gainfaderfadetype) |
| {{< prop "plugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GainFaderNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GainFaderNodeData {#constructor-0}
> **GainFaderNodeData**()

Creates a new [GainFaderNodeData](/vext/ref/fb/gainfadernodedata) frostbite instance.

### GainFaderNodeData {#constructor-1}
> **GainFaderNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [GainFaderNodeData](/vext/ref/fb/gainfadernodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### GainFaderNodeData {#constructor-2}
> **GainFaderNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [GainFaderNodeData](/vext/ref/fb/gainfadernodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [GainFaderNodeData](/vext/ref/fb/gainfadernodedata). |

### GainFaderNodeData {#constructor-3}
> **GainFaderNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GainFaderNodeData](/vext/ref/fb/gainfadernodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [GainFaderNodeData](/vext/ref/fb/gainfadernodedata). |

## Properties
### {{% prop-heading "inValue" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "start" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "startTime" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "fadeTime" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "amplitude" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "out" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "fadeType" %}}
> **[GainFaderFadeType](/vext/ref/fb/gainfaderfadetype)**

### {{% prop-heading "plugin" %}}
> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GainFaderNodeData](/vext/ref/fb/gainfadernodedata) type.

