---
title: MetricState
---

Inherits from [MetricEvent](/vext/ref/fb/metricevent)

## Summary

### Constructors

|  |
| --- |
| **[MetricState](#constructor-0)**() |
| **[MetricState](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MetricState](#constructor-2)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[MetricState](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "isSet" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MetricState" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MetricState {#constructor-0}

> **MetricState**()

Creates a new [MetricState](/vext/ref/fb/metricstate) frostbite instance.

### MetricState {#constructor-1}

> **MetricState**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MetricState](/vext/ref/fb/metricstate) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MetricState {#constructor-2}

> **MetricState**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [MetricState](/vext/ref/fb/metricstate). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [MetricState](/vext/ref/fb/metricstate). |

### MetricState {#constructor-3}

> **MetricState**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MetricState](/vext/ref/fb/metricstate). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MetricState](/vext/ref/fb/metricstate). |

## Properties

### {{% prop-heading "isSet" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MetricState](/vext/ref/fb/metricstate) type.

