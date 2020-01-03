---
title: Boost
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor        | Description                                              |
| ------------------ | -------------------------------------------------------- |
| Boost()            | Create a new instance of this structure type.            |
| Boost(Boost other) | Create a reference copy of a structure of the same type. |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| forwardStrength   | number |             |
| reverseStrength   | number |             |
| dissipationTime   | number |             |
| recoveryTime      | number |             |
| crawlStrength     | number |             |
| accelerationScale | number |             |

## Methods

| Type           | Name            | Parameters |
| -------------- | --------------- | ---------- |
| [Boost](/vext/ref/fb/boost/) | [Clone](#clone) |            |

### Clone

> [Boost](/vext/ref/fb/boost/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
