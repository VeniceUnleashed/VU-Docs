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
| colorTint      | [Vec4](/vext/ref/shared/class/vec4)            |             |
| outlineColor   | [Vec4](/vext/ref/shared/class/vec4)            |             |
| distanceScale  | number                                       |             |
| alphaThreshold | number                                       |             |
| outlineInner   | number                                       |             |
| outlineOuter   | number                                       |             |
| distanceField  | [UIDistanceFieldAsset](/vext/ref/fb/uidistancefieldasset/) |             |

## Methods

| Type                                                         | Name            | Parameters |
| ------------------------------------------------------------ | --------------- | ---------- |
| [UIMinimapDistanceFieldParams](/vext/ref/fb/uiminimapdistancefieldparams/) | [Clone](#clone) |            |

### Clone

> [UIMinimapDistanceFieldParams](/vext/ref/fb/uiminimapdistancefieldparams/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
