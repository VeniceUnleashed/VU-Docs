---
title: TacticalObjectiveEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| TacticalObjectiveEntityData()                                                          | Create a new instance of this container type.                                                                                                 |
| TacticalObjectiveEntityData(TacticalObjectiveEntityData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| TacticalObjectiveEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [TacticalObjectiveEntityData](TacticalObjectiveEntityData).                    |
| TacticalObjectiveEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [TacticalObjectiveEntityData](TacticalObjectiveEntityData).              |
| TacticalObjectiveEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [TacticalObjectiveEntityData](TacticalObjectiveEntityData).                            |
| TacticalObjectiveEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TacticalObjectiveEntityData](TacticalObjectiveEntityData).                    |
| TacticalObjectiveEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TacticalObjectiveEntityData](TacticalObjectiveEntityData).              |
| TacticalObjectiveEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [TacticalObjectiveEntityData](TacticalObjectiveEntityData). |

## Properties

| Name             | Type   | Description |
| ---------------- | ------ | ----------- |
| missionSid       | string |             |
| briefingSidTeam1 | string |             |
| briefingSidTeam2 | string |             |
| team1Timer       | number |             |
| team2Timer       | number |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TacticalObjectiveEntityData](TacticalObjectiveEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [TacticalObjectiveEntityData](TacticalObjectiveEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
