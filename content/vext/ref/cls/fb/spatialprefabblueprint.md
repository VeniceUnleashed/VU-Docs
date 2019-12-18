---
title: SpatialPrefabBlueprint (Frostbite Container)
---
### Base Classes

[PrefabBlueprint](PrefabBlueprint)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| SpatialPrefabBlueprint()                                                          | Create a new instance of this container type.                                                                                       |
| SpatialPrefabBlueprint(SpatialPrefabBlueprint other)                              | Create a reference copy of an instance of the same type.                                                                            |
| SpatialPrefabBlueprint([PrefabBlueprint](PrefabBlueprint) other)                  | Upcast an instance of type [PrefabBlueprint](PrefabBlueprint) to [SpatialPrefabBlueprint](SpatialPrefabBlueprint).                  |
| SpatialPrefabBlueprint([Blueprint](Blueprint) other)                              | Upcast an instance of type [Blueprint](Blueprint) to [SpatialPrefabBlueprint](SpatialPrefabBlueprint).                              |
| SpatialPrefabBlueprint([EntityBusData](EntityBusData) other)                      | Upcast an instance of type [EntityBusData](EntityBusData) to [SpatialPrefabBlueprint](SpatialPrefabBlueprint).                      |
| SpatialPrefabBlueprint([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [SpatialPrefabBlueprint](SpatialPrefabBlueprint).                          |
| SpatialPrefabBlueprint([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SpatialPrefabBlueprint](SpatialPrefabBlueprint).                                      |
| SpatialPrefabBlueprint([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SpatialPrefabBlueprint](SpatialPrefabBlueprint). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SpatialPrefabBlueprint](SpatialPrefabBlueprint) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SpatialPrefabBlueprint](SpatialPrefabBlueprint) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
