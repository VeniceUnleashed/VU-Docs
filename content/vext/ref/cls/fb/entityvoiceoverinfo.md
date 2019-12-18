---
title: EntityVoiceOverInfo (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| EntityVoiceOverInfo()                                                          | Create a new instance of this container type.                                                                                 |
| EntityVoiceOverInfo(EntityVoiceOverInfo other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| EntityVoiceOverInfo([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EntityVoiceOverInfo](EntityVoiceOverInfo). |

## Properties

| Name          | Type                                 | Description |
| ------------- | ------------------------------------ | ----------- |
| voiceOverType | [VoiceOverObject](VoiceOverObject)   |             |
| labels        | [VoiceOverLabel](VoiceOverLabel)\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [EntityVoiceOverInfo](EntityVoiceOverInfo) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EntityVoiceOverInfo](EntityVoiceOverInfo) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type                              | Description                                 |
| ---- | --------------------------------- | ------------------------------------------- |
| guid | [Guid](/vext/ref/cls/shr/guid) | An optional GUID to assign to the instance. |
