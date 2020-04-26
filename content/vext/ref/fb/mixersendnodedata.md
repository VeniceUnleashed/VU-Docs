---
title: MixerSendNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[MixerSendNodeData](#constructor-0)**() |
| **[MixerSendNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MixerSendNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[MixerSendNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "entries" >}} | [MixerSendEntry](/vext/ref/fb/mixersendentry)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MixerSendNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MixerSendNodeData {#constructor-0}
> **MixerSendNodeData**()

Creates a new [MixerSendNodeData](/vext/ref/fb/mixersendnodedata) frostbite instance.

### MixerSendNodeData {#constructor-1}
> **MixerSendNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MixerSendNodeData](/vext/ref/fb/mixersendnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MixerSendNodeData {#constructor-2}
> **MixerSendNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [MixerSendNodeData](/vext/ref/fb/mixersendnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [MixerSendNodeData](/vext/ref/fb/mixersendnodedata). |

### MixerSendNodeData {#constructor-3}
> **MixerSendNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerSendNodeData](/vext/ref/fb/mixersendnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MixerSendNodeData](/vext/ref/fb/mixersendnodedata). |

## Properties
### {{% prop-heading "entries" %}}
> **[MixerSendEntry](/vext/ref/fb/mixersendentry)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MixerSendNodeData](/vext/ref/fb/mixersendnodedata) type.

