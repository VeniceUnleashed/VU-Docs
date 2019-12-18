---
title: VoiceOverEvent (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| VoiceOverEvent()                                                          | Create a new instance of this container type.                                                                       |
| VoiceOverEvent(VoiceOverEvent other)                                      | Create a reference copy of an instance of the same type.                                                            |
| VoiceOverEvent([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverEvent](VoiceOverEvent). |

## Properties

| Name       | Type                                           | Description |
| ---------- | ---------------------------------------------- | ----------- |
| name       | string                                         |             |
| parameters | [VoiceOverNamedValue](VoiceOverNamedValue)\[\] |             |
| owner      | [Asset](Asset)                                 |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverEvent](VoiceOverEvent) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverEvent](VoiceOverEvent) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
