---
title: JumpNode
---

Inherits from [UINodeData](/vext/ref/fb/uinodedata)

## Summary

### Constructors

|  |
| --- |
| **[JumpNode](#constructor-0)**() |
| **[JumpNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[JumpNode](#constructor-2)**(other: [UINodeData](/vext/ref/fb/uinodedata)) |
| **[JumpNode](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "targetNode" >}} | [UINodeData](/vext/ref/fb/uinodedata) \| nil |
| {{< prop "targetPort" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "JumpNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### JumpNode {#constructor-0}

> **JumpNode**()

Creates a new [JumpNode](/vext/ref/fb/jumpnode) frostbite instance.

### JumpNode {#constructor-1}

> **JumpNode**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [JumpNode](/vext/ref/fb/jumpnode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### JumpNode {#constructor-2}

> **JumpNode**(other: [UINodeData](/vext/ref/fb/uinodedata))

Casts an instance of type [UINodeData](/vext/ref/fb/uinodedata) to [JumpNode](/vext/ref/fb/jumpnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UINodeData](/vext/ref/fb/uinodedata) | The instance to cast to [JumpNode](/vext/ref/fb/jumpnode). |

### JumpNode {#constructor-3}

> **JumpNode**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [JumpNode](/vext/ref/fb/jumpnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [JumpNode](/vext/ref/fb/jumpnode). |

## Properties

### {{% prop-heading "inValue" %}}

> **[UINodePort](/vext/ref/fb/uinodeport)** \| **nil**

### {{% prop-heading "targetNode" %}}

> **[UINodeData](/vext/ref/fb/uinodedata)** \| **nil**

### {{% prop-heading "targetPort" %}}

> **[UINodePort](/vext/ref/fb/uinodeport)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [JumpNode](/vext/ref/fb/jumpnode) type.

