---
title: VeniceMissionObjectiveHudData
---
### Base Classes

[MissionObjectiveHudData](MissionObjectiveHudData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| VeniceMissionObjectiveHudData()                                                          | Create a new instance of this container type.                                                                                                     |
| VeniceMissionObjectiveHudData(VeniceMissionObjectiveHudData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| VeniceMissionObjectiveHudData([MissionObjectiveHudData](MissionObjectiveHudData) other)  | Upcast an instance of type [MissionObjectiveHudData](MissionObjectiveHudData) to [VeniceMissionObjectiveHudData](VeniceMissionObjectiveHudData).  |
| VeniceMissionObjectiveHudData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceMissionObjectiveHudData](VeniceMissionObjectiveHudData). |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VeniceMissionObjectiveHudData](VeniceMissionObjectiveHudData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceMissionObjectiveHudData](VeniceMissionObjectiveHudData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
