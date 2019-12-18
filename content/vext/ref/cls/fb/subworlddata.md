---
title: SubWorldData (Frostbite Container)
---
### Base Classes

[SpatialPrefabBlueprint](SpatialPrefabBlueprint)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| SubWorldData()                                                          | Create a new instance of this container type.                                                                   |
| SubWorldData(SubWorldData other)                                        | Create a reference copy of an instance of the same type.                                                        |
| SubWorldData([SpatialPrefabBlueprint](SpatialPrefabBlueprint) other)    | Upcast an instance of type [SpatialPrefabBlueprint](SpatialPrefabBlueprint) to [SubWorldData](SubWorldData).    |
| SubWorldData([PrefabBlueprint](PrefabBlueprint) other)                  | Upcast an instance of type [PrefabBlueprint](PrefabBlueprint) to [SubWorldData](SubWorldData).                  |
| SubWorldData([Blueprint](Blueprint) other)                              | Upcast an instance of type [Blueprint](Blueprint) to [SubWorldData](SubWorldData).                              |
| SubWorldData([EntityBusData](EntityBusData) other)                      | Upcast an instance of type [EntityBusData](EntityBusData) to [SubWorldData](SubWorldData).                      |
| SubWorldData([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [SubWorldData](SubWorldData).                          |
| SubWorldData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SubWorldData](SubWorldData).                                      |
| SubWorldData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SubWorldData](SubWorldData). |

## Properties

| Name                     | Type                                   | Description |
| ------------------------ | -------------------------------------- | ----------- |
| registryContainer        | [RegistryContainer](RegistryContainer) |             |
| isWin32SubLevel          | bool                                   |             |
| isXenonSubLevel          | bool                                   |             |
| isPs3SubLevel            | bool                                   |             |
| rememberStateOnStreamOut | bool                                   |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [SubWorldData](SubWorldData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SubWorldData](SubWorldData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
