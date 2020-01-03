---
title: DynamicGamePhysicsEntityData
---
### Base Classes

[GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DynamicGamePhysicsEntityData()                                                          | Create a new instance of this container type.                                                                                                   |
| DynamicGamePhysicsEntityData(DynamicGamePhysicsEntityData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| DynamicGamePhysicsEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)      | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata/).      |
| DynamicGamePhysicsEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata/).                    |
| DynamicGamePhysicsEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata/).              |
| DynamicGamePhysicsEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata/).                            |
| DynamicGamePhysicsEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata/).                    |
| DynamicGamePhysicsEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata/).              |
| DynamicGamePhysicsEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata/). |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
