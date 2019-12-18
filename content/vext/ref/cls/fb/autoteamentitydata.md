---
title: AutoTeamEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| AutoTeamEntityData()                                                          | Create a new instance of this container type.                                                                               |
| AutoTeamEntityData(AutoTeamEntityData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| AutoTeamEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [AutoTeamEntityData](AutoTeamEntityData).                    |
| AutoTeamEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [AutoTeamEntityData](AutoTeamEntityData).              |
| AutoTeamEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [AutoTeamEntityData](AutoTeamEntityData).                            |
| AutoTeamEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AutoTeamEntityData](AutoTeamEntityData).                    |
| AutoTeamEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AutoTeamEntityData](AutoTeamEntityData).              |
| AutoTeamEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AutoTeamEntityData](AutoTeamEntityData). |

## Properties

| Name                           | Type                             | Description |
| ------------------------------ | -------------------------------- | ----------- |
| teamDifferenceToAutoBalance    | number                           |             |
| teamAssignMode                 | [TeamAssignMode](TeamAssignMode) |             |
| playerCountNeededToAutoBalance | number                           |             |
| forceIntoSquad                 | bool                             |             |
| rotateTeamOnNewRound           | bool                             |             |
| autoBalance                    | bool                             |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [AutoTeamEntityData](AutoTeamEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AutoTeamEntityData](AutoTeamEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
