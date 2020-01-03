---
title: AudioGraphEvent
---
### Base Classes

[AudioGraphParameter](/vext/ref/fb/audiographparameter/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| AudioGraphEvent()                                                          | Create a new instance of this container type.                                                                         |
| AudioGraphEvent(AudioGraphEvent other)                                     | Create a reference copy of an instance of the same type.                                                              |
| AudioGraphEvent([AudioGraphParameter](/vext/ref/fb/audiographparameter/) other)          | Upcast an instance of type [AudioGraphParameter](/vext/ref/fb/audiographparameter/) to [AudioGraphEvent](/vext/ref/fb/audiographevent/).          |
| AudioGraphEvent([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AudioGraphEvent](/vext/ref/fb/audiographevent/). |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [AudioGraphEvent](/vext/ref/fb/audiographevent/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AudioGraphEvent](/vext/ref/fb/audiographevent/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
