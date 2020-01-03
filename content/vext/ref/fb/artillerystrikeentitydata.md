---
title: ArtilleryStrikeEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ArtilleryStrikeEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| ArtilleryStrikeEntityData(ArtilleryStrikeEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| ArtilleryStrikeEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [ArtilleryStrikeEntityData](ArtilleryStrikeEntityData).                    |
| ArtilleryStrikeEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [ArtilleryStrikeEntityData](ArtilleryStrikeEntityData).              |
| ArtilleryStrikeEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [ArtilleryStrikeEntityData](ArtilleryStrikeEntityData).                            |
| ArtilleryStrikeEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ArtilleryStrikeEntityData](ArtilleryStrikeEntityData).                    |
| ArtilleryStrikeEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ArtilleryStrikeEntityData](ArtilleryStrikeEntityData).              |
| ArtilleryStrikeEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ArtilleryStrikeEntityData](ArtilleryStrikeEntityData). |

## Properties

| Name                             | Type                                   | Description |
| -------------------------------- | -------------------------------------- | ----------- |
| missileData                      | [MissileEntityData](MissileEntityData) |             |
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
| [ArtilleryStrikeEntityData](ArtilleryStrikeEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ArtilleryStrikeEntityData](ArtilleryStrikeEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
