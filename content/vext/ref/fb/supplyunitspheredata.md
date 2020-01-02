---
title: SupplyUnitSphereData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                      | Description                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| SupplyUnitSphereData()                           | Create a new instance of this structure type.            |
| SupplyUnitSphereData(SupplyUnitSphereData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| radius                  | number |             |
| supplyIncSpeed          | number |             |
| supplyPointsCapacity    | number |             |
| supplyPointsRefillSpeed | number |             |
| infiniteCapacity        | bool   |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [SupplyUnitSphereData](SupplyUnitSphereData) | [Clone](#clone) |            |

### Clone

> [SupplyUnitSphereData](SupplyUnitSphereData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
