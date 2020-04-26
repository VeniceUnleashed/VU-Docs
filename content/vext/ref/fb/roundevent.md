---
title: RoundEvent
---

Inherits from 
[MetricEvent](/vext/ref/fb/metricevent)

## Summary
### Constructors
| |
| ----------- |
| **[RoundEvent](#constructor-0)**() |
| **[RoundEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[RoundEvent](#constructor-2)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[RoundEvent](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "levelName" >}} | string |
| {{< prop "juiceSessionId" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RoundEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RoundEvent {#constructor-0}
> **RoundEvent**()

Creates a new [RoundEvent](/vext/ref/fb/roundevent) frostbite instance.

### RoundEvent {#constructor-1}
> **RoundEvent**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [RoundEvent](/vext/ref/fb/roundevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### RoundEvent {#constructor-2}
> **RoundEvent**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [RoundEvent](/vext/ref/fb/roundevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [RoundEvent](/vext/ref/fb/roundevent). |

### RoundEvent {#constructor-3}
> **RoundEvent**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RoundEvent](/vext/ref/fb/roundevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [RoundEvent](/vext/ref/fb/roundevent). |

## Properties
### {{% prop-heading "levelName" %}}
> **string**

### {{% prop-heading "juiceSessionId" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RoundEvent](/vext/ref/fb/roundevent) type.

