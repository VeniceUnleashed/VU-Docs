---
title: DestructionMaskVolumeEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DestructionMaskVolumeEntityData()                                                          | Create a new instance of this container type.                                                                                                         |
| DestructionMaskVolumeEntityData(DestructionMaskVolumeEntityData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| DestructionMaskVolumeEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata/).                    |
| DestructionMaskVolumeEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata/).              |
| DestructionMaskVolumeEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata/).                            |
| DestructionMaskVolumeEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata/).                    |
| DestructionMaskVolumeEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata/).              |
| DestructionMaskVolumeEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata/). |

## Properties

| Name                     | Type                                                               | Description |
| ------------------------ | ------------------------------------------------------------------ | ----------- |
| dustAccumulationCurve    | [Vec4](/vext/ref/shared/class/vec4)                                  |             |
| shaderUserMasks          | [Vec4](/vext/ref/shared/class/vec4)                                  |             |
| dustAccumulationLifeTime | number                                                             |             |
| shader                   | [SurfaceShaderInstanceDataStruct](/vext/ref/fb/surfaceshaderinstancedatastruct/) |             |
| radius                   | number                                                             |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DestructionMaskVolumeEntityData](/vext/ref/fb/destructionmaskvolumeentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
