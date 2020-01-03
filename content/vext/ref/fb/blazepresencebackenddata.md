---
title: BlazePresenceBackendData
---
### Base Classes

[PresenceBackendData](/vext/ref/fb/presencebackenddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| BlazePresenceBackendData()                                                          | Create a new instance of this container type.                                                                                           |
| BlazePresenceBackendData(BlazePresenceBackendData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| BlazePresenceBackendData([PresenceBackendData](/vext/ref/fb/presencebackenddata/) other)          | Upcast an instance of type [PresenceBackendData](/vext/ref/fb/presencebackenddata/) to [BlazePresenceBackendData](/vext/ref/fb/blazepresencebackenddata/).          |
| BlazePresenceBackendData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [BlazePresenceBackendData](/vext/ref/fb/blazepresencebackenddata/).                                      |
| BlazePresenceBackendData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BlazePresenceBackendData](/vext/ref/fb/blazepresencebackenddata/). |

## Properties

| Name                | Type                                         | Description |
| ------------------- | -------------------------------------------- | ----------- |
| matchmakingSessions | [MatchmakingSession](/vext/ref/fb/matchmakingsession/)\[\] |             |
| useDemanglerService | bool                                         |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [BlazePresenceBackendData](/vext/ref/fb/blazepresencebackenddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BlazePresenceBackendData](/vext/ref/fb/blazepresencebackenddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
