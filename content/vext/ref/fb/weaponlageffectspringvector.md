---
title: WeaponLagEffectSpringVector
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
| springX | [WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata/) |             |
| springY | [WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata/) |             |
| springZ | [WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata/) |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [WeaponLagEffectSpringVector](/vext/ref/fb/weaponlageffectspringvector/) | [Clone](#clone) |            |

### Clone

> [WeaponLagEffectSpringVector](/vext/ref/fb/weaponlageffectspringvector/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
