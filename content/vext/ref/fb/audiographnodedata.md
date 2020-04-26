---
title: AudioGraphNodeData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[AudioGraphNodeData](#constructor-0)**() |
| **[AudioGraphNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AudioGraphNodeData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AudioGraphNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AudioGraphNodeData {#constructor-0}
> **AudioGraphNodeData**()

Creates a new [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) frostbite instance.

### AudioGraphNodeData {#constructor-1}
> **AudioGraphNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AudioGraphNodeData {#constructor-2}
> **AudioGraphNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AudioGraphNodeData](/vext/ref/fb/audiographnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AudioGraphNodeData](/vext/ref/fb/audiographnodedata). |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) type.

