---
title: MinimapData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                    | Description                                              |
| ------------------------------ | -------------------------------------------------------- |
| MinimapData()                  | Create a new instance of this structure type.            |
| MinimapData(MinimapData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                | Type                              | Description |
| ------------------- | --------------------------------- | ----------- |
| position            | [Vec2](/vext/ref/shared/class/vec2) |             |
| cameraPosition      | [Vec3](/vext/ref/shared/class/vec3) |             |
| size                | [Vec2](/vext/ref/shared/class/vec2) |             |
| overlayColor        | [Vec3](/vext/ref/shared/class/vec3) |             |
| anchorPosVertical   | number                            |             |
| anchorPosHorizontal | number                            |             |
| cameraLookDistance  | number                            |             |
| cameraDistance      | number                            |             |
| cameraFov           | number                            |             |
| overlayAlpha        | number                            |             |
| cameraRotation      | number                            |             |
| startZoomLevel      | number                            |             |
| innerZoomFactor     | number                            |             |
| maxZoomLevels       | number                            |             |
| centerOnCombatArea  | bool                              |             |
| rotationFromPlayer  | bool                              |             |
| positionFromPlayer  | bool                              |             |

## Methods

| Type                       | Name            | Parameters |
| -------------------------- | --------------- | ---------- |
| [MinimapData](/vext/ref/fb/minimapdata/) | [Clone](#clone) |            |

### Clone

> [MinimapData](/vext/ref/fb/minimapdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
