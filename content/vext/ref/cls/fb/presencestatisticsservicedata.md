---
title: PresenceStatisticsServiceData (Frostbite Container)
---
### Base Classes

[PresenceServiceData](PresenceServiceData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceStatisticsServiceData()                                                          | Create a new instance of this container type.                                                                                                     |
| PresenceStatisticsServiceData(PresenceStatisticsServiceData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| PresenceStatisticsServiceData([PresenceServiceData](PresenceServiceData) other)          | Upcast an instance of type [PresenceServiceData](PresenceServiceData) to [PresenceStatisticsServiceData](PresenceStatisticsServiceData).          |
| PresenceStatisticsServiceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PresenceStatisticsServiceData](PresenceStatisticsServiceData).                                      |
| PresenceStatisticsServiceData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PresenceStatisticsServiceData](PresenceStatisticsServiceData). |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceStatisticsServiceData](PresenceStatisticsServiceData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PresenceStatisticsServiceData](PresenceStatisticsServiceData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
