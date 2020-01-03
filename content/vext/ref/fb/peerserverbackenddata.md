---
title: PeerServerBackendData
---
### Base Classes

[ServerBackendData](/vext/ref/fb/serverbackenddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| PeerServerBackendData()                                                          | Create a new instance of this container type.                                                                                     |
| PeerServerBackendData(PeerServerBackendData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| PeerServerBackendData([ServerBackendData](/vext/ref/fb/serverbackenddata/) other)              | Upcast an instance of type [ServerBackendData](/vext/ref/fb/serverbackenddata/) to [PeerServerBackendData](/vext/ref/fb/peerserverbackenddata/).              |
| PeerServerBackendData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PeerServerBackendData](/vext/ref/fb/peerserverbackenddata/).                                      |
| PeerServerBackendData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PeerServerBackendData](/vext/ref/fb/peerserverbackenddata/). |

## Properties

| Name             | Type                                                 | Description |
| ---------------- | ---------------------------------------------------- | ----------- |
| createParameters | [PeerCreateGameParameters](/vext/ref/fb/peercreategameparameters/) |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [PeerServerBackendData](/vext/ref/fb/peerserverbackenddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PeerServerBackendData](/vext/ref/fb/peerserverbackenddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
