---
title: CharacterEntityData
---
### Base Classes

[ControllableEntityData](/vext/ref/fb/controllableentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| CharacterEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| CharacterEntityData(CharacterEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| CharacterEntityData([ControllableEntityData](/vext/ref/fb/controllableentitydata/) other)    | Upcast an instance of type [ControllableEntityData](/vext/ref/fb/controllableentitydata/) to [CharacterEntityData](/vext/ref/fb/characterentitydata/).    |
| CharacterEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)      | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [CharacterEntityData](/vext/ref/fb/characterentitydata/).      |
| CharacterEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [CharacterEntityData](/vext/ref/fb/characterentitydata/).                    |
| CharacterEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [CharacterEntityData](/vext/ref/fb/characterentitydata/).              |
| CharacterEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CharacterEntityData](/vext/ref/fb/characterentitydata/).                            |
| CharacterEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CharacterEntityData](/vext/ref/fb/characterentitydata/).                    |
| CharacterEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CharacterEntityData](/vext/ref/fb/characterentitydata/).              |
| CharacterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterEntityData](/vext/ref/fb/characterentitydata/). |

## Properties

| Name                    | Type                               | Description |
| ----------------------- | ---------------------------------- | ----------- |
| defaultViewMode         | [PersonViewMode](/vext/ref/fb/personviewmode/)   |             |
| playerSpawnType         | [PlayerSpawnType](/vext/ref/fb/playerspawntype/) |             |
| characterLightingEnable | bool                               |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [CharacterEntityData](/vext/ref/fb/characterentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterEntityData](/vext/ref/fb/characterentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
