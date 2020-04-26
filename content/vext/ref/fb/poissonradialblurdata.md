---
title: PoissonRadialBlurData
---


## Summary
### Constructors
| |
| ----------- |
| **[PoissonRadialBlurData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "poissonDiscScale" >}} | [Vec2](/vext/ref/shared/class/vec2) |
| {{< prop "blendFactor" >}} | float |
| {{< prop "radialScale" >}} | float |
| {{< prop "radialExponent" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [PoissonRadialBlurData](/vext/ref/fb/poissonradialblurdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PoissonRadialBlurData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PoissonRadialBlurData {#constructor-0}
> **PoissonRadialBlurData**()

Creates a new [PoissonRadialBlurData](/vext/ref/fb/poissonradialblurdata) frostbite structure.

## Properties
### {{% prop-heading "poissonDiscScale" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**

### {{% prop-heading "blendFactor" %}}
> **float**

### {{% prop-heading "radialScale" %}}
> **float**

### {{% prop-heading "radialExponent" %}}
> **float**

## Methods
### Clone
> **Clone**(): [PoissonRadialBlurData](/vext/ref/fb/poissonradialblurdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[PoissonRadialBlurData](/vext/ref/fb/poissonradialblurdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PoissonRadialBlurData](/vext/ref/fb/poissonradialblurdata) type.

