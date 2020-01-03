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
| condition   | [ForceCondition](ForceCondition)  |             |
| typeOfForce | [ForceType](ForceType)            |             |
| space       | [SpaceType](SpaceType)            |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [ConstantForceData](ConstantForceData) | [Clone](#clone) |            |

### Clone

> [ConstantForceData](ConstantForceData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
