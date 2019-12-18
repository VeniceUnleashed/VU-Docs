---
title: CharacterMeleeBinding (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                        | Description                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| CharacterMeleeBinding()                            | Create a new instance of this structure type.            |
| CharacterMeleeBinding(CharacterMeleeBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name         | Type             | Description |
| ------------ | ---------------- | ----------- |
| triggerMelee | [AntRef](AntRef) |             |
| selfActor    | [AntRef](AntRef) |             |
| otherActor   | [AntRef](AntRef) |             |
| meleeActive  | [AntRef](AntRef) |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [CharacterMeleeBinding](CharacterMeleeBinding) | [Clone](#clone) |            |

### Clone

> [CharacterMeleeBinding](CharacterMeleeBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
