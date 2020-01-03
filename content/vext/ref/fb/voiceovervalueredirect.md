---
title: VoiceOverValueRedirect
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverValueRedirect()                                                          | Create a new instance of this container type.                                                                                       |
| VoiceOverValueRedirect(VoiceOverValueRedirect other)                              | Create a reference copy of an instance of the same type.                                                                            |
| VoiceOverValueRedirect([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverValueRedirect](VoiceOverValueRedirect). |

## Properties

| Name   | Type                             | Description |
| ------ | -------------------------------- | ----------- |
| source | [VoiceOverValue](VoiceOverValue) |             |
| target | [VoiceOverValue](VoiceOverValue) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverValueRedirect](VoiceOverValueRedirect) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverValueRedirect](VoiceOverValueRedirect) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
