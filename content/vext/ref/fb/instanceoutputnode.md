---
title: InstanceOutputNode
---

Inherits from [UINodeData](/vext/ref/fb/uinodedata)

## Summary

### Constructors

|  |
| --- |
| **[InstanceOutputNode](#constructor-0)**() |
| **[InstanceOutputNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[InstanceOutputNode](#constructor-2)**(other: [UINodeData](/vext/ref/fb/uinodedata)) |
| **[InstanceOutputNode](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "id" >}} | int |
| {{< prop "destroyGraph" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "InstanceOutputNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### InstanceOutputNode {#constructor-0}

> **InstanceOutputNode**()

Creates a new [InstanceOutputNode](/vext/ref/fb/instanceoutputnode) frostbite instance.

### InstanceOutputNode {#constructor-1}

> **InstanceOutputNode**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [InstanceOutputNode](/vext/ref/fb/instanceoutputnode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### InstanceOutputNode {#constructor-2}

> **InstanceOutputNode**(other: [UINodeData](/vext/ref/fb/uinodedata))

Casts an instance of type [UINodeData](/vext/ref/fb/uinodedata) to [InstanceOutputNode](/vext/ref/fb/instanceoutputnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UINodeData](/vext/ref/fb/uinodedata) | The instance to cast to [InstanceOutputNode](/vext/ref/fb/instanceoutputnode). |

### InstanceOutputNode {#constructor-3}

> **InstanceOutputNode**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [InstanceOutputNode](/vext/ref/fb/instanceoutputnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [InstanceOutputNode](/vext/ref/fb/instanceoutputnode). |

## Properties

### {{% prop-heading "inValue" %}}

> **[UINodePort](/vext/ref/fb/uinodeport)** \| **nil**

### {{% prop-heading "id" %}}

> **int**

### {{% prop-heading "destroyGraph" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [InstanceOutputNode](/vext/ref/fb/instanceoutputnode) type.

