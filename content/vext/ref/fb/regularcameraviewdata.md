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
| inputSuppression        | [InputSuppressionData](/vext/ref/fb/inputsuppressiondata/) |             |
| fieldOfView             | number                                       |             |
| mesh                    | [RigidMeshAsset](/vext/ref/fb/rigidmeshasset/)             |             |
| screenExposureAreaScale | number                                       |             |
| maskMeshBlueprint       | [ObjectBlueprint](/vext/ref/fb/objectblueprint/)           |             |
| lockMeshToRenderView    | bool                                         |             |
| allowFieldOfViewScaling | bool                                         |             |
| flirEnabled             | bool                                         |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [RegularCameraViewData](/vext/ref/fb/regularcameraviewdata/) | [Clone](#clone) |            |

### Clone

> [RegularCameraViewData](/vext/ref/fb/regularcameraviewdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
