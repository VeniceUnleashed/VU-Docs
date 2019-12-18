---
title: VoiceOverCharacterAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverCharacterAsset()                                                          | Create a new instance of this container type.                                                                                         |
| VoiceOverCharacterAsset(VoiceOverCharacterAsset other)                             | Create a reference copy of an instance of the same type.                                                                              |
| VoiceOverCharacterAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [VoiceOverCharacterAsset](VoiceOverCharacterAsset).                                      |
| VoiceOverCharacterAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverCharacterAsset](VoiceOverCharacterAsset). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverCharacterAsset](VoiceOverCharacterAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverCharacterAsset](VoiceOverCharacterAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
