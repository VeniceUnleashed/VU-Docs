---
title: MetricReport
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[MetricReport](#constructor-0)**() |
| **[MetricReport](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MetricReport](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "events" >}} | [MetricEvent](/vext/ref/fb/metricevent)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MetricReport" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MetricReport {#constructor-0}
> **MetricReport**()

Creates a new [MetricReport](/vext/ref/fb/metricreport) frostbite instance.

### MetricReport {#constructor-1}
> **MetricReport**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MetricReport](/vext/ref/fb/metricreport) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MetricReport {#constructor-2}
> **MetricReport**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MetricReport](/vext/ref/fb/metricreport). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MetricReport](/vext/ref/fb/metricreport). |

## Properties
### {{% prop-heading "events" %}}
> **[MetricEvent](/vext/ref/fb/metricevent)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MetricReport](/vext/ref/fb/metricreport) type.

