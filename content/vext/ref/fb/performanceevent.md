---
title: PerformanceEvent
---
### Base Classes

[MetricEvent](MetricEvent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| PerformanceEvent()                                                          | Create a new instance of this container type.                                                                           |
| PerformanceEvent(PerformanceEvent other)                                    | Create a reference copy of an instance of the same type.                                                                |
| PerformanceEvent([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [PerformanceEvent](PerformanceEvent).                          |
| PerformanceEvent([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PerformanceEvent](PerformanceEvent). |

## Properties

| Name                | Type                              | Description |
| ------------------- | --------------------------------- | ----------- |
| position            | [Vec3](/vext/ref/shared/class/vec3) |             |
| freeCPUMemory       | number                            |             |
| cpuAverage          | number                            |             |
| allocCPUMemory      | number                            |             |
| freeGPUMemory       | number                            |             |
| gpuAverage          | number                            |             |
| drawCallCount       | number                            |             |
| primitiveCount      | number                            |             |
| allocGPUMemory      | number                            |             |
| performanceLocation | string                            |             |
| performanceLink     | [Guid](/vext/ref/shared/class/guid) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [PerformanceEvent](PerformanceEvent) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PerformanceEvent](PerformanceEvent) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
