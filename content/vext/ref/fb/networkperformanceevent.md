---
title: NetworkPerformanceEvent
---
### Base Classes

[MetricEvent](MetricEvent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| NetworkPerformanceEvent()                                                          | Create a new instance of this container type.                                                                                         |
| NetworkPerformanceEvent(NetworkPerformanceEvent other)                             | Create a reference copy of an instance of the same type.                                                                              |
| NetworkPerformanceEvent([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [NetworkPerformanceEvent](NetworkPerformanceEvent).                          |
| NetworkPerformanceEvent([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [NetworkPerformanceEvent](NetworkPerformanceEvent). |

## Properties

| Name            | Type                              | Description |
| --------------- | --------------------------------- | ----------- |
| received        | number                            |             |
| sent            | number                            |             |
| receivedAverage | number                            |             |
| sentAverage     | number                            |             |
| performanceLink | [Guid](/vext/ref/shared/class/Guid) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [NetworkPerformanceEvent](NetworkPerformanceEvent) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [NetworkPerformanceEvent](NetworkPerformanceEvent) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
