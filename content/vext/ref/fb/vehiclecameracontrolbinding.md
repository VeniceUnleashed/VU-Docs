---
title: VehicleCameraControlBinding
---


## Summary
### Constructors
| |
| ----------- |
| **[VehicleCameraControlBinding](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "enableAnimatedVehicleCamera" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [VehicleCameraControlBinding](/vext/ref/fb/vehiclecameracontrolbinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VehicleCameraControlBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VehicleCameraControlBinding {#constructor-0}
> **VehicleCameraControlBinding**()

Creates a new [VehicleCameraControlBinding](/vext/ref/fb/vehiclecameracontrolbinding) frostbite structure.

## Properties
### {{% prop-heading "enableAnimatedVehicleCamera" %}}
> **[AntRef](/vext/ref/fb/antref)**

## Methods
### Clone
> **Clone**(): [VehicleCameraControlBinding](/vext/ref/fb/vehiclecameracontrolbinding)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[VehicleCameraControlBinding](/vext/ref/fb/vehiclecameracontrolbinding)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VehicleCameraControlBinding](/vext/ref/fb/vehiclecameracontrolbinding) type.

