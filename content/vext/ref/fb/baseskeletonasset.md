---
title: BaseSkeletonAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| BaseSkeletonAsset()                                                          | Create a new instance of this container type.                                                                             |
| BaseSkeletonAsset(BaseSkeletonAsset other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| BaseSkeletonAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [BaseSkeletonAsset](BaseSkeletonAsset).                                      |
| BaseSkeletonAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BaseSkeletonAsset](BaseSkeletonAsset). |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [BaseSkeletonAsset](BaseSkeletonAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BaseSkeletonAsset](BaseSkeletonAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
