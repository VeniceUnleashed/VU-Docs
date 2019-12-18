---
title: VoiceOverConstantGlobalValue (Frostbite Container)
---
### Base Classes

[VoiceOverConstantValue](VoiceOverConstantValue)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverConstantGlobalValue()                                                          | Create a new instance of this container type.                                                                                                   |
| VoiceOverConstantGlobalValue(VoiceOverConstantGlobalValue other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| VoiceOverConstantGlobalValue([VoiceOverConstantValue](VoiceOverConstantValue) other)    | Upcast an instance of type [VoiceOverConstantValue](VoiceOverConstantValue) to [VoiceOverConstantGlobalValue](VoiceOverConstantGlobalValue).    |
| VoiceOverConstantGlobalValue([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverConstantGlobalValue](VoiceOverConstantGlobalValue). |

## Properties

| Name   | Type                                                         | Description |
| ------ | ------------------------------------------------------------ | ----------- |
| source | [VoiceOverGlobalConstantValue](VoiceOverGlobalConstantValue) |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverConstantGlobalValue](VoiceOverConstantGlobalValue) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverConstantGlobalValue](VoiceOverConstantGlobalValue) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
