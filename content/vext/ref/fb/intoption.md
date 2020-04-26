---
title: IntOption
---

## Summary

### Constructors

|  |
| --- |
| **[IntOption](#constructor-0)**() |
| **[IntOption](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "value" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [IntOption](/vext/ref/fb/intoption) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "IntOption" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### IntOption {#constructor-0}

> **IntOption**()

Creates a new [IntOption](/vext/ref/fb/intoption) frostbite instance.

### IntOption {#constructor-1}

> **IntOption**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [IntOption](/vext/ref/fb/intoption) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "value" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [IntOption](/vext/ref/fb/intoption)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[IntOption](/vext/ref/fb/intoption)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [IntOption](/vext/ref/fb/intoption) type.

