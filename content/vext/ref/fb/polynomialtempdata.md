---
title: PolynomialTempData
---


## Summary
### Constructors
| |
| ----------- |
| **[PolynomialTempData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "coefficients" >}} | [Vec4](/vext/ref/shared/class/vec4) |
| {{< prop "scaleValue" >}} | float |
| {{< prop "minClamp" >}} | float |
| {{< prop "maxClamp" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [PolynomialTempData](/vext/ref/fb/polynomialtempdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PolynomialTempData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PolynomialTempData {#constructor-0}
> **PolynomialTempData**()

Creates a new [PolynomialTempData](/vext/ref/fb/polynomialtempdata) frostbite structure.

## Properties
### {{% prop-heading "coefficients" %}}
> **[Vec4](/vext/ref/shared/class/vec4)**

### {{% prop-heading "scaleValue" %}}
> **float**

### {{% prop-heading "minClamp" %}}
> **float**

### {{% prop-heading "maxClamp" %}}
> **float**

## Methods
### Clone
> **Clone**(): [PolynomialTempData](/vext/ref/fb/polynomialtempdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[PolynomialTempData](/vext/ref/fb/polynomialtempdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PolynomialTempData](/vext/ref/fb/polynomialtempdata) type.

