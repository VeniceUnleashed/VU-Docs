---
title: UIGeoLongitude (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| UIGeoLongitude()                     | Create a new instance of this structure type.            |
| UIGeoLongitude(UIGeoLongitude other) | Create a reference copy of a structure of the same type. |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| degrees  | number |             |
| minuites | number |             |
| seconds  | number |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [UIGeoLongitude](UIGeoLongitude) | [Clone](#clone) |            |

### Clone

> [UIGeoLongitude](UIGeoLongitude) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
