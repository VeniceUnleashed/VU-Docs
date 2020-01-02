---
title: VoiceOverConstantIntegerValue
---
### Base Classes

[VoiceOverConstantValue](VoiceOverConstantValue)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverConstantIntegerValue()                                                          | Create a new instance of this container type.                                                                                                     |
| VoiceOverConstantIntegerValue(VoiceOverConstantIntegerValue other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| VoiceOverConstantIntegerValue([VoiceOverConstantValue](VoiceOverConstantValue) other)    | Upcast an instance of type [VoiceOverConstantValue](VoiceOverConstantValue) to [VoiceOverConstantIntegerValue](VoiceOverConstantIntegerValue).    |
| VoiceOverConstantIntegerValue([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverConstantIntegerValue](VoiceOverConstantIntegerValue). |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| value | number |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverConstantIntegerValue](VoiceOverConstantIntegerValue) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverConstantIntegerValue](VoiceOverConstantIntegerValue) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
