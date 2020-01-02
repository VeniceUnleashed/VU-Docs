---
title: KillEvent
---
### Base Classes

[MetricEvent](MetricEvent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                          | Description                                                                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| KillEvent()                                                          | Create a new instance of this container type.                                                             |
| KillEvent(KillEvent other)                                           | Create a reference copy of an instance of the same type.                                                  |
| KillEvent([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [KillEvent](KillEvent).                          |
| KillEvent([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [KillEvent](KillEvent). |

## Properties

| Name           | Type                              | Description |
| -------------- | --------------------------------- | ----------- |
| position       | [Vec3](/vext/ref/shared/class/Vec3) |             |
| victimPosition | [Vec3](/vext/ref/shared/class/Vec3) |             |
| victimId       | number                            |             |
| time           | number                            |             |
| weapon         | string                            |             |

## Methods

| Type                   | Name            | Parameters                                     |
| ---------------------- | --------------- | ---------------------------------------------- |
| [KillEvent](KillEvent) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [KillEvent](KillEvent) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
