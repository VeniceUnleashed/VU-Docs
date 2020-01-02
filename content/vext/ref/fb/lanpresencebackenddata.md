---
title: LanPresenceBackendData
---
### Base Classes

[PresenceBackendData](PresenceBackendData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| LanPresenceBackendData()                                                          | Create a new instance of this container type.                                                                                       |
| LanPresenceBackendData(LanPresenceBackendData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| LanPresenceBackendData([PresenceBackendData](PresenceBackendData) other)          | Upcast an instance of type [PresenceBackendData](PresenceBackendData) to [LanPresenceBackendData](LanPresenceBackendData).          |
| LanPresenceBackendData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [LanPresenceBackendData](LanPresenceBackendData).                                      |
| LanPresenceBackendData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LanPresenceBackendData](LanPresenceBackendData). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [LanPresenceBackendData](LanPresenceBackendData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LanPresenceBackendData](LanPresenceBackendData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
