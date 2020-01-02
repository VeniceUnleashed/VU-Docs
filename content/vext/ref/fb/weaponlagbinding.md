---
title: WeaponLagBinding
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| WeaponLagBinding()                       | Create a new instance of this structure type.            |
| WeaponLagBinding(WeaponLagBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name        | Type             | Description |
| ----------- | ---------------- | ----------- |
| entityPitch | [AntRef](AntRef) |             |
| entityYaw   | [AntRef](AntRef) |             |
| pitchResult | [AntRef](AntRef) |             |
| yawResult   | [AntRef](AntRef) |             |
| rollResult  | [AntRef](AntRef) |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [WeaponLagBinding](WeaponLagBinding) | [Clone](#clone) |            |

### Clone

> [WeaponLagBinding](WeaponLagBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
