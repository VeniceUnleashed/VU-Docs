---
title: PresenceStatisticsServiceData
---
### Base Classes

[PresenceServiceData](/vext/ref/fb/presenceservicedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceStatisticsServiceData()                                                          | Create a new instance of this container type.                                                                                                     |
| PresenceStatisticsServiceData(PresenceStatisticsServiceData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| PresenceStatisticsServiceData([PresenceServiceData](/vext/ref/fb/presenceservicedata/) other)          | Upcast an instance of type [PresenceServiceData](/vext/ref/fb/presenceservicedata/) to [PresenceStatisticsServiceData](/vext/ref/fb/presencestatisticsservicedata/).          |
| PresenceStatisticsServiceData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PresenceStatisticsServiceData](/vext/ref/fb/presencestatisticsservicedata/).                                      |
| PresenceStatisticsServiceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PresenceStatisticsServiceData](/vext/ref/fb/presencestatisticsservicedata/). |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceStatisticsServiceData](/vext/ref/fb/presencestatisticsservicedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PresenceStatisticsServiceData](/vext/ref/fb/presencestatisticsservicedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
