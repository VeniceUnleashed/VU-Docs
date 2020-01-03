---
title: ScenarioTaskData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| ScenarioTaskData()                       | Create a new instance of this structure type.            |
| ScenarioTaskData(ScenarioTaskData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                 | Type                                                        | Description |
| -------------------- | ----------------------------------------------------------- | ----------- |
| endPointWorldOffset  | [Vec3](/vext/ref/shared/class/Vec3)                           |             |
| startPoint           | [Vec3](/vext/ref/shared/class/Vec3)                           |             |
| scenarioId           | number                                                      |             |
| actorId              | number                                                      |             |
| partId               | number                                                      |             |
| levelId              | number                                                      |             |
| worldAngle           | number                                                      |             |
| connectTransforms    | [LinearTransform](/vext/ref/shared/class/LinearTransform)\[\] |             |
| startTurnDistance    | number                                                      |             |
| startTimerDistance   | number                                                      |             |
| triggerScenarioDelay | number                                                      |             |
| triggerScenario      | bool                                                        |             |
| useClientPosition    | bool                                                        |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [ScenarioTaskData](ScenarioTaskData) | [Clone](#clone) |            |

### Clone

> [ScenarioTaskData](ScenarioTaskData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
