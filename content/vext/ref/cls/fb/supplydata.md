---
title: SupplyData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                  | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
| SupplyData()                 | Create a new instance of this structure type.            |
| SupplyData(SupplyData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type                                         | Description |
| -------------- | -------------------------------------------- | ----------- |
| healing        | [SupplyUnitSphereData](SupplyUnitSphereData) |             |
| ammo           | [SupplyUnitSphereData](SupplyUnitSphereData) |             |
| supplyVehicles | bool                                         |             |
| supplySoldiers | bool                                         |             |
| teamSpecific   | bool                                         |             |
| excludeSelf    | bool                                         |             |

## Methods

| Type                     | Name            | Parameters |
| ------------------------ | --------------- | ---------- |
| [SupplyData](SupplyData) | [Clone](#clone) |            |

### Clone

> [SupplyData](SupplyData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
