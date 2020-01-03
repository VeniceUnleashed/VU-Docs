---
title: ScoreAggregate
---
### Base Classes

[MetricAggregate](/vext/ref/fb/metricaggregate/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| ScoreAggregate()                                                          | Create a new instance of this container type.                                                                       |
| ScoreAggregate(ScoreAggregate other)                                      | Create a reference copy of an instance of the same type.                                                            |
| ScoreAggregate([MetricAggregate](/vext/ref/fb/metricaggregate/) other)                  | Upcast an instance of type [MetricAggregate](/vext/ref/fb/metricaggregate/) to [ScoreAggregate](/vext/ref/fb/scoreaggregate/).                  |
| ScoreAggregate([MetricEvent](/vext/ref/fb/metricevent/) other)                          | Upcast an instance of type [MetricEvent](/vext/ref/fb/metricevent/) to [ScoreAggregate](/vext/ref/fb/scoreaggregate/).                          |
| ScoreAggregate([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ScoreAggregate](/vext/ref/fb/scoreaggregate/). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| totalScore | number |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [ScoreAggregate](/vext/ref/fb/scoreaggregate/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ScoreAggregate](/vext/ref/fb/scoreaggregate/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
