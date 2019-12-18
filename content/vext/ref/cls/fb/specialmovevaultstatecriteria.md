---
title: SpecialMoveVaultStateCriteria (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                        | Description                                              |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| SpecialMoveVaultStateCriteria()                                    | Create a new instance of this structure type.            |
| SpecialMoveVaultStateCriteria(SpecialMoveVaultStateCriteria other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                    | Type                                         | Description |
| ----------------------- | -------------------------------------------- | ----------- |
| distToObject            | number                                       |             |
| distToObjectTolerance   | number                                       |             |
| heightOfObject          | number                                       |             |
| heightOfObjectTolerance | number                                       |             |
| lengthOfObject          | number                                       |             |
| lengthOfObjectTolerance | number                                       |             |
| specialMoveState        | [SpecialMoveStateData](SpecialMoveStateData) |             |

## Methods

| Type                                                           | Name            | Parameters |
| -------------------------------------------------------------- | --------------- | ---------- |
| [SpecialMoveVaultStateCriteria](SpecialMoveVaultStateCriteria) | [Clone](#clone) |            |

### Clone

> [SpecialMoveVaultStateCriteria](SpecialMoveVaultStateCriteria) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
