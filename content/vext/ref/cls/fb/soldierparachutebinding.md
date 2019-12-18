---
title: SoldierParachuteBinding (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                            | Description                                              |
| ------------------------------------------------------ | -------------------------------------------------------- |
| SoldierParachuteBinding()                              | Create a new instance of this structure type.            |
| SoldierParachuteBinding(SoldierParachuteBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name            | Type             | Description |
| --------------- | ---------------- | ----------- |
| enabled         | [AntRef](AntRef) |             |
| steerLeftRight  | [AntRef](AntRef) |             |
| accelerateBrake | [AntRef](AntRef) |             |
| pitch           | [AntRef](AntRef) |             |
| roll            | [AntRef](AntRef) |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [SoldierParachuteBinding](SoldierParachuteBinding) | [Clone](#clone) |            |

### Clone

> [SoldierParachuteBinding](SoldierParachuteBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
