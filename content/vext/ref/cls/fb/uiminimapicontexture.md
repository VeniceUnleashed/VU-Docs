---
title: UIMinimapIconTexture (Frostbite Structure)
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
| iconType | [UIHudIcon](UIHudIcon)                                     |             |
| states   | [UIMinimapIconTextureState](UIMinimapIconTextureState)\[\] |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [UIMinimapIconTexture](UIMinimapIconTexture) | [Clone](#clone) |            |

### Clone

> [UIMinimapIconTexture](UIMinimapIconTexture) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
