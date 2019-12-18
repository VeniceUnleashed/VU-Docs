---
title: RibbonPointData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| RibbonPointData()                      | Create a new instance of this structure type.            |
| RibbonPointData(RibbonPointData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name          | Type                              | Description |
| ------------- | --------------------------------- | ----------- |
| userMaskRight | [Vec4](/vext/ref/cls/shr/Vec4) |             |
| userMaskLeft  | [Vec4](/vext/ref/cls/shr/Vec4) |             |
| right         | number                            |             |
| left          | number                            |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [RibbonPointData](RibbonPointData) | [Clone](#clone) |            |

### Clone

> [RibbonPointData](RibbonPointData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
