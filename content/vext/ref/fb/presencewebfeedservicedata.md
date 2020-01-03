---
title: PresenceWebFeedServiceData
---
### Base Classes

[PresenceServiceData](/vext/ref/fb/presenceservicedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceWebFeedServiceData()                                                          | Create a new instance of this container type.                                                                                               |
| PresenceWebFeedServiceData(PresenceWebFeedServiceData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| PresenceWebFeedServiceData([PresenceServiceData](/vext/ref/fb/presenceservicedata/) other)          | Upcast an instance of type [PresenceServiceData](/vext/ref/fb/presenceservicedata/) to [PresenceWebFeedServiceData](/vext/ref/fb/presencewebfeedservicedata/).          |
| PresenceWebFeedServiceData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PresenceWebFeedServiceData](/vext/ref/fb/presencewebfeedservicedata/).                                      |
| PresenceWebFeedServiceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PresenceWebFeedServiceData](/vext/ref/fb/presencewebfeedservicedata/). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceWebFeedServiceData](/vext/ref/fb/presencewebfeedservicedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PresenceWebFeedServiceData](/vext/ref/fb/presencewebfeedservicedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
