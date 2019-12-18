---
title: PresenceNewsTickerServiceData (Frostbite Container)
---
### Base Classes

[PresenceServiceData](PresenceServiceData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceNewsTickerServiceData()                                                          | Create a new instance of this container type.                                                                                                     |
| PresenceNewsTickerServiceData(PresenceNewsTickerServiceData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| PresenceNewsTickerServiceData([PresenceServiceData](PresenceServiceData) other)          | Upcast an instance of type [PresenceServiceData](PresenceServiceData) to [PresenceNewsTickerServiceData](PresenceNewsTickerServiceData).          |
| PresenceNewsTickerServiceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PresenceNewsTickerServiceData](PresenceNewsTickerServiceData).                                      |
| PresenceNewsTickerServiceData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PresenceNewsTickerServiceData](PresenceNewsTickerServiceData). |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceNewsTickerServiceData](PresenceNewsTickerServiceData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PresenceNewsTickerServiceData](PresenceNewsTickerServiceData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
