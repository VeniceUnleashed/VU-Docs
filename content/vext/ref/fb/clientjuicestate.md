---
title: ClientJuiceState
---

Inherits from 
[MetricState](/vext/ref/fb/metricstate)

## Summary
### Constructors
| |
| ----------- |
| **[ClientJuiceState](#constructor-0)**() |
| **[ClientJuiceState](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ClientJuiceState](#constructor-2)**(other: [MetricState](/vext/ref/fb/metricstate)) |
| **[ClientJuiceState](#constructor-3)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[ClientJuiceState](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "sessionId" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ClientJuiceState" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ClientJuiceState {#constructor-0}
> **ClientJuiceState**()

Creates a new [ClientJuiceState](/vext/ref/fb/clientjuicestate) frostbite instance.

### ClientJuiceState {#constructor-1}
> **ClientJuiceState**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ClientJuiceState](/vext/ref/fb/clientjuicestate) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ClientJuiceState {#constructor-2}
> **ClientJuiceState**(other: [MetricState](/vext/ref/fb/metricstate))

Casts an instance of type [MetricState](/vext/ref/fb/metricstate) to [ClientJuiceState](/vext/ref/fb/clientjuicestate). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricState](/vext/ref/fb/metricstate) | The instance to cast to [ClientJuiceState](/vext/ref/fb/clientjuicestate). |

### ClientJuiceState {#constructor-3}
> **ClientJuiceState**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [ClientJuiceState](/vext/ref/fb/clientjuicestate). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [ClientJuiceState](/vext/ref/fb/clientjuicestate). |

### ClientJuiceState {#constructor-4}
> **ClientJuiceState**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ClientJuiceState](/vext/ref/fb/clientjuicestate). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ClientJuiceState](/vext/ref/fb/clientjuicestate). |

## Properties
### {{% prop-heading "sessionId" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ClientJuiceState](/vext/ref/fb/clientjuicestate) type.

