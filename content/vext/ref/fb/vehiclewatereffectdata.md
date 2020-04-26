---
title: VehicleWaterEffectData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[VehicleWaterEffectData](#constructor-0)**() |
| **[VehicleWaterEffectData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VehicleWaterEffectData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "position" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "effect" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VehicleWaterEffectData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VehicleWaterEffectData {#constructor-0}
> **VehicleWaterEffectData**()

Creates a new [VehicleWaterEffectData](/vext/ref/fb/vehiclewatereffectdata) frostbite instance.

### VehicleWaterEffectData {#constructor-1}
> **VehicleWaterEffectData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VehicleWaterEffectData](/vext/ref/fb/vehiclewatereffectdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VehicleWaterEffectData {#constructor-2}
> **VehicleWaterEffectData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleWaterEffectData](/vext/ref/fb/vehiclewatereffectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VehicleWaterEffectData](/vext/ref/fb/vehiclewatereffectdata). |

## Properties
### {{% prop-heading "position" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "effect" %}}
> **[EffectBlueprint](/vext/ref/fb/effectblueprint)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VehicleWaterEffectData](/vext/ref/fb/vehiclewatereffectdata) type.

