---
title: MetricState
---
### Base Classes

[MetricEvent](MetricEvent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| MetricState()                                                          | Create a new instance of this container type.                                                                 |
| MetricState(MetricState other)                                         | Create a reference copy of an instance of the same type.                                                      |
| MetricState([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [MetricState](MetricState).                          |
| MetricState([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MetricState](MetricState). |

## Properties

| Name  | Type | Description |
| ----- | ---- | ----------- |
| isSet | bool |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [MetricState](MetricState) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MetricState](MetricState) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
