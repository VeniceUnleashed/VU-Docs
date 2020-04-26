---
title: BinaryLogicNode
---

Inherits from [UINodeData](/vext/ref/fb/uinodedata)

## Summary

### Constructors

|  |
| --- |
| **[BinaryLogicNode](#constructor-0)**() |
| **[BinaryLogicNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[BinaryLogicNode](#constructor-2)**(other: [UINodeData](/vext/ref/fb/uinodedata)) |
| **[BinaryLogicNode](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "trueValue" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "falseValue" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "dataSourceInfo" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BinaryLogicNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BinaryLogicNode {#constructor-0}

> **BinaryLogicNode**()

Creates a new [BinaryLogicNode](/vext/ref/fb/binarylogicnode) frostbite instance.

### BinaryLogicNode {#constructor-1}

> **BinaryLogicNode**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BinaryLogicNode](/vext/ref/fb/binarylogicnode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### BinaryLogicNode {#constructor-2}

> **BinaryLogicNode**(other: [UINodeData](/vext/ref/fb/uinodedata))

Casts an instance of type [UINodeData](/vext/ref/fb/uinodedata) to [BinaryLogicNode](/vext/ref/fb/binarylogicnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UINodeData](/vext/ref/fb/uinodedata) | The instance to cast to [BinaryLogicNode](/vext/ref/fb/binarylogicnode). |

### BinaryLogicNode {#constructor-3}

> **BinaryLogicNode**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [BinaryLogicNode](/vext/ref/fb/binarylogicnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [BinaryLogicNode](/vext/ref/fb/binarylogicnode). |

## Properties

### {{% prop-heading "inValue" %}}

> **[UINodePort](/vext/ref/fb/uinodeport)** \| **nil**

### {{% prop-heading "trueValue" %}}

> **[UINodePort](/vext/ref/fb/uinodeport)** \| **nil**

### {{% prop-heading "falseValue" %}}

> **[UINodePort](/vext/ref/fb/uinodeport)** \| **nil**

### {{% prop-heading "dataSourceInfo" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BinaryLogicNode](/vext/ref/fb/binarylogicnode) type.

