---
title: EnterVehicleSurveyEvent
---

Inherits from 
[MetricEvent](/vext/ref/fb/metricevent)

## Summary
### Constructors
| |
| ----------- |
| **[EnterVehicleSurveyEvent](#constructor-0)**() |
| **[EnterVehicleSurveyEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EnterVehicleSurveyEvent](#constructor-2)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[EnterVehicleSurveyEvent](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "vehicleName" >}} | string |
| {{< prop "surveyMetricLink" >}} | [Guid](/vext/ref/shared/class/guid) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EnterVehicleSurveyEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EnterVehicleSurveyEvent {#constructor-0}
> **EnterVehicleSurveyEvent**()

Creates a new [EnterVehicleSurveyEvent](/vext/ref/fb/entervehiclesurveyevent) frostbite instance.

### EnterVehicleSurveyEvent {#constructor-1}
> **EnterVehicleSurveyEvent**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EnterVehicleSurveyEvent](/vext/ref/fb/entervehiclesurveyevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EnterVehicleSurveyEvent {#constructor-2}
> **EnterVehicleSurveyEvent**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [EnterVehicleSurveyEvent](/vext/ref/fb/entervehiclesurveyevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [EnterVehicleSurveyEvent](/vext/ref/fb/entervehiclesurveyevent). |

### EnterVehicleSurveyEvent {#constructor-3}
> **EnterVehicleSurveyEvent**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EnterVehicleSurveyEvent](/vext/ref/fb/entervehiclesurveyevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EnterVehicleSurveyEvent](/vext/ref/fb/entervehiclesurveyevent). |

## Properties
### {{% prop-heading "vehicleName" %}}
> **string**

### {{% prop-heading "surveyMetricLink" %}}
> **[Guid](/vext/ref/shared/class/guid)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EnterVehicleSurveyEvent](/vext/ref/fb/entervehiclesurveyevent) type.

