---
title: RoundOverEvent
---

Inherits from 
[MetricEvent](/vext/ref/fb/metricevent)

## Summary
### Constructors
| |
| ----------- |
| **[RoundOverEvent](#constructor-0)**() |
| **[RoundOverEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[RoundOverEvent](#constructor-2)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[RoundOverEvent](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "winningTeam" >}} | int |
| {{< prop "ticketsLeft" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RoundOverEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RoundOverEvent {#constructor-0}
> **RoundOverEvent**()

Creates a new [RoundOverEvent](/vext/ref/fb/roundoverevent) frostbite instance.

### RoundOverEvent {#constructor-1}
> **RoundOverEvent**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [RoundOverEvent](/vext/ref/fb/roundoverevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### RoundOverEvent {#constructor-2}
> **RoundOverEvent**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [RoundOverEvent](/vext/ref/fb/roundoverevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [RoundOverEvent](/vext/ref/fb/roundoverevent). |

### RoundOverEvent {#constructor-3}
> **RoundOverEvent**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RoundOverEvent](/vext/ref/fb/roundoverevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [RoundOverEvent](/vext/ref/fb/roundoverevent). |

## Properties
### {{% prop-heading "winningTeam" %}}
> **int**

### {{% prop-heading "ticketsLeft" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RoundOverEvent](/vext/ref/fb/roundoverevent) type.

