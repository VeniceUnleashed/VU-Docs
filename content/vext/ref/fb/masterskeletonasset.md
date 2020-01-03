---
title: MasterSkeletonAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| MasterSkeletonAsset()                                                          | Create a new instance of this container type.                                                                                 |
| MasterSkeletonAsset(MasterSkeletonAsset other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| MasterSkeletonAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [MasterSkeletonAsset](/vext/ref/fb/masterskeletonasset/).                                      |
| MasterSkeletonAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MasterSkeletonAsset](/vext/ref/fb/masterskeletonasset/). |

## Properties

| Name           | Type                           | Description |
| -------------- | ------------------------------ | ----------- |
| masterSkeleton | [SkeletonAsset](/vext/ref/fb/skeletonasset/) |             |
| subSkeletons   | [SubSkeleton](/vext/ref/fb/subskeleton/)\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [MasterSkeletonAsset](/vext/ref/fb/masterskeletonasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MasterSkeletonAsset](/vext/ref/fb/masterskeletonasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
