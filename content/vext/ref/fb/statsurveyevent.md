---
title: StatSurveyEvent
---

Inherits from [MetricEvent](/vext/ref/fb/metricevent)

## Summary

### Constructors

|  |
| --- |
| **[StatSurveyEvent](#constructor-0)**() |
| **[StatSurveyEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[StatSurveyEvent](#constructor-2)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[StatSurveyEvent](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "surveyMetricLink" >}} | [Guid](/vext/ref/shared/type/guid) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "StatSurveyEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### StatSurveyEvent {#constructor-0}

> **StatSurveyEvent**()

Creates a new [StatSurveyEvent](/vext/ref/fb/statsurveyevent) frostbite instance.

### StatSurveyEvent {#constructor-1}

> **StatSurveyEvent**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [StatSurveyEvent](/vext/ref/fb/statsurveyevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### StatSurveyEvent {#constructor-2}

> **StatSurveyEvent**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [StatSurveyEvent](/vext/ref/fb/statsurveyevent). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [StatSurveyEvent](/vext/ref/fb/statsurveyevent). |

### StatSurveyEvent {#constructor-3}

> **StatSurveyEvent**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [StatSurveyEvent](/vext/ref/fb/statsurveyevent). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [StatSurveyEvent](/vext/ref/fb/statsurveyevent). |

## Properties

### {{% prop-heading "surveyMetricLink" %}}

> **[Guid](/vext/ref/shared/type/guid)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [StatSurveyEvent](/vext/ref/fb/statsurveyevent) type.

