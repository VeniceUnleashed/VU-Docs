---
title: RenderVolumeEntityData
---
### Base Classes

[SpatialEntityData](/vext/ref/fb/spatialentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| RenderVolumeEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| RenderVolumeEntityData(RenderVolumeEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| RenderVolumeEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [RenderVolumeEntityData](/vext/ref/fb/rendervolumeentitydata/).              |
| RenderVolumeEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [RenderVolumeEntityData](/vext/ref/fb/rendervolumeentitydata/).                            |
| RenderVolumeEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [RenderVolumeEntityData](/vext/ref/fb/rendervolumeentitydata/).                    |
| RenderVolumeEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [RenderVolumeEntityData](/vext/ref/fb/rendervolumeentitydata/).              |
| RenderVolumeEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RenderVolumeEntityData](/vext/ref/fb/rendervolumeentitydata/). |

## Properties

| Name          | Type                                                               | Description |
| ------------- | ------------------------------------------------------------------ | ----------- |
| userMasks     | [Vec4](/vext/ref/shared/class/vec4)                                  |             |
| shader        | [SurfaceShaderInstanceDataStruct](/vext/ref/fb/surfaceshaderinstancedatastruct/) |             |
| transformType | [RenderVolumeTransformType](/vext/ref/fb/rendervolumetransformtype/)             |             |
| enabled       | bool                                                               |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [RenderVolumeEntityData](/vext/ref/fb/rendervolumeentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RenderVolumeEntityData](/vext/ref/fb/rendervolumeentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
