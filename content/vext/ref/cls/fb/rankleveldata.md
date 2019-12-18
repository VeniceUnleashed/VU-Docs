---
title: RankLevelData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| RankLevelData()                                                          | Create a new instance of this container type.                                                                     |
| RankLevelData(RankLevelData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| RankLevelData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RankLevelData](RankLevelData). |

## Properties

| Name         | Type                                   | Description |
| ------------ | -------------------------------------- | ----------- |
| rankName     | string                                 |             |
| pointsNeeded | number                                 |             |
| imageName    | string                                 |             |
| iconName     | string                                 |             |
| soundName    | string                                 |             |
| unlockInfos  | [BasicUnlockInfo](BasicUnlockInfo)\[\] |             |
| rankNumber   | number                                 |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [RankLevelData](RankLevelData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RankLevelData](RankLevelData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
