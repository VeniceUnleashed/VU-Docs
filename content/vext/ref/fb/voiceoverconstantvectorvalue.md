---
title: VoiceOverConstantVectorValue
---
### Base Classes

[VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverConstantVectorValue()                                                          | Create a new instance of this container type.                                                                                                   |
| VoiceOverConstantVectorValue(VoiceOverConstantVectorValue other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| VoiceOverConstantVectorValue([VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue/) other)    | Upcast an instance of type [VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue/) to [VoiceOverConstantVectorValue](/vext/ref/fb/voiceoverconstantvectorvalue/).    |
| VoiceOverConstantVectorValue([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverConstantVectorValue](/vext/ref/fb/voiceoverconstantvectorvalue/). |

## Properties

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| value | [Vec4](/vext/ref/shared/class/vec4) |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverConstantVectorValue](/vext/ref/fb/voiceoverconstantvectorvalue/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverConstantVectorValue](/vext/ref/fb/voiceoverconstantvectorvalue/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
