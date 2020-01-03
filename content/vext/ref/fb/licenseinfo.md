---
title: LicenseInfo
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                    | Description                                              |
| ------------------------------ | -------------------------------------------------------- |
| LicenseInfo()                  | Create a new instance of this structure type.            |
| LicenseInfo(LicenseInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name            | Type                         | Description |
| --------------- | ---------------------------- | ----------- |
| name            | string                       |             |
| stagingPlatform | [GamePlatform](/vext/ref/fb/gameplatform/) |             |
| allowStaging    | bool                         |             |
| clientOnly      | bool                         |             |

## Methods

| Type                       | Name            | Parameters |
| -------------------------- | --------------- | ---------- |
| [LicenseInfo](/vext/ref/fb/licenseinfo/) | [Clone](#clone) |            |

### Clone

> [LicenseInfo](/vext/ref/fb/licenseinfo/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
