---
title: MixerReceiveNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[MixerReceiveNodeData](#constructor-0)**() |
| **[MixerReceiveNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MixerReceiveNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[MixerReceiveNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "entries" >}} | [MixerReceiveEntry](/vext/ref/fb/mixerreceiveentry)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MixerReceiveNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MixerReceiveNodeData {#constructor-0}
> **MixerReceiveNodeData**()

Creates a new [MixerReceiveNodeData](/vext/ref/fb/mixerreceivenodedata) frostbite instance.

### MixerReceiveNodeData {#constructor-1}
> **MixerReceiveNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MixerReceiveNodeData](/vext/ref/fb/mixerreceivenodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MixerReceiveNodeData {#constructor-2}
> **MixerReceiveNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [MixerReceiveNodeData](/vext/ref/fb/mixerreceivenodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [MixerReceiveNodeData](/vext/ref/fb/mixerreceivenodedata). |

### MixerReceiveNodeData {#constructor-3}
> **MixerReceiveNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerReceiveNodeData](/vext/ref/fb/mixerreceivenodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MixerReceiveNodeData](/vext/ref/fb/mixerreceivenodedata). |

## Properties
### {{% prop-heading "entries" %}}
> **[MixerReceiveEntry](/vext/ref/fb/mixerreceiveentry)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MixerReceiveNodeData](/vext/ref/fb/mixerreceivenodedata) type.

