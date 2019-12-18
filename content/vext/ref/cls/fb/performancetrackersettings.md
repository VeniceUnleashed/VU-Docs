---
title: PerformanceTrackerSettings (Frostbite Container)
---
### Base Classes

[SystemSettings](SystemSettings)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| PerformanceTrackerSettings()                                                          | Create a new instance of this container type.                                                                                               |
| PerformanceTrackerSettings(PerformanceTrackerSettings other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| PerformanceTrackerSettings([SystemSettings](SystemSettings) other)                    | Upcast an instance of type [SystemSettings](SystemSettings) to [PerformanceTrackerSettings](PerformanceTrackerSettings).                    |
| PerformanceTrackerSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PerformanceTrackerSettings](PerformanceTrackerSettings). |

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
| [PerformanceTrackerSettings](PerformanceTrackerSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PerformanceTrackerSettings](PerformanceTrackerSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
