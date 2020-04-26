---
title: AimingConstraintsData
---


## Summary
### Constructors
| |
| ----------- |
| **[AimingConstraintsData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "minYaw" >}} | float |
| {{< prop "maxYaw" >}} | float |
| {{< prop "minPitch" >}} | float |
| {{< prop "maxPitch" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AimingConstraintsData](/vext/ref/fb/aimingconstraintsdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AimingConstraintsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AimingConstraintsData {#constructor-0}
> **AimingConstraintsData**()

Creates a new [AimingConstraintsData](/vext/ref/fb/aimingconstraintsdata) frostbite structure.

## Properties
### {{% prop-heading "minYaw" %}}
> **float**

### {{% prop-heading "maxYaw" %}}
> **float**

### {{% prop-heading "minPitch" %}}
> **float**

### {{% prop-heading "maxPitch" %}}
> **float**

## Methods
### Clone
> **Clone**(): [AimingConstraintsData](/vext/ref/fb/aimingconstraintsdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AimingConstraintsData](/vext/ref/fb/aimingconstraintsdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AimingConstraintsData](/vext/ref/fb/aimingconstraintsdata) type.

