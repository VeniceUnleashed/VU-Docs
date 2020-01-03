---
title: VoiceOverObject
---
### Base Classes

[VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| VoiceOverObject()                                                          | Create a new instance of this container type.                                                                         |
| VoiceOverObject(VoiceOverObject other)                                     | Create a reference copy of an instance of the same type.                                                              |
| VoiceOverObject([VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue/) other)          | Upcast an instance of type [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue/) to [VoiceOverObject](/vext/ref/fb/voiceoverobject/).          |
| VoiceOverObject([VoiceOverValue](/vext/ref/fb/voiceovervalue/) other)                    | Upcast an instance of type [VoiceOverValue](/vext/ref/fb/voiceovervalue/) to [VoiceOverObject](/vext/ref/fb/voiceoverobject/).                    |
| VoiceOverObject([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverObject](/vext/ref/fb/voiceoverobject/). |

## Properties

| Name       | Type                                           | Description |
| ---------- | ---------------------------------------------- | ----------- |
| properties | [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue/)\[\] |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverObject](/vext/ref/fb/voiceoverobject/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverObject](/vext/ref/fb/voiceoverobject/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
