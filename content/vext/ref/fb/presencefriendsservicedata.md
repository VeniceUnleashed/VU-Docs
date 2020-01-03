---
title: PresenceFriendsServiceData
---
### Base Classes

[PresenceServiceData](/vext/ref/fb/presenceservicedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceFriendsServiceData()                                                          | Create a new instance of this container type.                                                                                               |
| PresenceFriendsServiceData(PresenceFriendsServiceData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| PresenceFriendsServiceData([PresenceServiceData](/vext/ref/fb/presenceservicedata/) other)          | Upcast an instance of type [PresenceServiceData](/vext/ref/fb/presenceservicedata/) to [PresenceFriendsServiceData](/vext/ref/fb/presencefriendsservicedata/).          |
| PresenceFriendsServiceData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PresenceFriendsServiceData](/vext/ref/fb/presencefriendsservicedata/).                                      |
| PresenceFriendsServiceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PresenceFriendsServiceData](/vext/ref/fb/presencefriendsservicedata/). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceFriendsServiceData](/vext/ref/fb/presencefriendsservicedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PresenceFriendsServiceData](/vext/ref/fb/presencefriendsservicedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
