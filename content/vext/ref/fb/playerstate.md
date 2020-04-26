---
title: PlayerState
---

Inherits from 
[MetricState](/vext/ref/fb/metricstate)

## Summary
### Constructors
| |
| ----------- |
| **[PlayerState](#constructor-0)**() |
| **[PlayerState](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PlayerState](#constructor-2)**(other: [MetricState](/vext/ref/fb/metricstate)) |
| **[PlayerState](#constructor-3)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[PlayerState](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "onlineId" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PlayerState" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PlayerState {#constructor-0}
> **PlayerState**()

Creates a new [PlayerState](/vext/ref/fb/playerstate) frostbite instance.

### PlayerState {#constructor-1}
> **PlayerState**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PlayerState](/vext/ref/fb/playerstate) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PlayerState {#constructor-2}
> **PlayerState**(other: [MetricState](/vext/ref/fb/metricstate))

Casts an instance of type [MetricState](/vext/ref/fb/metricstate) to [PlayerState](/vext/ref/fb/playerstate). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricState](/vext/ref/fb/metricstate) | The instance to cast to [PlayerState](/vext/ref/fb/playerstate). |

### PlayerState {#constructor-3}
> **PlayerState**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [PlayerState](/vext/ref/fb/playerstate). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [PlayerState](/vext/ref/fb/playerstate). |

### PlayerState {#constructor-4}
> **PlayerState**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlayerState](/vext/ref/fb/playerstate). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PlayerState](/vext/ref/fb/playerstate). |

## Properties
### {{% prop-heading "onlineId" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PlayerState](/vext/ref/fb/playerstate) type.

