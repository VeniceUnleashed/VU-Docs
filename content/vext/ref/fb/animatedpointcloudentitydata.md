---
title: AnimatedPointCloudEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| AnimatedPointCloudEntityData()                                                          | Create a new instance of this container type.                                                                                                   |
| AnimatedPointCloudEntityData(AnimatedPointCloudEntityData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| AnimatedPointCloudEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [AnimatedPointCloudEntityData](/vext/ref/fb/animatedpointcloudentitydata/).                            |
| AnimatedPointCloudEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AnimatedPointCloudEntityData](/vext/ref/fb/animatedpointcloudentitydata/).                    |
| AnimatedPointCloudEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AnimatedPointCloudEntityData](/vext/ref/fb/animatedpointcloudentitydata/).              |
| AnimatedPointCloudEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimatedPointCloudEntityData](/vext/ref/fb/animatedpointcloudentitydata/). |

## Properties

| Name         | Type                                               | Description |
| ------------ | -------------------------------------------------- | ----------- |
| realm        | [Realm](/vext/ref/fb/realm/)                                     |             |
| pointCloud   | [AnimatedPointCloudAsset](/vext/ref/fb/animatedpointcloudasset/) |             |
| externalTime | number                                             |             |
| startPaused  | bool                                               |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [AnimatedPointCloudEntityData](/vext/ref/fb/animatedpointcloudentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AnimatedPointCloudEntityData](/vext/ref/fb/animatedpointcloudentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
