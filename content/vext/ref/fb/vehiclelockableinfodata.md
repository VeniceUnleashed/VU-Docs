---
title: VehicleLockableInfoData
---


## Summary
### Constructors
| |
| ----------- |
| **[VehicleLockableInfoData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "heatSignature" >}} | float |
| {{< prop "radarSignature" >}} | float |
| {{< prop "lowAltitudeHeight" >}} | float |
| {{< prop "lowAltitudeHeatSignature" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [VehicleLockableInfoData](/vext/ref/fb/vehiclelockableinfodata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VehicleLockableInfoData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VehicleLockableInfoData {#constructor-0}
> **VehicleLockableInfoData**()

Creates a new [VehicleLockableInfoData](/vext/ref/fb/vehiclelockableinfodata) frostbite structure.

## Properties
### {{% prop-heading "heatSignature" %}}
> **float**

### {{% prop-heading "radarSignature" %}}
> **float**

### {{% prop-heading "lowAltitudeHeight" %}}
> **float**

### {{% prop-heading "lowAltitudeHeatSignature" %}}
> **float**

## Methods
### Clone
> **Clone**(): [VehicleLockableInfoData](/vext/ref/fb/vehiclelockableinfodata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[VehicleLockableInfoData](/vext/ref/fb/vehiclelockableinfodata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VehicleLockableInfoData](/vext/ref/fb/vehiclelockableinfodata) type.

