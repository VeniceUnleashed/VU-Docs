---
title: DirtySockPresenceBackendData
---
### Base Classes

[PresenceBackendData](PresenceBackendData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DirtySockPresenceBackendData()                                                          | Create a new instance of this container type.                                                                                                   |
| DirtySockPresenceBackendData(DirtySockPresenceBackendData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| DirtySockPresenceBackendData([PresenceBackendData](PresenceBackendData) other)          | Upcast an instance of type [PresenceBackendData](PresenceBackendData) to [DirtySockPresenceBackendData](DirtySockPresenceBackendData).          |
| DirtySockPresenceBackendData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [DirtySockPresenceBackendData](DirtySockPresenceBackendData).                                      |
| DirtySockPresenceBackendData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DirtySockPresenceBackendData](DirtySockPresenceBackendData). |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DirtySockPresenceBackendData](DirtySockPresenceBackendData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DirtySockPresenceBackendData](DirtySockPresenceBackendData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
