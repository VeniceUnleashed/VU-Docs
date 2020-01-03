---
title: OverHeatData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                      | Description                                              |
| -------------------------------- | -------------------------------------------------------- |
| OverHeatData()                   | Create a new instance of this structure type.            |
| OverHeatData(OverHeatData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                | Type                             | Description |
| ------------------- | -------------------------------- | ----------- |
| heatPerBullet       | number                           |             |
| heatDropPerSecond   | number                           |             |
| overHeatPenaltyTime | number                           |             |
| overHeatThreshold   | number                           |             |
| overHeatEffect      | [FireEffectData](/vext/ref/fb/fireeffectdata/) |             |

## Methods

| Type                         | Name            | Parameters |
| ---------------------------- | --------------- | ---------- |
| [OverHeatData](/vext/ref/fb/overheatdata/) | [Clone](#clone) |            |

### Clone

> [OverHeatData](/vext/ref/fb/overheatdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
