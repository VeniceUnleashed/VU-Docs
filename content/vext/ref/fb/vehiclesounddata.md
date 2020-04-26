---
title: VehicleSoundData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[VehicleSoundData](#constructor-0)**() |
| **[VehicleSoundData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VehicleSoundData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "bulletImpact" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VehicleSoundData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VehicleSoundData {#constructor-0}

> **VehicleSoundData**()

Creates a new [VehicleSoundData](/vext/ref/fb/vehiclesounddata) frostbite instance.

### VehicleSoundData {#constructor-1}

> **VehicleSoundData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VehicleSoundData](/vext/ref/fb/vehiclesounddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VehicleSoundData {#constructor-2}

> **VehicleSoundData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VehicleSoundData](/vext/ref/fb/vehiclesounddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VehicleSoundData](/vext/ref/fb/vehiclesounddata). |

## Properties

### {{% prop-heading "bulletImpact" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VehicleSoundData](/vext/ref/fb/vehiclesounddata) type.

