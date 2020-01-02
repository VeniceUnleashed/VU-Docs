---
title: ScenarioWaypointData
---
### Base Classes

[AbstractLocoWaypointData](AbstractLocoWaypointData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| ScenarioWaypointData()                                                           | Create a new instance of this container type.                                                                                    |
| ScenarioWaypointData(ScenarioWaypointData other)                                 | Create a reference copy of an instance of the same type.                                                                         |
| ScenarioWaypointData([AbstractLocoWaypointData](AbstractLocoWaypointData) other) | Upcast an instance of type [AbstractLocoWaypointData](AbstractLocoWaypointData) to [ScenarioWaypointData](ScenarioWaypointData). |
| ScenarioWaypointData([WaypointData](WaypointData) other)                         | Upcast an instance of type [WaypointData](WaypointData) to [ScenarioWaypointData](ScenarioWaypointData).                         |
| ScenarioWaypointData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ScenarioWaypointData](ScenarioWaypointData).  |

## Properties

| Name           | Type                                 | Description |
| -------------- | ------------------------------------ | ----------- |
| scenarioAntRef | [AntRef](AntRef)                     |             |
| scenarioTask   | [ScenarioTaskData](ScenarioTaskData) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [ScenarioWaypointData](ScenarioWaypointData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ScenarioWaypointData](ScenarioWaypointData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
