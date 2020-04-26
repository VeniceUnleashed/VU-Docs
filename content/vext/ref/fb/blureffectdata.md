---
title: BlurEffectData
---


## Summary
### Constructors
| |
| ----------- |
| **[BlurEffectData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "dispersionStrength" >}} | float |
| {{< prop "dispersionThreshhold" >}} | float |
| {{< prop "explosionStrength" >}} | float |
| {{< prop "bulletStrength" >}} | float |
| {{< prop "explosionFalloffSpeed" >}} | float |
| {{< prop "bulletFalloffSpeed" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [BlurEffectData](/vext/ref/fb/blureffectdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "BlurEffectData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### BlurEffectData {#constructor-0}
> **BlurEffectData**()

Creates a new [BlurEffectData](/vext/ref/fb/blureffectdata) frostbite structure.

## Properties
### {{% prop-heading "dispersionStrength" %}}
> **float**

### {{% prop-heading "dispersionThreshhold" %}}
> **float**

### {{% prop-heading "explosionStrength" %}}
> **float**

### {{% prop-heading "bulletStrength" %}}
> **float**

### {{% prop-heading "explosionFalloffSpeed" %}}
> **float**

### {{% prop-heading "bulletFalloffSpeed" %}}
> **float**

## Methods
### Clone
> **Clone**(): [BlurEffectData](/vext/ref/fb/blureffectdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[BlurEffectData](/vext/ref/fb/blureffectdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [BlurEffectData](/vext/ref/fb/blureffectdata) type.

