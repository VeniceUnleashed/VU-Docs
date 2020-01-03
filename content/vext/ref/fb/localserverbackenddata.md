---
title: LocalServerBackendData
---
### Base Classes

[ServerBackendData](/vext/ref/fb/serverbackenddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| LocalServerBackendData()                                                          | Create a new instance of this container type.                                                                                       |
| LocalServerBackendData(LocalServerBackendData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| LocalServerBackendData([ServerBackendData](/vext/ref/fb/serverbackenddata/) other)              | Upcast an instance of type [ServerBackendData](/vext/ref/fb/serverbackenddata/) to [LocalServerBackendData](/vext/ref/fb/localserverbackenddata/).              |
| LocalServerBackendData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [LocalServerBackendData](/vext/ref/fb/localserverbackenddata/).                                      |
| LocalServerBackendData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LocalServerBackendData](/vext/ref/fb/localserverbackenddata/). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [LocalServerBackendData](/vext/ref/fb/localserverbackenddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LocalServerBackendData](/vext/ref/fb/localserverbackenddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
