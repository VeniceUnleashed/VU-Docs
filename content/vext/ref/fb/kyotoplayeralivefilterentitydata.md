---
title: KyotoPlayerAliveFilterEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| KyotoPlayerAliveFilterEntityData()                                                          | Create a new instance of this container type.                                                                                                           |
| KyotoPlayerAliveFilterEntityData(KyotoPlayerAliveFilterEntityData other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| KyotoPlayerAliveFilterEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [KyotoPlayerAliveFilterEntityData](KyotoPlayerAliveFilterEntityData).                            |
| KyotoPlayerAliveFilterEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [KyotoPlayerAliveFilterEntityData](KyotoPlayerAliveFilterEntityData).                    |
| KyotoPlayerAliveFilterEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [KyotoPlayerAliveFilterEntityData](KyotoPlayerAliveFilterEntityData).              |
| KyotoPlayerAliveFilterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [KyotoPlayerAliveFilterEntityData](KyotoPlayerAliveFilterEntityData). |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [KyotoPlayerAliveFilterEntityData](KyotoPlayerAliveFilterEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [KyotoPlayerAliveFilterEntityData](KyotoPlayerAliveFilterEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
