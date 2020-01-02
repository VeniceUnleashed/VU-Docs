---
title: WorldData
---
### Base Classes

[SubWorldData](SubWorldData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                          | Description                                                                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| WorldData()                                                          | Create a new instance of this container type.                                                             |
| WorldData(WorldData other)                                           | Create a reference copy of an instance of the same type.                                                  |
| WorldData([SubWorldData](SubWorldData) other)                        | Upcast an instance of type [SubWorldData](SubWorldData) to [WorldData](WorldData).                        |
| WorldData([SpatialPrefabBlueprint](SpatialPrefabBlueprint) other)    | Upcast an instance of type [SpatialPrefabBlueprint](SpatialPrefabBlueprint) to [WorldData](WorldData).    |
| WorldData([PrefabBlueprint](PrefabBlueprint) other)                  | Upcast an instance of type [PrefabBlueprint](PrefabBlueprint) to [WorldData](WorldData).                  |
| WorldData([Blueprint](Blueprint) other)                              | Upcast an instance of type [Blueprint](Blueprint) to [WorldData](WorldData).                              |
| WorldData([EntityBusData](EntityBusData) other)                      | Upcast an instance of type [EntityBusData](EntityBusData) to [WorldData](WorldData).                      |
| WorldData([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [WorldData](WorldData).                          |
| WorldData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [WorldData](WorldData).                                      |
| WorldData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WorldData](WorldData). |

## Properties

| Name                | Type                                 | Description |
| ------------------- | ------------------------------------ | ----------- |
| runtimeMaterialGrid | [MaterialGridData](MaterialGridData) |             |

## Methods

| Type                   | Name            | Parameters                                     |
| ---------------------- | --------------- | ---------------------------------------------- |
| [WorldData](WorldData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WorldData](WorldData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
