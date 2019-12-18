---
title: VoiceOverConstantFloatValue (Frostbite Container)
---
### Base Classes

[VoiceOverConstantValue](VoiceOverConstantValue)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverConstantFloatValue()                                                          | Create a new instance of this container type.                                                                                                 |
| VoiceOverConstantFloatValue(VoiceOverConstantFloatValue other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| VoiceOverConstantFloatValue([VoiceOverConstantValue](VoiceOverConstantValue) other)    | Upcast an instance of type [VoiceOverConstantValue](VoiceOverConstantValue) to [VoiceOverConstantFloatValue](VoiceOverConstantFloatValue).    |
| VoiceOverConstantFloatValue([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverConstantFloatValue](VoiceOverConstantFloatValue). |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| value | number |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverConstantFloatValue](VoiceOverConstantFloatValue) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverConstantFloatValue](VoiceOverConstantFloatValue) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
