---
title: StatSurveyEvent
---
### Base Classes

[MetricEvent](MetricEvent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| StatSurveyEvent()                                                          | Create a new instance of this container type.                                                                         |
| StatSurveyEvent(StatSurveyEvent other)                                     | Create a reference copy of an instance of the same type.                                                              |
| StatSurveyEvent([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [StatSurveyEvent](StatSurveyEvent).                          |
| StatSurveyEvent([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatSurveyEvent](StatSurveyEvent). |

## Properties

| Name             | Type                              | Description |
| ---------------- | --------------------------------- | ----------- |
| surveyMetricLink | [Guid](/vext/ref/shared/class/Guid) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [StatSurveyEvent](StatSurveyEvent) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatSurveyEvent](StatSurveyEvent) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
