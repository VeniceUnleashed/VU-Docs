---
title: NetworkPerformanceEvent
---

Inherits from [MetricEvent](/vext/ref/fb/metricevent)

## Summary

### Constructors

|  |
| --- |
| **[NetworkPerformanceEvent](#constructor-0)**() |
| **[NetworkPerformanceEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[NetworkPerformanceEvent](#constructor-2)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[NetworkPerformanceEvent](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "received" >}} | int |
| {{< prop "sent" >}} | int |
| {{< prop "receivedAverage" >}} | float |
| {{< prop "sentAverage" >}} | float |
| {{< prop "performanceLink" >}} | [Guid](/vext/ref/shared/type/guid) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "NetworkPerformanceEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### NetworkPerformanceEvent {#constructor-0}

> **NetworkPerformanceEvent**()

Creates a new [NetworkPerformanceEvent](/vext/ref/fb/networkperformanceevent) frostbite instance.

### NetworkPerformanceEvent {#constructor-1}

> **NetworkPerformanceEvent**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [NetworkPerformanceEvent](/vext/ref/fb/networkperformanceevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### NetworkPerformanceEvent {#constructor-2}

> **NetworkPerformanceEvent**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [NetworkPerformanceEvent](/vext/ref/fb/networkperformanceevent). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [NetworkPerformanceEvent](/vext/ref/fb/networkperformanceevent). |

### NetworkPerformanceEvent {#constructor-3}

> **NetworkPerformanceEvent**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [NetworkPerformanceEvent](/vext/ref/fb/networkperformanceevent). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [NetworkPerformanceEvent](/vext/ref/fb/networkperformanceevent). |

## Properties

### {{% prop-heading "received" %}}

> **int**

### {{% prop-heading "sent" %}}

> **int**

### {{% prop-heading "receivedAverage" %}}

> **float**

### {{% prop-heading "sentAverage" %}}

> **float**

### {{% prop-heading "performanceLink" %}}

> **[Guid](/vext/ref/shared/type/guid)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [NetworkPerformanceEvent](/vext/ref/fb/networkperformanceevent) type.

