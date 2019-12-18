---
title: Minimap2DEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| Minimap2DEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| Minimap2DEntityData(Minimap2DEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| Minimap2DEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [Minimap2DEntityData](Minimap2DEntityData).                    |
| Minimap2DEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [Minimap2DEntityData](Minimap2DEntityData).              |
| Minimap2DEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [Minimap2DEntityData](Minimap2DEntityData).                            |
| Minimap2DEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [Minimap2DEntityData](Minimap2DEntityData).                    |
| Minimap2DEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [Minimap2DEntityData](Minimap2DEntityData).              |
| Minimap2DEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [Minimap2DEntityData](Minimap2DEntityData). |

## Properties

| Name                | Type                              | Description |
| ------------------- | --------------------------------- | ----------- |
| cameraTransform     | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| imageHeight         | number                            |             |
| imageWidth          | number                            |             |
| antialiasMultiplier | number                            |             |
| terrainHeight       | number                            |             |
| fov                 | number                            |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [Minimap2DEntityData](Minimap2DEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [Minimap2DEntityData](Minimap2DEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
