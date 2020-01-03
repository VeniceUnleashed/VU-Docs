---
title: SpecialMoveInterpolatedPoint
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                      | Description                                              |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| SpecialMoveInterpolatedPoint()                                   | Create a new instance of this structure type.            |
| SpecialMoveInterpolatedPoint(SpecialMoveInterpolatedPoint other) | Create a reference copy of a structure of the same type. |

## Properties

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| value | [Vec3](/vext/ref/shared/class/Vec3) |             |
| time  | number                            |             |

## Methods

| Type                                                         | Name            | Parameters |
| ------------------------------------------------------------ | --------------- | ---------- |
| [SpecialMoveInterpolatedPoint](SpecialMoveInterpolatedPoint) | [Clone](#clone) |            |

### Clone

> [SpecialMoveInterpolatedPoint](SpecialMoveInterpolatedPoint) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).