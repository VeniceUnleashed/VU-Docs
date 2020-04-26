---
title: VehicleState
---

Inherits from 
[MetricState](/vext/ref/fb/metricstate)

## Summary
### Constructors
| |
| ----------- |
| **[VehicleState](#constructor-0)**() |
| **[VehicleState](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VehicleState](#constructor-2)**(other: [MetricState](/vext/ref/fb/metricstate)) |
| **[VehicleState](#constructor-3)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[VehicleState](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "vehicleName" >}} | string |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VehicleState" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VehicleState {#constructor-0}
> **VehicleState**()

Creates a new [VehicleState](/vext/ref/fb/vehiclestate) frostbite instance.

### VehicleState {#constructor-1}
> **VehicleState**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VehicleState](/vext/ref/fb/vehiclestate) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VehicleState {#constructor-2}
> **VehicleState**(other: [MetricState](/vext/ref/fb/metricstate))

Casts an instance of type [MetricState](/vext/ref/fb/metricstate) to [VehicleState](/vext/ref/fb/vehiclestate). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricState](/vext/ref/fb/metricstate) | The instance to cast to [VehicleState](/vext/ref/fb/vehiclestate). |

### VehicleState {#constructor-3}
> **VehicleState**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [VehicleState](/vext/ref/fb/vehiclestate). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [VehicleState](/vext/ref/fb/vehiclestate). |

### VehicleState {#constructor-4}
> **VehicleState**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleState](/vext/ref/fb/vehiclestate). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VehicleState](/vext/ref/fb/vehiclestate). |

## Properties
### {{% prop-heading "vehicleName" %}}
> **string**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VehicleState](/vext/ref/fb/vehiclestate) type.

