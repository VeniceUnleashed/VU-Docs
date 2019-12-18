---
title: VoiceOverGlobalConstantValue (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverGlobalConstantValue()                                                          | Create a new instance of this container type.                                                                                                   |
| VoiceOverGlobalConstantValue(VoiceOverGlobalConstantValue other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| VoiceOverGlobalConstantValue([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverGlobalConstantValue](VoiceOverGlobalConstantValue). |

## Properties

| Name   | Type                                             | Description |
| ------ | ------------------------------------------------ | ----------- |
| name   | string                                           |             |
| source | [VoiceOverConstantValue](VoiceOverConstantValue) |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverGlobalConstantValue](VoiceOverGlobalConstantValue) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverGlobalConstantValue](VoiceOverGlobalConstantValue) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
