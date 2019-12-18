---
title: ZoomLevelLockData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                | Description                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| ZoomLevelLockData()                        | Create a new instance of this structure type.            |
| ZoomLevelLockData(ZoomLevelLockData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                  | Type                 | Description |
| --------------------- | -------------------- | ----------- |
| outlineTaggedDistance | number               |             |
| lockType              | [LockType](LockType) |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [ZoomLevelLockData](ZoomLevelLockData) | [Clone](#clone) |            |

### Clone

> [ZoomLevelLockData](ZoomLevelLockData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
