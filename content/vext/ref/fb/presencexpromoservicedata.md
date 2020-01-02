---
title: PresenceXPromoServiceData
---
### Base Classes

[PresenceServiceData](PresenceServiceData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceXPromoServiceData()                                                          | Create a new instance of this container type.                                                                                             |
| PresenceXPromoServiceData(PresenceXPromoServiceData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| PresenceXPromoServiceData([PresenceServiceData](PresenceServiceData) other)          | Upcast an instance of type [PresenceServiceData](PresenceServiceData) to [PresenceXPromoServiceData](PresenceXPromoServiceData).          |
| PresenceXPromoServiceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PresenceXPromoServiceData](PresenceXPromoServiceData).                                      |
| PresenceXPromoServiceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PresenceXPromoServiceData](PresenceXPromoServiceData). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PresenceXPromoServiceData](PresenceXPromoServiceData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PresenceXPromoServiceData](PresenceXPromoServiceData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
