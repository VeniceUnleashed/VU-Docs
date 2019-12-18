---
title: DemoSettings (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| DemoSettings()                                                          | Create a new instance of this container type.                                                                   |
| DemoSettings(DemoSettings other)                                        | Create a reference copy of an instance of the same type.                                                        |
| DemoSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DemoSettings](DemoSettings). |

## Properties

| Name                   | Type   | Description |
| ---------------------- | ------ | ----------- |
| recordDemoFileName     | string |             |
| playbackDemoFileName   | string |             |
| timeDemo               | string |             |
| lockToPlayerName       | string |             |
| changePlayerInterval   | number |             |
| forcedDeltaTickCount   | number |             |
| startProfilingOnFrame  | number |             |
| stopProfilingOnFrame   | number |             |
| takeScreenshotOnFrame  | number |             |
| allowOverwrite         | bool   |             |
| logPerformance         | bool   |             |
| suppressDebugLog       | bool   |             |
| shutdownOnDemoComplete | bool   |             |
| loopingDemo            | bool   |             |
| lockToRandomPlayer     | bool   |             |
| pauseOnStartup         | bool   |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [DemoSettings](DemoSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DemoSettings](DemoSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
