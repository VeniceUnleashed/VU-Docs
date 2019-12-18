---
title: CharacterMeleeCommonBinding (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                    | Description                                              |
| -------------------------------------------------------------- | -------------------------------------------------------- |
| CharacterMeleeCommonBinding()                                  | Create a new instance of this structure type.            |
| CharacterMeleeCommonBinding(CharacterMeleeCommonBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name              | Type             | Description |
| ----------------- | ---------------- | ----------- |
| meleeDistance     | [AntRef](AntRef) |             |
| meleeAngle        | [AntRef](AntRef) |             |
| meleeDefenceTime  | [AntRef](AntRef) |             |
| meleeSequenceTime | [AntRef](AntRef) |             |
| meleeAborted      | [AntRef](AntRef) |             |
| closeToTarget     | [AntRef](AntRef) |             |
| meleeType         | [AntRef](AntRef) |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [CharacterMeleeCommonBinding](CharacterMeleeCommonBinding) | [Clone](#clone) |            |

### Clone

> [CharacterMeleeCommonBinding](CharacterMeleeCommonBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
