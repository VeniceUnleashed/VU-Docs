---
title: BoltActionData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| BoltActionData()                     | Create a new instance of this structure type.            |
| BoltActionData(BoltActionData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                           | Type   | Description |
| ------------------------------ | ------ | ----------- |
| boltActionDelay                | number |             |
| boltActionTime                 | number |             |
| holdBoltActionUntilFireRelease | bool   |             |
| holdBoltActionUntilZoomRelease | bool   |             |
| forceBoltActionOnFireTrigger   | bool   |             |
| unZoomOnBoltAction             | bool   |             |
| returnToZoomAfterBoltAction    | bool   |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [BoltActionData](BoltActionData) | [Clone](#clone) |            |

### Clone

> [BoltActionData](BoltActionData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
