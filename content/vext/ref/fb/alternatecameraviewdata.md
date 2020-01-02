---
title: AlternateCameraViewData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| AlternateCameraViewData()                                                          | Create a new instance of this container type.                                                                                         |
| AlternateCameraViewData(AlternateCameraViewData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| AlternateCameraViewData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AlternateCameraViewData](AlternateCameraViewData). |

## Properties

| Name                                | Type                                         | Description |
| ----------------------------------- | -------------------------------------------- | ----------- |
| meshOffset                          | [Vec3](/vext/ref/shared/class/Vec3)            |             |
| hud                                 | [HudData](HudData)                           |             |
| fieldOfView                         | number                                       |             |
| worldSpaceLockEfficiency            | number                                       |             |
| mesh                                | [RigidMeshAsset](RigidMeshAsset)             |             |
| maskMeshBlueprint                   | [ObjectBlueprint](ObjectBlueprint)           |             |
| fadeInDuration                      | number                                       |             |
| fovTransitionTime                   | number                                       |             |
| blackDuration                       | number                                       |             |
| inputSuppression                    | [InputSuppressionData](InputSuppressionData) |             |
| screenExposureAreaScale             | number                                       |             |
| fadeOutDuration                     | number                                       |             |
| allowFieldOfViewScaling             | bool                                         |             |
| lockMeshToRenderView                | bool                                         |             |
| toggleViewChange                    | bool                                         |             |
| useProfileOptionForToggleViewChange | bool                                         |             |
| flirEnabled                         | bool                                         |             |
| fadeToBlack                         | bool                                         |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AlternateCameraViewData](AlternateCameraViewData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AlternateCameraViewData](AlternateCameraViewData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
