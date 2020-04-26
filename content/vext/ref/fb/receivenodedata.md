---
title: ReceiveNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[ReceiveNodeData](#constructor-0)**() |
| **[ReceiveNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ReceiveNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[ReceiveNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "entries" >}} | [ReceiveEntry](/vext/ref/fb/receiveentry)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ReceiveNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ReceiveNodeData {#constructor-0}
> **ReceiveNodeData**()

Creates a new [ReceiveNodeData](/vext/ref/fb/receivenodedata) frostbite instance.

### ReceiveNodeData {#constructor-1}
> **ReceiveNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ReceiveNodeData](/vext/ref/fb/receivenodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ReceiveNodeData {#constructor-2}
> **ReceiveNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [ReceiveNodeData](/vext/ref/fb/receivenodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [ReceiveNodeData](/vext/ref/fb/receivenodedata). |

### ReceiveNodeData {#constructor-3}
> **ReceiveNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ReceiveNodeData](/vext/ref/fb/receivenodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ReceiveNodeData](/vext/ref/fb/receivenodedata). |

## Properties
### {{% prop-heading "entries" %}}
> **[ReceiveEntry](/vext/ref/fb/receiveentry)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ReceiveNodeData](/vext/ref/fb/receivenodedata) type.

