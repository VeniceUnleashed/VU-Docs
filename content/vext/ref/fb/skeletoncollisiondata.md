---
title: SkeletonCollisionData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| SkeletonCollisionData()                                                          | Create a new instance of this container type.                                                                                     |
| SkeletonCollisionData(SkeletonCollisionData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| SkeletonCollisionData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata/). |

## Properties

| Name              | Type                                       | Description |
| ----------------- | ------------------------------------------ | ----------- |
| skeletonAsset     | [SkeletonAsset](/vext/ref/fb/skeletonasset/)             |             |
| boneCollisionData | [BoneCollisionData](/vext/ref/fb/bonecollisiondata/)\[\] |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
