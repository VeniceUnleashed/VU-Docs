---
title: CameraData
---
### Base Classes

[GameObjectData](GameObjectData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| CameraData()                                                          | Create a new instance of this container type.                                                               |
| CameraData(CameraData other)                                          | Create a reference copy of an instance of the same type.                                                    |
| CameraData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CameraData](CameraData).                    |
| CameraData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CameraData](CameraData).              |
| CameraData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CameraData](CameraData). |

## Properties

| Name                    | Type                              | Description |
| ----------------------- | --------------------------------- | ----------- |
| occlusionRayOffset      | [Vec3](/vext/ref/shared/class/vec3) |             |
| shakeFactor             | number                            |             |
| preFadeTime             | number                            |             |
| fadeTime                | number                            |             |
| fadeWaitTime            | number                            |             |
| soundListenerRadius     | number                            |             |
| viewFx                  | [ViewFxData](ViewFxData)          |             |
| nearPlane               | number                            |             |
| shadowViewDistanceScale | number                            |             |
| soundOcclusion          | number                            |             |
| stayFadedWhileStreaming | bool                              |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [CameraData](CameraData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CameraData](CameraData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
