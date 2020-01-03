---
title: PresenceServerBrowserServiceData
---
### Base Classes

[PresenceServiceData](/vext/ref/fb/presenceservicedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceServerBrowserServiceData()                                                          | Create a new instance of this container type.                                                                                                           |
| PresenceServerBrowserServiceData(PresenceServerBrowserServiceData other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| PresenceServerBrowserServiceData([PresenceServiceData](/vext/ref/fb/presenceservicedata/) other)          | Upcast an instance of type [PresenceServiceData](/vext/ref/fb/presenceservicedata/) to [PresenceServerBrowserServiceData](/vext/ref/fb/presenceserverbrowserservicedata/).          |
| PresenceServerBrowserServiceData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PresenceServerBrowserServiceData](/vext/ref/fb/presenceserverbrowserservicedata/).                                      |
| PresenceServerBrowserServiceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PresenceServerBrowserServiceData](/vext/ref/fb/presenceserverbrowserservicedata/). |

## Properties

| Name            | Type                                       | Description |
| --------------- | ------------------------------------------ | ----------- |
| filterCriterias | [MatchmakingCriteria](/vext/ref/fb/matchmakingcriteria/) |             |
| listCapacity    | number                                     |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceServerBrowserServiceData](/vext/ref/fb/presenceserverbrowserservicedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PresenceServerBrowserServiceData](/vext/ref/fb/presenceserverbrowserservicedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
