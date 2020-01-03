---
title: ServerPerformanceEvent
---
### Base Classes

[MetricEvent](/vext/ref/fb/metricevent/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| ServerPerformanceEvent()                                                          | Create a new instance of this container type.                                                                                       |
| ServerPerformanceEvent(ServerPerformanceEvent other)                              | Create a reference copy of an instance of the same type.                                                                            |
| ServerPerformanceEvent([MetricEvent](/vext/ref/fb/metricevent/) other)                          | Upcast an instance of type [MetricEvent](/vext/ref/fb/metricevent/) to [ServerPerformanceEvent](/vext/ref/fb/serverperformanceevent/).                          |
| ServerPerformanceEvent([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ServerPerformanceEvent](/vext/ref/fb/serverperformanceevent/). |

## Properties

| Name            | Type   | Description |
| --------------- | ------ | ----------- |
| cpuAverage      | number |             |
| cpuMemory       | number |             |
| received        | number |             |
| sent            | number |             |
| receivedAverage | number |             |
| sentAverage     | number |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ServerPerformanceEvent](/vext/ref/fb/serverperformanceevent/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ServerPerformanceEvent](/vext/ref/fb/serverperformanceevent/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
