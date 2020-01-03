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
| heightSpan | [Vec2](/vext/ref/shared/class/vec2) |             |
| worldSize  | number                            |             |
| data       | number\[\]                        |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [GroundHeightData](/vext/ref/fb/groundheightdata/) | [Clone](#clone) |            |

### Clone

> [GroundHeightData](/vext/ref/fb/groundheightdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
