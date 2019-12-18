---
title: HudImpactData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| HudImpactData()                    | Create a new instance of this structure type.            |
| HudImpactData(HudImpactData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| maxHealth      | number |             |
| minHealth      | number |             |
| maxTimeVisible | number |             |
| minTimeVisible | number |             |
| enable         | bool   |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [HudImpactData](HudImpactData) | [Clone](#clone) |            |

### Clone

> [HudImpactData](HudImpactData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
