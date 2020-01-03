---
title: UIGeoLatitude
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| UIGeoLatitude()                    | Create a new instance of this structure type.            |
| UIGeoLatitude(UIGeoLatitude other) | Create a reference copy of a structure of the same type. |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| degrees  | number |             |
| minuites | number |             |
| seconds  | number |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [UIGeoLatitude](/vext/ref/fb/uigeolatitude/) | [Clone](#clone) |            |

### Clone

> [UIGeoLatitude](/vext/ref/fb/uigeolatitude/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
