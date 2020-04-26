---
title: CompressorNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[CompressorNodeData](#constructor-0)**() |
| **[CompressorNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[CompressorNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[CompressorNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "threshold" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "ratio" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "attackTime" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "releaseTime" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "channelMode" >}} | [CompressorChannelMode](/vext/ref/fb/compressorchannelmode) |
| {{< prop "plugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CompressorNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CompressorNodeData {#constructor-0}
> **CompressorNodeData**()

Creates a new [CompressorNodeData](/vext/ref/fb/compressornodedata) frostbite instance.

### CompressorNodeData {#constructor-1}
> **CompressorNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [CompressorNodeData](/vext/ref/fb/compressornodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### CompressorNodeData {#constructor-2}
> **CompressorNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [CompressorNodeData](/vext/ref/fb/compressornodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [CompressorNodeData](/vext/ref/fb/compressornodedata). |

### CompressorNodeData {#constructor-3}
> **CompressorNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CompressorNodeData](/vext/ref/fb/compressornodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [CompressorNodeData](/vext/ref/fb/compressornodedata). |

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
> **[CompressorChannelMode](/vext/ref/fb/compressorchannelmode)**

### {{% prop-heading "plugin" %}}
> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CompressorNodeData](/vext/ref/fb/compressornodedata) type.

