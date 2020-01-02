---
title: AIProximityReactionsBinding
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                    | Description                                              |
| -------------------------------------------------------------- | -------------------------------------------------------- |
| AIProximityReactionsBinding()                                  | Create a new instance of this structure type.            |
| AIProximityReactionsBinding(AIProximityReactionsBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                       | Type             | Description |
| -------------------------- | ---------------- | ----------- |
| aiReaction                 | [AntRef](AntRef) |             |
| aiExplosionReaction        | [AntRef](AntRef) |             |
| aiExplosionForce           | [AntRef](AntRef) |             |
| aiStunReaction             | [AntRef](AntRef) |             |
| aiStunReactionRandomFactor | [AntRef](AntRef) |             |
| aiReactionDirection        | [AntRef](AntRef) |             |
| fireNearby                 | [AntRef](AntRef) |             |
| aimUpAndDown               | [AntRef](AntRef) |             |
| focusAimScale              | [AntRef](AntRef) |             |
| focusAiming                | [AntRef](AntRef) |             |
| enableProceduralHeadAim    | [AntRef](AntRef) |             |
| killFromAnimation          | [AntRef](AntRef) |             |
| playerAnimationKill        | [AntRef](AntRef) |             |
| playerInitiatedRagdoll     | [AntRef](AntRef) |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [AIProximityReactionsBinding](AIProximityReactionsBinding) | [Clone](#clone) |            |

### Clone

> [AIProximityReactionsBinding](AIProximityReactionsBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
