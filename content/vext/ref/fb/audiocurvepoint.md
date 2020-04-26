---
title: AudioCurvePoint
---


## Summary
### Constructors
| |
| ----------- |
| **[AudioCurvePoint](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "x" >}} | float |
| {{< prop "y" >}} | float |
| {{< prop "k" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AudioCurvePoint](/vext/ref/fb/audiocurvepoint) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AudioCurvePoint" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AudioCurvePoint {#constructor-0}
> **AudioCurvePoint**()

Creates a new [AudioCurvePoint](/vext/ref/fb/audiocurvepoint) frostbite structure.

## Properties
### {{% prop-heading "x" %}}
> **float**

### {{% prop-heading "y" %}}
> **float**

### {{% prop-heading "k" %}}
> **float**

## Methods
### Clone
> **Clone**(): [AudioCurvePoint](/vext/ref/fb/audiocurvepoint)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AudioCurvePoint](/vext/ref/fb/audiocurvepoint)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AudioCurvePoint](/vext/ref/fb/audiocurvepoint) type.

