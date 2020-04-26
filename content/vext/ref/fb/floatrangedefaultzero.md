---
title: FloatRangeDefaultZero
---

## Summary

### Constructors

|  |
| --- |
| **[FloatRangeDefaultZero](#constructor-0)**() |
| **[FloatRangeDefaultZero](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "min" >}} | float |
| {{< prop "max" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [FloatRangeDefaultZero](/vext/ref/fb/floatrangedefaultzero) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "FloatRangeDefaultZero" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### FloatRangeDefaultZero {#constructor-0}

> **FloatRangeDefaultZero**()

Creates a new [FloatRangeDefaultZero](/vext/ref/fb/floatrangedefaultzero) frostbite instance.

### FloatRangeDefaultZero {#constructor-1}

> **FloatRangeDefaultZero**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [FloatRangeDefaultZero](/vext/ref/fb/floatrangedefaultzero) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

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

> **Clone**(): [FloatRangeDefaultZero](/vext/ref/fb/floatrangedefaultzero)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[FloatRangeDefaultZero](/vext/ref/fb/floatrangedefaultzero)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [FloatRangeDefaultZero](/vext/ref/fb/floatrangedefaultzero) type.

