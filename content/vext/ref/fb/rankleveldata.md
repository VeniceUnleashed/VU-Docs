---
title: RankLevelData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| RankLevelData()                                                          | Create a new instance of this container type.                                                                     |
| RankLevelData(RankLevelData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| RankLevelData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RankLevelData](/vext/ref/fb/rankleveldata/). |

## Properties

| Name         | Type                                   | Description |
| ------------ | -------------------------------------- | ----------- |
| rankName     | string                                 |             |
| pointsNeeded | number                                 |             |
| imageName    | string                                 |             |
| iconName     | string                                 |             |
| soundName    | string                                 |             |
| unlockInfos  | [BasicUnlockInfo](/vext/ref/fb/basicunlockinfo/)\[\] |             |
| rankNumber   | number                                 |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [RankLevelData](/vext/ref/fb/rankleveldata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RankLevelData](/vext/ref/fb/rankleveldata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
