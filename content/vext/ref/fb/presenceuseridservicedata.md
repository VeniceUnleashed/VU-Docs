---
title: PresenceUserIdServiceData
---
### Base Classes

[PresenceServiceData](PresenceServiceData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceUserIdServiceData()                                                          | Create a new instance of this container type.                                                                                             |
| PresenceUserIdServiceData(PresenceUserIdServiceData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| PresenceUserIdServiceData([PresenceServiceData](PresenceServiceData) other)          | Upcast an instance of type [PresenceServiceData](PresenceServiceData) to [PresenceUserIdServiceData](PresenceUserIdServiceData).          |
| PresenceUserIdServiceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PresenceUserIdServiceData](PresenceUserIdServiceData).                                      |
| PresenceUserIdServiceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PresenceUserIdServiceData](PresenceUserIdServiceData). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PresenceUserIdServiceData](PresenceUserIdServiceData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PresenceUserIdServiceData](PresenceUserIdServiceData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
