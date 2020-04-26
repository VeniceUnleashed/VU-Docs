---
title: IndexRange
---

## Summary

### Constructors

|  |
| --- |
| **[IndexRange](#constructor-0)**() |
| **[IndexRange](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "first" >}} | int |
| {{< prop "last" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [IndexRange](/vext/ref/fb/indexrange) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "IndexRange" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### IndexRange {#constructor-0}

> **IndexRange**()

Creates a new [IndexRange](/vext/ref/fb/indexrange) frostbite instance.

### IndexRange {#constructor-1}

> **IndexRange**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [IndexRange](/vext/ref/fb/indexrange) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "first" %}}

> **int**

### {{% prop-heading "last" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [IndexRange](/vext/ref/fb/indexrange)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[IndexRange](/vext/ref/fb/indexrange)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [IndexRange](/vext/ref/fb/indexrange) type.

