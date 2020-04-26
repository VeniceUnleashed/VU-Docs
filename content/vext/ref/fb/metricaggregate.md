---
title: MetricAggregate
---

Inherits from 
[MetricEvent](/vext/ref/fb/metricevent)

## Summary
### Constructors
| |
| ----------- |
| **[MetricAggregate](#constructor-0)**() |
| **[MetricAggregate](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MetricAggregate](#constructor-2)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[MetricAggregate](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MetricAggregate" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MetricAggregate {#constructor-0}
> **MetricAggregate**()

Creates a new [MetricAggregate](/vext/ref/fb/metricaggregate) frostbite instance.

### MetricAggregate {#constructor-1}
> **MetricAggregate**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MetricAggregate](/vext/ref/fb/metricaggregate) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MetricAggregate {#constructor-2}
> **MetricAggregate**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [MetricAggregate](/vext/ref/fb/metricaggregate). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [MetricAggregate](/vext/ref/fb/metricaggregate). |

### MetricAggregate {#constructor-3}
> **MetricAggregate**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MetricAggregate](/vext/ref/fb/metricaggregate). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MetricAggregate](/vext/ref/fb/metricaggregate). |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MetricAggregate](/vext/ref/fb/metricaggregate) type.

