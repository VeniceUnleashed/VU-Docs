---
title: KitState
---
### Base Classes

[MetricState](MetricState)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                         | Description                                                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| KitState()                                                          | Create a new instance of this container type.                                                           |
| KitState(KitState other)                                            | Create a reference copy of an instance of the same type.                                                |
| KitState([MetricState](MetricState) other)                          | Upcast an instance of type [MetricState](MetricState) to [KitState](KitState).                          |
| KitState([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [KitState](KitState).                          |
| KitState([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [KitState](KitState). |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| kit  | string |             |

## Methods

| Type                 | Name            | Parameters                                     |
| -------------------- | --------------- | ---------------------------------------------- |
| [KitState](KitState) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [KitState](KitState) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
