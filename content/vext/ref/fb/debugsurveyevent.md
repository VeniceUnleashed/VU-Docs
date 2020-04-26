---
title: DebugSurveyEvent
---

Inherits from 
[MetricEvent](/vext/ref/fb/metricevent)

## Summary
### Constructors
| |
| ----------- |
| **[DebugSurveyEvent](#constructor-0)**() |
| **[DebugSurveyEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DebugSurveyEvent](#constructor-2)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[DebugSurveyEvent](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "playerName" >}} | string |
| {{< prop "surveyMetricLink" >}} | [Guid](/vext/ref/shared/class/guid) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DebugSurveyEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DebugSurveyEvent {#constructor-0}
> **DebugSurveyEvent**()

Creates a new [DebugSurveyEvent](/vext/ref/fb/debugsurveyevent) frostbite instance.

### DebugSurveyEvent {#constructor-1}
> **DebugSurveyEvent**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DebugSurveyEvent](/vext/ref/fb/debugsurveyevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DebugSurveyEvent {#constructor-2}
> **DebugSurveyEvent**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [DebugSurveyEvent](/vext/ref/fb/debugsurveyevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [DebugSurveyEvent](/vext/ref/fb/debugsurveyevent). |

### DebugSurveyEvent {#constructor-3}
> **DebugSurveyEvent**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DebugSurveyEvent](/vext/ref/fb/debugsurveyevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DebugSurveyEvent](/vext/ref/fb/debugsurveyevent). |

## Properties
### {{% prop-heading "playerName" %}}
> **string**

### {{% prop-heading "surveyMetricLink" %}}
> **[Guid](/vext/ref/shared/class/guid)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DebugSurveyEvent](/vext/ref/fb/debugsurveyevent) type.

