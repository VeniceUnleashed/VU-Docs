---
title: SensingLimits
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| SensingLimits()                    | Create a new instance of this structure type.            |
| SensingLimits(SensingLimits other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                     | Type   | Description |
| ------------------------ | ------ | ----------- |
| hearingDistance          | number |             |
| hearingCutoff            | number |             |
| viewAngle                | number |             |
| viewDistance             | number |             |
| peripheralViewAngle      | number |             |
| peripheralViewDistance   | number |             |
| peripheralMovementCutoff | number |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [SensingLimits](/vext/ref/fb/sensinglimits/) | [Clone](#clone) |            |

### Clone

> [SensingLimits](/vext/ref/fb/sensinglimits/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
