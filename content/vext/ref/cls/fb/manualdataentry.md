---
title: ManualDataEntry (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| ManualDataEntry()                      | Create a new instance of this structure type.            |
| ManualDataEntry(ManualDataEntry other) | Create a reference copy of a structure of the same type. |

## Properties

| Name     | Type                             | Description |
| -------- | -------------------------------- | ----------- |
| platform | [GamePlatform](GamePlatform)     |             |
| language | [LanguageFormat](LanguageFormat) |             |
| textures | [TextureAsset](TextureAsset)\[\] |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [ManualDataEntry](ManualDataEntry) | [Clone](#clone) |            |

### Clone

> [ManualDataEntry](ManualDataEntry) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
