---
title: CameraLeapData
---


## Summary
### Constructors
| |
| ----------- |
| **[CameraLeapData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "transform" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "time" >}} | float |
| {{< prop "fovModifier" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [CameraLeapData](/vext/ref/fb/cameraleapdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CameraLeapData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CameraLeapData {#constructor-0}
> **CameraLeapData**()

Creates a new [CameraLeapData](/vext/ref/fb/cameraleapdata) frostbite structure.

## Properties
### {{% prop-heading "transform" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "time" %}}
> **float**

### {{% prop-heading "fovModifier" %}}
> **float**

## Methods
### Clone
> **Clone**(): [CameraLeapData](/vext/ref/fb/cameraleapdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[CameraLeapData](/vext/ref/fb/cameraleapdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CameraLeapData](/vext/ref/fb/cameraleapdata) type.

