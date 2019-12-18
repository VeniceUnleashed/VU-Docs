---
title: GroundHeightEntityData (Frostbite Container)
---
### Base Classes

[SpatialEntityData](SpatialEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| GroundHeightEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| GroundHeightEntityData(GroundHeightEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| GroundHeightEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [GroundHeightEntityData](GroundHeightEntityData).              |
| GroundHeightEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [GroundHeightEntityData](GroundHeightEntityData).                            |
| GroundHeightEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [GroundHeightEntityData](GroundHeightEntityData).                    |
| GroundHeightEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [GroundHeightEntityData](GroundHeightEntityData).              |
| GroundHeightEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [GroundHeightEntityData](GroundHeightEntityData). |

## Properties

| Name | Type                                 | Description |
| ---- | ------------------------------------ | ----------- |
| data | [GroundHeightData](GroundHeightData) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [GroundHeightEntityData](GroundHeightEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [GroundHeightEntityData](GroundHeightEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
