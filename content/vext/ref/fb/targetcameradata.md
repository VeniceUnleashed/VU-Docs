---
title: TargetCameraData
---
### Base Classes

[CameraData](/vext/ref/fb/cameradata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| TargetCameraData()                                                          | Create a new instance of this container type.                                                                           |
| TargetCameraData(TargetCameraData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| TargetCameraData([CameraData](/vext/ref/fb/cameradata/) other)                            | Upcast an instance of type [CameraData](/vext/ref/fb/cameradata/) to [TargetCameraData](/vext/ref/fb/targetcameradata/).                            |
| TargetCameraData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TargetCameraData](/vext/ref/fb/targetcameradata/).                    |
| TargetCameraData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TargetCameraData](/vext/ref/fb/targetcameradata/).              |
| TargetCameraData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TargetCameraData](/vext/ref/fb/targetcameradata/). |

## Properties

| Name    | Type                         | Description |
| ------- | ---------------------------- | ----------- |
| hud     | [HudData](/vext/ref/fb/huddata/)           |             |
| uiParts | [UIPartData](/vext/ref/fb/uipartdata/)\[\] |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [TargetCameraData](/vext/ref/fb/targetcameradata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TargetCameraData](/vext/ref/fb/targetcameradata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
