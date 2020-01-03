---
title: UITextureAtlasInfo
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                  | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| UITextureAtlasInfo()                         | Create a new instance of this structure type.            |
| UITextureAtlasInfo(UITextureAtlasInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| minUv | [Vec2](/vext/ref/shared/class/vec2) |             |
| maxUv | [Vec2](/vext/ref/shared/class/vec2) |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [UITextureAtlasInfo](/vext/ref/fb/uitextureatlasinfo/) | [Clone](#clone) |            |

### Clone

> [UITextureAtlasInfo](/vext/ref/fb/uitextureatlasinfo/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
