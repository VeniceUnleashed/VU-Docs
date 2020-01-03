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
| overHeatEffect      | [FireEffectData](FireEffectData) |             |

## Methods

| Type                         | Name            | Parameters |
| ---------------------------- | --------------- | ---------- |
| [OverHeatData](OverHeatData) | [Clone](#clone) |            |

### Clone

> [OverHeatData](OverHeatData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
