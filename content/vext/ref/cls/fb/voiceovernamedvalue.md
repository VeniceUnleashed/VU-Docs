---
title: VoiceOverNamedValue (Frostbite Container)
---
### Base Classes

[VoiceOverValue](VoiceOverValue)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverNamedValue()                                                          | Create a new instance of this container type.                                                                                 |
| VoiceOverNamedValue(VoiceOverNamedValue other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| VoiceOverNamedValue([VoiceOverValue](VoiceOverValue) other)                    | Upcast an instance of type [VoiceOverValue](VoiceOverValue) to [VoiceOverNamedValue](VoiceOverNamedValue).                    |
| VoiceOverNamedValue([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverNamedValue](VoiceOverNamedValue). |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverNamedValue](VoiceOverNamedValue) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverNamedValue](VoiceOverNamedValue) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
