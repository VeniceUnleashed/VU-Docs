---
title: TickEvent
---

Inherits from 
[MetricEvent](/vext/ref/fb/metricevent)

## Summary
### Constructors
| |
| ----------- |
| **[TickEvent](#constructor-0)**() |
| **[TickEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[TickEvent](#constructor-2)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[TickEvent](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "position" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "time" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TickEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TickEvent {#constructor-0}
> **TickEvent**()

Creates a new [TickEvent](/vext/ref/fb/tickevent) frostbite instance.

### TickEvent {#constructor-1}
> **TickEvent**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [TickEvent](/vext/ref/fb/tickevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### TickEvent {#constructor-2}
> **TickEvent**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [TickEvent](/vext/ref/fb/tickevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [TickEvent](/vext/ref/fb/tickevent). |

### TickEvent {#constructor-3}
> **TickEvent**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TickEvent](/vext/ref/fb/tickevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [TickEvent](/vext/ref/fb/tickevent). |

## Properties
### {{% prop-heading "position" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "time" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TickEvent](/vext/ref/fb/tickevent) type.

