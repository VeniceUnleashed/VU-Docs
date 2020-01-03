---
title: BasicUnlockInfo
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| BasicUnlockInfo()                      | Create a new instance of this structure type.            |
| BasicUnlockInfo(BasicUnlockInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name               | Type                              | Description |
| ------------------ | --------------------------------- | ----------- |
| unlockGuid         | [Guid](/vext/ref/shared/class/guid) |             |
| identifier         | number                            |             |
| unlockScore        | number                            |             |
| licenses           | string\[\]                        |             |
| additionalLicenses | string\[\]                        |             |
| stringId           | string                            |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [BasicUnlockInfo](/vext/ref/fb/basicunlockinfo/) | [Clone](#clone) |            |

### Clone

> [BasicUnlockInfo](/vext/ref/fb/basicunlockinfo/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
