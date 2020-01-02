---
title: DynamicAvoidanceEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| DynamicAvoidanceEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| DynamicAvoidanceEntityData(DynamicAvoidanceEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| DynamicAvoidanceEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [DynamicAvoidanceEntityData](DynamicAvoidanceEntityData).                            |
| DynamicAvoidanceEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DynamicAvoidanceEntityData](DynamicAvoidanceEntityData).                    |
| DynamicAvoidanceEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DynamicAvoidanceEntityData](DynamicAvoidanceEntityData).              |
| DynamicAvoidanceEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DynamicAvoidanceEntityData](DynamicAvoidanceEntityData). |

## Properties

| Name                     | Type                                                     | Description |
| ------------------------ | -------------------------------------------------------- | ----------- |
| repelOthers              | [DynamicAvoidanceMode](DynamicAvoidanceMode)             |             |
| reportPredictedCollision | [DynamicAvoidanceMode](DynamicAvoidanceMode)             |             |
| collisionRadius          | number                                                   |             |
| realm                    | [Realm](Realm)                                           |             |
| antBinding               | [AntDynamicAvoidanceBinding](AntDynamicAvoidanceBinding) |             |
| affectedByRepellingForce | bool                                                     |             |
| predictedByOthers        | bool                                                     |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DynamicAvoidanceEntityData](DynamicAvoidanceEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DynamicAvoidanceEntityData](DynamicAvoidanceEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
