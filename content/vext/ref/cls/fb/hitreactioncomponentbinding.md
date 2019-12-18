---
title: HitReactionComponentBinding (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                    | Description                                              |
| -------------------------------------------------------------- | -------------------------------------------------------- |
| HitReactionComponentBinding()                                  | Create a new instance of this structure type.            |
| HitReactionComponentBinding(HitReactionComponentBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                   | Type             | Description |
| ---------------------- | ---------------- | ----------- |
| hit                    | [AntRef](AntRef) |             |
| allowKillFromAnimation | [AntRef](AntRef) |             |
| direction              | [AntRef](AntRef) |             |
| firingDistance         | [AntRef](AntRef) |             |
| boneType               | [AntRef](AntRef) |             |
| impactType             | [AntRef](AntRef) |             |
| immortal               | [AntRef](AntRef) |             |
| randomAnimationIndex   | [AntRef](AntRef) |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [HitReactionComponentBinding](HitReactionComponentBinding) | [Clone](#clone) |            |

### Clone

> [HitReactionComponentBinding](HitReactionComponentBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
