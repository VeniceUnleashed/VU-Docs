---
title: TrackPlayerEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| TrackPlayerEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| TrackPlayerEntityData(TrackPlayerEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| TrackPlayerEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata/).                    |
| TrackPlayerEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata/).              |
| TrackPlayerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata/).                            |
| TrackPlayerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata/).                    |
| TrackPlayerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata/).              |
| TrackPlayerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata/). |

## Properties

| Name                        | Type   | Description |
| --------------------------- | ------ | ----------- |
| snapHeightOffsetY           | number |             |
| randomizeTracker            | bool   |             |
| snapHeightOnKilledDestroyed | bool   |             |
| checkPlayerAlive            | bool   |             |
| enforceSharedCombatArea     | bool   |             |
| updateFlagComponent         | bool   |             |
| trackMultiplePlayers        | bool   |             |
| reseted                     | bool   |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TrackPlayerEntityData](/vext/ref/fb/trackplayerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
