---
title: UIMinimapIconTexture
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                      | Description                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| UIMinimapIconTexture()                           | Create a new instance of this structure type.            |
| UIMinimapIconTexture(UIMinimapIconTexture other) | Create a reference copy of a structure of the same type. |

## Properties

| Name     | Type                                                       | Description |
| -------- | ---------------------------------------------------------- | ----------- |
| iconType | [UIHudIcon](/vext/ref/fb/uihudicon/)                                     |             |
| states   | [UIMinimapIconTextureState](/vext/ref/fb/uiminimapicontexturestate/)\[\] |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [UIMinimapIconTexture](/vext/ref/fb/uiminimapicontexture/) | [Clone](#clone) |            |

### Clone

> [UIMinimapIconTexture](/vext/ref/fb/uiminimapicontexture/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
