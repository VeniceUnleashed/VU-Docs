---
title: GamePhysicsEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| GamePhysicsEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| GamePhysicsEntityData(GamePhysicsEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| GamePhysicsEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/).                    |
| GamePhysicsEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/).              |
| GamePhysicsEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/).                            |
| GamePhysicsEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/).                    |
| GamePhysicsEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/).              |
| GamePhysicsEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/). |

## Properties

| Name        | Type                                   | Description |
| ----------- | -------------------------------------- | ----------- |
| physicsData | [PhysicsEntityData](/vext/ref/fb/physicsentitydata/) |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
