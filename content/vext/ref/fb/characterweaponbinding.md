---
title: CharacterWeaponBinding
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                          | Description                                              |
| ---------------------------------------------------- | -------------------------------------------------------- |
| CharacterWeaponBinding()                             | Create a new instance of this structure type.            |
| CharacterWeaponBinding(CharacterWeaponBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name     | Type             | Description |
| -------- | ---------------- | ----------- |
| weaponId | [AntRef](AntRef) |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [CharacterWeaponBinding](CharacterWeaponBinding) | [Clone](#clone) |            |

### Clone

> [CharacterWeaponBinding](CharacterWeaponBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
