---
title: VoiceOverNamedValue
---
### Base Classes

[VoiceOverValue](/vext/ref/fb/voiceovervalue/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverNamedValue()                                                          | Create a new instance of this container type.                                                                                 |
| VoiceOverNamedValue(VoiceOverNamedValue other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| VoiceOverNamedValue([VoiceOverValue](/vext/ref/fb/voiceovervalue/) other)                    | Upcast an instance of type [VoiceOverValue](/vext/ref/fb/voiceovervalue/) to [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue/).                    |
| VoiceOverNamedValue([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue/). |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
