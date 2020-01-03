---
title: VoiceOverConstantGlobalValue
---
### Base Classes

[VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverConstantGlobalValue()                                                          | Create a new instance of this container type.                                                                                                   |
| VoiceOverConstantGlobalValue(VoiceOverConstantGlobalValue other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| VoiceOverConstantGlobalValue([VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue/) other)    | Upcast an instance of type [VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue/) to [VoiceOverConstantGlobalValue](/vext/ref/fb/voiceoverconstantglobalvalue/).    |
| VoiceOverConstantGlobalValue([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverConstantGlobalValue](/vext/ref/fb/voiceoverconstantglobalvalue/). |

## Properties

| Name   | Type                                                         | Description |
| ------ | ------------------------------------------------------------ | ----------- |
| source | [VoiceOverGlobalConstantValue](/vext/ref/fb/voiceoverglobalconstantvalue/) |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverConstantGlobalValue](/vext/ref/fb/voiceoverconstantglobalvalue/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverConstantGlobalValue](/vext/ref/fb/voiceoverconstantglobalvalue/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
