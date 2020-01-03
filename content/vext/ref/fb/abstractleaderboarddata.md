---
title: AbstractLeaderboardData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| AbstractLeaderboardData()                                                          | Create a new instance of this container type.                                                                                         |
| AbstractLeaderboardData(AbstractLeaderboardData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| AbstractLeaderboardData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AbstractLeaderboardData](/vext/ref/fb/abstractleaderboarddata/). |

## Properties

| Name            | Type   | Description |
| --------------- | ------ | ----------- |
| leaderboardName | string |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AbstractLeaderboardData](/vext/ref/fb/abstractleaderboarddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AbstractLeaderboardData](/vext/ref/fb/abstractleaderboarddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
