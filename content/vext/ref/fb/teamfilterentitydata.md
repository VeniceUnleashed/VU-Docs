---
title: TeamFilterEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| TeamFilterEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| TeamFilterEntityData(TeamFilterEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| TeamFilterEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [TeamFilterEntityData](TeamFilterEntityData).                    |
| TeamFilterEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [TeamFilterEntityData](TeamFilterEntityData).              |
| TeamFilterEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [TeamFilterEntityData](TeamFilterEntityData).                            |
| TeamFilterEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TeamFilterEntityData](TeamFilterEntityData).                    |
| TeamFilterEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TeamFilterEntityData](TeamFilterEntityData).              |
| TeamFilterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TeamFilterEntityData](TeamFilterEntityData). |

## Properties

| Name                                    | Type             | Description |
| --------------------------------------- | ---------------- | ----------- |
| realm                                   | [Realm](Realm)   |             |
| team                                    | [TeamId](TeamId) |             |
| invertFilter                            | bool             |             |
| generateEventForEveryMatchingTeamMember | bool             |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [TeamFilterEntityData](TeamFilterEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TeamFilterEntityData](TeamFilterEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
