---
title: CharacterMeleeCommonBinding
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
| meleeDistance     | [AntRef](/vext/ref/fb/antref/) |             |
| meleeAngle        | [AntRef](/vext/ref/fb/antref/) |             |
| meleeDefenceTime  | [AntRef](/vext/ref/fb/antref/) |             |
| meleeSequenceTime | [AntRef](/vext/ref/fb/antref/) |             |
| meleeAborted      | [AntRef](/vext/ref/fb/antref/) |             |
| closeToTarget     | [AntRef](/vext/ref/fb/antref/) |             |
| meleeType         | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [CharacterMeleeCommonBinding](/vext/ref/fb/charactermeleecommonbinding/) | [Clone](#clone) |            |

### Clone

> [CharacterMeleeCommonBinding](/vext/ref/fb/charactermeleecommonbinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
