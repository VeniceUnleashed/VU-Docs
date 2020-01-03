---
title: FenceModelEntityData
---
### Base Classes

[StaticModelEntityData](/vext/ref/fb/staticmodelentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| FenceModelEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| FenceModelEntityData(FenceModelEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| FenceModelEntityData([StaticModelEntityData](/vext/ref/fb/staticmodelentitydata/) other)      | Upcast an instance of type [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata/) to [FenceModelEntityData](/vext/ref/fb/fencemodelentitydata/).      |
| FenceModelEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)      | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [FenceModelEntityData](/vext/ref/fb/fencemodelentitydata/).      |
| FenceModelEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [FenceModelEntityData](/vext/ref/fb/fencemodelentitydata/).                    |
| FenceModelEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [FenceModelEntityData](/vext/ref/fb/fencemodelentitydata/).              |
| FenceModelEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [FenceModelEntityData](/vext/ref/fb/fencemodelentitydata/).                            |
| FenceModelEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [FenceModelEntityData](/vext/ref/fb/fencemodelentitydata/).                    |
| FenceModelEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [FenceModelEntityData](/vext/ref/fb/fencemodelentitydata/).              |
| FenceModelEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FenceModelEntityData](/vext/ref/fb/fencemodelentitydata/). |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| width | number |             |
| angle | number |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [FenceModelEntityData](/vext/ref/fb/fencemodelentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FenceModelEntityData](/vext/ref/fb/fencemodelentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
