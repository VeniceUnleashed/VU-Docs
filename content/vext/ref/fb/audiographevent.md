---
title: AudioGraphEvent
---
### Base Classes

[AudioGraphParameter](AudioGraphParameter)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| AudioGraphEvent()                                                          | Create a new instance of this container type.                                                                         |
| AudioGraphEvent(AudioGraphEvent other)                                     | Create a reference copy of an instance of the same type.                                                              |
| AudioGraphEvent([AudioGraphParameter](AudioGraphParameter) other)          | Upcast an instance of type [AudioGraphParameter](AudioGraphParameter) to [AudioGraphEvent](AudioGraphEvent).          |
| AudioGraphEvent([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AudioGraphEvent](AudioGraphEvent). |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [AudioGraphEvent](AudioGraphEvent) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AudioGraphEvent](AudioGraphEvent) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
