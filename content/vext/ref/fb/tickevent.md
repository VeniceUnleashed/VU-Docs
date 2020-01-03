---
title: TickEvent
---
### Base Classes

[MetricEvent](MetricEvent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                          | Description                                                                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| TickEvent()                                                          | Create a new instance of this container type.                                                             |
| TickEvent(TickEvent other)                                           | Create a reference copy of an instance of the same type.                                                  |
| TickEvent([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [TickEvent](TickEvent).                          |
| TickEvent([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TickEvent](TickEvent). |

## Properties

| Name     | Type                              | Description |
| -------- | --------------------------------- | ----------- |
| position | [Vec3](/vext/ref/shared/class/Vec3) |             |
| time     | number                            |             |

## Methods

| Type                   | Name            | Parameters                                     |
| ---------------------- | --------------- | ---------------------------------------------- |
| [TickEvent](TickEvent) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TickEvent](TickEvent) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
