---
title: SupplyData
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
| healing        | [SupplyUnitSphereData](/vext/ref/fb/supplyunitspheredata/) |             |
| ammo           | [SupplyUnitSphereData](/vext/ref/fb/supplyunitspheredata/) |             |
| supplyVehicles | bool                                         |             |
| supplySoldiers | bool                                         |             |
| teamSpecific   | bool                                         |             |
| excludeSelf    | bool                                         |             |

## Methods

| Type                     | Name            | Parameters |
| ------------------------ | --------------- | ---------- |
| [SupplyData](/vext/ref/fb/supplydata/) | [Clone](#clone) |            |

### Clone

> [SupplyData](/vext/ref/fb/supplydata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
