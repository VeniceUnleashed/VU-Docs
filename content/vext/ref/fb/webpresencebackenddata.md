---
title: WebPresenceBackendData
---
### Base Classes

[PresenceBackendData](PresenceBackendData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| WebPresenceBackendData()                                                          | Create a new instance of this container type.                                                                                       |
| WebPresenceBackendData(WebPresenceBackendData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| WebPresenceBackendData([PresenceBackendData](PresenceBackendData) other)          | Upcast an instance of type [PresenceBackendData](PresenceBackendData) to [WebPresenceBackendData](WebPresenceBackendData).          |
| WebPresenceBackendData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [WebPresenceBackendData](WebPresenceBackendData).                                      |
| WebPresenceBackendData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WebPresenceBackendData](WebPresenceBackendData). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [WebPresenceBackendData](WebPresenceBackendData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WebPresenceBackendData](WebPresenceBackendData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
