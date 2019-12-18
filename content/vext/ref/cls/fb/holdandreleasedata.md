---
title: HoldAndReleaseData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                  | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| HoldAndReleaseData()                         | Create a new instance of this structure type.            |
| HoldAndReleaseData(HoldAndReleaseData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                       | Type   | Description |
| -------------------------- | ------ | ----------- |
| maxHoldTime                | number |             |
| minPowerModifier           | number |             |
| maxPowerModifier           | number |             |
| powerIncreasePerSecond     | number |             |
| delay                      | number |             |
| killedHoldingPowerModifier | number |             |
| forceFireWhenKilledHolding | bool   |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [HoldAndReleaseData](HoldAndReleaseData) | [Clone](#clone) |            |

### Clone

> [HoldAndReleaseData](HoldAndReleaseData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
