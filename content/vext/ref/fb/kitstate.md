---
title: KitState
---

Inherits from 
[MetricState](/vext/ref/fb/metricstate)

## Summary
### Constructors
| |
| ----------- |
| **[KitState](#constructor-0)**() |
| **[KitState](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[KitState](#constructor-2)**(other: [MetricState](/vext/ref/fb/metricstate)) |
| **[KitState](#constructor-3)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[KitState](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "kit" >}} | string |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "KitState" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### KitState {#constructor-0}
> **KitState**()

Creates a new [KitState](/vext/ref/fb/kitstate) frostbite instance.

### KitState {#constructor-1}
> **KitState**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [KitState](/vext/ref/fb/kitstate) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### KitState {#constructor-2}
> **KitState**(other: [MetricState](/vext/ref/fb/metricstate))

Casts an instance of type [MetricState](/vext/ref/fb/metricstate) to [KitState](/vext/ref/fb/kitstate). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricState](/vext/ref/fb/metricstate) | The instance to cast to [KitState](/vext/ref/fb/kitstate). |

### KitState {#constructor-3}
> **KitState**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [KitState](/vext/ref/fb/kitstate). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [KitState](/vext/ref/fb/kitstate). |

### KitState {#constructor-4}
> **KitState**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [KitState](/vext/ref/fb/kitstate). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [KitState](/vext/ref/fb/kitstate). |

## Properties
### {{% prop-heading "kit" %}}
> **string**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [KitState](/vext/ref/fb/kitstate) type.

