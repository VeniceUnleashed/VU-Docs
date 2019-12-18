---
title: SensitivityAtVelocity (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                        | Description                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| SensitivityAtVelocity()                            | Create a new instance of this structure type.            |
| SensitivityAtVelocity(SensitivityAtVelocity other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                | Type   | Description |
| ------------------- | ------ | ----------- |
| steeringSensitivity | number |             |
| velocity            | number |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [SensitivityAtVelocity](SensitivityAtVelocity) | [Clone](#clone) |            |

### Clone

> [SensitivityAtVelocity](SensitivityAtVelocity) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
