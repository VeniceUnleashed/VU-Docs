---
title: FloatRange
---

## Summary

### Constructors

|  |
| --- |
| **[FloatRange](#constructor-0)**() |
| **[FloatRange](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "min" >}} | float |
| {{< prop "max" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [FloatRange](/vext/ref/fb/floatrange) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "FloatRange" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### FloatRange {#constructor-0}

> **FloatRange**()

Creates a new [FloatRange](/vext/ref/fb/floatrange) frostbite instance.

### FloatRange {#constructor-1}

> **FloatRange**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [FloatRange](/vext/ref/fb/floatrange) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "min" %}}

> **float**

### {{% prop-heading "max" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [FloatRange](/vext/ref/fb/floatrange)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[FloatRange](/vext/ref/fb/floatrange)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [FloatRange](/vext/ref/fb/floatrange) type.

