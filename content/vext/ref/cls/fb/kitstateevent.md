---
title: KitStateEvent (Frostbite Container)
---
### Base Classes

[MetricEvent](MetricEvent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| KitStateEvent()                                                          | Create a new instance of this container type.                                                                     |
| KitStateEvent(KitStateEvent other)                                       | Create a reference copy of an instance of the same type.                                                          |
| KitStateEvent([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [KitStateEvent](KitStateEvent).                          |
| KitStateEvent([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [KitStateEvent](KitStateEvent). |

## Properties

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| kit          | string |             |
| secondsAsKit | number |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [KitStateEvent](KitStateEvent) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [KitStateEvent](KitStateEvent) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
