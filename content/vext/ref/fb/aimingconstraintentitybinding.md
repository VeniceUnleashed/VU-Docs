---
title: AimingConstraintEntityBinding
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                        | Description                                              |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| AimingConstraintEntityBinding()                                    | Create a new instance of this structure type.            |
| AimingConstraintEntityBinding(AimingConstraintEntityBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name             | Type             | Description |
| ---------------- | ---------------- | ----------- |
| proneAimLimit    | [AntRef](AntRef) |             |
| proneAimDistance | [AntRef](AntRef) |             |

## Methods

| Type                                                           | Name            | Parameters |
| -------------------------------------------------------------- | --------------- | ---------- |
| [AimingConstraintEntityBinding](AimingConstraintEntityBinding) | [Clone](#clone) |            |

### Clone

> [AimingConstraintEntityBinding](AimingConstraintEntityBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
