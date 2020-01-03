---
title: VehicleInputData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| VehicleInputData()                       | Create a new instance of this structure type.            |
| VehicleInputData(VehicleInputData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                       | Type   | Description |
| -------------------------- | ------ | ----------- |
| throttleDeadzone           | number |             |
| brakeDeadzone              | number |             |
| yawDeadzone                | number |             |
| pitchDeadzone              | number |             |
| rollDeadzone               | number |             |
| throttleInertiaOutDuration | number |             |
| throttleInertiaInDuration  | number |             |
| throttleInertiaMinRatio    | number |             |
| brakeInertiaOutDuration    | number |             |
| brakeInertiaInDuration     | number |             |
| brakeInertiaMinRatio       | number |             |
| yawInertiaOutDuration      | number |             |
| yawInertiaInDuration       | number |             |
| yawInertiaMinRatio         | number |             |
| pitchInertiaOutDuration    | number |             |
| pitchInertiaInDuration     | number |             |
| pitchInertiaMinRatio       | number |             |
| rollInertiaOutDuration     | number |             |
| rollInertiaInDuration      | number |             |
| rollInertiaMinRatio        | number |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [VehicleInputData](VehicleInputData) | [Clone](#clone) |            |

### Clone

> [VehicleInputData](VehicleInputData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
