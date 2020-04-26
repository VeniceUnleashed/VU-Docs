---
title: VehicleTrackerRenderTargetData
---


## Summary
### Constructors
| |
| ----------- |
| **[VehicleTrackerRenderTargetData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "positionOffset" >}} | [Vec2](/vext/ref/shared/class/vec2) |
| {{< prop "renderTargetIndex" >}} | int |
| {{< prop "renderTargetApectRatio" >}} | float |
| {{< prop "scaleSize" >}} | float |
| {{< prop "useRenderTarget" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [VehicleTrackerRenderTargetData](/vext/ref/fb/vehicletrackerrendertargetdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VehicleTrackerRenderTargetData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VehicleTrackerRenderTargetData {#constructor-0}
> **VehicleTrackerRenderTargetData**()

Creates a new [VehicleTrackerRenderTargetData](/vext/ref/fb/vehicletrackerrendertargetdata) frostbite structure.

## Properties
### {{% prop-heading "positionOffset" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**

### {{% prop-heading "renderTargetIndex" %}}
> **int**

### {{% prop-heading "renderTargetApectRatio" %}}
> **float**

### {{% prop-heading "scaleSize" %}}
> **float**

### {{% prop-heading "useRenderTarget" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [VehicleTrackerRenderTargetData](/vext/ref/fb/vehicletrackerrendertargetdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[VehicleTrackerRenderTargetData](/vext/ref/fb/vehicletrackerrendertargetdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VehicleTrackerRenderTargetData](/vext/ref/fb/vehicletrackerrendertargetdata) type.

