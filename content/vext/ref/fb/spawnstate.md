---
title: SpawnState
---
### Base Classes

[MetricState](/vext/ref/fb/metricstate/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| SpawnState()                                                          | Create a new instance of this container type.                                                               |
| SpawnState(SpawnState other)                                          | Create a reference copy of an instance of the same type.                                                    |
| SpawnState([MetricState](/vext/ref/fb/metricstate/) other)                          | Upcast an instance of type [MetricState](/vext/ref/fb/metricstate/) to [SpawnState](/vext/ref/fb/spawnstate/).                          |
| SpawnState([MetricEvent](/vext/ref/fb/metricevent/) other)                          | Upcast an instance of type [MetricEvent](/vext/ref/fb/metricevent/) to [SpawnState](/vext/ref/fb/spawnstate/).                          |
| SpawnState([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpawnState](/vext/ref/fb/spawnstate/). |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| team | number |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [SpawnState](/vext/ref/fb/spawnstate/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpawnState](/vext/ref/fb/spawnstate/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
