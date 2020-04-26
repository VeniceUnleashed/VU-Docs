---
title: UIPartData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[UIPartData](#constructor-0)**() |
| **[UIPartData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UIPartData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIPartData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIPartData {#constructor-0}

> **UIPartData**()

Creates a new [UIPartData](/vext/ref/fb/uipartdata) frostbite instance.

### UIPartData {#constructor-1}

> **UIPartData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIPartData](/vext/ref/fb/uipartdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UIPartData {#constructor-2}

> **UIPartData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UIPartData](/vext/ref/fb/uipartdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UIPartData](/vext/ref/fb/uipartdata). |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIPartData](/vext/ref/fb/uipartdata) type.

