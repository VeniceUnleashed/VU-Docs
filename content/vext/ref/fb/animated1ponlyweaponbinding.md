---
title: Animated1pOnlyWeaponBinding
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                    | Description                                              |
| -------------------------------------------------------------- | -------------------------------------------------------- |
| Animated1pOnlyWeaponBinding()                                  | Create a new instance of this structure type.            |
| Animated1pOnlyWeaponBinding(Animated1pOnlyWeaponBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name             | Type             | Description |
| ---------------- | ---------------- | ----------- |
| undeployFinished | [AntRef](AntRef) |             |
| cameraFreeWeight | [AntRef](AntRef) |             |
| deploy1P         | [AntRef](AntRef) |             |
| hideWeapon1p     | [AntRef](AntRef) |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [Animated1pOnlyWeaponBinding](Animated1pOnlyWeaponBinding) | [Clone](#clone) |            |

### Clone

> [Animated1pOnlyWeaponBinding](Animated1pOnlyWeaponBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
