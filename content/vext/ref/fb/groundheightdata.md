---
title: GroundHeightData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| GroundHeightData()                       | Create a new instance of this structure type.            |
| GroundHeightData(GroundHeightData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name       | Type                              | Description |
| ---------- | --------------------------------- | ----------- |
| heightSpan | [Vec2](/vext/ref/shared/class/Vec2) |             |
| worldSize  | number                            |             |
| data       | number\[\]                        |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [GroundHeightData](GroundHeightData) | [Clone](#clone) |            |

### Clone

> [GroundHeightData](GroundHeightData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
