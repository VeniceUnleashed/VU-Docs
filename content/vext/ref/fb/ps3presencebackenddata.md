---
title: Ps3PresenceBackendData
---
### Base Classes

[PresenceBackendData](/vext/ref/fb/presencebackenddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Ps3PresenceBackendData()                                                          | Create a new instance of this container type.                                                                                       |
| Ps3PresenceBackendData(Ps3PresenceBackendData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| Ps3PresenceBackendData([PresenceBackendData](/vext/ref/fb/presencebackenddata/) other)          | Upcast an instance of type [PresenceBackendData](/vext/ref/fb/presencebackenddata/) to [Ps3PresenceBackendData](/vext/ref/fb/ps3presencebackenddata/).          |
| Ps3PresenceBackendData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [Ps3PresenceBackendData](/vext/ref/fb/ps3presencebackenddata/).                                      |
| Ps3PresenceBackendData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [Ps3PresenceBackendData](/vext/ref/fb/ps3presencebackenddata/). |

## Properties

| Name                    | Type                                                         | Description |
| ----------------------- | ------------------------------------------------------------ | ----------- |
| communicationId         | string                                                       |             |
| communicationSignature  | string                                                       |             |
| skuSettings             | [Ps3SkuSettings](/vext/ref/fb/ps3skusettings/)\[\]                         |             |
| parentalLockAgeSettings | [Ps3ParentalLockAgeSettings](/vext/ref/fb/ps3parentallockagesettings/)\[\] |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [Ps3PresenceBackendData](/vext/ref/fb/ps3presencebackenddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [Ps3PresenceBackendData](/vext/ref/fb/ps3presencebackenddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
