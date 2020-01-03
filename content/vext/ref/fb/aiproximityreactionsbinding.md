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
| aiReaction                 | [AntRef](/vext/ref/fb/antref/) |             |
| aiExplosionReaction        | [AntRef](/vext/ref/fb/antref/) |             |
| aiExplosionForce           | [AntRef](/vext/ref/fb/antref/) |             |
| aiStunReaction             | [AntRef](/vext/ref/fb/antref/) |             |
| aiStunReactionRandomFactor | [AntRef](/vext/ref/fb/antref/) |             |
| aiReactionDirection        | [AntRef](/vext/ref/fb/antref/) |             |
| fireNearby                 | [AntRef](/vext/ref/fb/antref/) |             |
| aimUpAndDown               | [AntRef](/vext/ref/fb/antref/) |             |
| focusAimScale              | [AntRef](/vext/ref/fb/antref/) |             |
| focusAiming                | [AntRef](/vext/ref/fb/antref/) |             |
| enableProceduralHeadAim    | [AntRef](/vext/ref/fb/antref/) |             |
| killFromAnimation          | [AntRef](/vext/ref/fb/antref/) |             |
| playerAnimationKill        | [AntRef](/vext/ref/fb/antref/) |             |
| playerInitiatedRagdoll     | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [AIProximityReactionsBinding](/vext/ref/fb/aiproximityreactionsbinding/) | [Clone](#clone) |            |

### Clone

> [AIProximityReactionsBinding](/vext/ref/fb/aiproximityreactionsbinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
