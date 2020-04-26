---
title: FireEffectData
---


## Summary
### Constructors
| |
| ----------- |
| **[FireEffectData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "rotation" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "offset" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "zoomRotation" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "zoomOffset" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "effect" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint) \| nil |
| {{< prop "useZoomOffset" >}} | bool |
| {{< prop "useZoomRotation" >}} | bool |
| {{< prop "disableDuringZoom" >}} | bool |
| {{< prop "updateTransform" >}} | bool |
| {{< prop "stopLoopingEffects" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [FireEffectData](/vext/ref/fb/fireeffectdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "FireEffectData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### FireEffectData {#constructor-0}
> **FireEffectData**()

Creates a new [FireEffectData](/vext/ref/fb/fireeffectdata) frostbite structure.

## Properties
### {{% prop-heading "rotation" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "offset" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "zoomRotation" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "zoomOffset" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "effect" %}}
> **[EffectBlueprint](/vext/ref/fb/effectblueprint)** | **nil**

### {{% prop-heading "useZoomOffset" %}}
> **bool**

### {{% prop-heading "useZoomRotation" %}}
> **bool**

### {{% prop-heading "disableDuringZoom" %}}
> **bool**

### {{% prop-heading "updateTransform" %}}
> **bool**

### {{% prop-heading "stopLoopingEffects" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [FireEffectData](/vext/ref/fb/fireeffectdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[FireEffectData](/vext/ref/fb/fireeffectdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [FireEffectData](/vext/ref/fb/fireeffectdata) type.

