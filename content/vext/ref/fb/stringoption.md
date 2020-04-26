---
title: StringOption
---

## Summary

### Constructors

|  |
| --- |
| **[StringOption](#constructor-0)**() |
| **[StringOption](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "value" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [StringOption](/vext/ref/fb/stringoption) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "StringOption" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### StringOption {#constructor-0}

> **StringOption**()

Creates a new [StringOption](/vext/ref/fb/stringoption) frostbite instance.

### StringOption {#constructor-1}

> **StringOption**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [StringOption](/vext/ref/fb/stringoption) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "value" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [StringOption](/vext/ref/fb/stringoption)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[StringOption](/vext/ref/fb/stringoption)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [StringOption](/vext/ref/fb/stringoption) type.

