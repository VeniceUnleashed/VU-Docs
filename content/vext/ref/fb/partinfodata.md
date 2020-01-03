---
title: PartInfoData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                      | Description                                              |
| -------------------------------- | -------------------------------------------------------- |
| PartInfoData()                   | Create a new instance of this structure type.            |
| PartInfoData(PartInfoData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name        | Type                                                  | Description |
| ----------- | ----------------------------------------------------- | ----------- |
| aabb        | [AxisAlignedBox](/vext/ref/shared/class/axisalignedbox) |             |
| translation | [Vec3](/vext/ref/shared/class/vec3)                     |             |

## Methods

| Type                         | Name            | Parameters |
| ---------------------------- | --------------- | ---------- |
| [PartInfoData](/vext/ref/fb/partinfodata/) | [Clone](#clone) |            |

### Clone

> [PartInfoData](/vext/ref/fb/partinfodata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
