---
title: VehicleInputTweakData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[VehicleInputTweakData](#constructor-0)**() |
| **[VehicleInputTweakData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VehicleInputTweakData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inputTweakType" >}} | [VehicleInputTweakType](/vext/ref/fb/vehicleinputtweaktype) |
| {{< prop "minSpeed" >}} | float |
| {{< prop "maxSpeed" >}} | float |
| {{< prop "minSpeedScale" >}} | float |
| {{< prop "maxSpeedScale" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VehicleInputTweakData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VehicleInputTweakData {#constructor-0}

> **VehicleInputTweakData**()

Creates a new [VehicleInputTweakData](/vext/ref/fb/vehicleinputtweakdata) frostbite instance.

### VehicleInputTweakData {#constructor-1}

> **VehicleInputTweakData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VehicleInputTweakData](/vext/ref/fb/vehicleinputtweakdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VehicleInputTweakData {#constructor-2}

> **VehicleInputTweakData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VehicleInputTweakData](/vext/ref/fb/vehicleinputtweakdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VehicleInputTweakData](/vext/ref/fb/vehicleinputtweakdata). |

## Properties

### {{% prop-heading "inputTweakType" %}}

> **[VehicleInputTweakType](/vext/ref/fb/vehicleinputtweaktype)**

### {{% prop-heading "minSpeed" %}}

> **float**

### {{% prop-heading "maxSpeed" %}}

> **float**

### {{% prop-heading "minSpeedScale" %}}

> **float**

### {{% prop-heading "maxSpeedScale" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VehicleInputTweakData](/vext/ref/fb/vehicleinputtweakdata) type.

