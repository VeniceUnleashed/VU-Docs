---
title: EnterVehicleSurveyEvent
---
### Base Classes

[MetricEvent](/vext/ref/fb/metricevent/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| EnterVehicleSurveyEvent()                                                          | Create a new instance of this container type.                                                                                         |
| EnterVehicleSurveyEvent(EnterVehicleSurveyEvent other)                             | Create a reference copy of an instance of the same type.                                                                              |
| EnterVehicleSurveyEvent([MetricEvent](/vext/ref/fb/metricevent/) other)                          | Upcast an instance of type [MetricEvent](/vext/ref/fb/metricevent/) to [EnterVehicleSurveyEvent](/vext/ref/fb/entervehiclesurveyevent/).                          |
| EnterVehicleSurveyEvent([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EnterVehicleSurveyEvent](/vext/ref/fb/entervehiclesurveyevent/). |

## Properties

| Name             | Type                              | Description |
| ---------------- | --------------------------------- | ----------- |
| vehicleName      | string                            |             |
| surveyMetricLink | [Guid](/vext/ref/shared/class/guid) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EnterVehicleSurveyEvent](/vext/ref/fb/entervehiclesurveyevent/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EnterVehicleSurveyEvent](/vext/ref/fb/entervehiclesurveyevent/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
