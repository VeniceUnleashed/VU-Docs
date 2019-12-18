---
title: ServerPerformanceEvent (Frostbite Container)
---
### Base Classes

[MetricEvent](MetricEvent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| ServerPerformanceEvent()                                                          | Create a new instance of this container type.                                                                                       |
| ServerPerformanceEvent(ServerPerformanceEvent other)                              | Create a reference copy of an instance of the same type.                                                                            |
| ServerPerformanceEvent([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [ServerPerformanceEvent](ServerPerformanceEvent).                          |
| ServerPerformanceEvent([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ServerPerformanceEvent](ServerPerformanceEvent). |

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
| [ServerPerformanceEvent](ServerPerformanceEvent) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ServerPerformanceEvent](ServerPerformanceEvent) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
