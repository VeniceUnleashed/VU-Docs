---
title: AwardAchievementData
---
### Base Classes

[AwardData](AwardData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| AwardAchievementData()                                                          | Create a new instance of this container type.                                                                                   |
| AwardAchievementData(AwardAchievementData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| AwardAchievementData([AwardData](AwardData) other)                              | Upcast an instance of type [AwardData](AwardData) to [AwardAchievementData](AwardAchievementData).                              |
| AwardAchievementData([AbstractAwardData](AbstractAwardData) other)              | Upcast an instance of type [AbstractAwardData](AbstractAwardData) to [AwardAchievementData](AwardAchievementData).              |
| AwardAchievementData([TreeNodeBase](TreeNodeBase) other)                        | Upcast an instance of type [TreeNodeBase](TreeNodeBase) to [AwardAchievementData](AwardAchievementData).                        |
| AwardAchievementData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AwardAchievementData](AwardAchievementData). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [AwardAchievementData](AwardAchievementData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AwardAchievementData](AwardAchievementData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
