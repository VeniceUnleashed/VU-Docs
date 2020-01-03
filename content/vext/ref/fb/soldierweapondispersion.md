---
title: SoldierWeaponDispersion
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
| standDispersion                | [FiringDispersionData](/vext/ref/fb/firingdispersiondata/) |             |
| crouchDispersion               | [FiringDispersionData](/vext/ref/fb/firingdispersiondata/) |             |
| proneDispersion                | [FiringDispersionData](/vext/ref/fb/firingdispersiondata/) |             |
| jumpDispersionAngle            | number                                       |             |
| proneTransitionDispersionAngle | number                                       |             |
| moveDispersionAngle            | number                                       |             |
| moveZoomedDispersionAngle      | number                                       |             |
| decreasePerSecond              | number                                       |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [SoldierWeaponDispersion](/vext/ref/fb/soldierweapondispersion/) | [Clone](#clone) |            |

### Clone

> [SoldierWeaponDispersion](/vext/ref/fb/soldierweapondispersion/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
