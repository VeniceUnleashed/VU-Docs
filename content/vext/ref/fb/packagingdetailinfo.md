---
title: PackagingDetailInfo
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| PackagingDetailInfo()                          | Create a new instance of this structure type.            |
| PackagingDetailInfo(PackagingDetailInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name             | Type   | Description |
| ---------------- | ------ | ----------- |
| mipsToSkip       | number |             |
| lodsToSkip       | number |             |
| includeAnimation | bool   |             |
| includeMeshes    | bool   |             |
| includeSounds    | bool   |             |
| includeTextures  | bool   |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [PackagingDetailInfo](/vext/ref/fb/packagingdetailinfo/) | [Clone](#clone) |            |

### Clone

> [PackagingDetailInfo](/vext/ref/fb/packagingdetailinfo/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
