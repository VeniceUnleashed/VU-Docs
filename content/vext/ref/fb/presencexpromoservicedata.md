---
title: PresenceXPromoServiceData
---
### Base Classes

[PresenceServiceData](/vext/ref/fb/presenceservicedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceXPromoServiceData()                                                          | Create a new instance of this container type.                                                                                             |
| PresenceXPromoServiceData(PresenceXPromoServiceData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| PresenceXPromoServiceData([PresenceServiceData](/vext/ref/fb/presenceservicedata/) other)          | Upcast an instance of type [PresenceServiceData](/vext/ref/fb/presenceservicedata/) to [PresenceXPromoServiceData](/vext/ref/fb/presencexpromoservicedata/).          |
| PresenceXPromoServiceData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PresenceXPromoServiceData](/vext/ref/fb/presencexpromoservicedata/).                                      |
| PresenceXPromoServiceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PresenceXPromoServiceData](/vext/ref/fb/presencexpromoservicedata/). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PresenceXPromoServiceData](/vext/ref/fb/presencexpromoservicedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PresenceXPromoServiceData](/vext/ref/fb/presencexpromoservicedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
