---
title: AiffWriterNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[AiffWriterNodeData](#constructor-0)**() |
| **[AiffWriterNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AiffWriterNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[AiffWriterNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "start" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "stop" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "plugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |
| {{< prop "fileName" >}} | string |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AiffWriterNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AiffWriterNodeData {#constructor-0}
> **AiffWriterNodeData**()

Creates a new [AiffWriterNodeData](/vext/ref/fb/aiffwriternodedata) frostbite instance.

### AiffWriterNodeData {#constructor-1}
> **AiffWriterNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AiffWriterNodeData](/vext/ref/fb/aiffwriternodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AiffWriterNodeData {#constructor-2}
> **AiffWriterNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [AiffWriterNodeData](/vext/ref/fb/aiffwriternodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [AiffWriterNodeData](/vext/ref/fb/aiffwriternodedata). |

### AiffWriterNodeData {#constructor-3}
> **AiffWriterNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AiffWriterNodeData](/vext/ref/fb/aiffwriternodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AiffWriterNodeData](/vext/ref/fb/aiffwriternodedata). |

## Properties
### {{% prop-heading "inValue" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "start" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "stop" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "plugin" %}}
> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

### {{% prop-heading "fileName" %}}
> **string**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AiffWriterNodeData](/vext/ref/fb/aiffwriternodedata) type.

