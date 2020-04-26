---
title: TurnEffectData
---


## Summary
### Constructors
| |
| ----------- |
| **[TurnEffectData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "maxRollAngle" >}} | float |
| {{< prop "maxPitchAngle" >}} | float |
| {{< prop "yawVelocityThreshhold" >}} | float |
| {{< prop "velocityThreshhold" >}} | float |
| {{< prop "safeTime" >}} | float |
| {{< prop "beginTime" >}} | float |
| {{< prop "holdTime" >}} | float |
| {{< prop "endTime" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [TurnEffectData](/vext/ref/fb/turneffectdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TurnEffectData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TurnEffectData {#constructor-0}
> **TurnEffectData**()

Creates a new [TurnEffectData](/vext/ref/fb/turneffectdata) frostbite structure.

## Properties
### {{% prop-heading "maxRollAngle" %}}
> **float**

### {{% prop-heading "maxPitchAngle" %}}
> **float**

### {{% prop-heading "yawVelocityThreshhold" %}}
> **float**

### {{% prop-heading "velocityThreshhold" %}}
> **float**

### {{% prop-heading "safeTime" %}}
> **float**

### {{% prop-heading "beginTime" %}}
> **float**

### {{% prop-heading "holdTime" %}}
> **float**

### {{% prop-heading "endTime" %}}
> **float**

## Methods
### Clone
> **Clone**(): [TurnEffectData](/vext/ref/fb/turneffectdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[TurnEffectData](/vext/ref/fb/turneffectdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TurnEffectData](/vext/ref/fb/turneffectdata) type.

