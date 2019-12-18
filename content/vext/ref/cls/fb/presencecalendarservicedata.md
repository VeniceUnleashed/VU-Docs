---
title: PresenceCalendarServiceData (Frostbite Container)
---
### Base Classes

[PresenceServiceData](PresenceServiceData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceCalendarServiceData()                                                          | Create a new instance of this container type.                                                                                                 |
| PresenceCalendarServiceData(PresenceCalendarServiceData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| PresenceCalendarServiceData([PresenceServiceData](PresenceServiceData) other)          | Upcast an instance of type [PresenceServiceData](PresenceServiceData) to [PresenceCalendarServiceData](PresenceCalendarServiceData).          |
| PresenceCalendarServiceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PresenceCalendarServiceData](PresenceCalendarServiceData).                                      |
| PresenceCalendarServiceData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PresenceCalendarServiceData](PresenceCalendarServiceData). |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceCalendarServiceData](PresenceCalendarServiceData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PresenceCalendarServiceData](PresenceCalendarServiceData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
