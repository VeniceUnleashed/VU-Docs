---
title: DataIncrementNode
---

Inherits from [UINodeData](/vext/ref/fb/uinodedata)

## Summary

### Constructors

|  |
| --- |
| **[DataIncrementNode](#constructor-0)**() |
| **[DataIncrementNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DataIncrementNode](#constructor-2)**(other: [UINodeData](/vext/ref/fb/uinodedata)) |
| **[DataIncrementNode](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "out" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "max" >}} | float |
| {{< prop "min" >}} | float |
| {{< prop "incrementSize" >}} | float |
| {{< prop "dataSource" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DataIncrementNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DataIncrementNode {#constructor-0}

> **DataIncrementNode**()

Creates a new [DataIncrementNode](/vext/ref/fb/dataincrementnode) frostbite instance.

### DataIncrementNode {#constructor-1}

> **DataIncrementNode**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DataIncrementNode](/vext/ref/fb/dataincrementnode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DataIncrementNode {#constructor-2}

> **DataIncrementNode**(other: [UINodeData](/vext/ref/fb/uinodedata))

Casts an instance of type [UINodeData](/vext/ref/fb/uinodedata) to [DataIncrementNode](/vext/ref/fb/dataincrementnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UINodeData](/vext/ref/fb/uinodedata) | The instance to cast to [DataIncrementNode](/vext/ref/fb/dataincrementnode). |

### DataIncrementNode {#constructor-3}

> **DataIncrementNode**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DataIncrementNode](/vext/ref/fb/dataincrementnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DataIncrementNode](/vext/ref/fb/dataincrementnode). |

## Properties

### {{% prop-heading "inValue" %}}

> **[UINodePort](/vext/ref/fb/uinodeport)** \| **nil**

### {{% prop-heading "out" %}}

> **[UINodePort](/vext/ref/fb/uinodeport)** \| **nil**

### {{% prop-heading "max" %}}

> **float**

### {{% prop-heading "min" %}}

> **float**

### {{% prop-heading "incrementSize" %}}

> **float**

### {{% prop-heading "dataSource" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DataIncrementNode](/vext/ref/fb/dataincrementnode) type.

