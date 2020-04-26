---
title: UIButtonSet
---

## Summary

### Constructors

|  |
| --- |
| **[UIButtonSet](#constructor-0)**() |
| **[UIButtonSet](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "buttons" >}} | [UIButton](/vext/ref/fb/uibutton)[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UIButtonSet](/vext/ref/fb/uibuttonset) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIButtonSet" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIButtonSet {#constructor-0}

> **UIButtonSet**()

Creates a new [UIButtonSet](/vext/ref/fb/uibuttonset) frostbite instance.

### UIButtonSet {#constructor-1}

> **UIButtonSet**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIButtonSet](/vext/ref/fb/uibuttonset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "buttons" %}}

> **[UIButton](/vext/ref/fb/uibutton)**[]

## Methods

### Clone {#clone}

> **Clone**(): [UIButtonSet](/vext/ref/fb/uibuttonset)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UIButtonSet](/vext/ref/fb/uibuttonset)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIButtonSet](/vext/ref/fb/uibuttonset) type.

