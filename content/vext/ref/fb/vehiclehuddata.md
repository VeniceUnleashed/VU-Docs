---
title: VehicleHudData
---


## Summary
### Constructors
| |
| ----------- |
| **[VehicleHudData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "customizationOffset" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "customization" >}} | [VehicleCustomizationAsset](/vext/ref/fb/vehiclecustomizationasset) \| nil |
| {{< prop "minimapIcon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "texture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "vehicleItemHash" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [VehicleHudData](/vext/ref/fb/vehiclehuddata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VehicleHudData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VehicleHudData {#constructor-0}
> **VehicleHudData**()

Creates a new [VehicleHudData](/vext/ref/fb/vehiclehuddata) frostbite structure.

## Properties
### {{% prop-heading "customizationOffset" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "customization" %}}
> **[VehicleCustomizationAsset](/vext/ref/fb/vehiclecustomizationasset)** | **nil**

### {{% prop-heading "minimapIcon" %}}
> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "texture" %}}
> **[TextureAsset](/vext/ref/fb/textureasset)** | **nil**

### {{% prop-heading "vehicleItemHash" %}}
> **int**

## Methods
### Clone
> **Clone**(): [VehicleHudData](/vext/ref/fb/vehiclehuddata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[VehicleHudData](/vext/ref/fb/vehiclehuddata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VehicleHudData](/vext/ref/fb/vehiclehuddata) type.

