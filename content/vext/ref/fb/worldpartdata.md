---
title: WorldPartData
---
### Base Classes

[SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| WorldPartData()                                                          | Create a new instance of this container type.                                                                     |
| WorldPartData(WorldPartData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| WorldPartData([SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint/) other)    | Upcast an instance of type [SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint/) to [WorldPartData](/vext/ref/fb/worldpartdata/).    |
| WorldPartData([PrefabBlueprint](/vext/ref/fb/prefabblueprint/) other)                  | Upcast an instance of type [PrefabBlueprint](/vext/ref/fb/prefabblueprint/) to [WorldPartData](/vext/ref/fb/worldpartdata/).                  |
| WorldPartData([Blueprint](/vext/ref/fb/blueprint/) other)                              | Upcast an instance of type [Blueprint](/vext/ref/fb/blueprint/) to [WorldPartData](/vext/ref/fb/worldpartdata/).                              |
| WorldPartData([EntityBusData](/vext/ref/fb/entitybusdata/) other)                      | Upcast an instance of type [EntityBusData](/vext/ref/fb/entitybusdata/) to [WorldPartData](/vext/ref/fb/worldpartdata/).                      |
| WorldPartData([DataBusData](/vext/ref/fb/databusdata/) other)                          | Upcast an instance of type [DataBusData](/vext/ref/fb/databusdata/) to [WorldPartData](/vext/ref/fb/worldpartdata/).                          |
| WorldPartData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [WorldPartData](/vext/ref/fb/worldpartdata/).                                      |
| WorldPartData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WorldPartData](/vext/ref/fb/worldpartdata/). |

## Properties

| Name                             | Type                              | Description |
| -------------------------------- | --------------------------------- | ----------- |
| hackToSolveRealTimeTweakingIssue | [Guid](/vext/ref/shared/class/guid) |             |
| useDeferredEntityCreation        | bool                              |             |
| enabled                          | bool                              |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [WorldPartData](/vext/ref/fb/worldpartdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WorldPartData](/vext/ref/fb/worldpartdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
