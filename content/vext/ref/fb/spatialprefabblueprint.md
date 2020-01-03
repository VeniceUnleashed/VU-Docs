---
title: SpatialPrefabBlueprint
---
### Base Classes

[PrefabBlueprint](/vext/ref/fb/prefabblueprint/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| SpatialPrefabBlueprint()                                                          | Create a new instance of this container type.                                                                                       |
| SpatialPrefabBlueprint(SpatialPrefabBlueprint other)                              | Create a reference copy of an instance of the same type.                                                                            |
| SpatialPrefabBlueprint([PrefabBlueprint](/vext/ref/fb/prefabblueprint/) other)                  | Upcast an instance of type [PrefabBlueprint](/vext/ref/fb/prefabblueprint/) to [SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint/).                  |
| SpatialPrefabBlueprint([Blueprint](/vext/ref/fb/blueprint/) other)                              | Upcast an instance of type [Blueprint](/vext/ref/fb/blueprint/) to [SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint/).                              |
| SpatialPrefabBlueprint([EntityBusData](/vext/ref/fb/entitybusdata/) other)                      | Upcast an instance of type [EntityBusData](/vext/ref/fb/entitybusdata/) to [SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint/).                      |
| SpatialPrefabBlueprint([DataBusData](/vext/ref/fb/databusdata/) other)                          | Upcast an instance of type [DataBusData](/vext/ref/fb/databusdata/) to [SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint/).                          |
| SpatialPrefabBlueprint([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint/).                                      |
| SpatialPrefabBlueprint([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint/). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
