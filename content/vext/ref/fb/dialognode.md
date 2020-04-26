---
title: DialogNode
---

Inherits from [StateNode](/vext/ref/fb/statenode)

## Summary

### Constructors

|  |
| --- |
| **[DialogNode](#constructor-0)**() |
| **[DialogNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DialogNode](#constructor-2)**(other: [StateNode](/vext/ref/fb/statenode)) |
| **[DialogNode](#constructor-3)**(other: [UINodeData](/vext/ref/fb/uinodedata)) |
| **[DialogNode](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "dialogTitle" >}} | string |
| {{< prop "dialogText" >}} | string |
| {{< prop "buttons" >}} | [UIPopupButton](/vext/ref/fb/uipopupbutton)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DialogNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DialogNode {#constructor-0}

> **DialogNode**()

Creates a new [DialogNode](/vext/ref/fb/dialognode) frostbite instance.

### DialogNode {#constructor-1}

> **DialogNode**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DialogNode](/vext/ref/fb/dialognode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DialogNode {#constructor-2}

> **DialogNode**(other: [StateNode](/vext/ref/fb/statenode))

Casts an instance of type [StateNode](/vext/ref/fb/statenode) to [DialogNode](/vext/ref/fb/dialognode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [StateNode](/vext/ref/fb/statenode) | The instance to cast to [DialogNode](/vext/ref/fb/dialognode). |

### DialogNode {#constructor-3}

> **DialogNode**(other: [UINodeData](/vext/ref/fb/uinodedata))

Casts an instance of type [UINodeData](/vext/ref/fb/uinodedata) to [DialogNode](/vext/ref/fb/dialognode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UINodeData](/vext/ref/fb/uinodedata) | The instance to cast to [DialogNode](/vext/ref/fb/dialognode). |

### DialogNode {#constructor-4}

> **DialogNode**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DialogNode](/vext/ref/fb/dialognode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DialogNode](/vext/ref/fb/dialognode). |

## Properties

### {{% prop-heading "dialogTitle" %}}

> **string**

### {{% prop-heading "dialogText" %}}

> **string**

### {{% prop-heading "buttons" %}}

> **[UIPopupButton](/vext/ref/fb/uipopupbutton)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DialogNode](/vext/ref/fb/dialognode) type.

