---
title: VehicleSoundData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[VehicleSoundData](#constructor-0)**() |
| **[VehicleSoundData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VehicleSoundData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "bulletImpact" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VehicleSoundData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VehicleSoundData {#constructor-0}
> **VehicleSoundData**()

Creates a new [VehicleSoundData](/vext/ref/fb/vehiclesounddata) frostbite instance.

### VehicleSoundData {#constructor-1}
> **VehicleSoundData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VehicleSoundData](/vext/ref/fb/vehiclesounddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VehicleSoundData {#constructor-2}
> **VehicleSoundData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleSoundData](/vext/ref/fb/vehiclesounddata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VehicleSoundData](/vext/ref/fb/vehiclesounddata). |

## Properties
### {{% prop-heading "bulletImpact" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VehicleSoundData](/vext/ref/fb/vehiclesounddata) type.

