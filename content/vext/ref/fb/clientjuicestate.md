---
title: ClientJuiceState
---
### Base Classes

[MetricState](MetricState)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ClientJuiceState()                                                          | Create a new instance of this container type.                                                                           |
| ClientJuiceState(ClientJuiceState other)                                    | Create a reference copy of an instance of the same type.                                                                |
| ClientJuiceState([MetricState](MetricState) other)                          | Upcast an instance of type [MetricState](MetricState) to [ClientJuiceState](ClientJuiceState).                          |
| ClientJuiceState([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [ClientJuiceState](ClientJuiceState).                          |
| ClientJuiceState([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ClientJuiceState](ClientJuiceState). |

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| sessionId | number |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [ClientJuiceState](ClientJuiceState) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ClientJuiceState](ClientJuiceState) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
