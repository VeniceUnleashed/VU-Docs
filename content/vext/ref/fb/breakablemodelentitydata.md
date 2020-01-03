---
title: BreakableModelEntityData
---
### Base Classes

[GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| BreakableModelEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| BreakableModelEntityData(BreakableModelEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| BreakableModelEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)      | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata/).      |
| BreakableModelEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata/).                    |
| BreakableModelEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata/).              |
| BreakableModelEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata/).                            |
| BreakableModelEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata/).                    |
| BreakableModelEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata/).              |
| BreakableModelEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata/). |

## Properties

| Name                   | Type                                             | Description |
| ---------------------- | ------------------------------------------------ | ----------- |
| decalVolumeShader      | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/) |             |
| decalVolumeScaleFactor | number                                           |             |
| mesh                   | [MeshAsset](/vext/ref/fb/meshasset/)                           |             |
| boneCount              | number                                           |             |
| edgeModelLightMapData  | [EdgeModelLightMapData](/vext/ref/fb/edgemodellightmapdata/)   |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BreakableModelEntityData](/vext/ref/fb/breakablemodelentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
