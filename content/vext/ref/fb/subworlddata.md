---
title: SubWorldData
---
### Base Classes

[SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| SubWorldData()                                                          | Create a new instance of this container type.                                                                   |
| SubWorldData(SubWorldData other)                                        | Create a reference copy of an instance of the same type.                                                        |
| SubWorldData([SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint/) other)    | Upcast an instance of type [SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint/) to [SubWorldData](/vext/ref/fb/subworlddata/).    |
| SubWorldData([PrefabBlueprint](/vext/ref/fb/prefabblueprint/) other)                  | Upcast an instance of type [PrefabBlueprint](/vext/ref/fb/prefabblueprint/) to [SubWorldData](/vext/ref/fb/subworlddata/).                  |
| SubWorldData([Blueprint](/vext/ref/fb/blueprint/) other)                              | Upcast an instance of type [Blueprint](/vext/ref/fb/blueprint/) to [SubWorldData](/vext/ref/fb/subworlddata/).                              |
| SubWorldData([EntityBusData](/vext/ref/fb/entitybusdata/) other)                      | Upcast an instance of type [EntityBusData](/vext/ref/fb/entitybusdata/) to [SubWorldData](/vext/ref/fb/subworlddata/).                      |
| SubWorldData([DataBusData](/vext/ref/fb/databusdata/) other)                          | Upcast an instance of type [DataBusData](/vext/ref/fb/databusdata/) to [SubWorldData](/vext/ref/fb/subworlddata/).                          |
| SubWorldData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SubWorldData](/vext/ref/fb/subworlddata/).                                      |
| SubWorldData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SubWorldData](/vext/ref/fb/subworlddata/). |

## Properties

| Name                     | Type                                   | Description |
| ------------------------ | -------------------------------------- | ----------- |
| registryContainer        | [RegistryContainer](/vext/ref/fb/registrycontainer/) |             |
| isWin32SubLevel          | bool                                   |             |
| isXenonSubLevel          | bool                                   |             |
| isPs3SubLevel            | bool                                   |             |
| rememberStateOnStreamOut | bool                                   |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [SubWorldData](/vext/ref/fb/subworlddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SubWorldData](/vext/ref/fb/subworlddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
