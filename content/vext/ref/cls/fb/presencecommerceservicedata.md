---
title: PresenceCommerceServiceData (Frostbite Container)
---
### Base Classes

[PresenceServiceData](PresenceServiceData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceCommerceServiceData()                                                          | Create a new instance of this container type.                                                                                                 |
| PresenceCommerceServiceData(PresenceCommerceServiceData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| PresenceCommerceServiceData([PresenceServiceData](PresenceServiceData) other)          | Upcast an instance of type [PresenceServiceData](PresenceServiceData) to [PresenceCommerceServiceData](PresenceCommerceServiceData).          |
| PresenceCommerceServiceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PresenceCommerceServiceData](PresenceCommerceServiceData).                                      |
| PresenceCommerceServiceData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PresenceCommerceServiceData](PresenceCommerceServiceData). |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceCommerceServiceData](PresenceCommerceServiceData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PresenceCommerceServiceData](PresenceCommerceServiceData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
