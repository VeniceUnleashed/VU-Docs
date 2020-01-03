---
title: PerformanceProfileState
---
### Base Classes

[MetricState](/vext/ref/fb/metricstate/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| PerformanceProfileState()                                                          | Create a new instance of this container type.                                                                                         |
| PerformanceProfileState(PerformanceProfileState other)                             | Create a reference copy of an instance of the same type.                                                                              |
| PerformanceProfileState([MetricState](/vext/ref/fb/metricstate/) other)                          | Upcast an instance of type [MetricState](/vext/ref/fb/metricstate/) to [PerformanceProfileState](/vext/ref/fb/performanceprofilestate/).                          |
| PerformanceProfileState([MetricEvent](/vext/ref/fb/metricevent/) other)                          | Upcast an instance of type [MetricEvent](/vext/ref/fb/metricevent/) to [PerformanceProfileState](/vext/ref/fb/performanceprofilestate/).                          |
| PerformanceProfileState([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PerformanceProfileState](/vext/ref/fb/performanceprofilestate/). |

## Properties

| Name               | Type   | Description |
| ------------------ | ------ | ----------- |
| processorCount     | number |             |
| processorCoreCount | number |             |
| processorClock     | number |             |
| totalMemMB         | number |             |
| gpuMemMB           | number |             |
| graphicAdapterName | string |             |
| platform           | string |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PerformanceProfileState](/vext/ref/fb/performanceprofilestate/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PerformanceProfileState](/vext/ref/fb/performanceprofilestate/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
