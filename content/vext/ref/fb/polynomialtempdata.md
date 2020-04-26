---
title: PolynomialTempData
---

## Summary

### Constructors

|  |
| --- |
| **[PolynomialTempData](#constructor-0)**() |
| **[PolynomialTempData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "coefficients" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "scaleValue" >}} | float |
| {{< prop "minClamp" >}} | float |
| {{< prop "maxClamp" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [PolynomialTempData](/vext/ref/fb/polynomialtempdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PolynomialTempData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PolynomialTempData {#constructor-0}

> **PolynomialTempData**()

Creates a new [PolynomialTempData](/vext/ref/fb/polynomialtempdata) frostbite instance.

### PolynomialTempData {#constructor-1}

> **PolynomialTempData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PolynomialTempData](/vext/ref/fb/polynomialtempdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "coefficients" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "scaleValue" %}}

> **float**

### {{% prop-heading "minClamp" %}}

> **float**

### {{% prop-heading "maxClamp" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [PolynomialTempData](/vext/ref/fb/polynomialtempdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[PolynomialTempData](/vext/ref/fb/polynomialtempdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PolynomialTempData](/vext/ref/fb/polynomialtempdata) type.

