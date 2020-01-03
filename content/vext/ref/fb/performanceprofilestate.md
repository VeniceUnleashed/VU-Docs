---
title: PerformanceProfileState
---
### Base Classes

[MetricState](MetricState)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| PerformanceProfileState()                                                          | Create a new instance of this container type.                                                                                         |
| PerformanceProfileState(PerformanceProfileState other)                             | Create a reference copy of an instance of the same type.                                                                              |
| PerformanceProfileState([MetricState](MetricState) other)                          | Upcast an instance of type [MetricState](MetricState) to [PerformanceProfileState](PerformanceProfileState).                          |
| PerformanceProfileState([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [PerformanceProfileState](PerformanceProfileState).                          |
| PerformanceProfileState([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PerformanceProfileState](PerformanceProfileState). |

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
| [PerformanceProfileState](PerformanceProfileState) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PerformanceProfileState](PerformanceProfileState) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
