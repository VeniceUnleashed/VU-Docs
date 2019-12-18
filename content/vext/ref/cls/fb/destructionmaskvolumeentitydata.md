---
title: DestructionMaskVolumeEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DestructionMaskVolumeEntityData()                                                          | Create a new instance of this container type.                                                                                                         |
| DestructionMaskVolumeEntityData(DestructionMaskVolumeEntityData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| DestructionMaskVolumeEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [DestructionMaskVolumeEntityData](DestructionMaskVolumeEntityData).                    |
| DestructionMaskVolumeEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [DestructionMaskVolumeEntityData](DestructionMaskVolumeEntityData).              |
| DestructionMaskVolumeEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [DestructionMaskVolumeEntityData](DestructionMaskVolumeEntityData).                            |
| DestructionMaskVolumeEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DestructionMaskVolumeEntityData](DestructionMaskVolumeEntityData).                    |
| DestructionMaskVolumeEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DestructionMaskVolumeEntityData](DestructionMaskVolumeEntityData).              |
| DestructionMaskVolumeEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DestructionMaskVolumeEntityData](DestructionMaskVolumeEntityData). |

## Properties

| Name                     | Type                                                               | Description |
| ------------------------ | ------------------------------------------------------------------ | ----------- |
| dustAccumulationCurve    | [Vec4](/vext/ref/cls/shr/Vec4)                                  |             |
| shaderUserMasks          | [Vec4](/vext/ref/cls/shr/Vec4)                                  |             |
| dustAccumulationLifeTime | number                                                             |             |
| shader                   | [SurfaceShaderInstanceDataStruct](SurfaceShaderInstanceDataStruct) |             |
| radius                   | number                                                             |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DestructionMaskVolumeEntityData](DestructionMaskVolumeEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DestructionMaskVolumeEntityData](DestructionMaskVolumeEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
