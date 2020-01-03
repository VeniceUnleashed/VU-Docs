---
title: KitStateEvent
---
### Base Classes

[MetricEvent](/vext/ref/fb/metricevent/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| KitStateEvent()                                                          | Create a new instance of this container type.                                                                     |
| KitStateEvent(KitStateEvent other)                                       | Create a reference copy of an instance of the same type.                                                          |
| KitStateEvent([MetricEvent](/vext/ref/fb/metricevent/) other)                          | Upcast an instance of type [MetricEvent](/vext/ref/fb/metricevent/) to [KitStateEvent](/vext/ref/fb/kitstateevent/).                          |
| KitStateEvent([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [KitStateEvent](/vext/ref/fb/kitstateevent/). |

## Properties

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| kit          | string |             |
| secondsAsKit | number |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [KitStateEvent](/vext/ref/fb/kitstateevent/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [KitStateEvent](/vext/ref/fb/kitstateevent/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
