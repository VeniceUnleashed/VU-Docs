---
title: PlayerState
---
### Base Classes

[MetricState](MetricState)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| PlayerState()                                                          | Create a new instance of this container type.                                                                 |
| PlayerState(PlayerState other)                                         | Create a reference copy of an instance of the same type.                                                      |
| PlayerState([MetricState](MetricState) other)                          | Upcast an instance of type [MetricState](MetricState) to [PlayerState](PlayerState).                          |
| PlayerState([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [PlayerState](PlayerState).                          |
| PlayerState([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlayerState](PlayerState). |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| onlineId | number |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [PlayerState](PlayerState) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PlayerState](PlayerState) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
