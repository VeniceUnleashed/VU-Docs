---
title: AntAnimationSetAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| AntAnimationSetAsset()                                                          | Create a new instance of this container type.                                                                                   |
| AntAnimationSetAsset(AntAnimationSetAsset other)                                | Create a reference copy of an instance of the same type.                                                                        |
| AntAnimationSetAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [AntAnimationSetAsset](/vext/ref/fb/antanimationsetasset/).                                      |
| AntAnimationSetAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AntAnimationSetAsset](/vext/ref/fb/antanimationsetasset/). |

## Properties

| Name                    | Type                           | Description |
| ----------------------- | ------------------------------ | ----------- |
| skeletonAsset           | [SkeletonAsset](/vext/ref/fb/skeletonasset/) |             |
| actorAssetIndex         | number                         |             |
| clipAssetIndices        | number\[\]                     |             |
| loopingClipAssetIndices | number\[\]                     |             |
| sceneOpMatrixAssetIndex | number                         |             |
| useTraj2Ref             | bool                           |             |
| allowAnimationCulling   | bool                           |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [AntAnimationSetAsset](/vext/ref/fb/antanimationsetasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AntAnimationSetAsset](/vext/ref/fb/antanimationsetasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
