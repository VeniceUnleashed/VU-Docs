---
title: VehicleWaterEffectData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[VehicleWaterEffectData](#constructor-0)**() |
| **[VehicleWaterEffectData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VehicleWaterEffectData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "position" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "effect" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VehicleWaterEffectData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VehicleWaterEffectData {#constructor-0}

> **VehicleWaterEffectData**()

Creates a new [VehicleWaterEffectData](/vext/ref/fb/vehiclewatereffectdata) frostbite instance.

### VehicleWaterEffectData {#constructor-1}

> **VehicleWaterEffectData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VehicleWaterEffectData](/vext/ref/fb/vehiclewatereffectdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VehicleWaterEffectData {#constructor-2}

> **VehicleWaterEffectData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VehicleWaterEffectData](/vext/ref/fb/vehiclewatereffectdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VehicleWaterEffectData](/vext/ref/fb/vehiclewatereffectdata). |

## Properties

### {{% prop-heading "position" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "effect" %}}

> **[EffectBlueprint](/vext/ref/fb/effectblueprint)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VehicleWaterEffectData](/vext/ref/fb/vehiclewatereffectdata) type.

