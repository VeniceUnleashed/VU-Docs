---
title: AdvertisementZoneMember (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                            | Description                                              |
| ------------------------------------------------------ | -------------------------------------------------------- |
| AdvertisementZoneMember()                              | Create a new instance of this structure type.            |
| AdvertisementZoneMember(AdvertisementZoneMember other) | Create a reference copy of a structure of the same type. |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| identifier | string |             |
| filename   | string |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [AdvertisementZoneMember](AdvertisementZoneMember) | [Clone](#clone) |            |

### Clone

> [AdvertisementZoneMember](AdvertisementZoneMember) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
