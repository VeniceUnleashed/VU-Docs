---
title: VoiceOverConstantFloatValue
---
### Base Classes

[VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverConstantFloatValue()                                                          | Create a new instance of this container type.                                                                                                 |
| VoiceOverConstantFloatValue(VoiceOverConstantFloatValue other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| VoiceOverConstantFloatValue([VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue/) other)    | Upcast an instance of type [VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue/) to [VoiceOverConstantFloatValue](/vext/ref/fb/voiceoverconstantfloatvalue/).    |
| VoiceOverConstantFloatValue([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverConstantFloatValue](/vext/ref/fb/voiceoverconstantfloatvalue/). |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| value | number |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverConstantFloatValue](/vext/ref/fb/voiceoverconstantfloatvalue/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverConstantFloatValue](/vext/ref/fb/voiceoverconstantfloatvalue/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
