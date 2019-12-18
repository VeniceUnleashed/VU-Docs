---
title: VegetationBaseEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| VegetationBaseEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| VegetationBaseEntityData(VegetationBaseEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| VegetationBaseEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [VegetationBaseEntityData](VegetationBaseEntityData).                    |
| VegetationBaseEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [VegetationBaseEntityData](VegetationBaseEntityData).              |
| VegetationBaseEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [VegetationBaseEntityData](VegetationBaseEntityData).                            |
| VegetationBaseEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VegetationBaseEntityData](VegetationBaseEntityData).                    |
| VegetationBaseEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VegetationBaseEntityData](VegetationBaseEntityData).              |
| VegetationBaseEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VegetationBaseEntityData](VegetationBaseEntityData). |

## Properties

| Name                 | Type                                                        | Description |
| -------------------- | ----------------------------------------------------------- | ----------- |
| basePoseTransforms   | [LinearTransform](/vext/ref/cls/shr/LinearTransform)\[\] |             |
| basePoseTranslations | [Vec3](/vext/ref/cls/shr/Vec3)\[\]                       |             |
| hierarchy            | number\[\]                                                  |             |
| mesh                 | [SkinnedMeshAsset](SkinnedMeshAsset)                        |             |
| shadowMesh           | [SkinnedMeshAsset](SkinnedMeshAsset)                        |             |
| physicsData          | [PhysicsEntityData](PhysicsEntityData)                      |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VegetationBaseEntityData](VegetationBaseEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VegetationBaseEntityData](VegetationBaseEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
