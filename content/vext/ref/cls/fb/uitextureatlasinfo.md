---
title: UITextureAtlasInfo (Frostbite Structure)
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
| minUv | [Vec2](/vext/ref/cls/shr/Vec2) |             |
| maxUv | [Vec2](/vext/ref/cls/shr/Vec2) |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [UITextureAtlasInfo](UITextureAtlasInfo) | [Clone](#clone) |            |

### Clone

> [UITextureAtlasInfo](UITextureAtlasInfo) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
