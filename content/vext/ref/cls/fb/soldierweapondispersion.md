---
title: SoldierWeaponDispersion (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                            | Description                                              |
| ------------------------------------------------------ | -------------------------------------------------------- |
| SoldierWeaponDispersion()                              | Create a new instance of this structure type.            |
| SoldierWeaponDispersion(SoldierWeaponDispersion other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                           | Type                                         | Description |
| ------------------------------ | -------------------------------------------- | ----------- |
| standDispersion                | [FiringDispersionData](FiringDispersionData) |             |
| crouchDispersion               | [FiringDispersionData](FiringDispersionData) |             |
| proneDispersion                | [FiringDispersionData](FiringDispersionData) |             |
| jumpDispersionAngle            | number                                       |             |
| proneTransitionDispersionAngle | number                                       |             |
| moveDispersionAngle            | number                                       |             |
| moveZoomedDispersionAngle      | number                                       |             |
| decreasePerSecond              | number                                       |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [SoldierWeaponDispersion](SoldierWeaponDispersion) | [Clone](#clone) |            |

### Clone

> [SoldierWeaponDispersion](SoldierWeaponDispersion) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
