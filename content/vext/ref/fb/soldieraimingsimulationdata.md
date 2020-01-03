---
title: SoldierAimingSimulationData
---
### Base Classes

[GameDataContainer](GameDataContainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierAimingSimulationData()                                                          | Create a new instance of this container type.                                                                                                 |
| SoldierAimingSimulationData(SoldierAimingSimulationData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| SoldierAimingSimulationData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoldierAimingSimulationData](SoldierAimingSimulationData).              |
| SoldierAimingSimulationData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierAimingSimulationData](SoldierAimingSimulationData). |

## Properties

| Name                    | Type                                                                   | Description |
| ----------------------- | ---------------------------------------------------------------------- | ----------- |
| zoomLevels              | [ZoomLevelData](ZoomLevelData)\[\]                                     |             |
| zoomTransitionTime      | number                                                                 |             |
| aimAssist               | [SoldierAimAssistData](SoldierAimAssistData)                           |             |
| standPose               | [AimingPoseData](AimingPoseData)                                       |             |
| crouchPose              | [AimingPoseData](AimingPoseData)                                       |             |
| pronePose               | [AimingPoseData](AimingPoseData)                                       |             |
| zoomTransitionTimeArray | [ZoomLevelSpecificTransitionTime](ZoomLevelSpecificTransitionTime)\[\] |             |
| fovTransitionTime       | number                                                                 |             |
| fovDelayTime            | number                                                                 |             |
| modifiers               | [AimerModifierData](AimerModifierData)\[\]                             |             |
| aimingRange             | number                                                                 |             |
| lockAimToTargetSpeed    | number                                                                 |             |
| returnToZoomAfterReload | bool                                                                   |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierAimingSimulationData](SoldierAimingSimulationData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierAimingSimulationData](SoldierAimingSimulationData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
