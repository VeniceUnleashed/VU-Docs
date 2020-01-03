---
title: FramerateHistogramPerformanceEvent
---
### Base Classes

[MetricEvent](/vext/ref/fb/metricevent/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                   | Description                                                                                                                                                 |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FramerateHistogramPerformanceEvent()                                                          | Create a new instance of this container type.                                                                                                               |
| FramerateHistogramPerformanceEvent(FramerateHistogramPerformanceEvent other)                  | Create a reference copy of an instance of the same type.                                                                                                    |
| FramerateHistogramPerformanceEvent([MetricEvent](/vext/ref/fb/metricevent/) other)                          | Upcast an instance of type [MetricEvent](/vext/ref/fb/metricevent/) to [FramerateHistogramPerformanceEvent](/vext/ref/fb/frameratehistogramperformanceevent/).                          |
| FramerateHistogramPerformanceEvent([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FramerateHistogramPerformanceEvent](/vext/ref/fb/frameratehistogramperformanceevent/). |

## Properties

| Name            | Type                              | Description |
| --------------- | --------------------------------- | ----------- |
| spikeAverage    | number                            |             |
| below5          | number                            |             |
| below10         | number                            |             |
| below15         | number                            |             |
| below20         | number                            |             |
| below25         | number                            |             |
| below30         | number                            |             |
| below60         | number                            |             |
| above60         | number                            |             |
| performanceLink | [Guid](/vext/ref/shared/class/guid) |             |

## Methods

| Type                                                                     | Name            | Parameters                                     |
| ------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [FramerateHistogramPerformanceEvent](/vext/ref/fb/frameratehistogramperformanceevent/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FramerateHistogramPerformanceEvent](/vext/ref/fb/frameratehistogramperformanceevent/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
