---
title: VehicleCustomizationAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[VehicleCustomizationAsset](#constructor-0)**() |
| **[VehicleCustomizationAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VehicleCustomizationAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[VehicleCustomizationAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "customization" >}} | [CustomizationTable](/vext/ref/fb/customizationtable) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VehicleCustomizationAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VehicleCustomizationAsset {#constructor-0}
> **VehicleCustomizationAsset**()

Creates a new [VehicleCustomizationAsset](/vext/ref/fb/vehiclecustomizationasset) frostbite instance.

### VehicleCustomizationAsset {#constructor-1}
> **VehicleCustomizationAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VehicleCustomizationAsset](/vext/ref/fb/vehiclecustomizationasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VehicleCustomizationAsset {#constructor-2}
> **VehicleCustomizationAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [VehicleCustomizationAsset](/vext/ref/fb/vehiclecustomizationasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [VehicleCustomizationAsset](/vext/ref/fb/vehiclecustomizationasset). |

### VehicleCustomizationAsset {#constructor-3}
> **VehicleCustomizationAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleCustomizationAsset](/vext/ref/fb/vehiclecustomizationasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VehicleCustomizationAsset](/vext/ref/fb/vehiclecustomizationasset). |

## Properties
### {{% prop-heading "customization" %}}
> **[CustomizationTable](/vext/ref/fb/customizationtable)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VehicleCustomizationAsset](/vext/ref/fb/vehiclecustomizationasset) type.

