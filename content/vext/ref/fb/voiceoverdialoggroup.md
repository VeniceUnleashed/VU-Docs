---
title: VoiceOverDialogGroup
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverDialogGroup()                                                          | Create a new instance of this container type.                                                                                   |
| VoiceOverDialogGroup(VoiceOverDialogGroup other)                                | Create a reference copy of an instance of the same type.                                                                        |
| VoiceOverDialogGroup([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverDialogGroup](VoiceOverDialogGroup). |

## Properties

| Name   | Type                                             | Description |
| ------ | ------------------------------------------------ | ----------- |
| sound  | [SoundAsset](SoundAsset)                         |             |
| tracks | [VoiceOverDialogTrack](VoiceOverDialogTrack)\[\] |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverDialogGroup](VoiceOverDialogGroup) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverDialogGroup](VoiceOverDialogGroup) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
