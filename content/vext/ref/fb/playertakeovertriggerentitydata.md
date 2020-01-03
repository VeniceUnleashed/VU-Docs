---
title: PlayerTakeOverTriggerEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| PlayerTakeOverTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                                         |
| PlayerTakeOverTriggerEntityData(PlayerTakeOverTriggerEntityData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| PlayerTakeOverTriggerEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [PlayerTakeOverTriggerEntityData](/vext/ref/fb/playertakeovertriggerentitydata/).                    |
| PlayerTakeOverTriggerEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [PlayerTakeOverTriggerEntityData](/vext/ref/fb/playertakeovertriggerentitydata/).              |
| PlayerTakeOverTriggerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [PlayerTakeOverTriggerEntityData](/vext/ref/fb/playertakeovertriggerentitydata/).                            |
| PlayerTakeOverTriggerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PlayerTakeOverTriggerEntityData](/vext/ref/fb/playertakeovertriggerentitydata/).                    |
| PlayerTakeOverTriggerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PlayerTakeOverTriggerEntityData](/vext/ref/fb/playertakeovertriggerentitydata/).              |
| PlayerTakeOverTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlayerTakeOverTriggerEntityData](/vext/ref/fb/playertakeovertriggerentitydata/). |

## Properties

| Name              | Type             | Description |
| ----------------- | ---------------- | ----------- |
| teamId            | [TeamId](/vext/ref/fb/teamid/) |             |
| timeToLoseControl | number           |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PlayerTakeOverTriggerEntityData](/vext/ref/fb/playertakeovertriggerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PlayerTakeOverTriggerEntityData](/vext/ref/fb/playertakeovertriggerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
