---
title: AntSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| AntSettings()                                                          | Create a new instance of this container type.                                                                 |
| AntSettings(AntSettings other)                                         | Create a reference copy of an instance of the same type.                                                      |
| AntSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AntSettings](AntSettings). |

## Properties

| Name                            | Type   | Description |
| ------------------------------- | ------ | ----------- |
| detailedCollisionSpeedLimit     | number |             |
| leanSignalScale                 | number |             |
| leanSignalClamp                 | number |             |
| maxInterpolationSlots           | number |             |
| maxSingleBoneInterpolationSlots | number |             |
| reducedInterpolationDistance    | number |             |
| trajectoryInterpolationDistance | number |             |
| forceLodDistance                | number |             |
| maxAnimatablesPerPoseJob        | number |             |
| checkGiantSoldiers              | number |             |
| clientEmulatesServer            | bool   |             |
| useCameraFov                    | bool   |             |
| updateEnable                    | bool   |             |
| enablePA                        | bool   |             |
| useWeaponFov                    | bool   |             |
| disableAnimManagerSceneOps      | bool   |             |
| disableAILodFeature             | bool   |             |
| disableModelAnimationCulling    | bool   |             |
| enableJobs                      | bool   |             |
| forcePoseUpdate                 | bool   |             |
| runAsHighPriority               | bool   |             |
| interpolatePoses                | bool   |             |
| allowVariableTickLength         | bool   |             |
| enablePackageCache              | bool   |             |
| useHIK                          | bool   |             |
| updateLoddingEnable             | bool   |             |
| blockOnJobs                     | bool   |             |
| enableDebugLogFile              | bool   |             |
| enablePoseJobs                  | bool   |             |
| usePA                           | bool   |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [AntSettings](AntSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AntSettings](AntSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
