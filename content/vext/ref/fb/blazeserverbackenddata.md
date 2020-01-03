---
title: BlazeServerBackendData
---
### Base Classes

[ServerBackendData](/vext/ref/fb/serverbackenddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| BlazeServerBackendData()                                                          | Create a new instance of this container type.                                                                                       |
| BlazeServerBackendData(BlazeServerBackendData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| BlazeServerBackendData([ServerBackendData](/vext/ref/fb/serverbackenddata/) other)              | Upcast an instance of type [ServerBackendData](/vext/ref/fb/serverbackenddata/) to [BlazeServerBackendData](/vext/ref/fb/blazeserverbackenddata/).              |
| BlazeServerBackendData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [BlazeServerBackendData](/vext/ref/fb/blazeserverbackenddata/).                                      |
| BlazeServerBackendData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BlazeServerBackendData](/vext/ref/fb/blazeserverbackenddata/). |

## Properties

| Name             | Type                                                       | Description |
| ---------------- | ---------------------------------------------------------- | ----------- |
| createParameters | [BlazeCreateGameParameters](/vext/ref/fb/blazecreategameparameters/)     |             |
| configUrl        | [OnlineEnvironmentConsoleUrl](/vext/ref/fb/onlineenvironmentconsoleurl/) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [BlazeServerBackendData](/vext/ref/fb/blazeserverbackenddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BlazeServerBackendData](/vext/ref/fb/blazeserverbackenddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
