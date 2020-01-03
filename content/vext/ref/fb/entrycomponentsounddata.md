---
title: EntryComponentSoundData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| EntryComponentSoundData()                                                          | Create a new instance of this container type.                                                                                         |
| EntryComponentSoundData(EntryComponentSoundData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| EntryComponentSoundData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntryComponentSoundData](/vext/ref/fb/entrycomponentsounddata/). |

## Properties

| Name              | Type                                               | Description |
| ----------------- | -------------------------------------------------- | ----------- |
| stanceSounds      | [StanceSwitchSoundData](/vext/ref/fb/stanceswitchsounddata/)\[\] |             |
| stanceSwitchSound | [SoundAsset](/vext/ref/fb/soundasset/)                           |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EntryComponentSoundData](/vext/ref/fb/entrycomponentsounddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EntryComponentSoundData](/vext/ref/fb/entrycomponentsounddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
