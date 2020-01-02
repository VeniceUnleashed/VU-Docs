---
title: ClientPlayerInputRecorderEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                    | Description                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ClientPlayerInputRecorderEntityData()                                                          | Create a new instance of this container type.                                                                                                                 |
| ClientPlayerInputRecorderEntityData(ClientPlayerInputRecorderEntityData other)                 | Create a reference copy of an instance of the same type.                                                                                                      |
| ClientPlayerInputRecorderEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [ClientPlayerInputRecorderEntityData](ClientPlayerInputRecorderEntityData).                            |
| ClientPlayerInputRecorderEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ClientPlayerInputRecorderEntityData](ClientPlayerInputRecorderEntityData).                    |
| ClientPlayerInputRecorderEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ClientPlayerInputRecorderEntityData](ClientPlayerInputRecorderEntityData).              |
| ClientPlayerInputRecorderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ClientPlayerInputRecorderEntityData](ClientPlayerInputRecorderEntityData). |

## Properties

| Name         | Type           | Description |
| ------------ | -------------- | ----------- |
| realm        | [Realm](Realm) |             |
| fileNameBase | string         |             |

## Methods

| Type                                                                       | Name            | Parameters                                     |
| -------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ClientPlayerInputRecorderEntityData](ClientPlayerInputRecorderEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ClientPlayerInputRecorderEntityData](ClientPlayerInputRecorderEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
