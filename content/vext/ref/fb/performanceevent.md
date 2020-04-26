---
title: PerformanceEvent
---

Inherits from [MetricEvent](/vext/ref/fb/metricevent)

## Summary

### Constructors

|  |
| --- |
| **[PerformanceEvent](#constructor-0)**() |
| **[PerformanceEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PerformanceEvent](#constructor-2)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[PerformanceEvent](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "position" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "freeCPUMemory" >}} | float |
| {{< prop "cpuAverage" >}} | float |
| {{< prop "allocCPUMemory" >}} | float |
| {{< prop "freeGPUMemory" >}} | float |
| {{< prop "gpuAverage" >}} | float |
| {{< prop "drawCallCount" >}} | int |
| {{< prop "primitiveCount" >}} | int |
| {{< prop "allocGPUMemory" >}} | float |
| {{< prop "performanceLocation" >}} | string |
| {{< prop "performanceLink" >}} | [Guid](/vext/ref/shared/type/guid) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PerformanceEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PerformanceEvent {#constructor-0}

> **PerformanceEvent**()

Creates a new [PerformanceEvent](/vext/ref/fb/performanceevent) frostbite instance.

### PerformanceEvent {#constructor-1}

> **PerformanceEvent**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PerformanceEvent](/vext/ref/fb/performanceevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PerformanceEvent {#constructor-2}

> **PerformanceEvent**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [PerformanceEvent](/vext/ref/fb/performanceevent). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [PerformanceEvent](/vext/ref/fb/performanceevent). |

### PerformanceEvent {#constructor-3}

> **PerformanceEvent**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PerformanceEvent](/vext/ref/fb/performanceevent). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PerformanceEvent](/vext/ref/fb/performanceevent). |

## Properties

### {{% prop-heading "position" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "freeCPUMemory" %}}

> **float**

### {{% prop-heading "cpuAverage" %}}

> **float**

### {{% prop-heading "allocCPUMemory" %}}

> **float**

### {{% prop-heading "freeGPUMemory" %}}

> **float**

### {{% prop-heading "gpuAverage" %}}

> **float**

### {{% prop-heading "drawCallCount" %}}

> **int**

### {{% prop-heading "primitiveCount" %}}

> **int**

### {{% prop-heading "allocGPUMemory" %}}

> **float**

### {{% prop-heading "performanceLocation" %}}

> **string**

### {{% prop-heading "performanceLink" %}}

> **[Guid](/vext/ref/shared/type/guid)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PerformanceEvent](/vext/ref/fb/performanceevent) type.

