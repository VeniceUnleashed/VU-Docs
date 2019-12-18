---
title: FramerateHistogramPerformanceEvent (Frostbite Container)
---
### Base Classes

[MetricEvent](MetricEvent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                   | Description                                                                                                                                                 |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FramerateHistogramPerformanceEvent()                                                          | Create a new instance of this container type.                                                                                                               |
| FramerateHistogramPerformanceEvent(FramerateHistogramPerformanceEvent other)                  | Create a reference copy of an instance of the same type.                                                                                                    |
| FramerateHistogramPerformanceEvent([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [FramerateHistogramPerformanceEvent](FramerateHistogramPerformanceEvent).                          |
| FramerateHistogramPerformanceEvent([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [FramerateHistogramPerformanceEvent](FramerateHistogramPerformanceEvent). |

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
| performanceLink | [Guid](/vext/ref/cls/shr/Guid) |             |

## Methods

| Type                                                                     | Name            | Parameters                                     |
| ------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [FramerateHistogramPerformanceEvent](FramerateHistogramPerformanceEvent) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [FramerateHistogramPerformanceEvent](FramerateHistogramPerformanceEvent) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
