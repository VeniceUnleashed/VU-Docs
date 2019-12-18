---
title: WarpAnimationBinding (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                      | Description                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| WarpAnimationBinding()                           | Create a new instance of this structure type.            |
| WarpAnimationBinding(WarpAnimationBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                      | Type             | Description |
| ------------------------- | ---------------- | ----------- |
| connectJointGroup         | [AntRef](AntRef) |             |
| connectJointWeight        | [AntRef](AntRef) |             |
| enableAlign               | [AntRef](AntRef) |             |
| disableCulling            | [AntRef](AntRef) |             |
| translationYWarpTolerance | [AntRef](AntRef) |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [WarpAnimationBinding](WarpAnimationBinding) | [Clone](#clone) |            |

### Clone

> [WarpAnimationBinding](WarpAnimationBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
