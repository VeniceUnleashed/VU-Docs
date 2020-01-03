---
title: TimingViewSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| TimingViewSettings()                                                          | Create a new instance of this container type.                                                                               |
| TimingViewSettings(TimingViewSettings other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| TimingViewSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TimingViewSettings](TimingViewSettings). |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| maxFrameEventCount      | number |             |
| frameCount              | number |             |
| frameDelayCount         | number |             |
| timeRange               | number |             |
| timeOffset              | number |             |
| autolockThreshold       | number |             |
| autolockNameFilter      | string |             |
| legendScreenOffset      | number |             |
| legendColumnWidth       | number |             |
| legendDisplayMode       | number |             |
| averageFrameCount       | number |             |
| maxGpuLegendColumnCount | number |             |
| snoopEventName          | string |             |
| gpuBarFrameOffset       | number |             |
| maxCpuLegendColumnCount | number |             |
| barPad                  | number |             |
| maxSpuLegendColumnCount | number |             |
| barSyncProcessor        | number |             |
| barMinTime              | number |             |
| barHeight               | number |             |
| filterEventName         | string |             |
| snoopOnly               | bool   |             |
| drawEnable              | bool   |             |
| drawSpuLegendEnable     | bool   |             |
| snoopEnable             | bool   |             |
| filterEnable            | bool   |             |
| drawBarsEnable          | bool   |             |
| drawLegendEnable        | bool   |             |
| drawOnlySummaryEnable   | bool   |             |
| sortByTime              | bool   |             |
| drawCpuLegendEnable     | bool   |             |
| drawGpuLegendEnable     | bool   |             |
| enable                  | bool   |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [TimingViewSettings](TimingViewSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TimingViewSettings](TimingViewSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
