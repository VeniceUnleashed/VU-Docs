---
title: SoldierHeadCollisionPoseData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                      | Description                                              |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| SoldierHeadCollisionPoseData()                                   | Create a new instance of this structure type.            |
| SoldierHeadCollisionPoseData(SoldierHeadCollisionPoseData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                | Type                              | Description |
| ------------------- | --------------------------------- | ----------- |
| idleOffset          | [Vec3](/vext/ref/shared/class/vec3) |             |
| movingForwardOffset | [Vec3](/vext/ref/shared/class/vec3) |             |

## Methods

| Type                                                         | Name            | Parameters |
| ------------------------------------------------------------ | --------------- | ---------- |
| [SoldierHeadCollisionPoseData](/vext/ref/fb/soldierheadcollisionposedata/) | [Clone](#clone) |            |

### Clone

> [SoldierHeadCollisionPoseData](/vext/ref/fb/soldierheadcollisionposedata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
