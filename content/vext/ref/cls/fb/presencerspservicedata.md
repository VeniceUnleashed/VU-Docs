---
title: PresenceRspServiceData (Frostbite Container)
---
### Base Classes

[PresenceServiceData](PresenceServiceData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| PresenceRspServiceData()                                                          | Create a new instance of this container type.                                                                                       |
| PresenceRspServiceData(PresenceRspServiceData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| PresenceRspServiceData([PresenceServiceData](PresenceServiceData) other)          | Upcast an instance of type [PresenceServiceData](PresenceServiceData) to [PresenceRspServiceData](PresenceRspServiceData).          |
| PresenceRspServiceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PresenceRspServiceData](PresenceRspServiceData).                                      |
| PresenceRspServiceData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PresenceRspServiceData](PresenceRspServiceData). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PresenceRspServiceData](PresenceRspServiceData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PresenceRspServiceData](PresenceRspServiceData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
