---
title: AntDynamicAvoidanceBinding (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                  | Description                                              |
| ------------------------------------------------------------ | -------------------------------------------------------- |
| AntDynamicAvoidanceBinding()                                 | Create a new instance of this structure type.            |
| AntDynamicAvoidanceBinding(AntDynamicAvoidanceBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                   | Type             | Description |
| ---------------------- | ---------------- | ----------- |
| timeUntilCollision     | [AntRef](AntRef) |             |
| distanceUntilCollision | [AntRef](AntRef) |             |
| normalizedVelocity     | [AntRef](AntRef) |             |
| speed                  | [AntRef](AntRef) |             |

## Methods

| Type                                                     | Name            | Parameters |
| -------------------------------------------------------- | --------------- | ---------- |
| [AntDynamicAvoidanceBinding](AntDynamicAvoidanceBinding) | [Clone](#clone) |            |

### Clone

> [AntDynamicAvoidanceBinding](AntDynamicAvoidanceBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
