---
title: Strengths
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                | Description                                              |
| -------------------------- | -------------------------------------------------------- |
| Strengths()                | Create a new instance of this structure type.            |
| Strengths(Strengths other) | Create a reference copy of a structure of the same type. |

## Properties

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| infantry    | number |             |
| lightArmour | number |             |
| heavyArmour | number |             |
| helicopter  | number |             |

## Methods

| Type                   | Name            | Parameters |
| ---------------------- | --------------- | ---------- |
| [Strengths](Strengths) | [Clone](#clone) |            |

### Clone

> [Strengths](Strengths) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
