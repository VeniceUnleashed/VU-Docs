---
title: PerformanceProfileState
---

Inherits from [MetricState](/vext/ref/fb/metricstate)

## Summary

### Constructors

|  |
| --- |
| **[PerformanceProfileState](#constructor-0)**() |
| **[PerformanceProfileState](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PerformanceProfileState](#constructor-2)**(other: [MetricState](/vext/ref/fb/metricstate)) |
| **[PerformanceProfileState](#constructor-3)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[PerformanceProfileState](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "processorCount" >}} | int |
| {{< prop "processorCoreCount" >}} | int |
| {{< prop "processorClock" >}} | int |
| {{< prop "totalMemMB" >}} | int |
| {{< prop "gpuMemMB" >}} | int |
| {{< prop "graphicAdapterName" >}} | string |
| {{< prop "platform" >}} | string |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PerformanceProfileState" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PerformanceProfileState {#constructor-0}

> **PerformanceProfileState**()

Creates a new [PerformanceProfileState](/vext/ref/fb/performanceprofilestate) frostbite instance.

### PerformanceProfileState {#constructor-1}

> **PerformanceProfileState**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PerformanceProfileState](/vext/ref/fb/performanceprofilestate) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PerformanceProfileState {#constructor-2}

> **PerformanceProfileState**(other: [MetricState](/vext/ref/fb/metricstate))

Casts an instance of type [MetricState](/vext/ref/fb/metricstate) to [PerformanceProfileState](/vext/ref/fb/performanceprofilestate). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricState](/vext/ref/fb/metricstate) | The instance to cast to [PerformanceProfileState](/vext/ref/fb/performanceprofilestate). |

### PerformanceProfileState {#constructor-3}

> **PerformanceProfileState**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [PerformanceProfileState](/vext/ref/fb/performanceprofilestate). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [PerformanceProfileState](/vext/ref/fb/performanceprofilestate). |

### PerformanceProfileState {#constructor-4}

> **PerformanceProfileState**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PerformanceProfileState](/vext/ref/fb/performanceprofilestate). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PerformanceProfileState](/vext/ref/fb/performanceprofilestate). |

## Properties

### {{% prop-heading "processorCount" %}}

> **int**

### {{% prop-heading "processorCoreCount" %}}

> **int**

### {{% prop-heading "processorClock" %}}

> **int**

### {{% prop-heading "totalMemMB" %}}

> **int**

### {{% prop-heading "gpuMemMB" %}}

> **int**

### {{% prop-heading "graphicAdapterName" %}}

> **string**

### {{% prop-heading "platform" %}}

> **string**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PerformanceProfileState](/vext/ref/fb/performanceprofilestate) type.

