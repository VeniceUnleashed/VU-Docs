---
title: WorldData
---
### Base Classes

[SubWorldData](/vext/ref/fb/subworlddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                          | Description                                                                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| WorldData()                                                          | Create a new instance of this container type.                                                             |
| WorldData(WorldData other)                                           | Create a reference copy of an instance of the same type.                                                  |
| WorldData([SubWorldData](/vext/ref/fb/subworlddata/) other)                        | Upcast an instance of type [SubWorldData](/vext/ref/fb/subworlddata/) to [WorldData](/vext/ref/fb/worlddata/).                        |
| WorldData([SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint/) other)    | Upcast an instance of type [SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint/) to [WorldData](/vext/ref/fb/worlddata/).    |
| WorldData([PrefabBlueprint](/vext/ref/fb/prefabblueprint/) other)                  | Upcast an instance of type [PrefabBlueprint](/vext/ref/fb/prefabblueprint/) to [WorldData](/vext/ref/fb/worlddata/).                  |
| WorldData([Blueprint](/vext/ref/fb/blueprint/) other)                              | Upcast an instance of type [Blueprint](/vext/ref/fb/blueprint/) to [WorldData](/vext/ref/fb/worlddata/).                              |
| WorldData([EntityBusData](/vext/ref/fb/entitybusdata/) other)                      | Upcast an instance of type [EntityBusData](/vext/ref/fb/entitybusdata/) to [WorldData](/vext/ref/fb/worlddata/).                      |
| WorldData([DataBusData](/vext/ref/fb/databusdata/) other)                          | Upcast an instance of type [DataBusData](/vext/ref/fb/databusdata/) to [WorldData](/vext/ref/fb/worlddata/).                          |
| WorldData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [WorldData](/vext/ref/fb/worlddata/).                                      |
| WorldData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WorldData](/vext/ref/fb/worlddata/). |

## Properties

| Name                | Type                                 | Description |
| ------------------- | ------------------------------------ | ----------- |
| runtimeMaterialGrid | [MaterialGridData](/vext/ref/fb/materialgriddata/) |             |

## Methods

| Type                   | Name            | Parameters                                     |
| ---------------------- | --------------- | ---------------------------------------------- |
| [WorldData](/vext/ref/fb/worlddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WorldData](/vext/ref/fb/worlddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
