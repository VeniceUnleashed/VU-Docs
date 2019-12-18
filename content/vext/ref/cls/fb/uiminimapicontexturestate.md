---
title: UIMinimapIconTextureState (Frostbite Structure)
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
| state        | [UIIconState](UIIconState)             |             |
| frameRate    | number                                 |             |
| textureInfos | [UIMinimapIconUv](UIMinimapIconUv)\[\] |             |
| shouldRotate | bool                                   |             |

## Methods

| Type                                                   | Name            | Parameters |
| ------------------------------------------------------ | --------------- | ---------- |
| [UIMinimapIconTextureState](UIMinimapIconTextureState) | [Clone](#clone) |            |

### Clone

> [UIMinimapIconTextureState](UIMinimapIconTextureState) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
