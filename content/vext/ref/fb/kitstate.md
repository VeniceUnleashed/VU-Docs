---
title: KitState
---
### Base Classes

[MetricState](/vext/ref/fb/metricstate/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                         | Description                                                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| KitState()                                                          | Create a new instance of this container type.                                                           |
| KitState(KitState other)                                            | Create a reference copy of an instance of the same type.                                                |
| KitState([MetricState](/vext/ref/fb/metricstate/) other)                          | Upcast an instance of type [MetricState](/vext/ref/fb/metricstate/) to [KitState](/vext/ref/fb/kitstate/).                          |
| KitState([MetricEvent](/vext/ref/fb/metricevent/) other)                          | Upcast an instance of type [MetricEvent](/vext/ref/fb/metricevent/) to [KitState](/vext/ref/fb/kitstate/).                          |
| KitState([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [KitState](/vext/ref/fb/kitstate/). |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| kit  | string |             |

## Methods

| Type                 | Name            | Parameters                                     |
| -------------------- | --------------- | ---------------------------------------------- |
| [KitState](/vext/ref/fb/kitstate/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [KitState](/vext/ref/fb/kitstate/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
