---
title: PresenceAchievementServiceData (Frostbite Container)
---
### Base Classes

[PresenceServiceData](PresenceServiceData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceAchievementServiceData()                                                          | Create a new instance of this container type.                                                                                                       |
| PresenceAchievementServiceData(PresenceAchievementServiceData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| PresenceAchievementServiceData([PresenceServiceData](PresenceServiceData) other)          | Upcast an instance of type [PresenceServiceData](PresenceServiceData) to [PresenceAchievementServiceData](PresenceAchievementServiceData).          |
| PresenceAchievementServiceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PresenceAchievementServiceData](PresenceAchievementServiceData).                                      |
| PresenceAchievementServiceData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PresenceAchievementServiceData](PresenceAchievementServiceData). |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceAchievementServiceData](PresenceAchievementServiceData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PresenceAchievementServiceData](PresenceAchievementServiceData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
