---
title: KitStateEvent
---

Inherits from 
[MetricEvent](/vext/ref/fb/metricevent)

## Summary
### Constructors
| |
| ----------- |
| **[KitStateEvent](#constructor-0)**() |
| **[KitStateEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[KitStateEvent](#constructor-2)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[KitStateEvent](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "kit" >}} | string |
| {{< prop "secondsAsKit" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "KitStateEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### KitStateEvent {#constructor-0}
> **KitStateEvent**()

Creates a new [KitStateEvent](/vext/ref/fb/kitstateevent) frostbite instance.

### KitStateEvent {#constructor-1}
> **KitStateEvent**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [KitStateEvent](/vext/ref/fb/kitstateevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### KitStateEvent {#constructor-2}
> **KitStateEvent**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [KitStateEvent](/vext/ref/fb/kitstateevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [KitStateEvent](/vext/ref/fb/kitstateevent). |

### KitStateEvent {#constructor-3}
> **KitStateEvent**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [KitStateEvent](/vext/ref/fb/kitstateevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [KitStateEvent](/vext/ref/fb/kitstateevent). |

## Properties
### {{% prop-heading "kit" %}}
> **string**

### {{% prop-heading "secondsAsKit" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [KitStateEvent](/vext/ref/fb/kitstateevent) type.

