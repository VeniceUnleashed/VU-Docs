---
title: VoiceOverObject (Frostbite Container)
---
### Base Classes

[VoiceOverNamedValue](VoiceOverNamedValue)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| VoiceOverObject()                                                          | Create a new instance of this container type.                                                                         |
| VoiceOverObject(VoiceOverObject other)                                     | Create a reference copy of an instance of the same type.                                                              |
| VoiceOverObject([VoiceOverNamedValue](VoiceOverNamedValue) other)          | Upcast an instance of type [VoiceOverNamedValue](VoiceOverNamedValue) to [VoiceOverObject](VoiceOverObject).          |
| VoiceOverObject([VoiceOverValue](VoiceOverValue) other)                    | Upcast an instance of type [VoiceOverValue](VoiceOverValue) to [VoiceOverObject](VoiceOverObject).                    |
| VoiceOverObject([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverObject](VoiceOverObject). |

## Properties

| Name       | Type                                           | Description |
| ---------- | ---------------------------------------------- | ----------- |
| properties | [VoiceOverNamedValue](VoiceOverNamedValue)\[\] |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverObject](VoiceOverObject) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverObject](VoiceOverObject) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
