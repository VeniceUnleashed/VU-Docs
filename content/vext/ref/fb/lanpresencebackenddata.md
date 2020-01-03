---
title: LanPresenceBackendData
---
### Base Classes

[PresenceBackendData](/vext/ref/fb/presencebackenddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| LanPresenceBackendData()                                                          | Create a new instance of this container type.                                                                                       |
| LanPresenceBackendData(LanPresenceBackendData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| LanPresenceBackendData([PresenceBackendData](/vext/ref/fb/presencebackenddata/) other)          | Upcast an instance of type [PresenceBackendData](/vext/ref/fb/presencebackenddata/) to [LanPresenceBackendData](/vext/ref/fb/lanpresencebackenddata/).          |
| LanPresenceBackendData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [LanPresenceBackendData](/vext/ref/fb/lanpresencebackenddata/).                                      |
| LanPresenceBackendData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LanPresenceBackendData](/vext/ref/fb/lanpresencebackenddata/). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [LanPresenceBackendData](/vext/ref/fb/lanpresencebackenddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LanPresenceBackendData](/vext/ref/fb/lanpresencebackenddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
