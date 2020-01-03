---
title: LanServerBackendData
---
### Base Classes

[ServerBackendData](/vext/ref/fb/serverbackenddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| LanServerBackendData()                                                          | Create a new instance of this container type.                                                                                   |
| LanServerBackendData(LanServerBackendData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| LanServerBackendData([ServerBackendData](/vext/ref/fb/serverbackenddata/) other)              | Upcast an instance of type [ServerBackendData](/vext/ref/fb/serverbackenddata/) to [LanServerBackendData](/vext/ref/fb/lanserverbackenddata/).              |
| LanServerBackendData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [LanServerBackendData](/vext/ref/fb/lanserverbackenddata/).                                      |
| LanServerBackendData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LanServerBackendData](/vext/ref/fb/lanserverbackenddata/). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [LanServerBackendData](/vext/ref/fb/lanserverbackenddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LanServerBackendData](/vext/ref/fb/lanserverbackenddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
