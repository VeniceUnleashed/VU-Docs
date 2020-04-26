---
title: ColorTintData
---


## Summary
### Constructors
| |
| ----------- |
| **[ColorTintData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "contrast" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "brightness" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "saturation" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "hue" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [ColorTintData](/vext/ref/fb/colortintdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ColorTintData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ColorTintData {#constructor-0}
> **ColorTintData**()

Creates a new [ColorTintData](/vext/ref/fb/colortintdata) frostbite structure.

## Properties
### {{% prop-heading "contrast" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "brightness" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "saturation" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "hue" %}}
> **float**

## Methods
### Clone
> **Clone**(): [ColorTintData](/vext/ref/fb/colortintdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[ColorTintData](/vext/ref/fb/colortintdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ColorTintData](/vext/ref/fb/colortintdata) type.

