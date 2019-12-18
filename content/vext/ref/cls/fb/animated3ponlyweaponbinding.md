---
title: Animated3pOnlyWeaponBinding (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                    | Description                                              |
| -------------------------------------------------------------- | -------------------------------------------------------- |
| Animated3pOnlyWeaponBinding()                                  | Create a new instance of this structure type.            |
| Animated3pOnlyWeaponBinding(Animated3pOnlyWeaponBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name         | Type             | Description |
| ------------ | ---------------- | ----------- |
| deploy3P     | [AntRef](AntRef) |             |
| hideWeapon3p | [AntRef](AntRef) |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [Animated3pOnlyWeaponBinding](Animated3pOnlyWeaponBinding) | [Clone](#clone) |            |

### Clone

> [Animated3pOnlyWeaponBinding](Animated3pOnlyWeaponBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
