---
title: SpawnState
---

Inherits from 
[MetricState](/vext/ref/fb/metricstate)

## Summary
### Constructors
| |
| ----------- |
| **[SpawnState](#constructor-0)**() |
| **[SpawnState](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SpawnState](#constructor-2)**(other: [MetricState](/vext/ref/fb/metricstate)) |
| **[SpawnState](#constructor-3)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[SpawnState](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "team" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SpawnState" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SpawnState {#constructor-0}
> **SpawnState**()

Creates a new [SpawnState](/vext/ref/fb/spawnstate) frostbite instance.

### SpawnState {#constructor-1}
> **SpawnState**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SpawnState](/vext/ref/fb/spawnstate) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SpawnState {#constructor-2}
> **SpawnState**(other: [MetricState](/vext/ref/fb/metricstate))

Casts an instance of type [MetricState](/vext/ref/fb/metricstate) to [SpawnState](/vext/ref/fb/spawnstate). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricState](/vext/ref/fb/metricstate) | The instance to cast to [SpawnState](/vext/ref/fb/spawnstate). |

### SpawnState {#constructor-3}
> **SpawnState**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [SpawnState](/vext/ref/fb/spawnstate). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [SpawnState](/vext/ref/fb/spawnstate). |

### SpawnState {#constructor-4}
> **SpawnState**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpawnState](/vext/ref/fb/spawnstate). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SpawnState](/vext/ref/fb/spawnstate). |

## Properties
### {{% prop-heading "team" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SpawnState](/vext/ref/fb/spawnstate) type.

