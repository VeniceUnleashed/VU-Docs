---
title: CameraData
---
### Base Classes

[GameObjectData](/vext/ref/fb/gameobjectdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| CameraData()                                                          | Create a new instance of this container type.                                                               |
| CameraData(CameraData other)                                          | Create a reference copy of an instance of the same type.                                                    |
| CameraData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CameraData](/vext/ref/fb/cameradata/).                    |
| CameraData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CameraData](/vext/ref/fb/cameradata/).              |
| CameraData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CameraData](/vext/ref/fb/cameradata/). |

## Properties

| Name                    | Type                              | Description |
| ----------------------- | --------------------------------- | ----------- |
| occlusionRayOffset      | [Vec3](/vext/ref/shared/class/vec3) |             |
| shakeFactor             | number                            |             |
| preFadeTime             | number                            |             |
| fadeTime                | number                            |             |
| fadeWaitTime            | number                            |             |
| soundListenerRadius     | number                            |             |
| viewFx                  | [ViewFxData](/vext/ref/fb/viewfxdata/)          |             |
| nearPlane               | number                            |             |
| shadowViewDistanceScale | number                            |             |
| soundOcclusion          | number                            |             |
| stayFadedWhileStreaming | bool                              |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [CameraData](/vext/ref/fb/cameradata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CameraData](/vext/ref/fb/cameradata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
