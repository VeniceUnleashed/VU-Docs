---
title: MasterSkeletonAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| MasterSkeletonAsset()                                                          | Create a new instance of this container type.                                                                                 |
| MasterSkeletonAsset(MasterSkeletonAsset other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| MasterSkeletonAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [MasterSkeletonAsset](MasterSkeletonAsset).                                      |
| MasterSkeletonAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MasterSkeletonAsset](MasterSkeletonAsset). |

## Properties

| Name           | Type                           | Description |
| -------------- | ------------------------------ | ----------- |
| masterSkeleton | [SkeletonAsset](SkeletonAsset) |             |
| subSkeletons   | [SubSkeleton](SubSkeleton)\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [MasterSkeletonAsset](MasterSkeletonAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MasterSkeletonAsset](MasterSkeletonAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
