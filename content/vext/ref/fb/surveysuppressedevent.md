---
title: SurveySuppressedEvent
---
### Base Classes

[MetricEvent](MetricEvent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| SurveySuppressedEvent()                                                          | Create a new instance of this container type.                                                                                     |
| SurveySuppressedEvent(SurveySuppressedEvent other)                               | Create a reference copy of an instance of the same type.                                                                          |
| SurveySuppressedEvent([MetricEvent](MetricEvent) other)                          | Upcast an instance of type [MetricEvent](MetricEvent) to [SurveySuppressedEvent](SurveySuppressedEvent).                          |
| SurveySuppressedEvent([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SurveySuppressedEvent](SurveySuppressedEvent). |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| suppressReason | string |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [SurveySuppressedEvent](SurveySuppressedEvent) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SurveySuppressedEvent](SurveySuppressedEvent) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
