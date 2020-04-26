---
title: SpawnSurveyEvent
---

Inherits from [MetricEvent](/vext/ref/fb/metricevent)

## Summary

### Constructors

|  |
| --- |
| **[SpawnSurveyEvent](#constructor-0)**() |
| **[SpawnSurveyEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SpawnSurveyEvent](#constructor-2)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[SpawnSurveyEvent](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "surveyMetricLink" >}} | [Guid](/vext/ref/shared/type/guid) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SpawnSurveyEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SpawnSurveyEvent {#constructor-0}

> **SpawnSurveyEvent**()

Creates a new [SpawnSurveyEvent](/vext/ref/fb/spawnsurveyevent) frostbite instance.

### SpawnSurveyEvent {#constructor-1}

> **SpawnSurveyEvent**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SpawnSurveyEvent](/vext/ref/fb/spawnsurveyevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SpawnSurveyEvent {#constructor-2}

> **SpawnSurveyEvent**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [SpawnSurveyEvent](/vext/ref/fb/spawnsurveyevent). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [SpawnSurveyEvent](/vext/ref/fb/spawnsurveyevent). |

### SpawnSurveyEvent {#constructor-3}

> **SpawnSurveyEvent**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SpawnSurveyEvent](/vext/ref/fb/spawnsurveyevent). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SpawnSurveyEvent](/vext/ref/fb/spawnsurveyevent). |

## Properties

### {{% prop-heading "surveyMetricLink" %}}

> **[Guid](/vext/ref/shared/type/guid)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SpawnSurveyEvent](/vext/ref/fb/spawnsurveyevent) type.

