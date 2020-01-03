---
title: ConstantForceData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                | Description                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| ConstantForceData()                        | Create a new instance of this structure type.            |
| ConstantForceData(ConstantForceData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name        | Type                              | Description |
| ----------- | --------------------------------- | ----------- |
| value       | [Vec3](/vext/ref/shared/class/vec3) |             |
| condition   | [ForceCondition](/vext/ref/fb/forcecondition/)  |             |
| typeOfForce | [ForceType](/vext/ref/fb/forcetype/)            |             |
| space       | [SpaceType](/vext/ref/fb/spacetype/)            |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [ConstantForceData](/vext/ref/fb/constantforcedata/) | [Clone](#clone) |            |

### Clone

> [ConstantForceData](/vext/ref/fb/constantforcedata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
