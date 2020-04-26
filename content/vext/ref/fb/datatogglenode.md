---
title: DataToggleNode
---

Inherits from [UINodeData](/vext/ref/fb/uinodedata)

## Summary

### Constructors

|  |
| --- |
| **[DataToggleNode](#constructor-0)**() |
| **[DataToggleNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DataToggleNode](#constructor-2)**(other: [UINodeData](/vext/ref/fb/uinodedata)) |
| **[DataToggleNode](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "out" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "dataSource" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DataToggleNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DataToggleNode {#constructor-0}

> **DataToggleNode**()

Creates a new [DataToggleNode](/vext/ref/fb/datatogglenode) frostbite instance.

### DataToggleNode {#constructor-1}

> **DataToggleNode**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DataToggleNode](/vext/ref/fb/datatogglenode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DataToggleNode {#constructor-2}

> **DataToggleNode**(other: [UINodeData](/vext/ref/fb/uinodedata))

Casts an instance of type [UINodeData](/vext/ref/fb/uinodedata) to [DataToggleNode](/vext/ref/fb/datatogglenode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UINodeData](/vext/ref/fb/uinodedata) | The instance to cast to [DataToggleNode](/vext/ref/fb/datatogglenode). |

### DataToggleNode {#constructor-3}

> **DataToggleNode**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DataToggleNode](/vext/ref/fb/datatogglenode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DataToggleNode](/vext/ref/fb/datatogglenode). |

## Properties

### {{% prop-heading "inValue" %}}

> **[UINodePort](/vext/ref/fb/uinodeport)** \| **nil**

### {{% prop-heading "out" %}}

> **[UINodePort](/vext/ref/fb/uinodeport)** \| **nil**

### {{% prop-heading "dataSource" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DataToggleNode](/vext/ref/fb/datatogglenode) type.

