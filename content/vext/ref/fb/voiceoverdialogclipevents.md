---
title: VoiceOverDialogClipEvents
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverDialogClipEvents()                                                          | Create a new instance of this container type.                                                                                             |
| VoiceOverDialogClipEvents(VoiceOverDialogClipEvents other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| VoiceOverDialogClipEvents([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverDialogClipEvents](VoiceOverDialogClipEvents). |

## Properties

| Name             | Type   | Description |
| ---------------- | ------ | ----------- |
| startedNameHash  | number |             |
| finishedNameHash | number |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverDialogClipEvents](VoiceOverDialogClipEvents) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverDialogClipEvents](VoiceOverDialogClipEvents) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
