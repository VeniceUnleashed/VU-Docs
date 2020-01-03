---
title: WaterEntityData
---
### Base Classes

[GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| WaterEntityData()                                                          | Create a new instance of this container type.                                                                         |
| WaterEntityData(WaterEntityData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| WaterEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)      | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [WaterEntityData](/vext/ref/fb/waterentitydata/).      |
| WaterEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [WaterEntityData](/vext/ref/fb/waterentitydata/).                    |
| WaterEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [WaterEntityData](/vext/ref/fb/waterentitydata/).              |
| WaterEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [WaterEntityData](/vext/ref/fb/waterentitydata/).                            |
| WaterEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [WaterEntityData](/vext/ref/fb/waterentitydata/).                    |
| WaterEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [WaterEntityData](/vext/ref/fb/waterentitydata/).              |
| WaterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WaterEntityData](/vext/ref/fb/waterentitydata/). |

## Properties

| Name  | Type                     | Description |
| ----- | ------------------------ | ----------- |
| asset | [WaterAsset](/vext/ref/fb/waterasset/) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [WaterEntityData](/vext/ref/fb/waterentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WaterEntityData](/vext/ref/fb/waterentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
