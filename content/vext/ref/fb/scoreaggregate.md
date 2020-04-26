---
title: ScoreAggregate
---

Inherits from 
[MetricAggregate](/vext/ref/fb/metricaggregate)

## Summary
### Constructors
| |
| ----------- |
| **[ScoreAggregate](#constructor-0)**() |
| **[ScoreAggregate](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ScoreAggregate](#constructor-2)**(other: [MetricAggregate](/vext/ref/fb/metricaggregate)) |
| **[ScoreAggregate](#constructor-3)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[ScoreAggregate](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "totalScore" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ScoreAggregate" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ScoreAggregate {#constructor-0}
> **ScoreAggregate**()

Creates a new [ScoreAggregate](/vext/ref/fb/scoreaggregate) frostbite instance.

### ScoreAggregate {#constructor-1}
> **ScoreAggregate**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ScoreAggregate](/vext/ref/fb/scoreaggregate) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ScoreAggregate {#constructor-2}
> **ScoreAggregate**(other: [MetricAggregate](/vext/ref/fb/metricaggregate))

Casts an instance of type [MetricAggregate](/vext/ref/fb/metricaggregate) to [ScoreAggregate](/vext/ref/fb/scoreaggregate). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricAggregate](/vext/ref/fb/metricaggregate) | The instance to cast to [ScoreAggregate](/vext/ref/fb/scoreaggregate). |

### ScoreAggregate {#constructor-3}
> **ScoreAggregate**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [ScoreAggregate](/vext/ref/fb/scoreaggregate). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [ScoreAggregate](/vext/ref/fb/scoreaggregate). |

### ScoreAggregate {#constructor-4}
> **ScoreAggregate**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ScoreAggregate](/vext/ref/fb/scoreaggregate). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ScoreAggregate](/vext/ref/fb/scoreaggregate). |

## Properties
### {{% prop-heading "totalScore" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ScoreAggregate](/vext/ref/fb/scoreaggregate) type.

