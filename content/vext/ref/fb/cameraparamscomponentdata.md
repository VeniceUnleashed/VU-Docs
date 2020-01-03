---
title: CameraParamsComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| CameraParamsComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| CameraParamsComponentData(CameraParamsComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| CameraParamsComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [CameraParamsComponentData](/vext/ref/fb/cameraparamscomponentdata/).                      |
| CameraParamsComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CameraParamsComponentData](/vext/ref/fb/cameraparamscomponentdata/).                    |
| CameraParamsComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CameraParamsComponentData](/vext/ref/fb/cameraparamscomponentdata/).              |
| CameraParamsComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CameraParamsComponentData](/vext/ref/fb/cameraparamscomponentdata/). |

## Properties

| Name                     | Type   | Description |
| ------------------------ | ------ | ----------- |
| viewDistance             | number |             |
| nearPlane                | number |             |
| sunShadowmapViewDistance | number |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CameraParamsComponentData](/vext/ref/fb/cameraparamscomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CameraParamsComponentData](/vext/ref/fb/cameraparamscomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
