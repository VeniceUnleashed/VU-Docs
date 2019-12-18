---
title: ReceivedAwardSurveyEvent (Frostbite Container)
---
### Base Classes

[MetricEvent](MetricEvent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ReceivedAwardSurveyEvent()                                                          | Create a new instance of this container type.                                                                                           |
| ReceivedAwardSurveyEvent(ReceivedAwardSurveyEvent other)                            | Create a reference copy of an instance of the same type.                                                                                |
| ReceivedAwardSurveyEvent([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [ReceivedAwardSurveyEvent](ReceivedAwardSurveyEvent).                          |
| ReceivedAwardSurveyEvent([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ReceivedAwardSurveyEvent](ReceivedAwardSurveyEvent). |

## Properties

| Name             | Type                              | Description |
| ---------------- | --------------------------------- | ----------- |
| awardName        | string                            |             |
| surveyMetricLink | [Guid](/vext/ref/cls/shr/Guid) |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ReceivedAwardSurveyEvent](ReceivedAwardSurveyEvent) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ReceivedAwardSurveyEvent](ReceivedAwardSurveyEvent) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
