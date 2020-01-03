---
title: BoneCollisionData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                | Description                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| BoneCollisionData()                        | Create a new instance of this structure type.            |
| BoneCollisionData(BoneCollisionData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                     | Type                                           | Description |
| ------------------------ | ---------------------------------------------- | ----------- |
| debugDrawColor           | [Vec4](/vext/ref/shared/class/vec4)              |             |
| capsuleOffset            | [Vec3](/vext/ref/shared/class/vec3)              |             |
| boneName                 | string                                         |             |
| animationHitReactionType | [HitReactionType](HitReactionType)             |             |
| materialPair             | [MaterialContainerPair](MaterialContainerPair) |             |
| boneAxis                 | number                                         |             |
| capsuleLength            | number                                         |             |
| capsuleRadius            | number                                         |             |
| minPitch                 | [PitchModifier](PitchModifier)                 |             |
| maxPitch                 | [PitchModifier](PitchModifier)                 |             |
| validInHiLod             | bool                                           |             |
| validInLowLod            | bool                                           |             |
| usePhysicsRotation       | bool                                           |             |
| deactivateIfBehindWall   | bool                                           |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [BoneCollisionData](BoneCollisionData) | [Clone](#clone) |            |

### Clone

> [BoneCollisionData](BoneCollisionData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
