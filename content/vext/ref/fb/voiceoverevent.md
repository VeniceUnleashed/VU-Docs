---
title: VoiceOverEvent
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| VoiceOverEvent()                                                          | Create a new instance of this container type.                                                                       |
| VoiceOverEvent(VoiceOverEvent other)                                      | Create a reference copy of an instance of the same type.                                                            |
| VoiceOverEvent([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverEvent](/vext/ref/fb/voiceoverevent/). |

## Properties

| Name       | Type                                           | Description |
| ---------- | ---------------------------------------------- | ----------- |
| name       | string                                         |             |
| parameters | [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue/)\[\] |             |
| owner      | [Asset](/vext/ref/fb/asset/)                                 |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverEvent](/vext/ref/fb/voiceoverevent/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverEvent](/vext/ref/fb/voiceoverevent/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
