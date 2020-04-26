---
title: GlobalNode
---

Inherits from [UINodeData](/vext/ref/fb/uinodedata)

## Summary

### Constructors

|  |
| --- |
| **[GlobalNode](#constructor-0)**() |
| **[GlobalNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[GlobalNode](#constructor-2)**(other: [UINodeData](/vext/ref/fb/uinodedata)) |
| **[GlobalNode](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "outputs" >}} | [UINodePort](/vext/ref/fb/uinodeport)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GlobalNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GlobalNode {#constructor-0}

> **GlobalNode**()

Creates a new [GlobalNode](/vext/ref/fb/globalnode) frostbite instance.

### GlobalNode {#constructor-1}

> **GlobalNode**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GlobalNode](/vext/ref/fb/globalnode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### GlobalNode {#constructor-2}

> **GlobalNode**(other: [UINodeData](/vext/ref/fb/uinodedata))

Casts an instance of type [UINodeData](/vext/ref/fb/uinodedata) to [GlobalNode](/vext/ref/fb/globalnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UINodeData](/vext/ref/fb/uinodedata) | The instance to cast to [GlobalNode](/vext/ref/fb/globalnode). |

### GlobalNode {#constructor-3}

> **GlobalNode**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [GlobalNode](/vext/ref/fb/globalnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [GlobalNode](/vext/ref/fb/globalnode). |

## Properties

### {{% prop-heading "outputs" %}}

> **[UINodePort](/vext/ref/fb/uinodeport)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GlobalNode](/vext/ref/fb/globalnode) type.

