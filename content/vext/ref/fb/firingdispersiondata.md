---
title: FiringDispersionData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                      | Description                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| FiringDispersionData()                           | Create a new instance of this structure type.            |
| FiringDispersionData(FiringDispersionData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| minAngle          | number |             |
| maxAngle          | number |             |
| increasePerShot   | number |             |
| decreasePerSecond | number |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [FiringDispersionData](FiringDispersionData) | [Clone](#clone) |            |

### Clone

> [FiringDispersionData](FiringDispersionData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
