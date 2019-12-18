---
title: BlazePresenceBackendData (Frostbite Container)
---
### Base Classes

[PresenceBackendData](PresenceBackendData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| BlazePresenceBackendData()                                                          | Create a new instance of this container type.                                                                                           |
| BlazePresenceBackendData(BlazePresenceBackendData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| BlazePresenceBackendData([PresenceBackendData](PresenceBackendData) other)          | Upcast an instance of type [PresenceBackendData](PresenceBackendData) to [BlazePresenceBackendData](BlazePresenceBackendData).          |
| BlazePresenceBackendData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [BlazePresenceBackendData](BlazePresenceBackendData).                                      |
| BlazePresenceBackendData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [BlazePresenceBackendData](BlazePresenceBackendData). |

## Properties

| Name                | Type                                         | Description |
| ------------------- | -------------------------------------------- | ----------- |
| matchmakingSessions | [MatchmakingSession](MatchmakingSession)\[\] |             |
| useDemanglerService | bool                                         |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [BlazePresenceBackendData](BlazePresenceBackendData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [BlazePresenceBackendData](BlazePresenceBackendData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
