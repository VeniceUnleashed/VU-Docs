---
title: PhysicsPartInfo
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| PhysicsPartInfo()                      | Create a new instance of this structure type.            |
| PhysicsPartInfo(PhysicsPartInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name               | Type   | Description |
| ------------------ | ------ | ----------- |
| partComponentIndex | number |             |
| healthStateIndex   | number |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [PhysicsPartInfo](PhysicsPartInfo) | [Clone](#clone) |            |

### Clone

> [PhysicsPartInfo](PhysicsPartInfo) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
