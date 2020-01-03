---
title: AmmoConfigData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| AmmoConfigData()                     | Create a new instance of this structure type.            |
| AmmoConfigData(AmmoConfigData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                         | Type   | Description |
| ---------------------------- | ------ | ----------- |
| magazineCapacity             | number |             |
| numberOfMagazines            | number |             |
| traceFrequency               | number |             |
| ammoPickupMinAmount          | number |             |
| ammoPickupMaxAmount          | number |             |
| autoReplenishDelay           | number |             |
| ammoBagPickupAmount          | number |             |
| ammoBagPickupDelayMultiplier | number |             |
| autoReplenishMagazine        | bool   |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [AmmoConfigData](AmmoConfigData) | [Clone](#clone) |            |

### Clone

> [AmmoConfigData](AmmoConfigData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
