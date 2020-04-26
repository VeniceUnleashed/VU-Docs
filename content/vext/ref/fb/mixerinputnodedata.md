---
title: MixerInputNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[MixerInputNodeData](#constructor-0)**() |
| **[MixerInputNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MixerInputNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[MixerInputNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "entries" >}} | [MixerInputEntry](/vext/ref/fb/mixerinputentry)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MixerInputNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MixerInputNodeData {#constructor-0}
> **MixerInputNodeData**()

Creates a new [MixerInputNodeData](/vext/ref/fb/mixerinputnodedata) frostbite instance.

### MixerInputNodeData {#constructor-1}
> **MixerInputNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MixerInputNodeData](/vext/ref/fb/mixerinputnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MixerInputNodeData {#constructor-2}
> **MixerInputNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [MixerInputNodeData](/vext/ref/fb/mixerinputnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [MixerInputNodeData](/vext/ref/fb/mixerinputnodedata). |

### MixerInputNodeData {#constructor-3}
> **MixerInputNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerInputNodeData](/vext/ref/fb/mixerinputnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MixerInputNodeData](/vext/ref/fb/mixerinputnodedata). |

## Properties
### {{% prop-heading "entries" %}}
> **[MixerInputEntry](/vext/ref/fb/mixerinputentry)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MixerInputNodeData](/vext/ref/fb/mixerinputnodedata) type.

