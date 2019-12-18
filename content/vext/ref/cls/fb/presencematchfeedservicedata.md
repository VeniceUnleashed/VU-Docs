---
title: PresenceMatchFeedServiceData (Frostbite Container)
---
### Base Classes

[PresenceServiceData](PresenceServiceData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceMatchFeedServiceData()                                                          | Create a new instance of this container type.                                                                                                   |
| PresenceMatchFeedServiceData(PresenceMatchFeedServiceData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| PresenceMatchFeedServiceData([PresenceServiceData](PresenceServiceData) other)          | Upcast an instance of type [PresenceServiceData](PresenceServiceData) to [PresenceMatchFeedServiceData](PresenceMatchFeedServiceData).          |
| PresenceMatchFeedServiceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PresenceMatchFeedServiceData](PresenceMatchFeedServiceData).                                      |
| PresenceMatchFeedServiceData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PresenceMatchFeedServiceData](PresenceMatchFeedServiceData). |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PresenceMatchFeedServiceData](PresenceMatchFeedServiceData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PresenceMatchFeedServiceData](PresenceMatchFeedServiceData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
