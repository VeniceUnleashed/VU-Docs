---
title: FenceModelEntityData (Frostbite Container)
---
### Base Classes

[StaticModelEntityData](StaticModelEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| FenceModelEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| FenceModelEntityData(FenceModelEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| FenceModelEntityData([StaticModelEntityData](StaticModelEntityData) other)      | Upcast an instance of type [StaticModelEntityData](StaticModelEntityData) to [FenceModelEntityData](FenceModelEntityData).      |
| FenceModelEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)      | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [FenceModelEntityData](FenceModelEntityData).      |
| FenceModelEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [FenceModelEntityData](FenceModelEntityData).                    |
| FenceModelEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [FenceModelEntityData](FenceModelEntityData).              |
| FenceModelEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [FenceModelEntityData](FenceModelEntityData).                            |
| FenceModelEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [FenceModelEntityData](FenceModelEntityData).                    |
| FenceModelEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [FenceModelEntityData](FenceModelEntityData).              |
| FenceModelEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [FenceModelEntityData](FenceModelEntityData). |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| width | number |             |
| angle | number |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [FenceModelEntityData](FenceModelEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [FenceModelEntityData](FenceModelEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
