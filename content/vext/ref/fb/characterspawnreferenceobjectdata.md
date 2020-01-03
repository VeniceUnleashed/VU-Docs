---
title: CharacterSpawnReferenceObjectData
---
### Base Classes

[SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                   | Description                                                                                                                                                |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterSpawnReferenceObjectData()                                                           | Create a new instance of this container type.                                                                                                              |
| CharacterSpawnReferenceObjectData(CharacterSpawnReferenceObjectData other)                    | Create a reference copy of an instance of the same type.                                                                                                   |
| CharacterSpawnReferenceObjectData([SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata/) other) | Upcast an instance of type [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata/) to [CharacterSpawnReferenceObjectData](/vext/ref/fb/characterspawnreferenceobjectdata/). |
| CharacterSpawnReferenceObjectData([ReferenceObjectData](/vext/ref/fb/referenceobjectdata/) other)           | Upcast an instance of type [ReferenceObjectData](/vext/ref/fb/referenceobjectdata/) to [CharacterSpawnReferenceObjectData](/vext/ref/fb/characterspawnreferenceobjectdata/).           |
| CharacterSpawnReferenceObjectData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                     | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CharacterSpawnReferenceObjectData](/vext/ref/fb/characterspawnreferenceobjectdata/).                     |
| CharacterSpawnReferenceObjectData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)               | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CharacterSpawnReferenceObjectData](/vext/ref/fb/characterspawnreferenceobjectdata/).               |
| CharacterSpawnReferenceObjectData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterSpawnReferenceObjectData](/vext/ref/fb/characterspawnreferenceobjectdata/).  |

## Properties

| Name                                    | Type                                                 | Description |
| --------------------------------------- | ---------------------------------------------------- | ----------- |
| playerType                              | [PlayerSpawnType](/vext/ref/fb/playerspawntype/)                   |             |
| vehicleEntryIndex                       | number                                               |             |
| template                                | [SoldierSpawnTemplateData](/vext/ref/fb/soldierspawntemplatedata/) |             |
| humanTargetPreference                   | number                                               |             |
| minimapIcon                             | [UIHudIcon](/vext/ref/fb/uihudicon/)                               |             |
| allowFallbackOnNextAvailabeVehicleEntry | bool                                                 |             |
| checkMaxPlayersInVehicle                | bool                                                 |             |
| affectMinimapPosition                   | bool                                                 |             |
| isTarget                                | bool                                                 |             |
| ignoreVehicleIcon                       | bool                                                 |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CharacterSpawnReferenceObjectData](/vext/ref/fb/characterspawnreferenceobjectdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterSpawnReferenceObjectData](/vext/ref/fb/characterspawnreferenceobjectdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
