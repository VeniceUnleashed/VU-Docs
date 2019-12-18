---
title: PresenceFriendsServiceData (Frostbite Container)
---
### Base Classes

[PresenceServiceData](PresenceServiceData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceFriendsServiceData()                                                          | Create a new instance of this container type.                                                                                               |
| PresenceFriendsServiceData(PresenceFriendsServiceData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| PresenceFriendsServiceData([PresenceServiceData](PresenceServiceData) other)          | Upcast an instance of type [PresenceServiceData](PresenceServiceData) to [PresenceFriendsServiceData](PresenceFriendsServiceData).          |
| PresenceFriendsServiceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PresenceFriendsServiceData](PresenceFriendsServiceData).                                      |
| PresenceFriendsServiceData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PresenceFriendsServiceData](PresenceFriendsServiceData). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceFriendsServiceData](PresenceFriendsServiceData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PresenceFriendsServiceData](PresenceFriendsServiceData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
