---
title: DecalEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| DecalEntityData()                                                          | Create a new instance of this container type.                                                                         |
| DecalEntityData(DecalEntityData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| DecalEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [DecalEntityData](DecalEntityData).                    |
| DecalEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [DecalEntityData](DecalEntityData).              |
| DecalEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [DecalEntityData](DecalEntityData).                            |
| DecalEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DecalEntityData](DecalEntityData).                    |
| DecalEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DecalEntityData](DecalEntityData).              |
| DecalEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DecalEntityData](DecalEntityData). |

## Properties

| Name            | Type                                             | Description |
| --------------- | ------------------------------------------------ | ----------- |
| shader          | [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset) |             |
| atlasTile       | [DecalAtlasTile](DecalAtlasTile)                 |             |
| materialIndex   | number                                           |             |
| sortingPriority | number                                           |             |
| projected       | bool                                             |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [DecalEntityData](DecalEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DecalEntityData](DecalEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
