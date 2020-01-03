---
title: DynamicModelEntityData
---
### Base Classes

[DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                  |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| DynamicModelEntityData()                                                                   | Create a new instance of this container type.                                                                                                |
| DynamicModelEntityData(DynamicModelEntityData other)                                       | Create a reference copy of an instance of the same type.                                                                                     |
| DynamicModelEntityData([DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata/) other) | Upcast an instance of type [DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata/) to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata/). |
| DynamicModelEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)               | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata/).               |
| DynamicModelEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                             | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata/).                             |
| DynamicModelEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)                       | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata/).                       |
| DynamicModelEntityData([EntityData](/vext/ref/fb/entitydata/) other)                                     | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata/).                                     |
| DynamicModelEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                             | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata/).                             |
| DynamicModelEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)                       | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata/).                       |
| DynamicModelEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other)          | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata/).          |

## Properties

| Name        | Type                                   | Description |
| ----------- | -------------------------------------- | ----------- |
| part        | [PartComponentData](/vext/ref/fb/partcomponentdata/) |             |
| mesh        | [MeshAsset](/vext/ref/fb/meshasset/)                 |             |
| noCollision | bool                                   |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DynamicModelEntityData](/vext/ref/fb/dynamicmodelentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
