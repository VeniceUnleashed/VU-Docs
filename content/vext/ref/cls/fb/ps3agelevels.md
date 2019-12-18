---
title: Ps3AgeLevels (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                      | Description                                              |
| -------------------------------- | -------------------------------------------------------- |
| Ps3AgeLevels()                   | Create a new instance of this structure type.            |
| Ps3AgeLevels(Ps3AgeLevels other) | Create a reference copy of a structure of the same type. |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| ageLevel7  | number |             |
| ageLevel8  | number |             |
| ageLevel9  | number |             |
| ageLevel10 | number |             |

## Methods

| Type                         | Name            | Parameters |
| ---------------------------- | --------------- | ---------- |
| [Ps3AgeLevels](Ps3AgeLevels) | [Clone](#clone) |            |

### Clone

> [Ps3AgeLevels](Ps3AgeLevels) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
