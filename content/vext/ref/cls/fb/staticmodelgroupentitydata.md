---
title: StaticModelGroupEntityData (Frostbite Container)
---
### Base Classes

[GamePhysicsEntityData](GamePhysicsEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| StaticModelGroupEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| StaticModelGroupEntityData(StaticModelGroupEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| StaticModelGroupEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)      | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [StaticModelGroupEntityData](StaticModelGroupEntityData).      |
| StaticModelGroupEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [StaticModelGroupEntityData](StaticModelGroupEntityData).                    |
| StaticModelGroupEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [StaticModelGroupEntityData](StaticModelGroupEntityData).              |
| StaticModelGroupEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [StaticModelGroupEntityData](StaticModelGroupEntityData).                            |
| StaticModelGroupEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [StaticModelGroupEntityData](StaticModelGroupEntityData).                    |
| StaticModelGroupEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [StaticModelGroupEntityData](StaticModelGroupEntityData).              |
| StaticModelGroupEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StaticModelGroupEntityData](StaticModelGroupEntityData). |

## Properties

| Name                             | Type                                                         | Description |
| -------------------------------- | ------------------------------------------------------------ | ----------- |
| memberDatas                      | [StaticModelGroupMemberData](StaticModelGroupMemberData)\[\] |             |
| hackToSolveRealTimeTweakingIssue | [Guid](/vext/ref/cls/shr/Guid)                            |             |
| networkIdCount                   | number                                                       |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StaticModelGroupEntityData](StaticModelGroupEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StaticModelGroupEntityData](StaticModelGroupEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
