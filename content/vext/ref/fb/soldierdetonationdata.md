---
title: SoldierDetonationData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                        | Description                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| SoldierDetonationData()                            | Create a new instance of this structure type.            |
| SoldierDetonationData(SoldierDetonationData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                             | Type   | Description |
| -------------------------------- | ------ | ----------- |
| angle                            | number |             |
| minSpeedForActivation            | number |             |
| radius                           | number |             |
| soldierDetonationActivationDelay | number |             |
| useAngle                         | bool   |             |
| hasSoldierDetonation             | bool   |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [SoldierDetonationData](SoldierDetonationData) | [Clone](#clone) |            |

### Clone

> [SoldierDetonationData](SoldierDetonationData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
