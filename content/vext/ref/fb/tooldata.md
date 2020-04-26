---
title: ToolData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[ToolData](#constructor-0)**() |
| **[ToolData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ToolData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "isAlwaysActive" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ToolData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ToolData {#constructor-0}

> **ToolData**()

Creates a new [ToolData](/vext/ref/fb/tooldata) frostbite instance.

### ToolData {#constructor-1}

> **ToolData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ToolData](/vext/ref/fb/tooldata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ToolData {#constructor-2}

> **ToolData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ToolData](/vext/ref/fb/tooldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ToolData](/vext/ref/fb/tooldata). |

## Properties

### {{% prop-heading "isAlwaysActive" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ToolData](/vext/ref/fb/tooldata) type.

