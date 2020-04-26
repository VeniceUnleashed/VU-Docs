---
title: DynamicLink
---

## Summary

### Constructors

|  |
| --- |
| **[DynamicLink](#constructor-0)**() |
| **[DynamicLink](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "id" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [DynamicLink](/vext/ref/fb/dynamiclink) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DynamicLink" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DynamicLink {#constructor-0}

> **DynamicLink**()

Creates a new [DynamicLink](/vext/ref/fb/dynamiclink) frostbite instance.

### DynamicLink {#constructor-1}

> **DynamicLink**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DynamicLink](/vext/ref/fb/dynamiclink) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "id" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [DynamicLink](/vext/ref/fb/dynamiclink)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DynamicLink](/vext/ref/fb/dynamiclink)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DynamicLink](/vext/ref/fb/dynamiclink) type.

