---
title: LensFlareElement
---


## Summary
### Constructors
| |
| ----------- |
| **[LensFlareElement](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "sizeCamDistCurve" >}} | [Vec4](/vext/ref/shared/class/vec4) |
| {{< prop "sizeAngleCurve" >}} | [Vec4](/vext/ref/shared/class/vec4) |
| {{< prop "size" >}} | [Vec2](/vext/ref/shared/class/vec2) |
| {{< prop "sizeOccluderCurve" >}} | [Vec4](/vext/ref/shared/class/vec4) |
| {{< prop "sizeScreenPosCurve" >}} | [Vec4](/vext/ref/shared/class/vec4) |
| {{< prop "alphaCamDistCurve" >}} | [Vec4](/vext/ref/shared/class/vec4) |
| {{< prop "alphaOccluderCurve" >}} | [Vec4](/vext/ref/shared/class/vec4) |
| {{< prop "alphaAngleCurve" >}} | [Vec4](/vext/ref/shared/class/vec4) |
| {{< prop "alphaScreenPosCurve" >}} | [Vec4](/vext/ref/shared/class/vec4) |
| {{< prop "sizeCamDistMax" >}} | float |
| {{< prop "rayDistance" >}} | float |
| {{< prop "shader" >}} | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset) \| nil |
| {{< prop "alphaCamDistMax" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [LensFlareElement](/vext/ref/fb/lensflareelement) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LensFlareElement" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LensFlareElement {#constructor-0}
> **LensFlareElement**()

Creates a new [LensFlareElement](/vext/ref/fb/lensflareelement) frostbite structure.

## Properties
### {{% prop-heading "sizeCamDistCurve" %}}
> **[Vec4](/vext/ref/shared/class/vec4)**

### {{% prop-heading "sizeAngleCurve" %}}
> **[Vec4](/vext/ref/shared/class/vec4)**

### {{% prop-heading "size" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**

### {{% prop-heading "sizeOccluderCurve" %}}
> **[Vec4](/vext/ref/shared/class/vec4)**

### {{% prop-heading "sizeScreenPosCurve" %}}
> **[Vec4](/vext/ref/shared/class/vec4)**

### {{% prop-heading "alphaCamDistCurve" %}}
> **[Vec4](/vext/ref/shared/class/vec4)**

### {{% prop-heading "alphaOccluderCurve" %}}
> **[Vec4](/vext/ref/shared/class/vec4)**

### {{% prop-heading "alphaAngleCurve" %}}
> **[Vec4](/vext/ref/shared/class/vec4)**

### {{% prop-heading "alphaScreenPosCurve" %}}
> **[Vec4](/vext/ref/shared/class/vec4)**

### {{% prop-heading "sizeCamDistMax" %}}
> **float**

### {{% prop-heading "rayDistance" %}}
> **float**

### {{% prop-heading "shader" %}}
> **[SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset)** | **nil**

### {{% prop-heading "alphaCamDistMax" %}}
> **float**

## Methods
### Clone
> **Clone**(): [LensFlareElement](/vext/ref/fb/lensflareelement)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[LensFlareElement](/vext/ref/fb/lensflareelement)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LensFlareElement](/vext/ref/fb/lensflareelement) type.

