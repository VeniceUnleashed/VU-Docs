---
title: HealingSphereData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                | Description                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| HealingSphereData()                        | Create a new instance of this structure type.            |
| HealingSphereData(HealingSphereData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| radius         | number |             |
| healthIncSpeed | number |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [HealingSphereData](HealingSphereData) | [Clone](#clone) |            |

### Clone

> [HealingSphereData](HealingSphereData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
