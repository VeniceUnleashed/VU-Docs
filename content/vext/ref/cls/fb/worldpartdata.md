---
title: WorldPartData (Frostbite Container)
---
### Base Classes

[SpatialPrefabBlueprint](SpatialPrefabBlueprint)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| WorldPartData()                                                          | Create a new instance of this container type.                                                                     |
| WorldPartData(WorldPartData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| WorldPartData([SpatialPrefabBlueprint](SpatialPrefabBlueprint) other)    | Upcast an instance of type [SpatialPrefabBlueprint](SpatialPrefabBlueprint) to [WorldPartData](WorldPartData).    |
| WorldPartData([PrefabBlueprint](PrefabBlueprint) other)                  | Upcast an instance of type [PrefabBlueprint](PrefabBlueprint) to [WorldPartData](WorldPartData).                  |
| WorldPartData([Blueprint](Blueprint) other)                              | Upcast an instance of type [Blueprint](Blueprint) to [WorldPartData](WorldPartData).                              |
| WorldPartData([EntityBusData](EntityBusData) other)                      | Upcast an instance of type [EntityBusData](EntityBusData) to [WorldPartData](WorldPartData).                      |
| WorldPartData([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [WorldPartData](WorldPartData).                          |
| WorldPartData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [WorldPartData](WorldPartData).                                      |
| WorldPartData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WorldPartData](WorldPartData). |

## Properties

| Name                             | Type                              | Description |
| -------------------------------- | --------------------------------- | ----------- |
| hackToSolveRealTimeTweakingIssue | [Guid](/vext/ref/cls/shr/Guid) |             |
| useDeferredEntityCreation        | bool                              |             |
| enabled                          | bool                              |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [WorldPartData](WorldPartData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WorldPartData](WorldPartData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
