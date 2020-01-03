---
title: CharacterMeleeBinding
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
| triggerMelee | [AntRef](/vext/ref/fb/antref/) |             |
| selfActor    | [AntRef](/vext/ref/fb/antref/) |             |
| otherActor   | [AntRef](/vext/ref/fb/antref/) |             |
| meleeActive  | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [CharacterMeleeBinding](/vext/ref/fb/charactermeleebinding/) | [Clone](#clone) |            |

### Clone

> [CharacterMeleeBinding](/vext/ref/fb/charactermeleebinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
