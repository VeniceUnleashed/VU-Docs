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
| proneAimLimit    | [AntRef](/vext/ref/fb/antref/) |             |
| proneAimDistance | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                                                           | Name            | Parameters |
| -------------------------------------------------------------- | --------------- | ---------- |
| [AimingConstraintEntityBinding](/vext/ref/fb/aimingconstraintentitybinding/) | [Clone](#clone) |            |

### Clone

> [AimingConstraintEntityBinding](/vext/ref/fb/aimingconstraintentitybinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
