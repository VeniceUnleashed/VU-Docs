---
title: VegetationBaseEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| VegetationBaseEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| VegetationBaseEntityData(VegetationBaseEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| VegetationBaseEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata/).                    |
| VegetationBaseEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata/).              |
| VegetationBaseEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata/).                            |
| VegetationBaseEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata/).                    |
| VegetationBaseEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata/).              |
| VegetationBaseEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata/). |

## Properties

| Name                 | Type                                                        | Description |
| -------------------- | ----------------------------------------------------------- | ----------- |
| basePoseTransforms   | [LinearTransform](/vext/ref/shared/class/lineartransform)\[\] |             |
| basePoseTranslations | [Vec3](/vext/ref/shared/class/vec3)\[\]                       |             |
| hierarchy            | number\[\]                                                  |             |
| mesh                 | [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset/)                        |             |
| shadowMesh           | [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset/)                        |             |
| physicsData          | [PhysicsEntityData](/vext/ref/fb/physicsentitydata/)                      |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
