---
title: HudImpactData
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
| [HudImpactData](/vext/ref/fb/hudimpactdata/) | [Clone](#clone) |            |

### Clone

> [HudImpactData](/vext/ref/fb/hudimpactdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
