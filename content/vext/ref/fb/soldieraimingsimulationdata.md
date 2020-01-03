---
title: SoldierAimingSimulationData
---
### Base Classes

[GameDataContainer](/vext/ref/fb/gamedatacontainer/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierAimingSimulationData()                                                          | Create a new instance of this container type.                                                                                                 |
| SoldierAimingSimulationData(SoldierAimingSimulationData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| SoldierAimingSimulationData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SoldierAimingSimulationData](/vext/ref/fb/soldieraimingsimulationdata/).              |
| SoldierAimingSimulationData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierAimingSimulationData](/vext/ref/fb/soldieraimingsimulationdata/). |

## Properties

| Name                    | Type                                                                   | Description |
| ----------------------- | ---------------------------------------------------------------------- | ----------- |
| zoomLevels              | [ZoomLevelData](/vext/ref/fb/zoomleveldata/)\[\]                                     |             |
| zoomTransitionTime      | number                                                                 |             |
| aimAssist               | [SoldierAimAssistData](/vext/ref/fb/soldieraimassistdata/)                           |             |
| standPose               | [AimingPoseData](/vext/ref/fb/aimingposedata/)                                       |             |
| crouchPose              | [AimingPoseData](/vext/ref/fb/aimingposedata/)                                       |             |
| pronePose               | [AimingPoseData](/vext/ref/fb/aimingposedata/)                                       |             |
| zoomTransitionTimeArray | [ZoomLevelSpecificTransitionTime](/vext/ref/fb/zoomlevelspecifictransitiontime/)\[\] |             |
| fovTransitionTime       | number                                                                 |             |
| fovDelayTime            | number                                                                 |             |
| modifiers               | [AimerModifierData](/vext/ref/fb/aimermodifierdata/)\[\]                             |             |
| aimingRange             | number                                                                 |             |
| lockAimToTargetSpeed    | number                                                                 |             |
| returnToZoomAfterReload | bool                                                                   |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierAimingSimulationData](/vext/ref/fb/soldieraimingsimulationdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierAimingSimulationData](/vext/ref/fb/soldieraimingsimulationdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
