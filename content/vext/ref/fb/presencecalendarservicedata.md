---
title: PresenceCalendarServiceData
---
### Base Classes

[PresenceServiceData](/vext/ref/fb/presenceservicedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceCalendarServiceData()                                                          | Create a new instance of this container type.                                                                                                 |
| PresenceCalendarServiceData(PresenceCalendarServiceData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| PresenceCalendarServiceData([PresenceServiceData](/vext/ref/fb/presenceservicedata/) other)          | Upcast an instance of type [PresenceServiceData](/vext/ref/fb/presenceservicedata/) to [PresenceCalendarServiceData](/vext/ref/fb/presencecalendarservicedata/).          |
| PresenceCalendarServiceData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PresenceCalendarServiceData](/vext/ref/fb/presencecalendarservicedata/).                                      |
| PresenceCalendarServiceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PresenceCalendarServiceData](/vext/ref/fb/presencecalendarservicedata/). |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceCalendarServiceData](/vext/ref/fb/presencecalendarservicedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PresenceCalendarServiceData](/vext/ref/fb/presencecalendarservicedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
