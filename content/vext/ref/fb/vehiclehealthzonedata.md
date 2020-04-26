---
title: VehicleHealthZoneData
---


## Summary
### Constructors
| |
| ----------- |
| **[VehicleHealthZoneData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "maxHealth" >}} | float |
| {{< prop "maxShieldHealth" >}} | float |
| {{< prop "damageAngleMultiplier" >}} | float |
| {{< prop "minDamageAngle" >}} | float |
| {{< prop "useDamageAngleCalculation" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VehicleHealthZoneData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VehicleHealthZoneData {#constructor-0}
> **VehicleHealthZoneData**()

Creates a new [VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata) frostbite structure.

## Properties
### {{% prop-heading "maxHealth" %}}
> **float**

### {{% prop-heading "maxShieldHealth" %}}
> **float**

### {{% prop-heading "damageAngleMultiplier" %}}
> **float**

### {{% prop-heading "minDamageAngle" %}}
> **float**

### {{% prop-heading "useDamageAngleCalculation" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata) type.

