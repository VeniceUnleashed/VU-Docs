---
title: MixerNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[MixerNodeData](#constructor-0)**() |
| **[MixerNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MixerNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[MixerNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "entries" >}} | [MixerEntry](/vext/ref/fb/mixerentry)[] |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MixerNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MixerNodeData {#constructor-0}
> **MixerNodeData**()

Creates a new [MixerNodeData](/vext/ref/fb/mixernodedata) frostbite instance.

### MixerNodeData {#constructor-1}
> **MixerNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MixerNodeData](/vext/ref/fb/mixernodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MixerNodeData {#constructor-2}
> **MixerNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [MixerNodeData](/vext/ref/fb/mixernodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [MixerNodeData](/vext/ref/fb/mixernodedata). |

### MixerNodeData {#constructor-3}
> **MixerNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerNodeData](/vext/ref/fb/mixernodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MixerNodeData](/vext/ref/fb/mixernodedata). |

## Properties
### {{% prop-heading "entries" %}}
> **[MixerEntry](/vext/ref/fb/mixerentry)**[]

### {{% prop-heading "out" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MixerNodeData](/vext/ref/fb/mixernodedata) type.

