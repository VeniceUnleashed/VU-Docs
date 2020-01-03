---
title: BangerEntityData
---
### Base Classes

[DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                      |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| BangerEntityData()                                                                   | Create a new instance of this container type.                                                                                    |
| BangerEntityData(BangerEntityData other)                                             | Create a reference copy of an instance of the same type.                                                                         |
| BangerEntityData([DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata/) other) | Upcast an instance of type [DynamicGamePhysicsEntityData](/vext/ref/fb/dynamicgamephysicsentitydata/) to [BangerEntityData](/vext/ref/fb/bangerentitydata/). |
| BangerEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)               | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [BangerEntityData](/vext/ref/fb/bangerentitydata/).               |
| BangerEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                             | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [BangerEntityData](/vext/ref/fb/bangerentitydata/).                             |
| BangerEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)                       | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [BangerEntityData](/vext/ref/fb/bangerentitydata/).                       |
| BangerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                                     | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [BangerEntityData](/vext/ref/fb/bangerentitydata/).                                     |
| BangerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                             | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [BangerEntityData](/vext/ref/fb/bangerentitydata/).                             |
| BangerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)                       | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [BangerEntityData](/vext/ref/fb/bangerentitydata/).                       |
| BangerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other)          | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BangerEntityData](/vext/ref/fb/bangerentitydata/).          |

## Properties

| Name                        | Type                                       | Description |
| --------------------------- | ------------------------------------------ | ----------- |
| scales                      | number\[\]                                 |             |
| mesh                        | [MeshAsset](/vext/ref/fb/meshasset/)                     |             |
| explosion                   | [ExplosionEntityData](/vext/ref/fb/explosionentitydata/) |             |
| timeToLive                  | number                                     |             |
| destructiblePartCount       | number                                     |             |
| useVariableNetworkFrequency | bool                                       |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [BangerEntityData](/vext/ref/fb/bangerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BangerEntityData](/vext/ref/fb/bangerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
