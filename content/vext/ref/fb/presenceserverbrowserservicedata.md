---
title: PresenceServerBrowserServiceData
---
### Base Classes

[PresenceServiceData](PresenceServiceData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceServerBrowserServiceData()                                                          | Create a new instance of this container type.                                                                                                           |
| PresenceServerBrowserServiceData(PresenceServerBrowserServiceData other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| PresenceServerBrowserServiceData([PresenceServiceData](PresenceServiceData) other)          | Upcast an instance of type [PresenceServiceData](PresenceServiceData) to [PresenceServerBrowserServiceData](PresenceServerBrowserServiceData).          |
| PresenceServerBrowserServiceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PresenceServerBrowserServiceData](PresenceServerBrowserServiceData).                                      |
| PresenceServerBrowserServiceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PresenceServerBrowserServiceData](PresenceServerBrowserServiceData). |

## Properties

| Name            | Type                                       | Description |
| --------------- | ------------------------------------------ | ----------- |
| filterCriterias | [MatchmakingCriteria](MatchmakingCriteria) |             |
| listCapacity    | number                                     |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceServerBrowserServiceData](PresenceServerBrowserServiceData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PresenceServerBrowserServiceData](PresenceServerBrowserServiceData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
