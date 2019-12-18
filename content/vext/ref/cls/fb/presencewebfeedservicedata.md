---
title: PresenceWebFeedServiceData (Frostbite Container)
---
### Base Classes

[PresenceServiceData](PresenceServiceData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceWebFeedServiceData()                                                          | Create a new instance of this container type.                                                                                               |
| PresenceWebFeedServiceData(PresenceWebFeedServiceData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| PresenceWebFeedServiceData([PresenceServiceData](PresenceServiceData) other)          | Upcast an instance of type [PresenceServiceData](PresenceServiceData) to [PresenceWebFeedServiceData](PresenceWebFeedServiceData).          |
| PresenceWebFeedServiceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PresenceWebFeedServiceData](PresenceWebFeedServiceData).                                      |
| PresenceWebFeedServiceData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PresenceWebFeedServiceData](PresenceWebFeedServiceData). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceWebFeedServiceData](PresenceWebFeedServiceData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PresenceWebFeedServiceData](PresenceWebFeedServiceData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
