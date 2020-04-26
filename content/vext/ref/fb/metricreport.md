---
title: MetricReport
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[MetricReport](#constructor-0)**() |
| **[MetricReport](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MetricReport](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "events" >}} | [MetricEvent](/vext/ref/fb/metricevent)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MetricReport" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MetricReport {#constructor-0}

> **MetricReport**()

Creates a new [MetricReport](/vext/ref/fb/metricreport) frostbite instance.

### MetricReport {#constructor-1}

> **MetricReport**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MetricReport](/vext/ref/fb/metricreport) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MetricReport {#constructor-2}

> **MetricReport**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MetricReport](/vext/ref/fb/metricreport). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MetricReport](/vext/ref/fb/metricreport). |

## Properties

### {{% prop-heading "events" %}}

> **[MetricEvent](/vext/ref/fb/metricevent)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MetricReport](/vext/ref/fb/metricreport) type.

