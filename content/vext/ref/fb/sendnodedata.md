---
title: SendNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[SendNodeData](#constructor-0)**() |
| **[SendNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SendNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[SendNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "entries" >}} | [SendEntry](/vext/ref/fb/sendentry)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SendNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SendNodeData {#constructor-0}
> **SendNodeData**()

Creates a new [SendNodeData](/vext/ref/fb/sendnodedata) frostbite instance.

### SendNodeData {#constructor-1}
> **SendNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SendNodeData](/vext/ref/fb/sendnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SendNodeData {#constructor-2}
> **SendNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [SendNodeData](/vext/ref/fb/sendnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [SendNodeData](/vext/ref/fb/sendnodedata). |

### SendNodeData {#constructor-3}
> **SendNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SendNodeData](/vext/ref/fb/sendnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SendNodeData](/vext/ref/fb/sendnodedata). |

## Properties
### {{% prop-heading "entries" %}}
> **[SendEntry](/vext/ref/fb/sendentry)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SendNodeData](/vext/ref/fb/sendnodedata) type.

