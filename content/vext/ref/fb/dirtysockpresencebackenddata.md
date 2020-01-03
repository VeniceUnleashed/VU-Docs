---
title: DirtySockPresenceBackendData
---
### Base Classes

[PresenceBackendData](/vext/ref/fb/presencebackenddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DirtySockPresenceBackendData()                                                          | Create a new instance of this container type.                                                                                                   |
| DirtySockPresenceBackendData(DirtySockPresenceBackendData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| DirtySockPresenceBackendData([PresenceBackendData](/vext/ref/fb/presencebackenddata/) other)          | Upcast an instance of type [PresenceBackendData](/vext/ref/fb/presencebackenddata/) to [DirtySockPresenceBackendData](/vext/ref/fb/dirtysockpresencebackenddata/).          |
| DirtySockPresenceBackendData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [DirtySockPresenceBackendData](/vext/ref/fb/dirtysockpresencebackenddata/).                                      |
| DirtySockPresenceBackendData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DirtySockPresenceBackendData](/vext/ref/fb/dirtysockpresencebackenddata/). |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DirtySockPresenceBackendData](/vext/ref/fb/dirtysockpresencebackenddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DirtySockPresenceBackendData](/vext/ref/fb/dirtysockpresencebackenddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
