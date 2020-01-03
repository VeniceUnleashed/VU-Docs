---
title: VoiceOverGlobalConstantValue
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverGlobalConstantValue()                                                          | Create a new instance of this container type.                                                                                                   |
| VoiceOverGlobalConstantValue(VoiceOverGlobalConstantValue other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| VoiceOverGlobalConstantValue([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverGlobalConstantValue](/vext/ref/fb/voiceoverglobalconstantvalue/). |

## Properties

| Name   | Type                                             | Description |
| ------ | ------------------------------------------------ | ----------- |
| name   | string                                           |             |
| source | [VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue/) |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverGlobalConstantValue](/vext/ref/fb/voiceoverglobalconstantvalue/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverGlobalConstantValue](/vext/ref/fb/voiceoverglobalconstantvalue/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
