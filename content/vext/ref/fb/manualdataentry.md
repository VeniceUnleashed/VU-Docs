---
title: ManualDataEntry
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
| platform | [GamePlatform](/vext/ref/fb/gameplatform/)     |             |
| language | [LanguageFormat](/vext/ref/fb/languageformat/) |             |
| textures | [TextureAsset](/vext/ref/fb/textureasset/)\[\] |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [ManualDataEntry](/vext/ref/fb/manualdataentry/) | [Clone](#clone) |            |

### Clone

> [ManualDataEntry](/vext/ref/fb/manualdataentry/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
