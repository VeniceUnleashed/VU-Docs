---
title: VoiceOverTriggerParameter (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverTriggerParameter()                                                          | Create a new instance of this container type.                                                                                             |
| VoiceOverTriggerParameter(VoiceOverTriggerParameter other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| VoiceOverTriggerParameter([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverTriggerParameter](VoiceOverTriggerParameter). |

## Properties

| Name           | Type                                                 | Description |
| -------------- | ---------------------------------------------------- | ----------- |
| source         | [VoiceOverValueConnection](VoiceOverValueConnection) |             |
| eventParameter | [VoiceOverNamedValue](VoiceOverNamedValue)           |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverTriggerParameter](VoiceOverTriggerParameter) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverTriggerParameter](VoiceOverTriggerParameter) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
