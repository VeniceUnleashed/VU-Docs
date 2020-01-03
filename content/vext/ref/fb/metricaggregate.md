---
title: MetricAggregate
---
### Base Classes

[MetricEvent](/vext/ref/fb/metricevent/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| MetricAggregate()                                                          | Create a new instance of this container type.                                                                         |
| MetricAggregate(MetricAggregate other)                                     | Create a reference copy of an instance of the same type.                                                              |
| MetricAggregate([MetricEvent](/vext/ref/fb/metricevent/) other)                          | Upcast an instance of type [MetricEvent](/vext/ref/fb/metricevent/) to [MetricAggregate](/vext/ref/fb/metricaggregate/).                          |
| MetricAggregate([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MetricAggregate](/vext/ref/fb/metricaggregate/). |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [MetricAggregate](/vext/ref/fb/metricaggregate/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MetricAggregate](/vext/ref/fb/metricaggregate/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
