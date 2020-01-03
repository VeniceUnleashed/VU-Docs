---
title: VoiceOverDialogClip
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverDialogClip()                                                          | Create a new instance of this container type.                                                                                 |
| VoiceOverDialogClip(VoiceOverDialogClip other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| VoiceOverDialogClip([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverDialogClip](VoiceOverDialogClip). |

## Properties

| Name             | Type                                                   | Description |
| ---------------- | ------------------------------------------------------ | ----------- |
| offset           | number                                                 |             |
| takes            | [VoiceOverDialogTake](VoiceOverDialogTake)\[\]         |             |
| offsetReferences | [VoiceOverDialogClip](VoiceOverDialogClip)\[\]         |             |
| events           | [VoiceOverDialogClipEvents](VoiceOverDialogClipEvents) |             |
| sequenceIndex    | number                                                 |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverDialogClip](VoiceOverDialogClip) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverDialogClip](VoiceOverDialogClip) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
