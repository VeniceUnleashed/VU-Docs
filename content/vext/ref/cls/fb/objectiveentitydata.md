---
title: ObjectiveEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ObjectiveEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| ObjectiveEntityData(ObjectiveEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| ObjectiveEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [ObjectiveEntityData](ObjectiveEntityData).                    |
| ObjectiveEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [ObjectiveEntityData](ObjectiveEntityData).              |
| ObjectiveEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [ObjectiveEntityData](ObjectiveEntityData).                            |
| ObjectiveEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ObjectiveEntityData](ObjectiveEntityData).                    |
| ObjectiveEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ObjectiveEntityData](ObjectiveEntityData).              |
| ObjectiveEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ObjectiveEntityData](ObjectiveEntityData). |

## Properties

| Name                            | Type                                               | Description |
| ------------------------------- | -------------------------------------------------- | ----------- |
| objectiveBriefSid               | string                                             |             |
| objectiveSid                    | string                                             |             |
| hudData                         | [MissionObjectiveHudData](MissionObjectiveHudData) |             |
| objectiveType                   | [ObjectiveType](ObjectiveType)                     |             |
| displayTime                     | number                                             |             |
| delayTime                       | number                                             |             |
| squadId                         | [SquadId](SquadId)                                 |             |
| teamId                          | [TeamId](TeamId)                                   |             |
| successSid                      | string                                             |             |
| reciever                        | [MessageReciever](MessageReciever)                 |             |
| retriggerSuccessOnShowObjective | bool                                               |             |
| tutorial                        | bool                                               |             |
| displaySuccess                  | bool                                               |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [ObjectiveEntityData](ObjectiveEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ObjectiveEntityData](ObjectiveEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
