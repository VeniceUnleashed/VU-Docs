---
title: DebugSurveyEvent
---
### Base Classes

[MetricEvent](/vext/ref/fb/metricevent/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| DebugSurveyEvent()                                                          | Create a new instance of this container type.                                                                           |
| DebugSurveyEvent(DebugSurveyEvent other)                                    | Create a reference copy of an instance of the same type.                                                                |
| DebugSurveyEvent([MetricEvent](/vext/ref/fb/metricevent/) other)                          | Upcast an instance of type [MetricEvent](/vext/ref/fb/metricevent/) to [DebugSurveyEvent](/vext/ref/fb/debugsurveyevent/).                          |
| DebugSurveyEvent([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DebugSurveyEvent](/vext/ref/fb/debugsurveyevent/). |

## Properties

| Name             | Type                              | Description |
| ---------------- | --------------------------------- | ----------- |
| playerName       | string                            |             |
| surveyMetricLink | [Guid](/vext/ref/shared/class/guid) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [DebugSurveyEvent](/vext/ref/fb/debugsurveyevent/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DebugSurveyEvent](/vext/ref/fb/debugsurveyevent/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
