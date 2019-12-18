---
title: DeathEvent (Frostbite Container)
---
### Base Classes

[MetricEvent](MetricEvent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| DeathEvent()                                                          | Create a new instance of this container type.                                                               |
| DeathEvent(DeathEvent other)                                          | Create a reference copy of an instance of the same type.                                                    |
| DeathEvent([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [DeathEvent](DeathEvent).                          |
| DeathEvent([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DeathEvent](DeathEvent). |

## Properties

| Name           | Type                              | Description |
| -------------- | --------------------------------- | ----------- |
| position       | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| killerPosition | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| killerId       | number                            |             |
| time           | number                            |             |
| weapon         | string                            |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [DeathEvent](DeathEvent) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DeathEvent](DeathEvent) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
