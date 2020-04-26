---
title: PolynomialOperatorData
---

Inherits from 
[EvaluatorData](/vext/ref/fb/evaluatordata)

## Summary
### Constructors
| |
| ----------- |
| **[PolynomialOperatorData](#constructor-0)**() |
| **[PolynomialOperatorData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PolynomialOperatorData](#constructor-2)**(other: [EvaluatorData](/vext/ref/fb/evaluatordata)) |
| **[PolynomialOperatorData](#constructor-3)**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata)) |
| **[PolynomialOperatorData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "firstOperand" >}} | [PolynomialTempData](/vext/ref/fb/polynomialtempdata) |
| {{< prop "secondOperand" >}} | [PolynomialTempData](/vext/ref/fb/polynomialtempdata) |
| {{< prop "operation" >}} | [PolynomialOperation](/vext/ref/fb/polynomialoperation) |
| {{< prop "minClampResult" >}} | float |
| {{< prop "maxClampResult" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PolynomialOperatorData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PolynomialOperatorData {#constructor-0}
> **PolynomialOperatorData**()

Creates a new [PolynomialOperatorData](/vext/ref/fb/polynomialoperatordata) frostbite instance.

### PolynomialOperatorData {#constructor-1}
> **PolynomialOperatorData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PolynomialOperatorData](/vext/ref/fb/polynomialoperatordata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PolynomialOperatorData {#constructor-2}
> **PolynomialOperatorData**(other: [EvaluatorData](/vext/ref/fb/evaluatordata))

Casts an instance of type [EvaluatorData](/vext/ref/fb/evaluatordata) to [PolynomialOperatorData](/vext/ref/fb/polynomialoperatordata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EvaluatorData](/vext/ref/fb/evaluatordata) | The instance to cast to [PolynomialOperatorData](/vext/ref/fb/polynomialoperatordata). |

### PolynomialOperatorData {#constructor-3}
> **PolynomialOperatorData**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata))

Casts an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata) to [PolynomialOperatorData](/vext/ref/fb/polynomialoperatordata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EmitterComponentData](/vext/ref/fb/emittercomponentdata) | The instance to cast to [PolynomialOperatorData](/vext/ref/fb/polynomialoperatordata). |

### PolynomialOperatorData {#constructor-4}
> **PolynomialOperatorData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PolynomialOperatorData](/vext/ref/fb/polynomialoperatordata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PolynomialOperatorData](/vext/ref/fb/polynomialoperatordata). |

## Properties
### {{% prop-heading "firstOperand" %}}
> **[PolynomialTempData](/vext/ref/fb/polynomialtempdata)**

### {{% prop-heading "secondOperand" %}}
> **[PolynomialTempData](/vext/ref/fb/polynomialtempdata)**

### {{% prop-heading "operation" %}}
> **[PolynomialOperation](/vext/ref/fb/polynomialoperation)**

### {{% prop-heading "minClampResult" %}}
> **float**

### {{% prop-heading "maxClampResult" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PolynomialOperatorData](/vext/ref/fb/polynomialoperatordata) type.

