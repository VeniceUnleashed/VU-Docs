---
title: WeaponLagEffectForceData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                              | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- |
| WeaponLagEffectForceData()                               | Create a new instance of this structure type.            |
| WeaponLagEffectForceData(WeaponLagEffectForceData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name          | Type                              | Description |
| ------------- | --------------------------------- | ----------- |
| offsetForce   | [Vec3](/vext/ref/shared/class/vec3) |             |
| rotationForce | [Vec3](/vext/ref/shared/class/vec3) |             |

## Methods

| Type                                                 | Name            | Parameters |
| ---------------------------------------------------- | --------------- | ---------- |
| [WeaponLagEffectForceData](WeaponLagEffectForceData) | [Clone](#clone) |            |

### Clone

> [WeaponLagEffectForceData](WeaponLagEffectForceData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
