---
title: ReceivedAwardSurveyEvent
---

Inherits from 
[MetricEvent](/vext/ref/fb/metricevent)

## Summary
### Constructors
| |
| ----------- |
| **[ReceivedAwardSurveyEvent](#constructor-0)**() |
| **[ReceivedAwardSurveyEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ReceivedAwardSurveyEvent](#constructor-2)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[ReceivedAwardSurveyEvent](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "awardName" >}} | string |
| {{< prop "surveyMetricLink" >}} | [Guid](/vext/ref/shared/class/guid) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ReceivedAwardSurveyEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ReceivedAwardSurveyEvent {#constructor-0}
> **ReceivedAwardSurveyEvent**()

Creates a new [ReceivedAwardSurveyEvent](/vext/ref/fb/receivedawardsurveyevent) frostbite instance.

### ReceivedAwardSurveyEvent {#constructor-1}
> **ReceivedAwardSurveyEvent**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ReceivedAwardSurveyEvent](/vext/ref/fb/receivedawardsurveyevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ReceivedAwardSurveyEvent {#constructor-2}
> **ReceivedAwardSurveyEvent**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [ReceivedAwardSurveyEvent](/vext/ref/fb/receivedawardsurveyevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [ReceivedAwardSurveyEvent](/vext/ref/fb/receivedawardsurveyevent). |

### ReceivedAwardSurveyEvent {#constructor-3}
> **ReceivedAwardSurveyEvent**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ReceivedAwardSurveyEvent](/vext/ref/fb/receivedawardsurveyevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ReceivedAwardSurveyEvent](/vext/ref/fb/receivedawardsurveyevent). |

## Properties
### {{% prop-heading "awardName" %}}
> **string**

### {{% prop-heading "surveyMetricLink" %}}
> **[Guid](/vext/ref/shared/class/guid)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ReceivedAwardSurveyEvent](/vext/ref/fb/receivedawardsurveyevent) type.

