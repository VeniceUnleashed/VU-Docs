---
title: AnimatedSkeletonDatabaseItem
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                      | Description                                              |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| AnimatedSkeletonDatabaseItem()                                   | Create a new instance of this structure type.            |
| AnimatedSkeletonDatabaseItem(AnimatedSkeletonDatabaseItem other) | Create a reference copy of a structure of the same type. |

## Properties

| Name             | Type                                           | Description |
| ---------------- | ---------------------------------------------- | ----------- |
| asset            | [SkeletonAsset](/vext/ref/fb/skeletonasset/)                 |             |
| names            | number\[\]                                     |             |
| soldierCollision | [SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata/) |             |
| ragdollCollision | [SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata/) |             |
| ragdoll          | [RagdollAsset](/vext/ref/fb/ragdollasset/)                   |             |
| specialBones     | string\[\]                                     |             |
| hipBone          | string                                         |             |
| headBone         | string                                         |             |

## Methods

| Type                                                         | Name            | Parameters |
| ------------------------------------------------------------ | --------------- | ---------- |
| [AnimatedSkeletonDatabaseItem](/vext/ref/fb/animatedskeletondatabaseitem/) | [Clone](#clone) |            |

### Clone

> [AnimatedSkeletonDatabaseItem](/vext/ref/fb/animatedskeletondatabaseitem/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
