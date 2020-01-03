---
title: UIMinimapIconTextureState
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                | Description                                              |
| ---------------------------------------------------------- | -------------------------------------------------------- |
| UIMinimapIconTextureState()                                | Create a new instance of this structure type.            |
| UIMinimapIconTextureState(UIMinimapIconTextureState other) | Create a reference copy of a structure of the same type. |

## Properties

| Name         | Type                                   | Description |
| ------------ | -------------------------------------- | ----------- |
| state        | [UIIconState](/vext/ref/fb/uiiconstate/)             |             |
| frameRate    | number                                 |             |
| textureInfos | [UIMinimapIconUv](/vext/ref/fb/uiminimapiconuv/)\[\] |             |
| shouldRotate | bool                                   |             |

## Methods

| Type                                                   | Name            | Parameters |
| ------------------------------------------------------ | --------------- | ---------- |
| [UIMinimapIconTextureState](/vext/ref/fb/uiminimapicontexturestate/) | [Clone](#clone) |            |

### Clone

> [UIMinimapIconTextureState](/vext/ref/fb/uiminimapicontexturestate/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
