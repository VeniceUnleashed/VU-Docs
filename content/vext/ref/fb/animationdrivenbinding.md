---
title: AnimationDrivenBinding
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                          | Description                                              |
| ---------------------------------------------------- | -------------------------------------------------------- |
| AnimationDrivenBinding()                             | Create a new instance of this structure type.            |
| AnimationDrivenBinding(AnimationDrivenBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name            | Type             | Description |
| --------------- | ---------------- | ----------- |
| velocity        | [AntRef](/vext/ref/fb/antref/) |             |
| enableCollision | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [AnimationDrivenBinding](/vext/ref/fb/animationdrivenbinding/) | [Clone](#clone) |            |

### Clone

> [AnimationDrivenBinding](/vext/ref/fb/animationdrivenbinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
