---
title: PresenceLeaderboardServiceData (Frostbite Container)
---
### Base Classes

[PresenceServiceData](PresenceServiceData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceLeaderboardServiceData()                                                          | Create a new instance of this container type.                                                                                                       |
| PresenceLeaderboardServiceData(PresenceLeaderboardServiceData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| PresenceLeaderboardServiceData([PresenceServiceData](PresenceServiceData) other)          | Upcast an instance of type [PresenceServiceData](PresenceServiceData) to [PresenceLeaderboardServiceData](PresenceLeaderboardServiceData).          |
| PresenceLeaderboardServiceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PresenceLeaderboardServiceData](PresenceLeaderboardServiceData).                                      |
| PresenceLeaderboardServiceData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PresenceLeaderboardServiceData](PresenceLeaderboardServiceData). |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceLeaderboardServiceData](PresenceLeaderboardServiceData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PresenceLeaderboardServiceData](PresenceLeaderboardServiceData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
