---
title: UITaggedVehicleCrosshair
---


## Summary
### Constructors
| |
| ----------- |
| **[UITaggedVehicleCrosshair](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "minDistance" >}} | float |
| {{< prop "maxDistance" >}} | float |
| {{< prop "minSize" >}} | int |
| {{< prop "maxSize" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UITaggedVehicleCrosshair](/vext/ref/fb/uitaggedvehiclecrosshair) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UITaggedVehicleCrosshair" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UITaggedVehicleCrosshair {#constructor-0}
> **UITaggedVehicleCrosshair**()

Creates a new [UITaggedVehicleCrosshair](/vext/ref/fb/uitaggedvehiclecrosshair) frostbite structure.

## Properties
### {{% prop-heading "minDistance" %}}
> **float**

### {{% prop-heading "maxDistance" %}}
> **float**

### {{% prop-heading "minSize" %}}
> **int**

### {{% prop-heading "maxSize" %}}
> **int**

## Methods
### Clone
> **Clone**(): [UITaggedVehicleCrosshair](/vext/ref/fb/uitaggedvehiclecrosshair)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UITaggedVehicleCrosshair](/vext/ref/fb/uitaggedvehiclecrosshair)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UITaggedVehicleCrosshair](/vext/ref/fb/uitaggedvehiclecrosshair) type.

