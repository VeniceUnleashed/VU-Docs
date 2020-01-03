---
title: WarpAnimationBinding
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
| connectJointGroup         | [AntRef](/vext/ref/fb/antref/) |             |
| connectJointWeight        | [AntRef](/vext/ref/fb/antref/) |             |
| enableAlign               | [AntRef](/vext/ref/fb/antref/) |             |
| disableCulling            | [AntRef](/vext/ref/fb/antref/) |             |
| translationYWarpTolerance | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [WarpAnimationBinding](/vext/ref/fb/warpanimationbinding/) | [Clone](#clone) |            |

### Clone

> [WarpAnimationBinding](/vext/ref/fb/warpanimationbinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
