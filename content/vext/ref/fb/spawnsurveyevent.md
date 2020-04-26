---
title: SpawnSurveyEvent
---

Inherits from 
[MetricEvent](/vext/ref/fb/metricevent)

## Summary
### Constructors
| |
| ----------- |
| **[SpawnSurveyEvent](#constructor-0)**() |
| **[SpawnSurveyEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SpawnSurveyEvent](#constructor-2)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[SpawnSurveyEvent](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "surveyMetricLink" >}} | [Guid](/vext/ref/shared/class/guid) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SpawnSurveyEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SpawnSurveyEvent {#constructor-0}
> **SpawnSurveyEvent**()

Creates a new [SpawnSurveyEvent](/vext/ref/fb/spawnsurveyevent) frostbite instance.

### SpawnSurveyEvent {#constructor-1}
> **SpawnSurveyEvent**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SpawnSurveyEvent](/vext/ref/fb/spawnsurveyevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SpawnSurveyEvent {#constructor-2}
> **SpawnSurveyEvent**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [SpawnSurveyEvent](/vext/ref/fb/spawnsurveyevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [SpawnSurveyEvent](/vext/ref/fb/spawnsurveyevent). |

### SpawnSurveyEvent {#constructor-3}
> **SpawnSurveyEvent**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpawnSurveyEvent](/vext/ref/fb/spawnsurveyevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SpawnSurveyEvent](/vext/ref/fb/spawnsurveyevent). |

## Properties
### {{% prop-heading "surveyMetricLink" %}}
> **[Guid](/vext/ref/shared/class/guid)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SpawnSurveyEvent](/vext/ref/fb/spawnsurveyevent) type.

