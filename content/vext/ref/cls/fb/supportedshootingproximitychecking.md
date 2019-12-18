---
title: SupportedShootingProximityChecking (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                                  | Description                                              |
| ---------------------------------------------------------------------------- | -------------------------------------------------------- |
| SupportedShootingProximityChecking()                                         | Create a new instance of this structure type.            |
| SupportedShootingProximityChecking(SupportedShootingProximityChecking other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| rayAboveGunHeightOffset | number |             |
| rayAboveLength          | number |             |
| rayBelowGunHeightOffset | number |             |
| rayBelowLength          | number |             |

## Methods

| Type                                                                     | Name            | Parameters |
| ------------------------------------------------------------------------ | --------------- | ---------- |
| [SupportedShootingProximityChecking](SupportedShootingProximityChecking) | [Clone](#clone) |            |

### Clone

> [SupportedShootingProximityChecking](SupportedShootingProximityChecking) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
