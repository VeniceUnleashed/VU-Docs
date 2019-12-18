---
title: MovieEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| MovieEntityData()                                                          | Create a new instance of this container type.                                                                         |
| MovieEntityData(MovieEntityData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| MovieEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [MovieEntityData](MovieEntityData).                    |
| MovieEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [MovieEntityData](MovieEntityData).              |
| MovieEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [MovieEntityData](MovieEntityData).                            |
| MovieEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [MovieEntityData](MovieEntityData).                    |
| MovieEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [MovieEntityData](MovieEntityData).              |
| MovieEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MovieEntityData](MovieEntityData). |

## Properties

| Name         | Type                                   | Description |
| ------------ | -------------------------------------- | ----------- |
| movie        | [MovieTextureAsset](MovieTextureAsset) |             |
| externalTime | number                                 |             |
| isNormalMap  | bool                                   |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [MovieEntityData](MovieEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MovieEntityData](MovieEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
