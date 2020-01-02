---
title: CharacterSpawnReferenceObjectData
---
### Base Classes

[SpawnReferenceObjectData](SpawnReferenceObjectData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                   | Description                                                                                                                                                |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterSpawnReferenceObjectData()                                                           | Create a new instance of this container type.                                                                                                              |
| CharacterSpawnReferenceObjectData(CharacterSpawnReferenceObjectData other)                    | Create a reference copy of an instance of the same type.                                                                                                   |
| CharacterSpawnReferenceObjectData([SpawnReferenceObjectData](SpawnReferenceObjectData) other) | Upcast an instance of type [SpawnReferenceObjectData](SpawnReferenceObjectData) to [CharacterSpawnReferenceObjectData](CharacterSpawnReferenceObjectData). |
| CharacterSpawnReferenceObjectData([ReferenceObjectData](ReferenceObjectData) other)           | Upcast an instance of type [ReferenceObjectData](ReferenceObjectData) to [CharacterSpawnReferenceObjectData](CharacterSpawnReferenceObjectData).           |
| CharacterSpawnReferenceObjectData([GameObjectData](GameObjectData) other)                     | Upcast an instance of type [GameObjectData](GameObjectData) to [CharacterSpawnReferenceObjectData](CharacterSpawnReferenceObjectData).                     |
| CharacterSpawnReferenceObjectData([GameDataContainer](GameDataContainer) other)               | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CharacterSpawnReferenceObjectData](CharacterSpawnReferenceObjectData).               |
| CharacterSpawnReferenceObjectData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterSpawnReferenceObjectData](CharacterSpawnReferenceObjectData).  |

## Properties

| Name                                    | Type                                                 | Description |
| --------------------------------------- | ---------------------------------------------------- | ----------- |
| playerType                              | [PlayerSpawnType](PlayerSpawnType)                   |             |
| vehicleEntryIndex                       | number                                               |             |
| template                                | [SoldierSpawnTemplateData](SoldierSpawnTemplateData) |             |
| humanTargetPreference                   | number                                               |             |
| minimapIcon                             | [UIHudIcon](UIHudIcon)                               |             |
| allowFallbackOnNextAvailabeVehicleEntry | bool                                                 |             |
| checkMaxPlayersInVehicle                | bool                                                 |             |
| affectMinimapPosition                   | bool                                                 |             |
| isTarget                                | bool                                                 |             |
| ignoreVehicleIcon                       | bool                                                 |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CharacterSpawnReferenceObjectData](CharacterSpawnReferenceObjectData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterSpawnReferenceObjectData](CharacterSpawnReferenceObjectData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
