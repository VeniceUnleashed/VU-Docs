---
title: RegularCameraViewData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                        | Description                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| RegularCameraViewData()                            | Create a new instance of this structure type.            |
| RegularCameraViewData(RegularCameraViewData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                    | Type                                         | Description |
| ----------------------- | -------------------------------------------- | ----------- |
| meshOffset              | [Vec3](/vext/ref/shared/class/vec3)            |             |
| inputSuppression        | [InputSuppressionData](InputSuppressionData) |             |
| fieldOfView             | number                                       |             |
| mesh                    | [RigidMeshAsset](RigidMeshAsset)             |             |
| screenExposureAreaScale | number                                       |             |
| maskMeshBlueprint       | [ObjectBlueprint](ObjectBlueprint)           |             |
| lockMeshToRenderView    | bool                                         |             |
| allowFieldOfViewScaling | bool                                         |             |
| flirEnabled             | bool                                         |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [RegularCameraViewData](RegularCameraViewData) | [Clone](#clone) |            |

### Clone

> [RegularCameraViewData](RegularCameraViewData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
