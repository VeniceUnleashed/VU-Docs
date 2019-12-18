---
title: EntryComponentSoundData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| EntryComponentSoundData()                                                          | Create a new instance of this container type.                                                                                         |
| EntryComponentSoundData(EntryComponentSoundData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| EntryComponentSoundData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EntryComponentSoundData](EntryComponentSoundData). |

## Properties

| Name              | Type                                               | Description |
| ----------------- | -------------------------------------------------- | ----------- |
| stanceSounds      | [StanceSwitchSoundData](StanceSwitchSoundData)\[\] |             |
| stanceSwitchSound | [SoundAsset](SoundAsset)                           |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EntryComponentSoundData](EntryComponentSoundData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EntryComponentSoundData](EntryComponentSoundData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
