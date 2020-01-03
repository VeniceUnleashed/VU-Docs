---
title: TrackPlayerEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| TrackPlayerEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| TrackPlayerEntityData(TrackPlayerEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| TrackPlayerEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [TrackPlayerEntityData](TrackPlayerEntityData).                    |
| TrackPlayerEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [TrackPlayerEntityData](TrackPlayerEntityData).              |
| TrackPlayerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [TrackPlayerEntityData](TrackPlayerEntityData).                            |
| TrackPlayerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TrackPlayerEntityData](TrackPlayerEntityData).                    |
| TrackPlayerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TrackPlayerEntityData](TrackPlayerEntityData).              |
| TrackPlayerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TrackPlayerEntityData](TrackPlayerEntityData). |

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
| [TrackPlayerEntityData](TrackPlayerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TrackPlayerEntityData](TrackPlayerEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
