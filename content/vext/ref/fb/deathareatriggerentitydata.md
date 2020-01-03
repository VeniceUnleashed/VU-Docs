---
title: DeathAreaTriggerEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| DeathAreaTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| DeathAreaTriggerEntityData(DeathAreaTriggerEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| DeathAreaTriggerEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [DeathAreaTriggerEntityData](/vext/ref/fb/deathareatriggerentitydata/).                    |
| DeathAreaTriggerEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [DeathAreaTriggerEntityData](/vext/ref/fb/deathareatriggerentitydata/).              |
| DeathAreaTriggerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [DeathAreaTriggerEntityData](/vext/ref/fb/deathareatriggerentitydata/).                            |
| DeathAreaTriggerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DeathAreaTriggerEntityData](/vext/ref/fb/deathareatriggerentitydata/).                    |
| DeathAreaTriggerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DeathAreaTriggerEntityData](/vext/ref/fb/deathareatriggerentitydata/).              |
| DeathAreaTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DeathAreaTriggerEntityData](/vext/ref/fb/deathareatriggerentitydata/). |

## Properties

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| damage       | number |             |
| timeToReturn | number |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DeathAreaTriggerEntityData](/vext/ref/fb/deathareatriggerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DeathAreaTriggerEntityData](/vext/ref/fb/deathareatriggerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
