---
title: ActionNode
---

Inherits from 
[UINodeData](/vext/ref/fb/uinodedata)

## Summary
### Constructors
| |
| ----------- |
| **[ActionNode](#constructor-0)**() |
| **[ActionNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ActionNode](#constructor-2)**(other: [UINodeData](/vext/ref/fb/uinodedata)) |
| **[ActionNode](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "actionKey" >}} | int |
| {{< prop "params" >}} | string[] |
| {{< prop "actionAsset" >}} | [Asset](/vext/ref/fb/asset) \| nil |
| {{< prop "inValue" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "out" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "dataInputs" >}} | [UINodePort](/vext/ref/fb/uinodeport)[] |
| {{< prop "appendIncomingParams" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ActionNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ActionNode {#constructor-0}
> **ActionNode**()

Creates a new [ActionNode](/vext/ref/fb/actionnode) frostbite instance.

### ActionNode {#constructor-1}
> **ActionNode**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ActionNode](/vext/ref/fb/actionnode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ActionNode {#constructor-2}
> **ActionNode**(other: [UINodeData](/vext/ref/fb/uinodedata))

Casts an instance of type [UINodeData](/vext/ref/fb/uinodedata) to [ActionNode](/vext/ref/fb/actionnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UINodeData](/vext/ref/fb/uinodedata) | The instance to cast to [ActionNode](/vext/ref/fb/actionnode). |

### ActionNode {#constructor-3}
> **ActionNode**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ActionNode](/vext/ref/fb/actionnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ActionNode](/vext/ref/fb/actionnode). |

## Properties
### {{% prop-heading "actionKey" %}}
> **int**

### {{% prop-heading "params" %}}
> **string**[]

### {{% prop-heading "actionAsset" %}}
> **[Asset](/vext/ref/fb/asset)** | **nil**

### {{% prop-heading "inValue" %}}
> **[UINodePort](/vext/ref/fb/uinodeport)** | **nil**

### {{% prop-heading "out" %}}
> **[UINodePort](/vext/ref/fb/uinodeport)** | **nil**

### {{% prop-heading "dataInputs" %}}
> **[UINodePort](/vext/ref/fb/uinodeport)**[]

### {{% prop-heading "appendIncomingParams" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ActionNode](/vext/ref/fb/actionnode) type.

