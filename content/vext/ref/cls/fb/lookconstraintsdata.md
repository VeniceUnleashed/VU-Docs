---
title: LookConstraintsData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| LookConstraintsData()                          | Create a new instance of this structure type.            |
| LookConstraintsData(LookConstraintsData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| minLookYaw   | number |             |
| maxLookYaw   | number |             |
| minLookPitch | number |             |
| maxLookPitch | number |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [LookConstraintsData](LookConstraintsData) | [Clone](#clone) |            |

### Clone

> [LookConstraintsData](LookConstraintsData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
