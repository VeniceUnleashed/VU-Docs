---
title: ScoreAggregate (Frostbite Container)
---
### Base Classes

[MetricAggregate](MetricAggregate)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| ScoreAggregate()                                                          | Create a new instance of this container type.                                                                       |
| ScoreAggregate(ScoreAggregate other)                                      | Create a reference copy of an instance of the same type.                                                            |
| ScoreAggregate([MetricAggregate](MetricAggregate) other)                  | Upcast an instance of type [MetricAggregate](MetricAggregate) to [ScoreAggregate](ScoreAggregate).                  |
| ScoreAggregate([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [ScoreAggregate](ScoreAggregate).                          |
| ScoreAggregate([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ScoreAggregate](ScoreAggregate). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| totalScore | number |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [ScoreAggregate](ScoreAggregate) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ScoreAggregate](ScoreAggregate) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
