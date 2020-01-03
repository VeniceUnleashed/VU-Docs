---
title: SurveyEvent
---
### Base Classes

[MetricEvent](MetricEvent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| SurveyEvent()                                                          | Create a new instance of this container type.                                                                 |
| SurveyEvent(SurveyEvent other)                                         | Create a reference copy of an instance of the same type.                                                      |
| SurveyEvent([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [SurveyEvent](SurveyEvent).                          |
| SurveyEvent([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SurveyEvent](SurveyEvent). |

## Properties

| Name             | Type                              | Description |
| ---------------- | --------------------------------- | ----------- |
| surveyName       | string                            |             |
| answerQuestion1  | number                            |             |
| answerQuestion2  | number                            |             |
| answerQuestion3  | number                            |             |
| answerQuestion4  | number                            |             |
| answerQuestion5  | number                            |             |
| freeTextField    | string                            |             |
| surveyMetricLink | [Guid](/vext/ref/shared/class/guid) |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [SurveyEvent](SurveyEvent) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SurveyEvent](SurveyEvent) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
