---
title: PerformanceTrackerSettings
---
### Base Classes

[SystemSettings](/vext/ref/fb/systemsettings/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| PerformanceTrackerSettings()                                                          | Create a new instance of this container type.                                                                                               |
| PerformanceTrackerSettings(PerformanceTrackerSettings other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| PerformanceTrackerSettings([SystemSettings](/vext/ref/fb/systemsettings/) other)                    | Upcast an instance of type [SystemSettings](/vext/ref/fb/systemsettings/) to [PerformanceTrackerSettings](/vext/ref/fb/performancetrackersettings/).                    |
| PerformanceTrackerSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PerformanceTrackerSettings](/vext/ref/fb/performancetrackersettings/). |

## Properties

| Name                                | Type   | Description |
| ----------------------------------- | ------ | ----------- |
| interval                            | number |             |
| enabled                             | bool   |             |
| supressPerformanceStatsOnIdle       | bool   |             |
| supressPerformanceStatsUntilSpawned | bool   |             |
| juiceLogPerformance                 | bool   |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PerformanceTrackerSettings](/vext/ref/fb/performancetrackersettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PerformanceTrackerSettings](/vext/ref/fb/performancetrackersettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
