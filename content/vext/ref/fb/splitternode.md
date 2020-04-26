---
title: SplitterNode
---

Inherits from [UINodeData](/vext/ref/fb/uinodedata)

## Summary

### Constructors

|  |
| --- |
| **[SplitterNode](#constructor-0)**() |
| **[SplitterNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SplitterNode](#constructor-2)**(other: [UINodeData](/vext/ref/fb/uinodedata)) |
| **[SplitterNode](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "outputs" >}} | [UINodePort](/vext/ref/fb/uinodeport)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SplitterNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SplitterNode {#constructor-0}

> **SplitterNode**()

Creates a new [SplitterNode](/vext/ref/fb/splitternode) frostbite instance.

### SplitterNode {#constructor-1}

> **SplitterNode**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SplitterNode](/vext/ref/fb/splitternode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SplitterNode {#constructor-2}

> **SplitterNode**(other: [UINodeData](/vext/ref/fb/uinodedata))

Casts an instance of type [UINodeData](/vext/ref/fb/uinodedata) to [SplitterNode](/vext/ref/fb/splitternode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UINodeData](/vext/ref/fb/uinodedata) | The instance to cast to [SplitterNode](/vext/ref/fb/splitternode). |

### SplitterNode {#constructor-3}

> **SplitterNode**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SplitterNode](/vext/ref/fb/splitternode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SplitterNode](/vext/ref/fb/splitternode). |

## Properties

### {{% prop-heading "inValue" %}}

> **[UINodePort](/vext/ref/fb/uinodeport)** \| **nil**

### {{% prop-heading "outputs" %}}

> **[UINodePort](/vext/ref/fb/uinodeport)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SplitterNode](/vext/ref/fb/splitternode) type.

