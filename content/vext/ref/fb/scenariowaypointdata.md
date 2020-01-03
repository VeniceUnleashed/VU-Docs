---
title: ScenarioWaypointData
---
### Base Classes

[AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| ScenarioWaypointData()                                                           | Create a new instance of this container type.                                                                                    |
| ScenarioWaypointData(ScenarioWaypointData other)                                 | Create a reference copy of an instance of the same type.                                                                         |
| ScenarioWaypointData([AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata/) other) | Upcast an instance of type [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata/) to [ScenarioWaypointData](/vext/ref/fb/scenariowaypointdata/). |
| ScenarioWaypointData([WaypointData](/vext/ref/fb/waypointdata/) other)                         | Upcast an instance of type [WaypointData](/vext/ref/fb/waypointdata/) to [ScenarioWaypointData](/vext/ref/fb/scenariowaypointdata/).                         |
| ScenarioWaypointData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ScenarioWaypointData](/vext/ref/fb/scenariowaypointdata/).  |

## Properties

| Name           | Type                                 | Description |
| -------------- | ------------------------------------ | ----------- |
| scenarioAntRef | [AntRef](/vext/ref/fb/antref/)                     |             |
| scenarioTask   | [ScenarioTaskData](/vext/ref/fb/scenariotaskdata/) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [ScenarioWaypointData](/vext/ref/fb/scenariowaypointdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ScenarioWaypointData](/vext/ref/fb/scenariowaypointdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
