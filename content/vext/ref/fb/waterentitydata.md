---
title: WaterEntityData
---
### Base Classes

[GamePhysicsEntityData](GamePhysicsEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| WaterEntityData()                                                          | Create a new instance of this container type.                                                                         |
| WaterEntityData(WaterEntityData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| WaterEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)      | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [WaterEntityData](WaterEntityData).      |
| WaterEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [WaterEntityData](WaterEntityData).                    |
| WaterEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [WaterEntityData](WaterEntityData).              |
| WaterEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [WaterEntityData](WaterEntityData).                            |
| WaterEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [WaterEntityData](WaterEntityData).                    |
| WaterEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [WaterEntityData](WaterEntityData).              |
| WaterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WaterEntityData](WaterEntityData). |

## Properties

| Name  | Type                     | Description |
| ----- | ------------------------ | ----------- |
| asset | [WaterAsset](WaterAsset) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [WaterEntityData](WaterEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WaterEntityData](WaterEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
