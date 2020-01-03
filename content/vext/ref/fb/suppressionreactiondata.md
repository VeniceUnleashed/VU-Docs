---
title: SuppressionReactionData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                            | Description                                              |
| ------------------------------------------------------ | -------------------------------------------------------- |
| SuppressionReactionData()                              | Create a new instance of this structure type.            |
| SuppressionReactionData(SuppressionReactionData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                     | Type   | Description |
| ------------------------ | ------ | ----------- |
| suppressionHighThreshold | number |             |
| suppressionLowThreshold  | number |             |
| suppressionUIThreshold   | number |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [SuppressionReactionData](SuppressionReactionData) | [Clone](#clone) |            |

### Clone

> [SuppressionReactionData](SuppressionReactionData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
