---
title: SurveyEvent
---

Inherits from [MetricEvent](/vext/ref/fb/metricevent)

## Summary

### Constructors

|  |
| --- |
| **[SurveyEvent](#constructor-0)**() |
| **[SurveyEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SurveyEvent](#constructor-2)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[SurveyEvent](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "surveyName" >}} | string |
| {{< prop "answerQuestion1" >}} | int |
| {{< prop "answerQuestion2" >}} | int |
| {{< prop "answerQuestion3" >}} | int |
| {{< prop "answerQuestion4" >}} | int |
| {{< prop "answerQuestion5" >}} | int |
| {{< prop "freeTextField" >}} | string |
| {{< prop "surveyMetricLink" >}} | [Guid](/vext/ref/shared/type/guid) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SurveyEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SurveyEvent {#constructor-0}

> **SurveyEvent**()

Creates a new [SurveyEvent](/vext/ref/fb/surveyevent) frostbite instance.

### SurveyEvent {#constructor-1}

> **SurveyEvent**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SurveyEvent](/vext/ref/fb/surveyevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SurveyEvent {#constructor-2}

> **SurveyEvent**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [SurveyEvent](/vext/ref/fb/surveyevent). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [SurveyEvent](/vext/ref/fb/surveyevent). |

### SurveyEvent {#constructor-3}

> **SurveyEvent**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SurveyEvent](/vext/ref/fb/surveyevent). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SurveyEvent](/vext/ref/fb/surveyevent). |

## Properties

### {{% prop-heading "surveyName" %}}

> **string**

### {{% prop-heading "answerQuestion1" %}}

> **int**

### {{% prop-heading "answerQuestion2" %}}

> **int**

### {{% prop-heading "answerQuestion3" %}}

> **int**

### {{% prop-heading "answerQuestion4" %}}

> **int**

### {{% prop-heading "answerQuestion5" %}}

> **int**

### {{% prop-heading "freeTextField" %}}

> **string**

### {{% prop-heading "surveyMetricLink" %}}

> **[Guid](/vext/ref/shared/type/guid)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SurveyEvent](/vext/ref/fb/surveyevent) type.

