---
title: UIMinimapDistanceFieldParams
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                      | Description                                              |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| UIMinimapDistanceFieldParams()                                   | Create a new instance of this structure type.            |
| UIMinimapDistanceFieldParams(UIMinimapDistanceFieldParams other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type                                         | Description |
| -------------- | -------------------------------------------- | ----------- |
| colorTint      | [Vec4](/vext/ref/shared/class/Vec4)            |             |
| outlineColor   | [Vec4](/vext/ref/shared/class/Vec4)            |             |
| distanceScale  | number                                       |             |
| alphaThreshold | number                                       |             |
| outlineInner   | number                                       |             |
| outlineOuter   | number                                       |             |
| distanceField  | [UIDistanceFieldAsset](UIDistanceFieldAsset) |             |

## Methods

| Type                                                         | Name            | Parameters |
| ------------------------------------------------------------ | --------------- | ---------- |
| [UIMinimapDistanceFieldParams](UIMinimapDistanceFieldParams) | [Clone](#clone) |            |

### Clone

> [UIMinimapDistanceFieldParams](UIMinimapDistanceFieldParams) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
