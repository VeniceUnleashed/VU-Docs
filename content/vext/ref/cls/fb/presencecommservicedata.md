---
title: PresenceCommServiceData (Frostbite Container)
---
### Base Classes

[PresenceServiceData](PresenceServiceData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceCommServiceData()                                                          | Create a new instance of this container type.                                                                                         |
| PresenceCommServiceData(PresenceCommServiceData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| PresenceCommServiceData([PresenceServiceData](PresenceServiceData) other)          | Upcast an instance of type [PresenceServiceData](PresenceServiceData) to [PresenceCommServiceData](PresenceCommServiceData).          |
| PresenceCommServiceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PresenceCommServiceData](PresenceCommServiceData).                                      |
| PresenceCommServiceData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PresenceCommServiceData](PresenceCommServiceData). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceCommServiceData](PresenceCommServiceData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PresenceCommServiceData](PresenceCommServiceData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
