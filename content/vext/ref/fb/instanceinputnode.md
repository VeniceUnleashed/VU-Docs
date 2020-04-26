---
title: InstanceInputNode
---

Inherits from [UINodeData](/vext/ref/fb/uinodedata)

## Summary

### Constructors

|  |
| --- |
| **[InstanceInputNode](#constructor-0)**() |
| **[InstanceInputNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[InstanceInputNode](#constructor-2)**(other: [UINodeData](/vext/ref/fb/uinodedata)) |
| **[InstanceInputNode](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "out" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "InstanceInputNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### InstanceInputNode {#constructor-0}

> **InstanceInputNode**()

Creates a new [InstanceInputNode](/vext/ref/fb/instanceinputnode) frostbite instance.

### InstanceInputNode {#constructor-1}

> **InstanceInputNode**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [InstanceInputNode](/vext/ref/fb/instanceinputnode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### InstanceInputNode {#constructor-2}

> **InstanceInputNode**(other: [UINodeData](/vext/ref/fb/uinodedata))

Casts an instance of type [UINodeData](/vext/ref/fb/uinodedata) to [InstanceInputNode](/vext/ref/fb/instanceinputnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UINodeData](/vext/ref/fb/uinodedata) | The instance to cast to [InstanceInputNode](/vext/ref/fb/instanceinputnode). |

### InstanceInputNode {#constructor-3}

> **InstanceInputNode**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [InstanceInputNode](/vext/ref/fb/instanceinputnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [InstanceInputNode](/vext/ref/fb/instanceinputnode). |

## Properties

### {{% prop-heading "out" %}}

> **[UINodePort](/vext/ref/fb/uinodeport)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [InstanceInputNode](/vext/ref/fb/instanceinputnode) type.

