---
title: ZoomLevelLockData
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
| lockType              | [LockType](/vext/ref/fb/locktype/) |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [ZoomLevelLockData](/vext/ref/fb/zoomlevellockdata/) | [Clone](#clone) |            |

### Clone

> [ZoomLevelLockData](/vext/ref/fb/zoomlevellockdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
