---
title: MissileUnguidedData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| MissileUnguidedData()                          | Create a new instance of this structure type.            |
| MissileUnguidedData(MissileUnguidedData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                 | Type                              | Description |
| -------------------- | --------------------------------- | ----------- |
| staticPosition       | [Vec2](/vext/ref/cls/shr/Vec2) |             |
| targetPositionOffset | [Vec2](/vext/ref/cls/shr/Vec2) |             |
| useTargetPosition    | bool                              |             |
| useStaticPosition    | bool                              |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [MissileUnguidedData](MissileUnguidedData) | [Clone](#clone) |            |

### Clone

> [MissileUnguidedData](MissileUnguidedData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
