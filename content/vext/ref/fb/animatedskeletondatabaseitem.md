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
| asset            | [SkeletonAsset](SkeletonAsset)                 |             |
| names            | number\[\]                                     |             |
| soldierCollision | [SkeletonCollisionData](SkeletonCollisionData) |             |
| ragdollCollision | [SkeletonCollisionData](SkeletonCollisionData) |             |
| ragdoll          | [RagdollAsset](RagdollAsset)                   |             |
| specialBones     | string\[\]                                     |             |
| hipBone          | string                                         |             |
| headBone         | string                                         |             |

## Methods

| Type                                                         | Name            | Parameters |
| ------------------------------------------------------------ | --------------- | ---------- |
| [AnimatedSkeletonDatabaseItem](AnimatedSkeletonDatabaseItem) | [Clone](#clone) |            |

### Clone

> [AnimatedSkeletonDatabaseItem](AnimatedSkeletonDatabaseItem) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
