---
title: PresenceBackendData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| PresenceBackendData()                                                          | Create a new instance of this container type.                                                                                 |
| PresenceBackendData(PresenceBackendData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| PresenceBackendData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PresenceBackendData](/vext/ref/fb/presencebackenddata/).                                      |
| PresenceBackendData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PresenceBackendData](/vext/ref/fb/presencebackenddata/). |

## Properties

| Name     | Type                                   | Description |
| -------- | -------------------------------------- | ----------- |
| requests | [PresenceRequest](/vext/ref/fb/presencerequest/)\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [PresenceBackendData](/vext/ref/fb/presencebackenddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PresenceBackendData](/vext/ref/fb/presencebackenddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
