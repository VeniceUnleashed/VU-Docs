---
title: WeaponLagEffectSpringVector (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                    | Description                                              |
| -------------------------------------------------------------- | -------------------------------------------------------- |
| WeaponLagEffectSpringVector()                                  | Create a new instance of this structure type.            |
| WeaponLagEffectSpringVector(WeaponLagEffectSpringVector other) | Create a reference copy of a structure of the same type. |

## Properties

| Name    | Type                                                   | Description |
| ------- | ------------------------------------------------------ | ----------- |
| springX | [WeaponLagEffectSpringData](WeaponLagEffectSpringData) |             |
| springY | [WeaponLagEffectSpringData](WeaponLagEffectSpringData) |             |
| springZ | [WeaponLagEffectSpringData](WeaponLagEffectSpringData) |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [WeaponLagEffectSpringVector](WeaponLagEffectSpringVector) | [Clone](#clone) |            |

### Clone

> [WeaponLagEffectSpringVector](WeaponLagEffectSpringVector) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
