---
title: AnimationDrivenBinding (Frostbite Structure)
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
| velocity        | [AntRef](AntRef) |             |
| enableCollision | [AntRef](AntRef) |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [AnimationDrivenBinding](AnimationDrivenBinding) | [Clone](#clone) |            |

### Clone

> [AnimationDrivenBinding](AnimationDrivenBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
