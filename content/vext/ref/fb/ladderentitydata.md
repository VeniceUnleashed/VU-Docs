---
title: LadderEntityData
---
### Base Classes

[StaticModelEntityData](/vext/ref/fb/staticmodelentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| LadderEntityData()                                                          | Create a new instance of this container type.                                                                           |
| LadderEntityData(LadderEntityData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| LadderEntityData([StaticModelEntityData](/vext/ref/fb/staticmodelentitydata/) other)      | Upcast an instance of type [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata/) to [LadderEntityData](/vext/ref/fb/ladderentitydata/).      |
| LadderEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)      | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [LadderEntityData](/vext/ref/fb/ladderentitydata/).      |
| LadderEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [LadderEntityData](/vext/ref/fb/ladderentitydata/).                    |
| LadderEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [LadderEntityData](/vext/ref/fb/ladderentitydata/).              |
| LadderEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [LadderEntityData](/vext/ref/fb/ladderentitydata/).                            |
| LadderEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [LadderEntityData](/vext/ref/fb/ladderentitydata/).                    |
| LadderEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [LadderEntityData](/vext/ref/fb/ladderentitydata/).              |
| LadderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LadderEntityData](/vext/ref/fb/ladderentitydata/). |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [LadderEntityData](/vext/ref/fb/ladderentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LadderEntityData](/vext/ref/fb/ladderentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
