---
title: EnterVehicleSurveyEvent (Frostbite Container)
---
### Base Classes

[MetricEvent](MetricEvent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| EnterVehicleSurveyEvent()                                                          | Create a new instance of this container type.                                                                                         |
| EnterVehicleSurveyEvent(EnterVehicleSurveyEvent other)                             | Create a reference copy of an instance of the same type.                                                                              |
| EnterVehicleSurveyEvent([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [EnterVehicleSurveyEvent](EnterVehicleSurveyEvent).                          |
| EnterVehicleSurveyEvent([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EnterVehicleSurveyEvent](EnterVehicleSurveyEvent). |

## Properties

| Name             | Type                              | Description |
| ---------------- | --------------------------------- | ----------- |
| vehicleName      | string                            |             |
| surveyMetricLink | [Guid](/vext/ref/cls/shr/Guid) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EnterVehicleSurveyEvent](EnterVehicleSurveyEvent) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EnterVehicleSurveyEvent](EnterVehicleSurveyEvent) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
