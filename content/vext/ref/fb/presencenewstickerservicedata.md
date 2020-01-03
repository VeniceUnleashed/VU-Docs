---
title: PresenceNewsTickerServiceData
---
### Base Classes

[PresenceServiceData](/vext/ref/fb/presenceservicedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceNewsTickerServiceData()                                                          | Create a new instance of this container type.                                                                                                     |
| PresenceNewsTickerServiceData(PresenceNewsTickerServiceData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| PresenceNewsTickerServiceData([PresenceServiceData](/vext/ref/fb/presenceservicedata/) other)          | Upcast an instance of type [PresenceServiceData](/vext/ref/fb/presenceservicedata/) to [PresenceNewsTickerServiceData](/vext/ref/fb/presencenewstickerservicedata/).          |
| PresenceNewsTickerServiceData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PresenceNewsTickerServiceData](/vext/ref/fb/presencenewstickerservicedata/).                                      |
| PresenceNewsTickerServiceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PresenceNewsTickerServiceData](/vext/ref/fb/presencenewstickerservicedata/). |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceNewsTickerServiceData](/vext/ref/fb/presencenewstickerservicedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PresenceNewsTickerServiceData](/vext/ref/fb/presencenewstickerservicedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
