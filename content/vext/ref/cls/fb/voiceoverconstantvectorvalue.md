---
title: VoiceOverConstantVectorValue (Frostbite Container)
---
### Base Classes

[VoiceOverConstantValue](VoiceOverConstantValue)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverConstantVectorValue()                                                          | Create a new instance of this container type.                                                                                                   |
| VoiceOverConstantVectorValue(VoiceOverConstantVectorValue other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| VoiceOverConstantVectorValue([VoiceOverConstantValue](VoiceOverConstantValue) other)    | Upcast an instance of type [VoiceOverConstantValue](VoiceOverConstantValue) to [VoiceOverConstantVectorValue](VoiceOverConstantVectorValue).    |
| VoiceOverConstantVectorValue([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverConstantVectorValue](VoiceOverConstantVectorValue). |

## Properties

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| value | [Vec4](/vext/ref/cls/shr/Vec4) |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverConstantVectorValue](VoiceOverConstantVectorValue) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverConstantVectorValue](VoiceOverConstantVectorValue) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
