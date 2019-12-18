---
title: SpawnState (Frostbite Container)
---
### Base Classes

[MetricState](MetricState)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| SpawnState()                                                          | Create a new instance of this container type.                                                               |
| SpawnState(SpawnState other)                                          | Create a reference copy of an instance of the same type.                                                    |
| SpawnState([MetricState](MetricState) other)                          | Upcast an instance of type [MetricState](MetricState) to [SpawnState](SpawnState).                          |
| SpawnState([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [SpawnState](SpawnState).                          |
| SpawnState([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SpawnState](SpawnState). |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| team | number |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [SpawnState](SpawnState) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SpawnState](SpawnState) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
