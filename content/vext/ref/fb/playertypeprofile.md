---
title: PlayerTypeProfile
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| PlayerTypeProfile()                                                          | Create a new instance of this container type.                                                                             |
| PlayerTypeProfile(PlayerTypeProfile other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| PlayerTypeProfile([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PlayerTypeProfile](/vext/ref/fb/playertypeprofile/).                                      |
| PlayerTypeProfile([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlayerTypeProfile](/vext/ref/fb/playertypeprofile/). |

## Properties

| Name               | Type                                 | Description |
| ------------------ | ------------------------------------ | ----------- |
| values             | [PersistenceData](/vext/ref/fb/persistencedata/)   |             |
| awards             | [AwardDataTree](/vext/ref/fb/awarddatatree/)       |             |
| rankParams         | [RankParamsAsset](/vext/ref/fb/rankparamsasset/)   |             |
| scoring            | [ScoringData](/vext/ref/fb/scoringdata/)           |             |
| dogTags            | [DogTagsAsset](/vext/ref/fb/dogtagsasset/)         |             |
| eloParams          | [EloParameters](/vext/ref/fb/eloparameters/)       |             |
| staticUnlocks      | [StaticUnlockList](/vext/ref/fb/staticunlocklist/) |             |
| spamSettings       | [StatSpamSettings](/vext/ref/fb/statspamsettings/) |             |
| orderedUnlockNames | string\[\]                           |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [PlayerTypeProfile](/vext/ref/fb/playertypeprofile/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PlayerTypeProfile](/vext/ref/fb/playertypeprofile/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
