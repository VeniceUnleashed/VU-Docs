---
title: TeamFilterEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| TeamFilterEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| TeamFilterEntityData(TeamFilterEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| TeamFilterEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata/).                    |
| TeamFilterEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata/).              |
| TeamFilterEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata/).                            |
| TeamFilterEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata/).                    |
| TeamFilterEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata/).              |
| TeamFilterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata/). |

## Properties

| Name                                    | Type             | Description |
| --------------------------------------- | ---------------- | ----------- |
| realm                                   | [Realm](/vext/ref/fb/realm/)   |             |
| team                                    | [TeamId](/vext/ref/fb/teamid/) |             |
| invertFilter                            | bool             |             |
| generateEventForEveryMatchingTeamMember | bool             |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TeamFilterEntityData](/vext/ref/fb/teamfilterentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
