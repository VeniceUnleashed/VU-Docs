---
title: InstanceNode
---

Inherits from 
[UINodeData](/vext/ref/fb/uinodedata)

## Summary
### Constructors
| |
| ----------- |
| **[InstanceNode](#constructor-0)**() |
| **[InstanceNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[InstanceNode](#constructor-2)**(other: [UINodeData](/vext/ref/fb/uinodedata)) |
| **[InstanceNode](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "uiGraph" >}} | [UIGraphAsset](/vext/ref/fb/uigraphasset) \| nil |
| {{< prop "inputs" >}} | [UINodePort](/vext/ref/fb/uinodeport)[] |
| {{< prop "outputs" >}} | [UINodePort](/vext/ref/fb/uinodeport)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "InstanceNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### InstanceNode {#constructor-0}
> **InstanceNode**()

Creates a new [InstanceNode](/vext/ref/fb/instancenode) frostbite instance.

### InstanceNode {#constructor-1}
> **InstanceNode**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [InstanceNode](/vext/ref/fb/instancenode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### InstanceNode {#constructor-2}
> **InstanceNode**(other: [UINodeData](/vext/ref/fb/uinodedata))

Casts an instance of type [UINodeData](/vext/ref/fb/uinodedata) to [InstanceNode](/vext/ref/fb/instancenode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UINodeData](/vext/ref/fb/uinodedata) | The instance to cast to [InstanceNode](/vext/ref/fb/instancenode). |

### InstanceNode {#constructor-3}
> **InstanceNode**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InstanceNode](/vext/ref/fb/instancenode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [InstanceNode](/vext/ref/fb/instancenode). |

## Properties
### {{% prop-heading "uiGraph" %}}
> **[UIGraphAsset](/vext/ref/fb/uigraphasset)** | **nil**

### {{% prop-heading "inputs" %}}
> **[UINodePort](/vext/ref/fb/uinodeport)**[]

### {{% prop-heading "outputs" %}}
> **[UINodePort](/vext/ref/fb/uinodeport)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [InstanceNode](/vext/ref/fb/instancenode) type.

