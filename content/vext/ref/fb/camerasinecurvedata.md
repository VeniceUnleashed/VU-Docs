---
title: CameraSineCurveData
---


## Summary
### Constructors
| |
| ----------- |
| **[CameraSineCurveData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "frequency" >}} | float |
| {{< prop "amplitude" >}} | float |
| {{< prop "phaseShift" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [CameraSineCurveData](/vext/ref/fb/camerasinecurvedata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CameraSineCurveData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CameraSineCurveData {#constructor-0}
> **CameraSineCurveData**()

Creates a new [CameraSineCurveData](/vext/ref/fb/camerasinecurvedata) frostbite structure.

## Properties
### {{% prop-heading "frequency" %}}
> **float**

### {{% prop-heading "amplitude" %}}
> **float**

### {{% prop-heading "phaseShift" %}}
> **float**

## Methods
### Clone
> **Clone**(): [CameraSineCurveData](/vext/ref/fb/camerasinecurvedata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[CameraSineCurveData](/vext/ref/fb/camerasinecurvedata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CameraSineCurveData](/vext/ref/fb/camerasinecurvedata) type.

