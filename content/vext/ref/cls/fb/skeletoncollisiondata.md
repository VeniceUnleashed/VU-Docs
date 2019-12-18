---
title: SkeletonCollisionData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| SkeletonCollisionData()                                                          | Create a new instance of this container type.                                                                                     |
| SkeletonCollisionData(SkeletonCollisionData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| SkeletonCollisionData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SkeletonCollisionData](SkeletonCollisionData). |

## Properties

| Name              | Type                                       | Description |
| ----------------- | ------------------------------------------ | ----------- |
| skeletonAsset     | [SkeletonAsset](SkeletonAsset)             |             |
| boneCollisionData | [BoneCollisionData](BoneCollisionData)\[\] |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [SkeletonCollisionData](SkeletonCollisionData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SkeletonCollisionData](SkeletonCollisionData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
