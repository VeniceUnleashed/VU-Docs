---
title: AnimatedPointCloudComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| AnimatedPointCloudComponentData()                                                          | Create a new instance of this container type.                                                                                                         |
| AnimatedPointCloudComponentData(AnimatedPointCloudComponentData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| AnimatedPointCloudComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [AnimatedPointCloudComponentData](/vext/ref/fb/animatedpointcloudcomponentdata/).                      |
| AnimatedPointCloudComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AnimatedPointCloudComponentData](/vext/ref/fb/animatedpointcloudcomponentdata/).                    |
| AnimatedPointCloudComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AnimatedPointCloudComponentData](/vext/ref/fb/animatedpointcloudcomponentdata/).              |
| AnimatedPointCloudComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimatedPointCloudComponentData](/vext/ref/fb/animatedpointcloudcomponentdata/). |

## Properties

| Name         | Type                                               | Description |
| ------------ | -------------------------------------------------- | ----------- |
| pointCloud   | [AnimatedPointCloudAsset](/vext/ref/fb/animatedpointcloudasset/) |             |
| externalTime | number                                             |             |
| startPaused  | bool                                               |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [AnimatedPointCloudComponentData](/vext/ref/fb/animatedpointcloudcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AnimatedPointCloudComponentData](/vext/ref/fb/animatedpointcloudcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
