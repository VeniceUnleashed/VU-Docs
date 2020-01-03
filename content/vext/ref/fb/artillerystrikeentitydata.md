---
title: ArtilleryStrikeEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ArtilleryStrikeEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| ArtilleryStrikeEntityData(ArtilleryStrikeEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| ArtilleryStrikeEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata/).                    |
| ArtilleryStrikeEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata/).              |
| ArtilleryStrikeEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata/).                            |
| ArtilleryStrikeEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata/).                    |
| ArtilleryStrikeEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata/).              |
| ArtilleryStrikeEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata/). |

## Properties

| Name                             | Type                                   | Description |
| -------------------------------- | -------------------------------------- | ----------- |
| missileData                      | [MissileEntityData](/vext/ref/fb/missileentitydata/) |             |
| missileSpawnRadius               | number                                 |             |
| durationOfArtilleryStrike        | number                                 |             |
| maxDelayBetweenProjectiles       | number                                 |             |
| minDelayBetweenProjectiles       | number                                 |             |
| maxDelayBetweenStrikes           | number                                 |             |
| minDelayBetweenStrikes           | number                                 |             |
| minRadiusToSoldier               | number                                 |             |
| radiusWhenFollowingSoldier       | number                                 |             |
| heightOffsetWhenFollowingSoldier | number                                 |             |
| numberOfStrikes                  | number                                 |             |
| maxProjectilesPerStrike          | number                                 |             |
| minProjectilesPerStrike          | number                                 |             |
| followSoldier                    | bool                                   |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ArtilleryStrikeEntityData](/vext/ref/fb/artillerystrikeentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
