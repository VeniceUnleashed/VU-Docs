---
title: AwardAchievementData
---
### Base Classes

[AwardData](/vext/ref/fb/awarddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| AwardAchievementData()                                                          | Create a new instance of this container type.                                                                                   |
| AwardAchievementData(AwardAchievementData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| AwardAchievementData([AwardData](/vext/ref/fb/awarddata/) other)                              | Upcast an instance of type [AwardData](/vext/ref/fb/awarddata/) to [AwardAchievementData](/vext/ref/fb/awardachievementdata/).                              |
| AwardAchievementData([AbstractAwardData](/vext/ref/fb/abstractawarddata/) other)              | Upcast an instance of type [AbstractAwardData](/vext/ref/fb/abstractawarddata/) to [AwardAchievementData](/vext/ref/fb/awardachievementdata/).              |
| AwardAchievementData([TreeNodeBase](/vext/ref/fb/treenodebase/) other)                        | Upcast an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase/) to [AwardAchievementData](/vext/ref/fb/awardachievementdata/).                        |
| AwardAchievementData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AwardAchievementData](/vext/ref/fb/awardachievementdata/). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [AwardAchievementData](/vext/ref/fb/awardachievementdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AwardAchievementData](/vext/ref/fb/awardachievementdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
