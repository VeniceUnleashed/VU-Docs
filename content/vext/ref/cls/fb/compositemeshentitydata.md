---
title: CompositeMeshEntityData (Frostbite Container)
---
### Base Classes

[SpatialEntityData](SpatialEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| CompositeMeshEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| CompositeMeshEntityData(CompositeMeshEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| CompositeMeshEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [CompositeMeshEntityData](CompositeMeshEntityData).              |
| CompositeMeshEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CompositeMeshEntityData](CompositeMeshEntityData).                            |
| CompositeMeshEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CompositeMeshEntityData](CompositeMeshEntityData).                    |
| CompositeMeshEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CompositeMeshEntityData](CompositeMeshEntityData).              |
| CompositeMeshEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CompositeMeshEntityData](CompositeMeshEntityData). |

## Properties

| Name | Type                                     | Description |
| ---- | ---------------------------------------- | ----------- |
| mesh | [CompositeMeshAsset](CompositeMeshAsset) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CompositeMeshEntityData](CompositeMeshEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CompositeMeshEntityData](CompositeMeshEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
