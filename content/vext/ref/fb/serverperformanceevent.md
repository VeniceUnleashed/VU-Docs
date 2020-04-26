---
title: ServerPerformanceEvent
---

Inherits from 
[MetricEvent](/vext/ref/fb/metricevent)

## Summary
### Constructors
| |
| ----------- |
| **[ServerPerformanceEvent](#constructor-0)**() |
| **[ServerPerformanceEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ServerPerformanceEvent](#constructor-2)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[ServerPerformanceEvent](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "cpuAverage" >}} | float |
| {{< prop "cpuMemory" >}} | float |
| {{< prop "received" >}} | int |
| {{< prop "sent" >}} | int |
| {{< prop "receivedAverage" >}} | float |
| {{< prop "sentAverage" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ServerPerformanceEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ServerPerformanceEvent {#constructor-0}
> **ServerPerformanceEvent**()

Creates a new [ServerPerformanceEvent](/vext/ref/fb/serverperformanceevent) frostbite instance.

### ServerPerformanceEvent {#constructor-1}
> **ServerPerformanceEvent**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ServerPerformanceEvent](/vext/ref/fb/serverperformanceevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ServerPerformanceEvent {#constructor-2}
> **ServerPerformanceEvent**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [ServerPerformanceEvent](/vext/ref/fb/serverperformanceevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [ServerPerformanceEvent](/vext/ref/fb/serverperformanceevent). |

### ServerPerformanceEvent {#constructor-3}
> **ServerPerformanceEvent**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ServerPerformanceEvent](/vext/ref/fb/serverperformanceevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ServerPerformanceEvent](/vext/ref/fb/serverperformanceevent). |

## Properties
### {{% prop-heading "cpuAverage" %}}
> **float**

### {{% prop-heading "cpuMemory" %}}
> **float**

### {{% prop-heading "received" %}}
> **int**

### {{% prop-heading "sent" %}}
> **int**

### {{% prop-heading "receivedAverage" %}}
> **float**

### {{% prop-heading "sentAverage" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ServerPerformanceEvent](/vext/ref/fb/serverperformanceevent) type.

