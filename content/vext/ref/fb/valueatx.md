---
title: ValueAtX
---

## Summary

### Constructors

|  |
| --- |
| **[ValueAtX](#constructor-0)**() |
| **[ValueAtX](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "x" >}} | float |
| {{< prop "value" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [ValueAtX](/vext/ref/fb/valueatx) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ValueAtX" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ValueAtX {#constructor-0}

> **ValueAtX**()

Creates a new [ValueAtX](/vext/ref/fb/valueatx) frostbite instance.

### ValueAtX {#constructor-1}

> **ValueAtX**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ValueAtX](/vext/ref/fb/valueatx) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "x" %}}

> **float**

### {{% prop-heading "value" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [ValueAtX](/vext/ref/fb/valueatx)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ValueAtX](/vext/ref/fb/valueatx)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ValueAtX](/vext/ref/fb/valueatx) type.

