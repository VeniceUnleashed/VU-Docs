---
title: SpawnSurveyEvent (Frostbite Container)
---
### Base Classes

[MetricEvent](MetricEvent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SpawnSurveyEvent()                                                          | Create a new instance of this container type.                                                                           |
| SpawnSurveyEvent(SpawnSurveyEvent other)                                    | Create a reference copy of an instance of the same type.                                                                |
| SpawnSurveyEvent([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [SpawnSurveyEvent](SpawnSurveyEvent).                          |
| SpawnSurveyEvent([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SpawnSurveyEvent](SpawnSurveyEvent). |

## Properties

| Name             | Type                              | Description |
| ---------------- | --------------------------------- | ----------- |
| surveyMetricLink | [Guid](/vext/ref/cls/shr/Guid) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [SpawnSurveyEvent](SpawnSurveyEvent) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SpawnSurveyEvent](SpawnSurveyEvent) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
