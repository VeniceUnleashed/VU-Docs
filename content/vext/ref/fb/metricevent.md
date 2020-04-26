---
title: MetricEvent
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[MetricEvent](#constructor-0)**() |
| **[MetricEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MetricEvent](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "owner" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MetricEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MetricEvent {#constructor-0}
> **MetricEvent**()

Creates a new [MetricEvent](/vext/ref/fb/metricevent) frostbite instance.

### MetricEvent {#constructor-1}
> **MetricEvent**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MetricEvent](/vext/ref/fb/metricevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MetricEvent {#constructor-2}
> **MetricEvent**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MetricEvent](/vext/ref/fb/metricevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MetricEvent](/vext/ref/fb/metricevent). |

## Properties
### {{% prop-heading "owner" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MetricEvent](/vext/ref/fb/metricevent) type.

