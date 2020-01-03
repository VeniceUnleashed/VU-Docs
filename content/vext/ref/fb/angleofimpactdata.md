---
title: AngleOfImpactData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                | Description                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| AngleOfImpactData()                        | Create a new instance of this structure type.            |
| AngleOfImpactData(AngleOfImpactData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name            | Type   | Description |
| --------------- | ------ | ----------- |
| zone12Delimiter | number |             |
| zone23Delimiter | number |             |
| zone1Multiplier | number |             |
| zone2Multiplier | number |             |
| zone3Multiplier | number |             |
| enabled         | bool   |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [AngleOfImpactData](AngleOfImpactData) | [Clone](#clone) |            |

### Clone

> [AngleOfImpactData](AngleOfImpactData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
