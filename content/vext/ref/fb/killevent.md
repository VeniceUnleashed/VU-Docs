---
title: KillEvent
---

Inherits from 
[MetricEvent](/vext/ref/fb/metricevent)

## Summary
### Constructors
| |
| ----------- |
| **[KillEvent](#constructor-0)**() |
| **[KillEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[KillEvent](#constructor-2)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[KillEvent](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "position" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "victimPosition" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "victimId" >}} | int |
| {{< prop "time" >}} | float |
| {{< prop "weapon" >}} | string |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "KillEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### KillEvent {#constructor-0}
> **KillEvent**()

Creates a new [KillEvent](/vext/ref/fb/killevent) frostbite instance.

### KillEvent {#constructor-1}
> **KillEvent**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [KillEvent](/vext/ref/fb/killevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### KillEvent {#constructor-2}
> **KillEvent**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [KillEvent](/vext/ref/fb/killevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [KillEvent](/vext/ref/fb/killevent). |

### KillEvent {#constructor-3}
> **KillEvent**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [KillEvent](/vext/ref/fb/killevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [KillEvent](/vext/ref/fb/killevent). |

## Properties
### {{% prop-heading "position" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "victimPosition" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "victimId" %}}
> **int**

### {{% prop-heading "time" %}}
> **float**

### {{% prop-heading "weapon" %}}
> **string**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [KillEvent](/vext/ref/fb/killevent) type.

