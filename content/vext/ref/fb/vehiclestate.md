---
title: VehicleState
---

Inherits from [MetricState](/vext/ref/fb/metricstate)

## Summary

### Constructors

|  |
| --- |
| **[VehicleState](#constructor-0)**() |
| **[VehicleState](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VehicleState](#constructor-2)**(other: [MetricState](/vext/ref/fb/metricstate)) |
| **[VehicleState](#constructor-3)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[VehicleState](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "vehicleName" >}} | string |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VehicleState" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VehicleState {#constructor-0}

> **VehicleState**()

Creates a new [VehicleState](/vext/ref/fb/vehiclestate) frostbite instance.

### VehicleState {#constructor-1}

> **VehicleState**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VehicleState](/vext/ref/fb/vehiclestate) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VehicleState {#constructor-2}

> **VehicleState**(other: [MetricState](/vext/ref/fb/metricstate))

Casts an instance of type [MetricState](/vext/ref/fb/metricstate) to [VehicleState](/vext/ref/fb/vehiclestate). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricState](/vext/ref/fb/metricstate) | The instance to cast to [VehicleState](/vext/ref/fb/vehiclestate). |

### VehicleState {#constructor-3}

> **VehicleState**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [VehicleState](/vext/ref/fb/vehiclestate). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [VehicleState](/vext/ref/fb/vehiclestate). |

### VehicleState {#constructor-4}

> **VehicleState**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VehicleState](/vext/ref/fb/vehiclestate). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VehicleState](/vext/ref/fb/vehiclestate). |

## Properties

### {{% prop-heading "vehicleName" %}}

> **string**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VehicleState](/vext/ref/fb/vehiclestate) type.

