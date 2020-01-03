---
title: WebPresenceBackendData
---
### Base Classes

[PresenceBackendData](/vext/ref/fb/presencebackenddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| WebPresenceBackendData()                                                          | Create a new instance of this container type.                                                                                       |
| WebPresenceBackendData(WebPresenceBackendData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| WebPresenceBackendData([PresenceBackendData](/vext/ref/fb/presencebackenddata/) other)          | Upcast an instance of type [PresenceBackendData](/vext/ref/fb/presencebackenddata/) to [WebPresenceBackendData](/vext/ref/fb/webpresencebackenddata/).          |
| WebPresenceBackendData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [WebPresenceBackendData](/vext/ref/fb/webpresencebackenddata/).                                      |
| WebPresenceBackendData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WebPresenceBackendData](/vext/ref/fb/webpresencebackenddata/). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [WebPresenceBackendData](/vext/ref/fb/webpresencebackenddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WebPresenceBackendData](/vext/ref/fb/webpresencebackenddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
