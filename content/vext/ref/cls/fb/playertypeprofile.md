---
title: PlayerTypeProfile (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| PlayerTypeProfile()                                                          | Create a new instance of this container type.                                                                             |
| PlayerTypeProfile(PlayerTypeProfile other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| PlayerTypeProfile([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PlayerTypeProfile](PlayerTypeProfile).                                      |
| PlayerTypeProfile([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PlayerTypeProfile](PlayerTypeProfile). |

## Properties

| Name               | Type                                 | Description |
| ------------------ | ------------------------------------ | ----------- |
| values             | [PersistenceData](PersistenceData)   |             |
| awards             | [AwardDataTree](AwardDataTree)       |             |
| rankParams         | [RankParamsAsset](RankParamsAsset)   |             |
| scoring            | [ScoringData](ScoringData)           |             |
| dogTags            | [DogTagsAsset](DogTagsAsset)         |             |
| eloParams          | [EloParameters](EloParameters)       |             |
| staticUnlocks      | [StaticUnlockList](StaticUnlockList) |             |
| spamSettings       | [StatSpamSettings](StatSpamSettings) |             |
| orderedUnlockNames | string\[\]                           |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [PlayerTypeProfile](PlayerTypeProfile) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PlayerTypeProfile](PlayerTypeProfile) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
