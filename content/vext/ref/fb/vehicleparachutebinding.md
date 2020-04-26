---
title: VehicleParachuteBinding
---


## Summary
### Constructors
| |
| ----------- |
| **[VehicleParachuteBinding](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "enabled" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "vehicleType" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [VehicleParachuteBinding](/vext/ref/fb/vehicleparachutebinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VehicleParachuteBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VehicleParachuteBinding {#constructor-0}
> **VehicleParachuteBinding**()

Creates a new [VehicleParachuteBinding](/vext/ref/fb/vehicleparachutebinding) frostbite structure.

## Properties
### {{% prop-heading "enabled" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "vehicleType" %}}
> **[AntRef](/vext/ref/fb/antref)**

## Methods
### Clone
> **Clone**(): [VehicleParachuteBinding](/vext/ref/fb/vehicleparachutebinding)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[VehicleParachuteBinding](/vext/ref/fb/vehicleparachutebinding)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VehicleParachuteBinding](/vext/ref/fb/vehicleparachutebinding) type.

