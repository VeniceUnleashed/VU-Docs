---
title: PolynomialColorInterpData
---

Inherits from [EvaluatorData](/vext/ref/fb/evaluatordata)

## Summary

### Constructors

|  |
| --- |
| **[PolynomialColorInterpData](#constructor-0)**() |
| **[PolynomialColorInterpData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PolynomialColorInterpData](#constructor-2)**(other: [EvaluatorData](/vext/ref/fb/evaluatordata)) |
| **[PolynomialColorInterpData](#constructor-3)**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata)) |
| **[PolynomialColorInterpData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "color0" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "color1" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "coefficients" >}} | [Vec4](/vext/ref/shared/type/vec4) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PolynomialColorInterpData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PolynomialColorInterpData {#constructor-0}

> **PolynomialColorInterpData**()

Creates a new [PolynomialColorInterpData](/vext/ref/fb/polynomialcolorinterpdata) frostbite instance.

### PolynomialColorInterpData {#constructor-1}

> **PolynomialColorInterpData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PolynomialColorInterpData](/vext/ref/fb/polynomialcolorinterpdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PolynomialColorInterpData {#constructor-2}

> **PolynomialColorInterpData**(other: [EvaluatorData](/vext/ref/fb/evaluatordata))

Casts an instance of type [EvaluatorData](/vext/ref/fb/evaluatordata) to [PolynomialColorInterpData](/vext/ref/fb/polynomialcolorinterpdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EvaluatorData](/vext/ref/fb/evaluatordata) | The instance to cast to [PolynomialColorInterpData](/vext/ref/fb/polynomialcolorinterpdata). |

### PolynomialColorInterpData {#constructor-3}

> **PolynomialColorInterpData**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata))

Casts an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata) to [PolynomialColorInterpData](/vext/ref/fb/polynomialcolorinterpdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EmitterComponentData](/vext/ref/fb/emittercomponentdata) | The instance to cast to [PolynomialColorInterpData](/vext/ref/fb/polynomialcolorinterpdata). |

### PolynomialColorInterpData {#constructor-4}

> **PolynomialColorInterpData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PolynomialColorInterpData](/vext/ref/fb/polynomialcolorinterpdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PolynomialColorInterpData](/vext/ref/fb/polynomialcolorinterpdata). |

## Properties

### {{% prop-heading "color0" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "color1" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "coefficients" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PolynomialColorInterpData](/vext/ref/fb/polynomialcolorinterpdata) type.

