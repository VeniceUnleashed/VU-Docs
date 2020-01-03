---
title: XenonPresenceBackendData
---
### Base Classes

[PresenceBackendData](/vext/ref/fb/presencebackenddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| XenonPresenceBackendData()                                                          | Create a new instance of this container type.                                                                                           |
| XenonPresenceBackendData(XenonPresenceBackendData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| XenonPresenceBackendData([PresenceBackendData](/vext/ref/fb/presencebackenddata/) other)          | Upcast an instance of type [PresenceBackendData](/vext/ref/fb/presencebackenddata/) to [XenonPresenceBackendData](/vext/ref/fb/xenonpresencebackenddata/).          |
| XenonPresenceBackendData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [XenonPresenceBackendData](/vext/ref/fb/xenonpresencebackenddata/).                                      |
| XenonPresenceBackendData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [XenonPresenceBackendData](/vext/ref/fb/xenonpresencebackenddata/). |

## Properties

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| titleId | number |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [XenonPresenceBackendData](/vext/ref/fb/xenonpresencebackenddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [XenonPresenceBackendData](/vext/ref/fb/xenonpresencebackenddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
