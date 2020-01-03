---
title: ClientJuiceState
---
### Base Classes

[MetricState](/vext/ref/fb/metricstate/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ClientJuiceState()                                                          | Create a new instance of this container type.                                                                           |
| ClientJuiceState(ClientJuiceState other)                                    | Create a reference copy of an instance of the same type.                                                                |
| ClientJuiceState([MetricState](/vext/ref/fb/metricstate/) other)                          | Upcast an instance of type [MetricState](/vext/ref/fb/metricstate/) to [ClientJuiceState](/vext/ref/fb/clientjuicestate/).                          |
| ClientJuiceState([MetricEvent](/vext/ref/fb/metricevent/) other)                          | Upcast an instance of type [MetricEvent](/vext/ref/fb/metricevent/) to [ClientJuiceState](/vext/ref/fb/clientjuicestate/).                          |
| ClientJuiceState([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ClientJuiceState](/vext/ref/fb/clientjuicestate/). |

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| sessionId | number |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [ClientJuiceState](/vext/ref/fb/clientjuicestate/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ClientJuiceState](/vext/ref/fb/clientjuicestate/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
