---
title: FramerateHistogramPerformanceEvent
---

Inherits from 
[MetricEvent](/vext/ref/fb/metricevent)

## Summary
### Constructors
| |
| ----------- |
| **[FramerateHistogramPerformanceEvent](#constructor-0)**() |
| **[FramerateHistogramPerformanceEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[FramerateHistogramPerformanceEvent](#constructor-2)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[FramerateHistogramPerformanceEvent](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "spikeAverage" >}} | float |
| {{< prop "below5" >}} | float |
| {{< prop "below10" >}} | float |
| {{< prop "below15" >}} | float |
| {{< prop "below20" >}} | float |
| {{< prop "below25" >}} | float |
| {{< prop "below30" >}} | float |
| {{< prop "below60" >}} | float |
| {{< prop "above60" >}} | float |
| {{< prop "performanceLink" >}} | [Guid](/vext/ref/shared/class/guid) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "FramerateHistogramPerformanceEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### FramerateHistogramPerformanceEvent {#constructor-0}
> **FramerateHistogramPerformanceEvent**()

Creates a new [FramerateHistogramPerformanceEvent](/vext/ref/fb/frameratehistogramperformanceevent) frostbite instance.

### FramerateHistogramPerformanceEvent {#constructor-1}
> **FramerateHistogramPerformanceEvent**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [FramerateHistogramPerformanceEvent](/vext/ref/fb/frameratehistogramperformanceevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### FramerateHistogramPerformanceEvent {#constructor-2}
> **FramerateHistogramPerformanceEvent**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [FramerateHistogramPerformanceEvent](/vext/ref/fb/frameratehistogramperformanceevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [FramerateHistogramPerformanceEvent](/vext/ref/fb/frameratehistogramperformanceevent). |

### FramerateHistogramPerformanceEvent {#constructor-3}
> **FramerateHistogramPerformanceEvent**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FramerateHistogramPerformanceEvent](/vext/ref/fb/frameratehistogramperformanceevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [FramerateHistogramPerformanceEvent](/vext/ref/fb/frameratehistogramperformanceevent). |

## Properties
### {{% prop-heading "spikeAverage" %}}
> **float**

### {{% prop-heading "below5" %}}
> **float**

### {{% prop-heading "below10" %}}
> **float**

### {{% prop-heading "below15" %}}
> **float**

### {{% prop-heading "below20" %}}
> **float**

### {{% prop-heading "below25" %}}
> **float**

### {{% prop-heading "below30" %}}
> **float**

### {{% prop-heading "below60" %}}
> **float**

### {{% prop-heading "above60" %}}
> **float**

### {{% prop-heading "performanceLink" %}}
> **[Guid](/vext/ref/shared/class/guid)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [FramerateHistogramPerformanceEvent](/vext/ref/fb/frameratehistogramperformanceevent) type.

