---
title: PeerServerBackendData
---
### Base Classes

[ServerBackendData](ServerBackendData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| PeerServerBackendData()                                                          | Create a new instance of this container type.                                                                                     |
| PeerServerBackendData(PeerServerBackendData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| PeerServerBackendData([ServerBackendData](ServerBackendData) other)              | Upcast an instance of type [ServerBackendData](ServerBackendData) to [PeerServerBackendData](PeerServerBackendData).              |
| PeerServerBackendData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PeerServerBackendData](PeerServerBackendData).                                      |
| PeerServerBackendData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PeerServerBackendData](PeerServerBackendData). |

## Properties

| Name             | Type                                                 | Description |
| ---------------- | ---------------------------------------------------- | ----------- |
| createParameters | [PeerCreateGameParameters](PeerCreateGameParameters) |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [PeerServerBackendData](PeerServerBackendData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PeerServerBackendData](PeerServerBackendData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
