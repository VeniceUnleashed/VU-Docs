---
title: AimingPoseData
---


## Summary
### Constructors
| |
| ----------- |
| **[AimingPoseData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "minimumPitch" >}} | float |
| {{< prop "maximumPitch" >}} | float |
| {{< prop "targetingFov" >}} | float |
| {{< prop "aimSteadiness" >}} | float |
| {{< prop "speedMultiplier" >}} | float |
| {{< prop "recoilMultiplier" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AimingPoseData](/vext/ref/fb/aimingposedata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AimingPoseData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AimingPoseData {#constructor-0}
> **AimingPoseData**()

Creates a new [AimingPoseData](/vext/ref/fb/aimingposedata) frostbite structure.

## Properties
### {{% prop-heading "minimumPitch" %}}
> **float**

### {{% prop-heading "maximumPitch" %}}
> **float**

### {{% prop-heading "targetingFov" %}}
> **float**

### {{% prop-heading "aimSteadiness" %}}
> **float**

### {{% prop-heading "speedMultiplier" %}}
> **float**

### {{% prop-heading "recoilMultiplier" %}}
> **float**

## Methods
### Clone
> **Clone**(): [AimingPoseData](/vext/ref/fb/aimingposedata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AimingPoseData](/vext/ref/fb/aimingposedata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AimingPoseData](/vext/ref/fb/aimingposedata) type.

