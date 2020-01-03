---
title: GameTimeSettings
---
### Base Classes

[SystemSettings](SystemSettings)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| GameTimeSettings()                                                          | Create a new instance of this container type.                                                                           |
| GameTimeSettings(GameTimeSettings other)                                    | Create a reference copy of an instance of the same type.                                                                |
| GameTimeSettings([SystemSettings](SystemSettings) other)                    | Upcast an instance of type [SystemSettings](SystemSettings) to [GameTimeSettings](GameTimeSettings).                    |
| GameTimeSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameTimeSettings](GameTimeSettings). |

## Properties

| Name                       | Type   | Description |
| -------------------------- | ------ | ----------- |
| vSyncSubtractTime          | number |             |
| joinJobsTimeLimit          | number |             |
| yieldTimeLimit             | number |             |
| yieldTime                  | number |             |
| maxInactiveVariableFps     | number |             |
| maxSimFps                  | number |             |
| maxVariableFps             | number |             |
| clampTicks                 | number |             |
| forceDeltaTime             | number |             |
| forceDeltaTickCount        | number |             |
| timeScale                  | number |             |
| useWaitableTimers          | bool   |             |
| forceUseSleepTimer         | bool   |             |
| forceSinglePlayerFixedTick | bool   |             |
| forceMultiplayerOneTickMin | bool   |             |
| variableSimTickTimeEnable  | bool   |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [GameTimeSettings](GameTimeSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GameTimeSettings](GameTimeSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
