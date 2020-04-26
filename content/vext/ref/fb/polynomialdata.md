---
title: PolynomialData
---

Inherits from 
[EvaluatorData](/vext/ref/fb/evaluatordata)

## Summary
### Constructors
| |
| ----------- |
| **[PolynomialData](#constructor-0)**() |
| **[PolynomialData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PolynomialData](#constructor-2)**(other: [EvaluatorData](/vext/ref/fb/evaluatordata)) |
| **[PolynomialData](#constructor-3)**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata)) |
| **[PolynomialData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "coefficients" >}} | [Vec4](/vext/ref/shared/class/vec4) |
| {{< prop "scaleValue" >}} | float |
| {{< prop "minClamp" >}} | float |
| {{< prop "maxClamp" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PolynomialData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PolynomialData {#constructor-0}
> **PolynomialData**()

Creates a new [PolynomialData](/vext/ref/fb/polynomialdata) frostbite instance.

### PolynomialData {#constructor-1}
> **PolynomialData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PolynomialData](/vext/ref/fb/polynomialdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PolynomialData {#constructor-2}
> **PolynomialData**(other: [EvaluatorData](/vext/ref/fb/evaluatordata))

Casts an instance of type [EvaluatorData](/vext/ref/fb/evaluatordata) to [PolynomialData](/vext/ref/fb/polynomialdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EvaluatorData](/vext/ref/fb/evaluatordata) | The instance to cast to [PolynomialData](/vext/ref/fb/polynomialdata). |

### PolynomialData {#constructor-3}
> **PolynomialData**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata))

Casts an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata) to [PolynomialData](/vext/ref/fb/polynomialdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EmitterComponentData](/vext/ref/fb/emittercomponentdata) | The instance to cast to [PolynomialData](/vext/ref/fb/polynomialdata). |

### PolynomialData {#constructor-4}
> **PolynomialData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PolynomialData](/vext/ref/fb/polynomialdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PolynomialData](/vext/ref/fb/polynomialdata). |

## Properties
### {{% prop-heading "coefficients" %}}
> **[Vec4](/vext/ref/shared/class/vec4)**

### {{% prop-heading "scaleValue" %}}
> **float**

### {{% prop-heading "minClamp" %}}
> **float**

### {{% prop-heading "maxClamp" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PolynomialData](/vext/ref/fb/polynomialdata) type.

