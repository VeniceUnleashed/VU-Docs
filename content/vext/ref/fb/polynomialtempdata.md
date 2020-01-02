---
title: PolynomialTempData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                  | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| PolynomialTempData()                         | Create a new instance of this structure type.            |
| PolynomialTempData(PolynomialTempData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name         | Type                              | Description |
| ------------ | --------------------------------- | ----------- |
| coefficients | [Vec4](/vext/ref/shared/class/Vec4) |             |
| scaleValue   | number                            |             |
| minClamp     | number                            |             |
| maxClamp     | number                            |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [PolynomialTempData](PolynomialTempData) | [Clone](#clone) |            |

### Clone

> [PolynomialTempData](PolynomialTempData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
