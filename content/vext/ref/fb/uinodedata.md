---
title: UINodeData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[UINodeData](#constructor-0)**() |
| **[UINodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UINodeData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "parentGraph" >}} | [Asset](/vext/ref/fb/asset) \| nil |
| {{< prop "isRootNode" >}} | bool |
| {{< prop "parentIsScreen" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UINodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UINodeData {#constructor-0}

> **UINodeData**()

Creates a new [UINodeData](/vext/ref/fb/uinodedata) frostbite instance.

### UINodeData {#constructor-1}

> **UINodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UINodeData](/vext/ref/fb/uinodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UINodeData {#constructor-2}

> **UINodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UINodeData](/vext/ref/fb/uinodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UINodeData](/vext/ref/fb/uinodedata). |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "parentGraph" %}}

> **[Asset](/vext/ref/fb/asset)** \| **nil**

### {{% prop-heading "isRootNode" %}}

> **bool**

### {{% prop-heading "parentIsScreen" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UINodeData](/vext/ref/fb/uinodedata) type.

