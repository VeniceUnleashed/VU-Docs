---
title: AntAnimationSetAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| AntAnimationSetAsset()                                                          | Create a new instance of this container type.                                                                                   |
| AntAnimationSetAsset(AntAnimationSetAsset other)                                | Create a reference copy of an instance of the same type.                                                                        |
| AntAnimationSetAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [AntAnimationSetAsset](AntAnimationSetAsset).                                      |
| AntAnimationSetAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AntAnimationSetAsset](AntAnimationSetAsset). |

## Properties

| Name                    | Type                           | Description |
| ----------------------- | ------------------------------ | ----------- |
| skeletonAsset           | [SkeletonAsset](SkeletonAsset) |             |
| actorAssetIndex         | number                         |             |
| clipAssetIndices        | number\[\]                     |             |
| loopingClipAssetIndices | number\[\]                     |             |
| sceneOpMatrixAssetIndex | number                         |             |
| useTraj2Ref             | bool                           |             |
| allowAnimationCulling   | bool                           |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [AntAnimationSetAsset](AntAnimationSetAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AntAnimationSetAsset](AntAnimationSetAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
