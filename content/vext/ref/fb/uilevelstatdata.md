---
title: UILevelStatData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| UILevelStatData()                      | Create a new instance of this structure type.            |
| UILevelStatData(UILevelStatData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| statEasy     | string |             |
| statMedium   | string |             |
| statHard     | string |             |
| statHardcore | string |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [UILevelStatData](UILevelStatData) | [Clone](#clone) |            |

### Clone

> [UILevelStatData](UILevelStatData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
