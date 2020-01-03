---
title: PresenceLeaderboardServiceData
---
### Base Classes

[PresenceServiceData](/vext/ref/fb/presenceservicedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceLeaderboardServiceData()                                                          | Create a new instance of this container type.                                                                                                       |
| PresenceLeaderboardServiceData(PresenceLeaderboardServiceData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| PresenceLeaderboardServiceData([PresenceServiceData](/vext/ref/fb/presenceservicedata/) other)          | Upcast an instance of type [PresenceServiceData](/vext/ref/fb/presenceservicedata/) to [PresenceLeaderboardServiceData](/vext/ref/fb/presenceleaderboardservicedata/).          |
| PresenceLeaderboardServiceData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PresenceLeaderboardServiceData](/vext/ref/fb/presenceleaderboardservicedata/).                                      |
| PresenceLeaderboardServiceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PresenceLeaderboardServiceData](/vext/ref/fb/presenceleaderboardservicedata/). |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceLeaderboardServiceData](/vext/ref/fb/presenceleaderboardservicedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PresenceLeaderboardServiceData](/vext/ref/fb/presenceleaderboardservicedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
