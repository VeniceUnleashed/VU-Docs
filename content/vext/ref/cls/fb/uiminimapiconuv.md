---
title: UIMinimapIconUv (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| UIMinimapIconUv()                      | Create a new instance of this structure type.            |
| UIMinimapIconUv(UIMinimapIconUv other) | Create a reference copy of a structure of the same type. |

## Properties

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| minUv | [Vec2](/vext/ref/cls/shr/Vec2) |             |
| maxUv | [Vec2](/vext/ref/cls/shr/Vec2) |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [UIMinimapIconUv](UIMinimapIconUv) | [Clone](#clone) |            |

### Clone

> [UIMinimapIconUv](UIMinimapIconUv) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
