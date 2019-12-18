---
title: LicenseInfo (Frostbite Structure)
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
| stagingPlatform | [GamePlatform](GamePlatform) |             |
| allowStaging    | bool                         |             |
| clientOnly      | bool                         |             |

## Methods

| Type                       | Name            | Parameters |
| -------------------------- | --------------- | ---------- |
| [LicenseInfo](LicenseInfo) | [Clone](#clone) |            |

### Clone

> [LicenseInfo](LicenseInfo) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
